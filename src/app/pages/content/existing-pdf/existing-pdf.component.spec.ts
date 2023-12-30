import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistingPdfComponent } from './existing-pdf.component';

describe('ExistingPdfComponent', () => {
  let component: ExistingPdfComponent;
  let fixture: ComponentFixture<ExistingPdfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExistingPdfComponent]
    });
    fixture = TestBed.createComponent(ExistingPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
