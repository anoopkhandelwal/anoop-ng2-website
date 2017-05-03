import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {ProfileComponent} from './profile/profile.component';
import {SummaryComponent} from './summary/summary.component';
import {ExperienceComponent} from './experience/experience.component';
import {FooterComponent} from './footer/footer.component';
import {SkillsComponent} from './skills/skills.component';

@NgModule({
  declarations: [
    AppComponent, ProfileComponent , SummaryComponent, ExperienceComponent,
    FooterComponent, SkillsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
