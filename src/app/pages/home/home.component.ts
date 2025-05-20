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
    { titulo: 'Body Rosa', descripcion: 'Algodón suave 100%', imagen: 'assets/img/body-rosa.jpg', precio: 12.99 },
    { titulo: 'Pijama Osito', descripcion: 'Ideal para dormir cómodo', imagen: 'assets/img/pijama-osito.jpg', precio: 18.50 },
    { titulo: 'Conjunto Bebé', descripcion: 'Incluye pantalón y camiseta', imagen: 'assets/img/conjunto.jpg', precio: 24.99 },
    { titulo: 'Vestido Flores', descripcion: 'Perfecto para ocasiones especiales', imagen: 'assets/img/vestido.jpg', precio: 21.00 },
    { titulo: 'Gorro Tejido', descripcion: 'Calidez para tu bebé', imagen: 'assets/img/gorro.jpg', precio: 8.75 },
    { titulo: 'Zapatos Suaves', descripcion: 'Confort y estilo', imagen: 'assets/img/zapatos.jpg', precio: 15.20 },
  ];

  grupos: any[] = [];

  ngOnInit(): void {
    this.grupos = this.crearGrupos(this.productos, 3);

     const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDark) {
      this.renderer.setAttribute(document.body, 'data-theme', 'dark');
    }
  }

  crearGrupos(arr: any[], tam: number): any[] {
    return arr.reduce((acc, val, i) => {
      if (i % tam === 0) acc.push(arr.slice(i, i + tam));
      return acc;
    }, []);
  }

  toggleDarkMode(event: any) {
      this.isDarkMode = event.target.checked;
    }

}
