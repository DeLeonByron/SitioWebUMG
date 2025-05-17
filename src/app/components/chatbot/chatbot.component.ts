// chatbot.component.ts
import { Component } from '@angular/core';
import { ChatResponseService } from '../../services/chat-response.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chatbot.component.html',
  styleUrl: './chatbot.component.scss'
})
export class ChatbotComponent {

  isOpen = false;
  messages: { from: 'user' | 'bot'; text: string }[] = [];
  currentOptions: string[] = [];

  constructor(private chatService: ChatResponseService) {}

  toggleChat() {
    this.isOpen = !this.isOpen;
    
    // Si es la primera vez que se abre el chat, enviar mensaje de bienvenida
    if (this.isOpen && this.messages.length === 0) {
      this.messages.push({ 
        from: 'bot', 
        text: '¡Hola! Soy el asistente virtual de BabyWear. ¿Cómo puedo ayudarte hoy?' 
      });
      
      // Mostrar opciones iniciales de atención al cliente
      this.currentOptions = [
        'Información de la tienda',
        'Políticas de envío y devoluciones',
        'Métodos de pago',
        'Cuidado de las prendas',
        'Contactar con servicio al cliente'
      ];
    }
  }

  selectOption(option: string) {
    // Añadir la opción seleccionada como mensaje del usuario
    this.messages.push({ from: 'user', text: option });
    
    // Obtener respuesta del servicio
    const response = this.chatService.getResponse(option);
    
    // Simular que el bot está escribiendo
    setTimeout(() => {
      this.messages.push({ from: 'bot', text: response });
      
      // Actualizar opciones basadas en la categoría de la pregunta
      this.updateOptions(option);
    }, 500);
  }
  
  private updateOptions(previousQuestion: string) {
    // Categorías principales
    if (previousQuestion === 'Información de la tienda') {
      this.currentOptions = [
        '¿Cuál es el horario?',
        '¿Dónde están ubicados?',
        '¿Hay estacionamiento?',
        'Volver al menú principal'
      ];
      return;
    }
    
    if (previousQuestion === 'Políticas de envío y devoluciones') {
      this.currentOptions = [
        '¿Cómo funcionan los envíos?',
        '¿Cuál es la política de devoluciones?',
        '¿Cuánto tiempo tarda un envío?',
        'Volver al menú principal'
      ];
      return;
    }
    
    if (previousQuestion === 'Métodos de pago') {
      this.currentOptions = [
        '¿Qué formas de pago aceptan?',
        '¿Ofrecen pago contra entrega?',
        '¿Tienen promociones o descuentos?',
        'Volver al menú principal'
      ];
      return;
    }
    
    if (previousQuestion === 'Cuidado de las prendas') {
      this.currentOptions = [
        '¿Cómo lavar la ropa de bebé?',
        '¿Qué detergente recomiendan?',
        '¿Cómo quitar manchas difíciles?',
        'Volver al menú principal'
      ];
      return;
    }
    
    if (previousQuestion === 'Contactar con servicio al cliente') {
      this.currentOptions = [
        '¿Cuál es el número de teléfono?',
        '¿Tienen WhatsApp?',
        '¿Cuál es el correo de atención?',
        'Volver al menú principal'
      ];
      return;
    }
    
    // Volver al menú principal
    if (previousQuestion === 'Volver al menú principal') {
      this.currentOptions = [
        'Información de la tienda',
        'Políticas de envío y devoluciones',
        'Métodos de pago',
        'Cuidado de las prendas',
        'Contactar con servicio al cliente'
      ];
      return;
    }
    
    // Para preguntas específicas, ofrecer opciones relacionadas o volver
    this.currentOptions = [
      'Información de la tienda',
      'Políticas de envío y devoluciones',
      'Métodos de pago',
      'Cuidado de las prendas',
      'Gracias, eso es todo'
    ];
  }
}