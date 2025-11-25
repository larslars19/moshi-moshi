import { Routes } from '@angular/router';
import { LoginPage } from './LoginPage/login';
import { HomePage } from './HomePage/home';
import { RegistationPage } from './RegistationPage/registration';
import { Registation1 } from './RegistationPage/1';
import { Registation2 } from './RegistationPage/2';
import { Registation3 } from './RegistationPage/3';
import { Page404 } from './Page404/404';
import { SearchCouplePage } from './SearchCouplePage/search_couple';

export const routes: Routes = [
    {
       path: 'home',
       component: HomePage,
    },
    {
        path: 'login',
        component: LoginPage,
    },
    {
        path: 'registration',
        component: RegistationPage,
        children: [
            {
                path: '',
                redirectTo: '/registration/1',
                pathMatch: 'full',
            },
            {
                path: '1',
                component: Registation1,
            },
            {
                path: '2',
                component: Registation2,
            },
            {
                path: '3',
                component: Registation3,
            },
            
        ]
    },
    {
        path: 'search',
        component: SearchCouplePage,
    },
    {
        path: '**',
        component: Page404,
    },
];
