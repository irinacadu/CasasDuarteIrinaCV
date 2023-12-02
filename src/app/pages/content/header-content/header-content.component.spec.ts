import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderContentComponent } from './header-content.component';

describe('HeaderContentComponent', () => {
  let component: HeaderContentComponent;
  let fixture: ComponentFixture<HeaderContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderContentComponent]
    });
    fixture = TestBed.createComponent(HeaderContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
