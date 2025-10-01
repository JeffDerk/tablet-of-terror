import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { generateClient } from 'aws-amplify/data';
import { uploadData } from 'aws-amplify/storage';

import type { Schema } from '../../../amplify/data/resource';
import { Button } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';

const client = generateClient<Schema>();

@Component({
  selector: 'app-sounds',
  imports: [CommonModule, ReactiveFormsModule, Button, DialogModule],
  templateUrl: './sounds.component.html',
  styleUrl: './sounds.component.scss',
})
export class SoundsComponent implements OnInit {
  todos: any[] = [];
  dialogVisible = false;

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    file: new FormControl<FileList>(undefined as any, Validators.required),
  });

  ngOnInit(): void {
    try {
      client.models.Todo.observeQuery().subscribe({
        next: ({ items, isSynced }) => {
          this.todos = items;
        },
      });
    } catch (error) {
      console.error('error fetching todos', error);
    }
  }

  async createTodo() {
    const fileEl = document.getElementById('file') as HTMLInputElement;
    const file = fileEl.files![0];
    try {
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file);
      fileReader.onload = async (event) => {
        console.log('Complete File read successfully!', event.target?.result);
        try {
          await uploadData({
            data: event.target?.result!,
            path: `sounds/${file.name}`,
          });
        } catch (e) {
          console.log('error', e);
        }
      };

      // //await client.models.Todo.get({  });
      // client.models.Todo.create({
      //   name: window.prompt('Todo content'),
      // });
      //this.listTodos();
    } catch (error) {
      console.error('error creating todos', error);
    }
  }

  async deleteTodo(todo: any) {
    try {
      console.log('delete ', todo);
      await client.models.Todo.delete(todo);
      //this.listTodos();
    } catch (error) {
      console.error('error creating todos', error);
    }
  }
}
