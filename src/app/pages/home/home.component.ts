import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import type { SwiperOptions } from 'swiper/types'; // Importa solo el tipo


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  productos = [
    {
      titulo: 'Bodies para recién nacidos',
      descripcion: 'Suaves y seguros para los primeros días de tu bebé.',
      imagen: 'assets/images/ropa1.jpg',
      precio: 12.99
    },
    {
      titulo: 'Ropa de juego',
      descripcion: 'Confortable y resistente para sus primeras aventuras.',
      imagen: 'assets/images/ropa2.jpg',
      precio: 18.49
    },
    {
      titulo: 'Accesorios',
      descripcion: 'Gorros, baberos y más para complementar cada look.',
      imagen: 'assets/images/ropa3.jpg',
      precio: 7.5
    },
    {
      titulo: 'Conjuntos casuales',
      descripcion: 'Estilos modernos y tiernos para cualquier ocasión.',
      imagen: 'assets/images/ropa4.jpg',
      precio: 22.0
    },
    {
      titulo: 'Pijamas suaves',
      descripcion: 'Para un descanso cálido y cómodo.',
      imagen: 'assets/images/ropa5.jpg',
      precio: 15.75
    }
  ];

  swiperConfig: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: true,
    breakpoints: {
      768: { slidesPerView: 2 },
      992: { slidesPerView: 3 }
    }
  };
}
