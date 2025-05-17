import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatResponseService {

  constructor() { }

  private responses: { [key: string]: string } = {
    // Respuestas del menú principal
    'información de la tienda': 'BabyWear es tu tienda especializada en ropa para bebés de 0 a 5 años. ¿Qué información específica necesitas?',
    'políticas de envío y devoluciones': 'En BabyWear queremos que estés completamente satisfecho con tu compra. ¿Qué información necesitas sobre nuestras políticas?',
    'métodos de pago': 'Ofrecemos diversas opciones para que realices tu pago de forma cómoda y segura. ¿Qué información específica necesitas?',
    'cuidado de las prendas': 'Es importante cuidar bien la ropa de tu bebé para mantenerla en perfecto estado. ¿En qué puedo ayudarte?',
    'contactar con servicio al cliente': 'Estamos disponibles para atenderte por diversos medios. ¿Cómo prefieres contactarnos?',
    
    // Información de la tienda
    '¿cuál es el horario?': 'Nuestras tiendas están abiertas de lunes a sábado de 10:00 a.m. a 8:00 p.m. y domingos de 11:00 a.m. a 6:00 p.m. Nuestra tienda online está disponible 24/7.',
    '¿dónde están ubicados?': 'Nuestra tienda principal está en Av. Las Americas 6-69 Z.14 C.C. Parque las Americas, Ciudad de Guatemala. También tenemos una sucursal en Zona 10, en el Centro Comercial Oakland Mall, nivel 2.',
    '¿hay estacionamiento?': 'Sí, ambos centros comerciales donde estamos ubicados cuentan con estacionamiento. En Parque las Americas validamos 2 horas de parqueo con tu compra.',
    
    // Políticas de envío y devoluciones
    '¿cómo funcionan los envíos?': 'Realizamos envíos a todo el país a través de servicios de mensajería confiables. Una vez procesado tu pedido, recibirás un número de seguimiento para rastrear tu paquete.',
    '¿cuál es la política de devoluciones?': 'Aceptamos devoluciones dentro de los 15 días posteriores a la compra, siempre que las prendas estén sin usar, con etiquetas y en su empaque original. Ofrecemos cambio o reembolso a tu elección.',
    '¿cuánto tiempo tarda un envío?': 'Para la Ciudad de Guatemala, el tiempo de entrega es de 1-2 días hábiles. Para el resto del país, de 2-5 días hábiles, dependiendo de la zona.',
    
    // Métodos de pago
    '¿qué formas de pago aceptan?': 'Aceptamos tarjetas de crédito y débito (Visa, MasterCard, American Express), transferencias bancarias, depósitos y pago en efectivo en nuestras tiendas físicas.',
    '¿ofrecen pago contra entrega?': 'Sí, ofrecemos pago contra entrega en la Ciudad de Guatemala y municipios aledaños. El costo adicional es de Q15.',
    '¿tienen promociones o descuentos?': 'Sí, regularmente ofrecemos promociones especiales. Actualmente tenemos 20% de descuento en pijamas y bodies. Te recomendamos seguirnos en redes sociales para enterarte de nuestras promociones.',
    
    // Cuidado de las prendas
    '¿cómo lavar la ropa de bebé?': 'Recomendamos lavar la ropa de bebé con agua tibia o fría, del revés, y utilizando detergentes suaves sin perfumes fuertes. Evita el uso de blanqueadores y suavizantes agresivos.',
    '¿qué detergente recomiendan?': 'Recomendamos usar detergentes específicos para ropa de bebé, como Dreft o similares, que son suaves y están diseñados para pieles sensibles.',
    '¿cómo quitar manchas difíciles?': 'Para manchas difíciles, recomendamos aplicar jabón neutro directamente sobre la mancha, frotar suavemente y dejar actuar por unos minutos antes de lavar normalmente. Evita los quitamanchas químicos fuertes.',
    
    // Contactar con servicio al cliente
    '¿cuál es el número de teléfono?': 'Nuestro número de atención al cliente es 2222-3333. Estamos disponibles de lunes a viernes de 9:00 a.m. a 6:00 p.m.',
    '¿tienen whatsapp?': 'Sí, puedes contactarnos vía WhatsApp al 5555-6666. Te responderemos a la brevedad posible.',
    '¿cuál es el correo de atención?': 'Puedes escribirnos a servicio@babywear.com y te responderemos en un plazo máximo de 24 horas hábiles.',
    
    // Otras respuestas
    'volver al menú principal': 'Por supuesto, ¿en qué más puedo ayudarte?',
    'gracias, eso es todo': '¡Ha sido un placer ayudarte! Si tienes más preguntas en el futuro, no dudes en contactarnos. ¡Que tengas un excelente día!',
    'gracias': 'De nada. ¿Hay algo más en lo que pueda ayudarte?',
    'adiós': '¡Gracias por visitar BabyWear! Esperamos verte pronto en nuestra tienda.'
  };

  getResponse(question: string): string {
    const lower = question.toLowerCase();
    return this.responses[lower] || 'No tengo información específica sobre eso en este momento. ¿Puedo ayudarte con algo más?';
  }
}