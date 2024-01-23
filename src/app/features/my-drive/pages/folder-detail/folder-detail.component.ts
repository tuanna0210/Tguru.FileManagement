import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { CreateFolderModalComponent } from '../../components/create-folder-modal/create-folder-modal.component';
import { FolderService } from '../../services/folder.service';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-folder-detail',
  standalone: false,
  // imports: [],
  templateUrl: './folder-detail.component.html',
  styleUrl: './folder-detail.component.scss'
})
export class FolderDetailComponent implements OnInit {
  bsModalRef?: BsModalRef;
  

  constructor(private modalService: BsModalService,
    private folderService: FolderService) {

  }
  ngOnInit(): void {
    console.log(environment.development);
  }

  getSubFolders(){

  }

  getFiles(){

  }

  openCreateFolderModal() {
    const initialState: ModalOptions = {
      initialState: {
        //list: ['Open a modal with component', 'Pass your data', 'Do something else', '...'],
        // title: 'Modal with component'
      }
    };
    this.bsModalRef = this.modalService.show(CreateFolderModalComponent, initialState);
    //this.bsModalRef.content.closeBtnName = 'Close';
  }
}
