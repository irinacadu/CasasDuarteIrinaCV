import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherWorkExperienceContentComponent } from './other-work-experience-content.component';

describe('OtherWorkExperienceContentComponent', () => {
  let component: OtherWorkExperienceContentComponent;
  let fixture: ComponentFixture<OtherWorkExperienceContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OtherWorkExperienceContentComponent]
    });
    fixture = TestBed.createComponent(OtherWorkExperienceContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
