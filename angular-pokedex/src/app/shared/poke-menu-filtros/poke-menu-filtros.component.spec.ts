import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeMenuFiltrosComponent } from './poke-menu-filtros.component';

describe('PokeMenuFiltrosComponent', () => {
  let component: PokeMenuFiltrosComponent;
  let fixture: ComponentFixture<PokeMenuFiltrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokeMenuFiltrosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokeMenuFiltrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
