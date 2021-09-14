import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './Home/Home.component';
import { AboutMeComponent } from './AboutMe/AboutMe.component';
import { ContactmeComponent } from './ContactMe/ContactMe.component';
import { MyWebsiteArchiveComponent } from './MyWebsiteArchives/MyWebsiteArchive.component';
import { CoffeeReviewsComponent } from './CoffeeReviews/CoffeeReviews.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'AboutMe', component: AboutMeComponent },
    {path: 'ContactMe', component: ContactmeComponent},
    {path: 'MyWebsiteArchive', component: MyWebsiteArchiveComponent},
    {path: 'CoffeeReviews', component: CoffeeReviewsComponent},

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
    
];

export const appRoutingModule = RouterModule.forRoot(routes)