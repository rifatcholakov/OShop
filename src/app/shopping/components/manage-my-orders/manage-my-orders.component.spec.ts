import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageMyOrdersComponent } from './manage-my-orders.component';

describe('ManageMyOrdersComponent', () => {
  let component: ManageMyOrdersComponent;
  let fixture: ComponentFixture<ManageMyOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageMyOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageMyOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
