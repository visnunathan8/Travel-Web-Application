import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelagentComponent } from './travelagent.component';

describe('TravelagentComponent', () => {
  let component: TravelagentComponent;
  let fixture: ComponentFixture<TravelagentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelagentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelagentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
