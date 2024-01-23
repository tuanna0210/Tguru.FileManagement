import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyDriveRoutingModule } from './my-drive-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { FolderDetailComponent } from './pages/folder-detail/folder-detail.component';
import { FolderBreadcrumComponent } from './components/folder-breadcrum/folder-breadcrum.component';
import { FolderGridItemComponent } from './components/folder-grid-item/folder-grid-item.component';
import { CreateFolderModalComponent } from './components/create-folder-modal/create-folder-modal.component';



@NgModule({
  declarations: [
    FolderDetailComponent,
    FolderBreadcrumComponent,
    FolderGridItemComponent,
    CreateFolderModalComponent
  ],
  imports: [
    CommonModule,
    MyDriveRoutingModule,
    SharedModule
  ]
})
export class MyDriveModule { }
