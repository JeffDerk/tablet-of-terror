import { Routes } from '@angular/router';
import { SoundsComponent } from './sounds/sounds.component';
import { TerrorComponent } from './terror/terror.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Tablet of Terror',
    component: TerrorComponent,
  },
  {
    path: 'admin/sounds',
    title: 'Sounds',
    component: SoundsComponent,
  },
];
