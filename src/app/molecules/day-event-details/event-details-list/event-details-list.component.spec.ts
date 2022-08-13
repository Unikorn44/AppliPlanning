import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventDetailsListComponent } from './event-details-list.component';

describe('EventDetailsListComponent', () => {
  let component: EventDetailsListComponent;
  let fixture: ComponentFixture<EventDetailsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventDetailsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventDetailsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
