import { Component, OnInit } from '@angular/core';
import { AquariumService } from '../aquarium.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  image = this.aquariumService.getBackgroundImg();
  dataRequest = false;
  reportsRequest = false;
  boardsRequest = false;
  configRequest = false;

  onInit = false;
  gameActive = true;
  userEvent = true;
  cursorClassData = '';
  cursorClassReports = '';
  cursorClassBoards = '';
  cursorClassConfig = '';
  cursorClassFishTank = '';
  displayNavBar: 'hidden' | 'showHideOption' | 'showNavBar';
  clickSound = new Audio('.\\assets\\sounds\\Button_Press_4-Marianne_Gagnon-570460555.mp3');
  oceanSound = new Audio('.\\assets\\sounds\\OceanTheme.mp3');
  bubbleSound = new Audio('.\\assets\\sounds\\bulles.mp3');
  normalFishSound = new Audio('.\\assets\\sounds\\sonar.mp3');
  backgroundMusic = new Audio(this.getMusic());
  screenSaverTimer;

  constructor(public aquariumService: AquariumService) { }

  ngOnInit() {
    this.onInit = true;
    this.displayNavBar = 'showNavBar';
    this.getControlsChecker();
    this.screenSaverTimer = this.getScreenSaver();
    this.playBackgroundSound();
    this.setAnimationBackground();
  }

  getControlsChecker(): void {
    const menu = document.getElementById('page');
    menu.addEventListener('click', (e) => {
      this.userEvent = true;
      this.gameActive = true;
    });
    menu.addEventListener('mousemove', (e) => {
 this.userEvent = true;
 this.gameActive = true;
                });
  }

  getScreenSaver(): void {
      const timer = setInterval((t) => {
        if (!this.userEvent && !this.dataRequest) {
          this.gameActive = false;
        }
        this.userEvent = false;
            }, 45000);
  }

  playBackgroundSound(): void {
    this.clickSound.volume = 0.7;
    this.backgroundMusic.addEventListener('change', function() {
    this.currentTime = 0;
    this.play();
}, false);
    this.oceanSound.addEventListener('ended', function() {
      this.currentTime = 0;
      this.play();
  }, false);
    this.bubbleSound.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);
  }

  getOceanSound(): string {
    return '.\\assets\\sounds\\OceanTheme.mp3';
  }

  getBubbleSound(): string {
    return '.\\assets\\sounds\\bulles.mp3';
  }

  setAnimationBackground(): void {
    const normalFishImg = document.getElementById('normalFish');
    normalFishImg.addEventListener('click', () => {
      if (this.aquariumService.getAudio()) {
        this.normalFishSound.play();
      }
    });
    normalFishImg.addEventListener('dblclick', () => {
      if (this.aquariumService.getAudio()) {
        this.normalFishSound.pause();
      }
    });
  }

  getBackgroundImg(): string {
  return this.aquariumService.getBackgroundImg();
  }

getAudio(): boolean {
    return !this.aquariumService.getAudio();
  }

getMusic(): string {
    return this.aquariumService.getThemeChoice();
  }

  cursorInData(): void {
    this.cursorClassData = ' cursor-in';
  }

  cursorOutData(): void {
    this.cursorClassData = '';
  }
  cursorInReports(): void {
    this.cursorClassReports = ' cursor-in';
  }

  cursorOutReports(): void {
    this.cursorClassReports = '';
  }
  cursorInBoards(): void {
    this.cursorClassBoards = ' cursor-in';
  }

  cursorOutBoards(): void {
    this.cursorClassBoards = '';
  }
  cursorInConfig(): void {
    this.cursorClassConfig = ' cursor-in';
  }

  cursorOutConfig(): void {
    this.cursorClassConfig = '';
  }
  cursorInFishTank(): void {
    this.cursorClassFishTank = ' cursor-in';
  }

  cursorOutFishTank(): void {
    this.cursorClassFishTank = '';
  }

dataButton()  {
  if (this.aquariumService.getAudio()) {
    this.clickSound.play();
  }
  this.reportsRequest = false;
  this.boardsRequest = false;
  this.configRequest = false;
  this.dataRequest = true;
  }

reportsButton(): void {
  if (this.aquariumService.getAudio()) {
    this.clickSound.play();
  }
  this.reportsRequest = true;
  this.boardsRequest = false;
  this.configRequest = false;
  this.dataRequest = false;
  }

boardsButton(): void {
  if (this.aquariumService.getAudio()) {
    this.clickSound.play();
  }
  this.reportsRequest = false;
  this.boardsRequest = true;
  this.configRequest = false;
  this.dataRequest = false;
  }

configButton(): void {
  if (this.aquariumService.getAudio()) {
    this.clickSound.play();
  }
  this.reportsRequest = false;
  this.boardsRequest = false;
  this.configRequest = true;
  this.dataRequest = false;
  }

fishtankButton(): void {
  if (this.aquariumService.getAudio()) {
    this.clickSound.play();
  }
  this.cursorClassFishTank = '';
  if (!this.reportsRequest &&
    !this.boardsRequest &&
    !this.configRequest &&
    !this.dataRequest) {
  this.displayNavBar == 'showHideOption' ? this.displayNavBar = 'showNavBar' : this.displayNavBar = 'showHideOption';
  }
  this.reportsRequest = false;
  this.boardsRequest = false;
  this.configRequest = false;
  this.dataRequest = false;
}

hideData(): void {
  this.dataRequest = false;
}

hideReports(): void {
  this.reportsRequest = false;
}

hideBoards(): void {
  this.boardsRequest = false;
}

hideConfig(): void {
  this.configRequest = false;
}
}
