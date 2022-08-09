import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDayEventComponent } from './list-day-event.component';

describe('ListDayEventComponent', () => {
  let component: ListDayEventComponent;
  let fixture: ComponentFixture<ListDayEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDayEventComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListDayEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
