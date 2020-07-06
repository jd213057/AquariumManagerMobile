import { Component, OnInit } from '@angular/core';
import { AquariumService } from '../aquarium.service';

@Component({
  selector: 'app-menu-template',
  templateUrl: './menu-template.component.html',
  styleUrls: ['./menu-template.component.css']
})
export class MenuTemplateComponent implements OnInit {
  onInit = false;
  gameActive = true;
  userEvent = true;
  screenSaverTimer;

  constructor(public aquariumService: AquariumService) { }

  ngOnInit() {
    this.onInit = true;
  }

  getBackgroundImg(): string {
    if (this.aquariumService.getImgBackgroundTemp() == null || this.aquariumService.getImgBackgroundTemp() == undefined) {
      return this.aquariumService.getImgPref();
    }
    return this.aquariumService.getImgBackgroundTemp();
  }
}
