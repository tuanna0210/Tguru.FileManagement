import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FolderBreadcrumComponent } from './folder-breadcrum.component';

describe('FolderBreadcrumComponent', () => {
  let component: FolderBreadcrumComponent;
  let fixture: ComponentFixture<FolderBreadcrumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FolderBreadcrumComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FolderBreadcrumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
