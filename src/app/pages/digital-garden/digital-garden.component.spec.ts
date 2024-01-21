import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalGardenComponent } from './digital-garden.component';

describe('DigitalGardenComponent', () => {
  let component: DigitalGardenComponent;
  let fixture: ComponentFixture<DigitalGardenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DigitalGardenComponent]
    });
    fixture = TestBed.createComponent(DigitalGardenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
