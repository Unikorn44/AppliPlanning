import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanningContactComponent } from './planning-contact.component';

describe('PlanningContactComponent', () => {
  let component: PlanningContactComponent;
  let fixture: ComponentFixture<PlanningContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanningContactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanningContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
