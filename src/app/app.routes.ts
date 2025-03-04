import { Routes } from '@angular/router';
import { CountryDetailsComponent } from './country-details/country-details.component';
import { MainComponent } from './main/main.component';

export const routes: Routes = [
    {
        path:'',
        component: MainComponent
    },
    {
        path: 'country',
        component: CountryDetailsComponent
    }
];
