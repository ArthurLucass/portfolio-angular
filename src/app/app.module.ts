import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './screens/home/home.component';
import { ProjectsComponent } from './screens/projects/projects.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, ProjectsComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
