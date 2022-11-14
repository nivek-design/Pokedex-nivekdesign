import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { PokeApiService } from 'src/app/service/poke-api.service';


@Component({
  selector: 'poke-aleatorio',
  templateUrl: './poke-aleatorio.component.html',
  styleUrls: ['./poke-aleatorio.component.scss']
})
export class PokeAleatorioComponent implements OnInit {

  public getAllPokemons: any;
  private setAllPokemons: any;
  public pokemon: any;



  constructor(
    private pokeApiService : PokeApiService

  ) { }

  ngOnInit(): void {
    this.pokeApiService.apiListALLPokemons.subscribe(
      res => {

        this.setAllPokemons = res.results;
        this.getAllPokemons = this.setAllPokemons;
      }

    )
  }

 

}
