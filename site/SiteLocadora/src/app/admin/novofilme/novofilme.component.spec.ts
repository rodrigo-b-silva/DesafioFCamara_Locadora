import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNovofilmeComponent } from './novofilme.component';

describe('AdminNovofilmeComponent', () => {
  let component: AdminNovofilmeComponent;
  let fixture: ComponentFixture<AdminNovofilmeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminNovofilmeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminNovofilmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
