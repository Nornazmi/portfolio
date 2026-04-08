import {
  Component, inject, signal,
  ChangeDetectionStrategy, ChangeDetectorRef
} from '@angular/core';
import {
  RouterOutlet, RouterLink,
  ActivatedRoute, NavigationEnd, Router
} from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter, map } from 'rxjs/operators';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { ThemeService } from './core/services/theme.service';
import { slideUpFade } from './core/animations/route-animations';

@Component({
  selector: 'app-root',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, CommonModule, NavbarComponent],
  animations: [slideUpFade],
  template: `
    <app-navbar />

    <!-- Wrapper must be position:relative for :leave absolute positioning -->
    <div class="relative overflow-hidden">
      <main class="main-content"
            [@routeAnimations]="getRouteAnimationData(outlet)"
            (@routeAnimations.start)="onAnimStart()"
            (@routeAnimations.done)="onAnimDone()">
        <router-outlet #outlet="outlet" />
      </main>
    </div>
  `
})
export class AppComponent {
  private theme = inject(ThemeService);

  /** Reads the animation state name from the route's data property */
  getRouteAnimationData(outlet: RouterOutlet) {
    return outlet?.activatedRouteData?.['animation'];
  }

  onAnimStart() {
    // Optional: disable pointer events during transition
    document.body.style.pointerEvents = 'none';
  }

  onAnimDone() {
    document.body.style.pointerEvents = '';
  }
}
