import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {FormControl} from '@angular/forms';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';




@Component({
  selector: 'poke-menu-filtros',
  templateUrl: './poke-menu-filtros.component.html',
  styleUrls: ['./poke-menu-filtros.component.scss']
})

export class PokeMenuFiltrosComponent {
  separatorKeysCodes: number[] = [ENTER, COMMA];
  fruitCtrl = new FormControl('');
  filterHabilidades: Observable<string[]>;
  habilidades: string[] = ['Todas'];
  allFruits: string[] = [ 'Todas', ];

  @ViewChild('fruitInput') fruitInput: ElementRef<HTMLInputElement> | undefined;

  constructor() {
    this.filterHabilidades = this.fruitCtrl.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) => (fruit ? this._filter(fruit) : this.allFruits.slice())),
    );
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.habilidades.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();

    this.fruitCtrl.setValue(null);
  }

  remove(fruit: string): void {
    const index = this.habilidades.indexOf(fruit);

    if (index >= 0) {
      this.habilidades.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.habilidades.push(event.option.viewValue);
    
    this.fruitCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allFruits.filter(fruit => fruit.toLowerCase().includes(filterValue));
  }
}
