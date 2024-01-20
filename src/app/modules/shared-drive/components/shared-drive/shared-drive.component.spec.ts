import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedDriveComponent } from './shared-drive.component';

describe('SharedDriveComponent', () => {
  let component: SharedDriveComponent;
  let fixture: ComponentFixture<SharedDriveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedDriveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SharedDriveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
