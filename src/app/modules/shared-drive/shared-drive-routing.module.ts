import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedDriveComponent } from './components/shared-drive/shared-drive.component';

const routes: Routes = [
  {
    path: '',
    data: {
        title: 'Shared'
    },
    children: [
      {
        path: '',
        component: SharedDriveComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedDriveRoutingModule { }
