import { Routes } from '@angular/router';
import { Info } from './components/pages/info/info';
import { Menu } from './components/pages/menu/menu';
import { Salir } from './components/pages/salir/salir';
import { PageNotFound } from './components/pages/page-not-found/page-not-found';

export const routes: Routes = [
    {path:"info", component: Info, title:"Info"},
    {path:"menu", component: Menu, title:"Menu"},
    {path:"salir", component: Salir, title:"Salir"},
    {path:"", redirectTo:"/menu", pathMatch:"full"},
    {path:"**", component: PageNotFound, title:"Page Not Found"}
];
