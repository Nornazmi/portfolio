import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ThemeToggleComponent } from '../../shared/components/theme-toggle/theme-toggle.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule, ThemeToggleComponent],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  navLinks = [
    { label: 'Home',     path: '/'         },
    { label: 'Projects', path: '/projects'  },
    { label: 'About',    path: '/about'     },
    { label: 'Contact',  path: '/contact'   }
  ];
}
