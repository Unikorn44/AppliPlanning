import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayEventDetailsComponent } from './day-event-details.component';

describe('DayEventDetailsComponent', () => {
  let component: DayEventDetailsComponent;
  let fixture: ComponentFixture<DayEventDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DayEventDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DayEventDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
