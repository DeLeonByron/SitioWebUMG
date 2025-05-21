import { inject, Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { GoogleAnalyticsService } from './google-analytics.service';
import { filter } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsRouterTrackerService {

  private router = inject(Router);
  private gaService = inject(GoogleAnalyticsService);

  constructor() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.gaService.logPageView(event.urlAfterRedirects);
    });
  }
}
