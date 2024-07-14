import { Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { LoginComponent } from './components/auth/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LayoutComponent } from './core/layout/layout.component';
import { HomeComponent } from './components/home/home.component';
import { ListComponent } from './components/hotel/list/list.component';
import { HotelComponent } from './components/hotel/hotel/hotel.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    // {
    //     path: 'login',
    //     component: LoginComponent
    // },
    {
        path: 'home',
        component: LayoutComponent,
        children:[
            {
                path: '',
                component: HomeComponent,
            },
           
        ]
    },
    {
        path: 'hotels',
        component: LayoutComponent,
        children:[
            {
                path: '',
                component: ListComponent,
            },
           {
                path: ':id',
                component: HotelComponent,
            },
        ]
    },
];
