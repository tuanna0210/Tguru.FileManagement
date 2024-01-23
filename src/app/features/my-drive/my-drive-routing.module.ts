
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FolderDetailComponent } from './pages/folder-detail/folder-detail.component';
import { MyDriveComponent } from './pages/my-drive/my-drive.component';
import { SharedComponent } from './pages/shared/shared.component';
import { StarredComponent } from './pages/starred/starred.component';

const routes: Routes = [
  {
    path: '',
    data: {
        title: 'My drive'
    },
    children: [
      {
        path: 'my-drive',
        component: MyDriveComponent
      },
      {
        path: 'folders/:guid',
        component: FolderDetailComponent
      }
    ]
  }, 
  {
    path: 'shared',
    component: SharedComponent
  }, 
  {
    path: 'starred',
    component: StarredComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyDriveRoutingModule { }
