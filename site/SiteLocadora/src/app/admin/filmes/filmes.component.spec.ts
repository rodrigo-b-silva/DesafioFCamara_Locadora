import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFilmesComponent } from './filmes.component';

describe('FilmesComponent', () => {
  let component: AdminFilmesComponent;
  let fixture: ComponentFixture<AdminFilmesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminFilmesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminFilmesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
