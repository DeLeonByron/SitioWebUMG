import { Component, HostBinding, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  @HostBinding('class.dark-mode') isDarkMode = false;
  currentYear: number = new Date().getFullYear();

  constructor(private renderer: Renderer2) {}

  productos = [
    { titulo: 'Body Rosa', descripcion: 'Algodón suave 100%', imagen: 'assets/images/ropa1.jpg', precio: 12.99 },
    { titulo: 'Pijama Osito', descripcion: 'Ideal para dormir cómodo', imagen: 'assets/images/ropa1.jpg', precio: 18.50 },
    { titulo: 'Conjunto Bebé', descripcion: 'Incluye pantalón y camiseta', imagen: 'assets/images/ropa1.jpg', precio: 24.99 },
    { titulo: 'Vestido Flores', descripcion: 'Perfecto para ocasiones especiales', imagen: 'assets/images/ropa1.jpg', precio: 21.00 },
    { titulo: 'Gorro Tejido', descripcion: 'Calidez para tu bebé', imagen: 'assets/images/ropa1.jpg', precio: 8.75 },
    { titulo: 'Zapatos Suaves', descripcion: 'Confort y estilo', imagen: 'assets/images/ropa1.jpg', precio: 15.20 },
  ];

  grupos: any[] = [];

  ngOnInit(): void {
    this.grupos = this.crearGrupos(this.productos, 3);
  }

  crearGrupos(arr: any[], tam: number): any[] {
    return arr.reduce((acc, val, i) => {
      if (i % tam === 0) acc.push(arr.slice(i, i + tam));
      return acc;
    }, []);
  }

}
