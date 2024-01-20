import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyDriveRoutingModule } from './my-drive-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { FolderComponent } from './components/folder/folder.component';



@NgModule({
  declarations: [
    FolderComponent
  ],
  imports: [
    CommonModule,
    MyDriveRoutingModule,
    SharedModule
  ]
})
export class MyDriveModule { }
