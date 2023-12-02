import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PpoDevFunctionsContentComponent } from './ppo-dev-functions-content.component';

describe('PpoDevFunctionsContentComponent', () => {
  let component: PpoDevFunctionsContentComponent;
  let fixture: ComponentFixture<PpoDevFunctionsContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PpoDevFunctionsContentComponent]
    });
    fixture = TestBed.createComponent(PpoDevFunctionsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
