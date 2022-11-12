import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeAleatorioComponent } from './poke-aleatorio.component';

describe('PokeAleatorioComponent', () => {
  let component: PokeAleatorioComponent;
  let fixture: ComponentFixture<PokeAleatorioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokeAleatorioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokeAleatorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
