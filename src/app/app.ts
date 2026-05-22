import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterLinkActive, RouterOutlet, Routes } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    MatSidenavModule, // Для mat-sidenav-container, mat-sidenav, mat-sidenav-content
    MatListModule, // Для mat-nav-list, a[mat-list-item]
    MatToolbarModule, // Для mat-toolbar
  ],
  templateUrl: './app.html', // або контент напряму через template: `...`
  styleUrl: './app.scss', // якщо є стилі
})
export class App {
  // Тут можна додавати логіку компонента (змінні, методи)
  title = 'my-first-angular';
}
