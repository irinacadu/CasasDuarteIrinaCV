import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkExperienceContentComponent } from './work-experience-content.component';

describe('WorkExperienceContentComponent', () => {
  let component: WorkExperienceContentComponent;
  let fixture: ComponentFixture<WorkExperienceContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkExperienceContentComponent]
    });
    fixture = TestBed.createComponent(WorkExperienceContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
