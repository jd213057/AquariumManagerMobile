import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AquariumService } from '../aquarium.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {
  @Output() displayConfig = new EventEmitter();
  checkoutForm: FormGroup;
  cursorApplyClass = 'no-focus';
  cursorExitClass = 'no-focus';
  @Input() imgToShow = this.aquariumService.getBackgroundImg();
  clickSound = new Audio('.\\assets\\sounds\\Button_Press_4-Marianne_Gagnon-570460555.mp3');

    constructor(private formBuilder: FormBuilder, private aquariumService: AquariumService) {
      this.checkoutForm = this.formBuilder.group({
      audio: this.aquariumService.getAudioPref(),
      themeChoice: this.aquariumService.getThemePref(),
      level: this.aquariumService.getLevelPref().toString(),
      imgChoice: this.aquariumService.getImgPref()
    });
   }

    ngOnInit() {
      this.activateInputImgChoice();
    }

    cursorApplyIn() {
      this.cursorApplyClass = 'cursor-in';
    }

    cursorApplyOut() {
      this.cursorApplyClass = 'no-focus';
    }

    cursorExitIn() {
      this.cursorExitClass = 'cursor-in';
    }

    cursorExitOut() {
      this.cursorExitClass = 'no-focus';
    }

    playClickSound(): void {
      if (this.aquariumService.getAudio()) {
        this.clickSound.play();
      }
    }

    activateInputImgChoice(): void {
      const sableImgChoice = document.getElementById('sableImgChoice');
      const corailImgChoice = document.getElementById('corailImgChoice');
      const algueImgChoice = document.getElementById('algueImgChoice');
      const img = document.getElementById('img');
      sableImgChoice.addEventListener('click', (event) => {
        this.imgToShow = './assets/images/background1.jpg';
        this.aquariumService.setImgBackgroundTemp(this.imgToShow);
      });
      corailImgChoice.addEventListener('click', (event) => {
        this.imgToShow = './assets/images/background2.png';
        this.aquariumService.setImgBackgroundTemp(this.imgToShow);
      });
      algueImgChoice.addEventListener('click', (event) => {
        this.imgToShow = './assets/images/background3.jpg';
        this.aquariumService.setImgBackgroundTemp(this.imgToShow);
      });
    }

    getButtonsFocus(): void {
      const applyButton = document.getElementById('apply');
      const exitButton = document.getElementById('exit');
      applyButton.addEventListener('mouseenter', ( event ) => {
      const e = event.target as HTMLElement;
      e.style.backgroundColor = 'gold';
      }, false);
      applyButton.addEventListener('mouseleave', (event) => {
        const e = event.target as HTMLElement;
        e.style.backgroundColor = '';
      }, false);
      exitButton.addEventListener('mouseenter', ( event ) => {
        const e = event.target as HTMLElement;
        e.style.backgroundColor = 'gold';
        }, false);
      exitButton.addEventListener('mouseleave', (event) => {
          const e = event.target as HTMLElement;
          e.style.backgroundColor = '';
        }, false);
    }

    onSubmit() {
      if (this.aquariumService.getAudio()){
        this.clickSound.play();
      }
      this.aquariumService.setAudio(this.checkoutForm.get('audio').value);
      this.aquariumService.setThemeChoice(this.checkoutForm.get('themeChoice').value);
      this.aquariumService.setLevel(this.checkoutForm.get('level').value.toString());
      this.aquariumService.setBackgroundImg(this.checkoutForm.get('imgChoice').value);
      this.aquariumService.saveParamsInLocalStorage();
    }

    exitConfig(): void {
      this.clickSound.volume = 0.7;
      if (this.aquariumService.getAudio()){
        this.clickSound.play();
      }
      this.aquariumService.setImgBackgroundTemp(null);
      this.displayConfig.emit();
    }

}
