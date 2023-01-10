import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationDialogDescriptionComponent } from './registration-dialog-description.component';

describe('RegistrationDialogDescriptionComponent', () => {
  let component: RegistrationDialogDescriptionComponent;
  let fixture: ComponentFixture<RegistrationDialogDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationDialogDescriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrationDialogDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
