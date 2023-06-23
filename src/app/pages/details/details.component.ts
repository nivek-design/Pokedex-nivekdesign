import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  private urlPokemon: string ='http://pokeapi.co/api/v2/pokemon'
  private urlName: string ='http://pokeapi.co/api/v2/pokemon-species'
  

public pokemon: any;
public loading: boolean = false;
public error: boolean = false;

  constructor(
    private ActiveRoute: ActivatedRoute,
    private pokeApiService: PokeApiService
    
  ) { }

  ngOnInit(): void {
    this.getPokemon();
  }

  public getPokemon(){
    const id = this.ActiveRoute.snapshot.params['id'];
    const pokemon = this.pokeApiService.apiGetPokemons(`${this.urlPokemon}/${id}`);
    const name = this.pokeApiService.apiGetPokemons(`${this.urlName}/${id}`);

    forkJoin([pokemon, name]).subscribe(
      res => {
        this.pokemon = res;
        this.loading = true;
        this.error = true;
      }
    )

    return
  }

}
