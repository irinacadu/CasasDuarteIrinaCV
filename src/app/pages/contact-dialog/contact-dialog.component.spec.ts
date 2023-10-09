import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactDialogComponent } from './contact-dialog.component';

describe('ContactDialogComponent', () => {
  let component: ContactDialogComponent;
  let fixture: ComponentFixture<ContactDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactDialogComponent]
    });
    fixture = TestBed.createComponent(ContactDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
