import { Component } from '@angular/core';
import { ChatbotComponent } from '../../components/chatbot/chatbot.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ChatbotComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

 productos = [
    {
      titulo: 'Bodies para recién nacidos',
      descripcion: 'Suaves y seguros para los primeros días de tu bebé.',
      imagen: 'assets/images/ropa1.jpg'
    },
    {
      titulo: 'Ropa de juego',
      descripcion: 'Confortable y resistente para sus primeras aventuras.',
      imagen: 'assets/images/ropa2.jpg'
    },
    {
      titulo: 'Accesorios',
      descripcion: 'Gorros, baberos y más para complementar cada look.',
      imagen: 'assets/images/ropa3.jpg'
    },
    {
      titulo: 'Conjuntos casuales',
      descripcion: 'Estilos modernos y tiernos para cualquier ocasión.',
      imagen: 'assets/images/ropa4.jpg'
    },
    {
      titulo: 'Pijamas suaves',
      descripcion: 'Para un descanso cálido y cómodo.',
      imagen: 'assets/images/ropa5.jpg'
    }
  ];

}
