import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesRecientesComponent } from './series-recientes.component';

describe('SeriesRecientesComponent', () => {
  let component: SeriesRecientesComponent;
  let fixture: ComponentFixture<SeriesRecientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeriesRecientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeriesRecientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
