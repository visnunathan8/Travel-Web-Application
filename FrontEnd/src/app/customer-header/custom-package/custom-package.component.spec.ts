import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomPackageComponent } from './custom-package.component';

describe('CustomPackageComponent', () => {
  let component: CustomPackageComponent;
  let fixture: ComponentFixture<CustomPackageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomPackageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
