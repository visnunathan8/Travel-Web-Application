import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainAdminHeaderComponent } from './main-admin-header.component';

describe('MainAdminHeaderComponent', () => {
  let component: MainAdminHeaderComponent;
  let fixture: ComponentFixture<MainAdminHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainAdminHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainAdminHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
