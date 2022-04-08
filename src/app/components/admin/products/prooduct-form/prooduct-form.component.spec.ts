import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProoductFormComponent } from './prooduct-form.component';

describe('ProoductFormComponent', () => {
  let component: ProoductFormComponent;
  let fixture: ComponentFixture<ProoductFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProoductFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProoductFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
