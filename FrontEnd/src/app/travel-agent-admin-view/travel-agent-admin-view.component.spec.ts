import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelAgentAdminViewComponent } from './travel-agent-admin-view.component';

describe('TravelAgentAdminViewComponent', () => {
  let component: TravelAgentAdminViewComponent;
  let fixture: ComponentFixture<TravelAgentAdminViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelAgentAdminViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelAgentAdminViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
