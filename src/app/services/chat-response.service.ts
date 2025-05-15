import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatResponseService {

  constructor() { }

  private responses: { [key: string]: string } = {
    'hola': '¡Hola! Bienvenido a Pollo Pitero, el mejor sabor en pollo frito de Guate ¿En qué puedo ayudarte?',
    '¿cuál es el horario?': 'Abrimos de martes a domingo de 11:00 a.m. a 10:00 p.m.',
    '¿dónde están ubicados?': 'Estamos ubicados en Av. Las Americas 6-69 Z.14 C.C. Parque las Americas, Cdad. de Guatemala, Guatemala',
    '¿tienen menú?': `Claro, tenemos las siguientes opciones:\n1 Pollo al ajillo a la leña\n2 Pollo adobado a la leña\n3 Y el tradicional pollo rostizado a la leña`,
    '¿cuáles son los precios?': `1 Combo Personal Q40\n2 Combo Familiar Q115\n3 Combo Pitero Feliz Q30`,
    '¿tienen opciones vegetarianas?': 'Lo siento. Por el momento no tenemos opciones vegetarianas.',
    '¿se puede pedir a domicilio?': '¡Sí! Puedes hacer tu pedido por Uber Eats y PedidosYa!',
    '¿cómo hago una reserva?': 'Lo siento. No ofreceremos el servicio de reservas. ¡Pero te esperamos en nuestro restaurante!',
    '¿aceptan tarjetas?': 'Aceptamos todas las tarjetas de crédito y débito, Visa y MasterCard, además de pagos en efectivo y QR.',
    '¿tienen promociones?': 'Todos los viernes tenemos 2x1 en combos medianos. Consulta más promos en nuestras redes sociales.',
    '¿hay estacionamiento?': 'Sí, contamos con estacionamiento gratuito para nuestros clientes.',
    '¿hay comida para niños?': '¡Por supuesto! Tenemos el combo “Pitero Feliz” para los más pequeños, con juguetes incluidos.',
    'gracias': '¡Con gusto! Siempre es un placer ayudarte. ¿Algo más?',
    'adiós': '¡Gracias por visitar Pollo Pitero! Esperamos verte pronto. ¡Buen provecho!',
    'hasta luego': '¡Gracias por visitar Pollo Pitero! Esperamos verte pronto. ¡Buen provecho!'
  };

  getResponse(question: string): string {
    const lower = question.trim().toLowerCase();
    return this.responses[lower] || 'Lo siento, no entendí tu pregunta. ¿Puedes intentarlo de otra forma?';
  }
}
