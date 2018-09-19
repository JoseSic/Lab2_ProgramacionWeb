import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VentanaNuevoComponent } from './ventana-nuevo.component';

describe('VentanaNuevoComponent', () => {
  let component: VentanaNuevoComponent;
  let fixture: ComponentFixture<VentanaNuevoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VentanaNuevoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VentanaNuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
