import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './Home/Home.component';
import { AboutMeComponent } from './AboutMe/AboutMe.component';
import { ContactmeComponent } from './ContactMe/ContactMe.component';
import { MyWebsiteArchiveComponent } from './MyWebsiteArchives/MyWebsiteArchive.component';
import { CoffeeReviewsComponent } from './CoffeeReviews/CoffeeReviews.component';
import { projectsComponent } from './Projects/projects.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    /*{ path: 'AboutMe', component: AboutMeComponent },
    {path: 'ContactMe', component: ContactmeComponent},
    {path: 'MyWebsiteArchive', component: MyWebsiteArchiveComponent},
    {path: 'CoffeeReviews', component: CoffeeReviewsComponent},
    {path: 'projects', component: projectsComponent},*/
    // otherwise redirect to home
    { path: '**', redirectTo: 'home' }
    
];

export const appRoutingModule = RouterModule.forRoot(routes)