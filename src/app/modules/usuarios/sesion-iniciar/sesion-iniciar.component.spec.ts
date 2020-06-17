import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SesionIniciarComponent } from './sesion-iniciar.component';

describe('SesionIniciarComponent', () => {
  let component: SesionIniciarComponent;
  let fixture: ComponentFixture<SesionIniciarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SesionIniciarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SesionIniciarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
