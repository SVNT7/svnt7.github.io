import { Component, OnInit } from '@angular/core';

import { Bohater } from '../bohater';
import {BohaterService} from "../bohater.service";

@Component({
  selector: 'app-bohaterzy',
  templateUrl: './bohaterzy.component.html',
  styleUrls: ['./bohaterzy.component.css']
})
export class BohaterzyComponent implements OnInit {
  bohaterzy: Bohater[];
  constructor(private bohaterService: BohaterService) { }

  ngOnInit() {
    this.wybierzBohaterow();
  }
  

  wybierzBohaterow(): void{
    this.bohaterService.wybierzBohaterow()
      .subscribe(bohaterzy => this.bohaterzy = bohaterzy);
  }
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.bohaterService.dodajBohatera({ name } as Bohater)
      .subscribe(bohater => {
        this.bohaterzy.push(bohater);
      });
  }

  delete(bohater: Bohater): void{
    this.bohaterzy = this.bohaterzy.filter(h => h !== bohater);
    this.bohaterService.usunBohatera(bohater).subscribe();
  }
}
