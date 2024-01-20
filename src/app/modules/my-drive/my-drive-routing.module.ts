
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyDriveComponent } from './components/my-drive/my-drive.component';
import { FolderComponent } from './components/folder/folder.component';

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
        component: FolderComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyDriveRoutingModule { }
