import { Component, OnInit, Input } from '@angular/core';

import { Bohater} from "../bohater";
import {BohaterService} from "../bohater.service";

import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";


@Component({
  selector: 'app-szczegoly-bohaterow',
  templateUrl: './szczegoly-bohaterow.component.html',
  styleUrls: ['./szczegoly-bohaterow.component.css']
})

export class SzczegolyBohaterowComponent implements OnInit {
  bohater: Bohater;
  constructor(
    private route: ActivatedRoute,
    private bohaterService: BohaterService,
    private location: Location
  ) { }

  ngOnInit():void {
    this.wybierzBohatera();
  }
  wybierzBohatera(): void{
    const id= +this.route.snapshot.paramMap.get('id');
    this.bohaterService.wybierzBohatera(id)
      .subscribe(bohater => this.bohater = bohater);
  }
  wroc(): void{
    this.location.back();
  }

  zapisz(): void{
    this.bohaterService.zaktualizujBohatera(this.bohater)
    .subscribe(() => this.wroc());
  }
}
