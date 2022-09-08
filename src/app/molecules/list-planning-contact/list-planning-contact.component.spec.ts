import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPlanningContactComponent } from './list-planning-contact.component';

describe('ListPlanningContactComponent', () => {
  let component: ListPlanningContactComponent;
  let fixture: ComponentFixture<ListPlanningContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPlanningContactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPlanningContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
