import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService, Producto } from '../../services/api.service';

@Component({
  selector: 'app-crud-productos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './crud-productos.component.html',
  styleUrl: './crud-productos.component.css'
})
export class CrudProductosComponent implements OnInit {
  productos: Producto[] = [];
  productoActual: Producto = this.resetProducto();
  editando = false;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos(): void {
    this.apiService.getProductos().subscribe(data => {
      this.productos = data;
    });
  }

  resetProducto(): Producto {
    return { nombre: '', precio: 0, stock: 0, categoria_id: 1, proveedor_id: 1 };
  }

  guardar(): void {
    if (this.editando) {
      this.apiService.actualizarProducto(this.productoActual).subscribe(() => {
        this.cargarProductos();
        this.cancelar();
      });
    } else {
      this.apiService.crearProducto(this.productoActual).subscribe(() => {
        this.cargarProductos();
        this.cancelar();
      });
    }
  }

  editar(p: Producto): void {
    this.productoActual = { ...p };
    this.editando = true;
  }

  eliminar(id: number | undefined): void {
    if (id && confirm('¿Eliminar producto?')) {
      this.apiService.eliminarProducto(id).subscribe(() => {
        this.cargarProductos();
      });
    }
  }

  cancelar(): void {
    this.productoActual = this.resetProducto();
    this.editando = false;
  }
}
