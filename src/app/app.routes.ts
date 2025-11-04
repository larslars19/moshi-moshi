import { Routes } from '@angular/router';
import { LoginPage } from './LoginPage/login';
import { HomePage } from './HomePage/home';
import { RegistationPage } from './RegistationPage/registration';

export const routes: Routes = [
    {
       path: '',
       component: HomePage,
    },
    {
        path: 'login',
        component: LoginPage,
    },
    {
        path: 'registration',
        component: RegistationPage,
    },
];
