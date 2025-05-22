import { Component, HostBinding, HostListener, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatbotComponent } from '../../components/chatbot/chatbot.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ChatbotComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  @HostBinding('class.dark-mode') isDarkMode = false;
  currentYear: number = new Date().getFullYear();

  constructor(private renderer: Renderer2) {}

  productos = [
    { titulo: 'Body Rosa', descripcion: 'Algodón suave 100%', imagen: 'assets/images/ropa1.jpg', precio: 12.99 },
    { titulo: 'Pijama Osito', descripcion: 'Ideal para dormir cómodo', imagen: 'assets/images/ropa2.jpg', precio: 18.50 },
    { titulo: 'Conjunto Bebé', descripcion: 'Incluye pantalón y camiseta', imagen: 'assets/images/ropa3.jpg', precio: 24.99 },
    { titulo: 'Vestido Flores', descripcion: 'Perfecto para ocasiones especiales', imagen: 'assets/images/ropa4.jpg', precio: 21.00 },
    { titulo: 'Gorro Tejido', descripcion: 'Calidez para tu bebé', imagen: 'assets/images/ropa5.jpg', precio: 8.75 },
    { titulo: 'Zapatos Suaves', descripcion: 'Confort y estilo', imagen: 'assets/images/ropa6.jpg', precio: 15.20 },
    { titulo: 'Zapatos Suaves', descripcion: 'Confort y estilo', imagen: 'assets/images/ropa7.jpg', precio: 15.20 },
  ];

  gruposProductos: any[][] = [];

  ngOnInit(): void {
    this.generarGruposProductos();
  }

  @HostListener('window:resize')
  onResize() {
    this.generarGruposProductos();
  }

  generarGruposProductos(): void {
    const anchoPantalla = window.innerWidth;
    const tamañoGrupo = anchoPantalla >= 992 ? 3 : 1;

    this.gruposProductos = [];
    for (let i = 0; i < this.productos.length; i += tamañoGrupo) {
      this.gruposProductos.push(this.productos.slice(i, i + tamañoGrupo));
    }
  }

}
