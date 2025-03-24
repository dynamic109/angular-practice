import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    { path: "", component: HomeComponent, pathMatch: "full" }, 
    { path: "about", component: AboutComponent },
    { path: "contact", component: ContactComponent },
    { path: "**", redirectTo: "" } 
];
