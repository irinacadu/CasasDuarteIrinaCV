import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestsContentComponent } from './interests-content.component';

describe('InterestsContentComponent', () => {
  let component: InterestsContentComponent;
  let fixture: ComponentFixture<InterestsContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InterestsContentComponent]
    });
    fixture = TestBed.createComponent(InterestsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
