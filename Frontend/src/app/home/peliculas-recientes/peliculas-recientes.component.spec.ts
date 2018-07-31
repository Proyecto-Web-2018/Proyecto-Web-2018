import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculasRecientesComponent } from './peliculas-recientes.component';

describe('PeliculasRecientesComponent', () => {
  let component: PeliculasRecientesComponent;
  let fixture: ComponentFixture<PeliculasRecientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeliculasRecientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeliculasRecientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
