import { Routes } from '@angular/router';
import { TodosComponent } from './todos/todos.component';
import { TerrorComponent } from './terror/terror.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Tablet of Terror',
    component: TerrorComponent,
  },
  {
    path: 'admin',
    title: 'Admin',
    component: TodosComponent,
  },
];
