
import { Component } from '@angular/core';
import { ChatResponseService } from '../../services/chat-response.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GoogleAnalyticsService } from '../../services/google-analytics.service';

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chatbot.component.html',
  styleUrl: './chatbot.component.scss'
})
export class ChatbotComponent {

  isOpen = false;
  messages: { from: 'user' | 'bot'; text: string; time: string }[] = [];
  currentOptions: string[] = [];
  conversationEnded = false;
  isTyping = false;

  constructor(private chatService: ChatResponseService, private googleAnalytics: GoogleAnalyticsService) {}

  toggleChat() {
    this.isOpen = !this.isOpen;
    
    // Si es la primera vez que se abre el chat, inicializar conversación
    if (this.isOpen && this.messages.length === 0) {
      this.initializeChat();
    }
    
    // Si se cierra el chat, reiniciar para la próxima vez
    if (!this.isOpen) {
      this.resetChat();
    }
  }

  private initializeChat() {
    this.conversationEnded = false;
    this.messages.push({ 
      from: 'bot', 
      text: '¡Hola! 👋 Soy el asistente virtual de BabyWear. Estoy aquí para ayudarte con información sobre nuestros productos y servicios. ¿En qué puedo ayudarte?',
      time: this.getCurrentTime()
    });
    
    this.showMainMenu();
  }

  private showMainMenu() {
    this.currentOptions = [
      'Información de productos',
      'Políticas de envío y devoluciones', 
      'Método de pago',
      'Hablar con un vendedor'
    ];
  }

  private resetChat() {
    // Pequeño delay para que no se vea abrupto
    setTimeout(() => {
      this.messages = [];
      this.currentOptions = [];
      this.conversationEnded = false;
      this.isTyping = false;
    }, 300);
  }

  selectOption(option: string) {
    // No permitir más interacciones si la conversación terminó
    if (this.conversationEnded) return;

    // Añadir la opción seleccionada como mensaje del usuario
    this.messages.push({ 
      from: 'user', 
      text: option,
      time: this.getCurrentTime()
    });
    
    // Casos especiales para finalizar conversación
    if (option === 'Eso es todo' || option === 'eso es todo') {
      this.endConversation();
      return;
    }

    // Caso especial para WhatsApp
    if (option === 'Hablar con un vendedor' || 
        option === 'Quiero hablar con alguien más' || 
        option === 'hablar con un vendedor') {
      this.redirectToWhatsApp();
      return;
    }
    
    // Mostrar indicador de escritura
    this.isTyping = true;
    this.currentOptions = [];
    
    // Obtener respuesta del servicio
    const response = this.chatService.getResponse(option);
    
    // Simular que el bot está escribiendo
    setTimeout(() => {
      this.isTyping = false;
      this.messages.push({ 
        from: 'bot', 
        text: response,
        time: this.getCurrentTime()
      });
      this.updateOptions(option);
      this.scrollToBottom();
    }, 1200);

    this.googleAnalytics.logEvent('conversación_iniciada_chatbot', {
      origen: 'pagina_lili_store'
      });

        // Registrar la pregunta realizada
      this.googleAnalytics.logEvent('chatbot_pregunta_realizada', {
      pregunta: option
      });
  }

  private redirectToWhatsApp() {
    this.isTyping = true;
    this.currentOptions = [];
    
    setTimeout(() => {
      this.isTyping = false;
      this.messages.push({ 
        from: 'bot', 
        text: '¡Perfecto! Te voy a conectar con uno de nuestros vendedores vía WhatsApp para una atención personalizada. 📱',
        time: this.getCurrentTime()
      });
      
      // Mostrar botón de WhatsApp
      setTimeout(() => {
        this.currentOptions = ['Abrir WhatsApp', 'Volver al menú principal'];
      }, 500);
    }, 800);
  }

  private endConversation() {
    this.isTyping = true;
    this.currentOptions = [];
    
    const response = this.chatService.getResponse('eso es todo');
    
    setTimeout(() => {
      this.isTyping = false;
      this.messages.push({ 
        from: 'bot', 
        text: response,
        time: this.getCurrentTime()
      });
      this.conversationEnded = true;
      this.currentOptions = ['Cerrar chat'];
    }, 800);
  }

  // Método público para manejar el link de WhatsApp
  openWhatsApp() {
    const link = this.chatService.getWhatsAppLink();
    window.open(link, '_blank');
    
    // Después de abrir WhatsApp, terminar la conversación
    setTimeout(() => {
      this.messages.push({ 
        from: 'bot', 
        text: '¡Listo! Uno de nuestros vendedores te atenderá por WhatsApp. ¡Gracias por contactar BabyWear! 👶',
        time: this.getCurrentTime()
      });
      this.conversationEnded = true;
      this.currentOptions = ['Cerrar chat'];
    }, 1000);
  }
  
  private updateOptions(previousQuestion: string) {
    const question = previousQuestion.toLowerCase();
    
    // Información de productos
    if (question === 'información de productos') {
      this.currentOptions = [
        '¿Qué productos tienen?',
        '¿Qué tallas manejan?',
        '¿De qué material es la ropa?',
        '¿Cómo veo el catálogo?',
        'Volver al menú principal'
      ];
      return;
    }
    
    // Políticas de envío y devoluciones
    if (question === 'políticas de envío y devoluciones') {
      this.currentOptions = [
        '¿Cómo funcionan los envíos?',
        '¿Cuál es la política de devoluciones?',
        '¿Cuánto tiempo tarda un envío?',
        '¿Cuánto cuesta el envío?',
        '¿Cómo funciona la entrega?',
        'Volver al menú principal'
      ];
      return;
    }
    
    // Método de pago
    if (question === 'método de pago') {
      this.currentOptions = [
        '¿Cómo es el pago contra entrega?',
        '¿Aceptan tarjetas o transferencias?',
        '¿Puedo revisar antes de pagar?',
        '¿Qué pasa si no tengo cambio exacto?',
        'Volver al menú principal'
      ];
      return;
    }
    
    // Volver al menú principal
    if (question === 'volver al menú principal') {
      this.showMainMenu();
      return;
    }

    // Cerrar chat
    if (question === 'cerrar chat') {
      this.toggleChat();
      return;
    }

    // Abrir WhatsApp
    if (question === 'abrir whatsapp') {
      this.openWhatsApp();
      return;
    }
    
    // Para preguntas específicas, ofrecer opciones útiles
    this.currentOptions = [
      'Volver al menú principal',
      'Hablar con un vendedor',
      'Eso es todo'
    ];
  }

  // Método para formatear mensajes con saltos de línea
  formatMessage(text: string): string {
    return text.replace(/\n/g, '<br>');
  }

  // Método para obtener la hora actual
  getCurrentTime(): string {
    const now = new Date();
    return now.toLocaleTimeString('es-GT', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  }

  // Método para hacer scroll hacia abajo
  private scrollToBottom(): void {
    setTimeout(() => {
      const chatBody = document.querySelector('.chat-body');
      if (chatBody) {
        chatBody.scrollTop = chatBody.scrollHeight;
      }
    }, 100);
  }
}