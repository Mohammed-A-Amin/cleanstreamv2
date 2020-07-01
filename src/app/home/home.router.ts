import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
    {
    path: 'home',
    component: HomePage,
    children: [
    {
    path: 'home2',
    loadChildren: () =>
    import('../pages/home2/home2.module').then(m => m.Home2PageModule)
    },
    {
    path: 'profile',
    loadChildren: () =>
    import('../pages/profile/profile.module').then(
    m => m.ProfilePageModule
    )
    },
    {
    path: 'settings',
    loadChildren: () =>
    import('../pages/settings/settings.module').then(
    m => m.SettingsPageModule
    )
    }
    ]
    }
    ];
    
    @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
    })
    export class HomeRouter {}