import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const rootRouterConfig: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent }
    // { path: 'about', component: AboutComponent },
    // {
    //     path: 'github', component: RepoBrowserComponent,
    //     children: [
    //         { path: '', component: RepoListComponent },
    //         {
    //             path: ':org', component: RepoListComponent,
    //             children: [
    //                 { path: '', component: RepoDetailComponent },
    //                 { path: ':repo', component: RepoDetailComponent }
    //             ]
    //         }]
    // }
];
