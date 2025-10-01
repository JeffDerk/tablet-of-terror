import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { Amplify } from 'aws-amplify';

import outputs from '../../amplify_outputs.json';
import { MenuItem } from 'primeng/api';
Amplify.configure(outputs);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, ButtonModule, MenuModule, RouterLink],
})
export class AppComponent {
  menuItems: MenuItem[] = [
    {
      label: 'Sounds',
      routerLink: '/admin/sounds',
    },
    {
      label: 'Soundboard',
      routerLink: '/admin/soundboard',
    },
  ];
}
