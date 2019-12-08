import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { BioComponent } from './bio/bio.component';
import { PhotosComponent } from './photos/photos.component';
import { ResumeComponent } from './resume/resume.component';
import { SocialmediaComponent } from './socialmedia/socialmedia.component';
import { ExtracurricularComponent } from './extracurricular/extracurricular.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot(
      [{path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', component: HomeComponent},
      {path: 'bio', component: BioComponent},
      {path: 'socialmedia', component: SocialmediaComponent},
      {path: 'photos', component: PhotosComponent},
      {path: 'resume', component: ResumeComponent},
      {path: 'extracurricular', component: ExtracurricularComponent},
      {path: 'navbar', component: NavbarComponent},
      ])],
  declarations: [ AppComponent, HelloComponent, HomeComponent, BioComponent, PhotosComponent, ResumeComponent, SocialmediaComponent, ExtracurricularComponent, NavbarComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
