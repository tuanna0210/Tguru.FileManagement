import { Routes } from '@angular/router';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { LandingPageLayoutComponent } from './layouts/landing-page-layout/landing-page-layout.component';

export const routes: Routes = [
    { path: '', component: DefaultLayoutComponent, pathMatch: 'full' },
    {
        path: 'drive',
        // canActivate: [AuthGuard],
        component: DefaultLayoutComponent,
        data: {
          title: 'Home'
        },
        children: [
            {
                path: '', loadChildren: () => import('./modules/my-drive/my-drive.module').then(m => m.MyDriveModule)
            },
            {
                path: 'starred', loadChildren: () => import('./modules/starred/starred.module').then(m => m.StarredModule)
            },
            {
                path: 'shared', loadChildren: () => import('./modules/shared-drive/shared-drive.module').then(m => m.SharedDriveModule)
            }
        ]
    },
    { path: 'login', component: LandingPageLayoutComponent, pathMatch: 'full' },
];
