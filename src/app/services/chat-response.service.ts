
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatResponseService {

  constructor() { }

  private responses: { [key: string]: string } = {
    // Respuestas del menú principal
    'información de productos': 'Te puedo ayudar con información sobre nuestros productos, tallas disponibles y características. ¿Qué necesitas saber?',
    'políticas de envío y devoluciones': 'Aquí tienes toda la información sobre nuestros envíos con Forza y política de devoluciones. ¿Qué te interesa saber?',
    'método de pago': 'Te explico cómo funciona nuestro sistema de pago contra entrega. ¿Qué información necesitas?',
    'hablar con un vendedor': 'Te conectaré directamente con uno de nuestros vendedores para una atención personalizada.',
    
    // Información de productos
    '¿qué productos tienen?': 'Especializamos en ropa para bebés de 0 a 5 años:\n• Ropa casual\n• Conjuntos completos',
    '¿qué tallas manejan?': 'Manejamos todas las tallas para bebés:\n• Recién nacido (0-3 meses)\n• 3-6 meses\n• 6-9 meses\n• 9-12 meses\n• 12-18 meses\n• 18-24 meses\n• 2-3 años\n• 3-4 años',
    '¿de qué material es la ropa?': 'Usamos solo materiales seguros y cómodos:\n• Mezclas de algodón suave para ropa casual\n• Libres de químicos dañinos',
    '¿cómo veo el catálogo?': 'Puedes ver nuestro catálogo completo a través de WhatsApp. Nuestro vendedor te enviará fotos actualizadas con precios y disponibilidad.',
    
    // Políticas de envío y devoluciones
    '¿cómo funcionan los envíos?': 'Trabajamos exclusivamente con Forza para todos nuestros envíos. Una vez confirmes tu pedido, coordinamos la entrega directamente contigo.',
    //'¿cuál es la política de devoluciones?': 'Aceptamos devoluciones en 7 días si:\n• La ropa tiene defectos de fábrica\n• No es la talla solicitada\n• Está sin usar y con etiquetas\nNo aceptamos devoluciones por cambio de opinión.',
    '¿cuánto tiempo tarda un envío?': 'Con Forza los tiempos son:\n• Ciudad de Guatemala: 1-2 días\n• Departamentos: 2-4 días\n• Lugares remotos: 3-5 días',
    '¿cuánto cuesta el envío?': 'El costo de envío con Forza varía según la zona:\n• Ciudad de Guatemala: Q15-Q25\n• Departamentos cercanos: Q25-Q35\n• Lugares remotos: Q35-Q50\nEl costo exacto se confirma al momento del pedido.',
    '¿cómo funciona la entrega?': 'Forza te contacta para coordinar la entrega. Ellos manejan horarios flexibles y te avisan cuando van en camino.',
    
    // Método de pago
    '¿cómo es el pago contra entrega?': 'Solo manejamos pago contra entrega en efectivo:\n• Pagas directamente al mensajero de Forza\n• Llevas el cambio exacto o aproximado',
    '¿aceptan tarjetas o transferencias?': 'Por el momento solo aceptamos efectivo contra entrega. Esto te permite mayor seguridad en la transacción.',
    //'¿puedo revisar antes de pagar?': 'Sí, puedes revisar que el producto sea el correcto, la talla adecuada y que esté en perfecto estado antes de realizar el pago al mensajero.',
    '¿qué pasa si no tengo cambio exacto?': 'No hay problema, nuestros mensajeros de Forza siempre llevan cambio. Solo trata de tener un monto aproximado para facilitar la transacción.',
    
    // Respuestas de flujo
    'volver al menú principal': 'Perfecto, ¿en qué más puedo ayudarte hoy?',
    'eso es todo': '¡Perfecto! Ha sido un placer ayudarte. Si tienes más preguntas, no dudes en contactarnos. ¡Que tengas un excelente día!',
    'gracias': '¡De nada! ¿Hay algo más en lo que pueda ayudarte?',
    'quiero hablar con alguien más': 'Te conectaré con uno de nuestros vendedores para una atención más personalizada.',
    
    // Respuesta por defecto mejorada
    'default': 'No tengo información específica sobre eso, pero puedo conectarte con uno de nuestros vendedores que te ayudará personalmente. ¿Te parece bien?'
  };

  getResponse(question: string): string {
    const lower = question.toLowerCase();
    return this.responses[lower] || this.responses['default'];
  }

  getWhatsAppLink(): string {
    // Aquí va el link que redirecciona a WhatsApp
    return "https://wa.me/39896917";
  }
}