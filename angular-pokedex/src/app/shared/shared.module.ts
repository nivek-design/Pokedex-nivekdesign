import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokeHeaderComponent } from './poke-header/poke-header.component';
import { PokeSearchComponent } from './poke-search/poke-search.component';
import { PokeListComponent } from './poke-list/poke-list.component';
import { RouterModule } from '@angular/router';
import { PokeMenuFiltrosComponent } from './poke-menu-filtros/poke-menu-filtros.component';
import { PokeAleatorioComponent } from './poke-aleatorio/poke-aleatorio.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule} from '@angular/material/chips';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';



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
    RouterModule,
    MatDialogModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatIconModule,
    MatIconModule,
    MatProgressBarModule
  ]
})
export class SharedModule { }
