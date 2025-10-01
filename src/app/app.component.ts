import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
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
  imports: [RouterOutlet, ButtonModule, MenuModule],
})
export class AppComponent {
  menuItems: MenuItem[] = [
    {
      label: 'Home',
      routerLink: '/',
    },
    {
      label: 'Sounds',
      routerLink: '/sounds',
    },
  ];
}
