import {
  Component,
  ElementRef,
  inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { NgClass } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './terror.component.html',
  styleUrl: './terror.component.scss',
  imports: [NgClass],
})
export class TerrorComponent implements OnInit {
  message = 'Geen opdracht';
  private route = inject(ActivatedRoute);

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
