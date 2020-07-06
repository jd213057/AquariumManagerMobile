import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AquariumService } from './aquarium.service';
import { IntroComponent } from './intro/intro.component';
import { MenuComponent } from './menu/menu.component';
import { DataComponent } from './data/data.component';
import { ConfigComponent } from './config/config.component';
import { MenuTemplateComponent } from './menu-template/menu-template.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    IntroComponent,
    DataComponent,
    ConfigComponent,
    MenuTemplateComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AquariumService],
  bootstrap: [AppComponent],

})
export class AppModule { }
