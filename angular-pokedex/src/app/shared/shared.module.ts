import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokeHeaderComponent } from './poke-header/poke-header.component';
import { PokeSearchComponent } from './poke-search/poke-search.component';
import { PokeListComponent } from './poke-list/poke-list.component';
import { RouterModule } from '@angular/router';
import { PokeMenuFiltrosComponent } from './poke-menu-filtros/poke-menu-filtros.component';
import { PokeAleatorioComponent } from './poke-aleatorio/poke-aleatorio.component';



@NgModule({
  declarations: [
    PokeHeaderComponent,
    PokeSearchComponent,
    PokeListComponent,
    PokeMenuFiltrosComponent,
    PokeAleatorioComponent
  ],
  exports: [
    PokeHeaderComponent,
    PokeSearchComponent,
    PokeListComponent,
    PokeMenuFiltrosComponent,
    PokeAleatorioComponent
    
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
