import { Component, OnInit } from '@angular/core';
import { AquariumService } from '../aquarium.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  image = this.aquariumService.getBackgroundImg();
  runningParty = false;
  helpRequest = false;
  configRequest = false;
  debugRequest = false;
  scoreRequest = false;
  exitDialog = false;
  onInit = false;
  gameActive = true;
  userEvent = true;
  cursorClass = '';
  clickSound = new Audio('.\\assets\\sounds\\Button_Press_4-Marianne_Gagnon-570460555.mp3');
  oceanSound = new Audio('.\\assets\\sounds\\OceanTheme.mp3');
  bubbleSound = new Audio('.\\assets\\sounds\\bulles.mp3');
  normalFishSound = new Audio('.\\assets\\sounds\\sonar.mp3');
  backgroundMusic = new Audio(this.getMusic());
  screenSaverTimer;

  constructor(public aquariumService: AquariumService) { }

  ngOnInit() {
    this.onInit = true;
    this.getControlsChecker();
    this.screenSaverTimer = this.getScreenSaver();
    this.playBackgroundSound();
    this.setAnimationBackground();
    this.getNavBarFocus();
    this.activateDebugPanel();
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
        if (!this.userEvent && !this.runningParty) {
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

getNavBarFocus() {
    const reportsButton = document.getElementById('reports');
    const dataButton = document.getElementById('data');
    const boardsButton = document.getElementById('boards');
    const configButton = document.getElementById('config');
    const watcherButton = document.getElementById('watcher');
    reportsButton.addEventListener('mouseenter', ( event ) => {
    const e = event.target as HTMLElement;
    e.style.backgroundColor = 'cyan';
    }, false);
    reportsButton.addEventListener('mouseleave', (event) => {
      const e = event.target as HTMLElement;
      e.style.backgroundColor = '';
    }, false);
    dataButton.addEventListener('mouseenter', ( event ) => {
      const e = event.target as HTMLElement;
      e.style.backgroundColor  = 'cyan';
    }, false);
    dataButton.addEventListener('mouseleave', (event) => {
      const e = event.target as HTMLElement;
      e.style.backgroundColor = '';
    }, false);
    boardsButton.addEventListener('mouseenter', ( event ) => {
      const e = event.target as HTMLElement;
      e.style.backgroundColor  = 'cyan';
    }, false);
    boardsButton.addEventListener('mouseleave', (event) => {
      const e = event.target as HTMLElement;
      e.style.backgroundColor = '';
    }, false);
    configButton.addEventListener('mouseenter', ( event ) => {
      const e = event.target as HTMLElement;
      e.style.backgroundColor  = 'cyan';
    }, false);
    configButton.addEventListener('mouseleave', (event) => {
      const e = event.target as HTMLElement;
      e.style.backgroundColor = '';
    }, false);
    watcherButton.addEventListener('mouseenter', ( event ) => {
      const e = event.target as HTMLElement;
      e.style.backgroundColor  = 'cyan';
    }, false);
    watcherButton.addEventListener('mouseleave', (event) => {
      const e = event.target as HTMLElement;
      e.style.backgroundColor = '';
    }, false);
  }

  activateDebugPanel(): void {
    document.body.onkeydown = (e) => {
      if (e.ctrlKey && e.altKey) {
        if (this.aquariumService.getAudio()) {
          this.clickSound.play();
        }
        if (this.gameActive) {
          this.debugButton();
        }
        this.userEvent = true;
        this.gameActive = true;
      }
          };
  }

startButton()  {
  if (this.aquariumService.getAudio()) {
    this.clickSound.play();
  }
  this.helpRequest = false;
  this.configRequest = false;
  this.debugRequest = false;
  this.scoreRequest = false;
  this.runningParty = true;
  }

helpButton(): void {
  if (this.aquariumService.getAudio()) {
    this.clickSound.play();
  }
  this.runningParty = false;
  this.configRequest = false;
  this.debugRequest = false;
  this.scoreRequest = false;
  this.helpRequest = true;
  }

configButton(): void {
  if (this.aquariumService.getAudio()) {
    this.clickSound.play();
  }
  this.runningParty = false;
  this.helpRequest = false;
  this.debugRequest = false;
  this.scoreRequest = false;
  this.configRequest = true;
  }

debugButton(): void {
  if (this.aquariumService.getAudio()) {
    this.clickSound.play();
  }
  this.displayParty();
  this.displayHelp();
  this.displayConfig();
  this.displayScore();
  this.debugRequest = !this.debugRequest;
  }

  scoreButton(): void {
    if (this.aquariumService.getAudio()) {
      this.clickSound.play();
    }
    this.runningParty = false;
    this.helpRequest = false;
    this.configRequest = false;
    this.debugRequest = false;
    this.scoreRequest = true;
  }

displayParty(): void {
    this.runningParty = false;
      }

displayHelp(): void {
    this.helpRequest = false;
  }

displayConfig(): void {
    this.configRequest = false;
  }

displayDebug(): void {
    this.debugRequest = false;
  }

  displayScore(): void {
    this.scoreRequest = false;
  }

displayExitDialog(): void {
  this.exitDialog = false;
}

exitButton() {
  if (this.aquariumService.getAudio()) {
    this.clickSound.play();
  }
  if (!this.runningParty && !this.helpRequest && !this.configRequest && !this.debugRequest && !this.scoreRequest) {
      this.exitDialog = true;
    }
  this.runningParty = false;
  this.helpRequest = false;
  this.configRequest = false;
  this.scoreRequest = false;
  this.debugRequest = false;
  }
}
