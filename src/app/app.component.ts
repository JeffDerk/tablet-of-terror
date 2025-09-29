import {
  Component,
  ElementRef,
  inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { NgClass } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Amplify } from 'aws-amplify';
import outputs from '../../amplify_outputs.json';

Amplify.configure(outputs);

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [NgClass],
})
export class AppComponent implements OnInit {
  message = 'Geen opdracht';
  private route = inject(ActivatedRoute);

  @ViewChild('app')
  private appElement!: ElementRef<HTMLDivElement>;

  @ViewChild('audio')
  private audioElement!: ElementRef<HTMLAudioElement>;

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      console.log('params ', this.route.snapshot);
      this.message = ((params['message'] || 'Geen opdracht') as string)
        .replace('#terror', '')
        .trim();
    });
  }

  playAlarm() {
    const audio = this.audioElement.nativeElement;
    if (audio.paused) {
      audio.currentTime = 0;
      audio.play();
      console.log('play');
    } else {
      audio.pause();
      console.log('pause');
    }
  }
}
