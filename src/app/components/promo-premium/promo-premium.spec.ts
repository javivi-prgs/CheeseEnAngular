import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoPremium } from './promo-premium';

describe('PromoPremium', () => {
  let component: PromoPremium;
  let fixture: ComponentFixture<PromoPremium>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PromoPremium]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromoPremium);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
