import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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

type Sounds = {
  name: string;
  file: string;
};

@Component({
  selector: 'app-sounds',
  imports: [CommonModule, Button, DialogModule],
  templateUrl: './sounds.component.html',
  styleUrl: './sounds.component.scss',
})
export class SoundsComponent {
  sounds: Sounds[] = [
    { name: 'Bingo, bingo, bingo!', file: 'Bingo, bingo, bingo!.mp3' },
    { name: 'Al weer een winnaar', file: 'Al weer een winnaar.m4a' },
    { name: 'Applausje', file: 'Applausje.m4a' },
    { name: 'Cadeautje uitzoeken', file: 'Cadeautje uitzoeken.m4a' },
    { name: 'Tututututu', file: 'Tututututu.mp4' },
    { name: 'Fluit liedje', file: 'Fluit liedje.m4a' },
    { name: 'Foute bingo booing', file: 'Foute bingo booing.m4a' },
    { name: 'The Price Is Right', file: 'The Price Is Right.m4a' },
    {
      name: 'Wacht muziekje tijdens bingo',
      file: 'Wacht muziekje tijdens bingo.m4a',
    },
    {
      name: 'Auf der Heide',
      file: 'Auf-der-Heide.mp3',
    },
  ];
  active = this.sounds[0];

  @ViewChild('audio')
  private audioElement!: ElementRef<HTMLAudioElement>;

  playSound(sound: Sounds) {
    const audio = this.audioElement.nativeElement;
    if (this.active === sound) {
      if (!audio.paused) {
        audio.pause();
      } else {
        audio.play();
      }
    } else {
      this.active = sound;
      audio.src = `assets/sounds/${sound.file}`;
      audio.currentTime = 0;
      audio.play();
    }
  }
}
