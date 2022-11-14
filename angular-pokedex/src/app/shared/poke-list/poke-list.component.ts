import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs';
import { PokeApiService } from 'src/app/service/poke-api.service';
import { MatDialog } from '@angular/material/dialog';
import { DetailsComponent } from 'src/app/pages/details/details.component';


@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {
  
  private setAllPokemons: any;
  public getAllPokemons: any;
  public error :boolean = false;

  constructor(
    private pokeApiService: PokeApiService,
    private matDialog: MatDialog
  ) { }

  onOpenDialogClick():void {
    this.matDialog.open(DetailsComponent,{
    width:'43vw',
    height:'80%'});
  }

  ngOnInit(): void {
    this.pokeApiService.apiListALLPokemons.subscribe(
      res => {
        
        this.setAllPokemons = res.results;
        this.getAllPokemons = this.setAllPokemons;
        // this.error = true;
      },
      Error => {
        this.error= true;
      }
    );
  }

  public getSearch(value: string) {
    const filter = this.setAllPokemons.filter( (res: any ) =>{
      return !res.name.indexOf(value.toLowerCase());
    });

    this.getAllPokemons = filter;
  }
}
