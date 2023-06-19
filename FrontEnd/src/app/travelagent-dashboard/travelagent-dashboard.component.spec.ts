import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelagentDashboardComponent } from './travelagent-dashboard.component';

describe('TravelagentDashboardComponent', () => {
  let component: TravelagentDashboardComponent;
  let fixture: ComponentFixture<TravelagentDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelagentDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelagentDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
