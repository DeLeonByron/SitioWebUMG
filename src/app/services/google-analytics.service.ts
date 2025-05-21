import { Injectable } from '@angular/core';
import { environment } from '../enviroment/enviroment.prod';

@Injectable({
  providedIn: 'root'
})
export class GoogleAnalyticsService {

  private measurementId = environment.googleAnalyticsId;

  constructor() { 
    this.initGoogleAnalytics();
  }

 private initGoogleAnalytics(): void {
    if (typeof window === 'undefined' || document.getElementById('ga-script') || !this.measurementId) return;

    // 1. Script SDK de Google Analytics
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${this.measurementId}`;
    script1.id = 'ga-script';
    document.head.appendChild(script1);

    // 2. Script de configuración inicial
    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){ dataLayer.push(arguments); }
      gtag('js', new Date());
      gtag('config', '${this.measurementId}', {
        page_path: window.location.pathname
      });
    `;
    document.head.appendChild(script2);
  }

  // logEvent<T extends Record<string, any> = {}>(eventName: string, params?: T): void {
  //   if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
  //     window.gtag('event', eventName, params ?? {});
  //   } else if (!environment.production) {
  //     console.warn(`[GoogleAnalytics] 'gtag' is not available. Event: ${eventName}`, params);
  //   }
  // }
  // public logPageView(path: string) {
  //   if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
  //     window.gtag('config', this.measurementId, {
  //       page_path: path
  //     });
  //   }
  // }
  logEvent(eventName: string, params?: Record<string, any>) {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', eventName, params || {});
    }
  }

}
