import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-create-folder-modal',
  standalone: false,
  // imports: [],
  templateUrl: './create-folder-modal.component.html',
  styleUrl: './create-folder-modal.component.scss'
})
export class CreateFolderModalComponent {
  title: string = 'New folder'
  form: FormGroup;

  constructor(
    private bsModalRef: BsModalRef,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      id: [0],
      name: ['', [Validators.required]]
    });
  }

  createFolder() {
    console.log(this.form);
  }

  onClose() {
    this.bsModalRef?.hide()
  }
}
