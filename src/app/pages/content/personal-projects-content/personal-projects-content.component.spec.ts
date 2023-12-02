import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalProjectsContentComponent } from './personal-projects-content.component';

describe('PersonalProjectsContentComponent', () => {
  let component: PersonalProjectsContentComponent;
  let fixture: ComponentFixture<PersonalProjectsContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonalProjectsContentComponent]
    });
    fixture = TestBed.createComponent(PersonalProjectsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
