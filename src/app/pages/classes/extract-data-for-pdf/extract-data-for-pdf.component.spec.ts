import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtractDataForPdfComponent } from './extract-data-for-pdf.component';

describe('ExtractDataForPdfComponent', () => {
  let component: ExtractDataForPdfComponent;
  let fixture: ComponentFixture<ExtractDataForPdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExtractDataForPdfComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExtractDataForPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
