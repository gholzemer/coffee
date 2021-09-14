import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';
import { AboutMeComponent } from './AboutMe/AboutMe.component';

import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { AppComponent } from './app.component';
import { appRoutingModule } from './app.routing';
import { FootersComponent } from './Footers/Footers.component';
import { HomeComponent } from './Home/Home.component';
import { TopNavBarComponent } from './TopNavBar/TopNavBar.component';
import { ContactmeComponent } from './ContactMe/ContactMe.component';
import { MyWebsiteArchiveComponent } from './MyWebsiteArchives/MyWebsiteArchive.component';
import { CoffeeReviewsComponent } from './CoffeeReviews/CoffeeReviews.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutMeComponent,
    TopNavBarComponent,
    FootersComponent,
    ContactmeComponent,
    MyWebsiteArchiveComponent,
    CoffeeReviewsComponent
  ],
  imports: [
    BrowserModule,
    appRoutingModule,
    BrowserAnimationsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
