import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Producto {
  id?: number;
  nombre: string;
  precio: number;
  stock: number;
  categoria_id?: number;
  proveedor_id?: number;
  // Estos vienen de la vista v_inventario_completo
  producto?: string;
  categoria?: string;
  proveedor?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost/api/productos.php';

  constructor(private http: HttpClient) { }

  getProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.apiUrl);
  }

  getProducto(id: number): Observable<Producto> {
    return this.http.get<Producto>(`${this.apiUrl}?id=${id}`);
  }

  crearProducto(producto: Producto): Observable<any> {
    return this.http.post(this.apiUrl, producto);
  }

  actualizarProducto(producto: Producto): Observable<any> {
    return this.http.put(this.apiUrl, producto);
  }

  eliminarProducto(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}?id=${id}`);
  }
}
