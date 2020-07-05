import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AquariumService } from '../aquarium.service';


@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {
  musicIntro = new Audio('.\\assets\\sounds\\gameIntro.mp3');
  @Output() closeIntro = new EventEmitter();

    constructor(protected aquariumService: AquariumService) { }

    ngOnInit() {
      this.playIntro();
    }

    playIntro(): void {
      if (this.aquariumService.getAudio()) {
        this.musicIntro.play();
      }
      setTimeout(() => {
    this.closeIntro.emit();
  }, 8000);
    }

}
