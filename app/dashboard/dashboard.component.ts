import { Component, OnInit } from '@angular/core';
import {Bohater} from "../bohater";
import {BohaterService} from "../bohater.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  bohaterzy: Bohater[] = [];
  
  constructor(private bohaterService: BohaterService) { }

  ngOnInit() {
    this.wybierzBohaterow();
  }
  wybierzBohaterow(): void{
    this.bohaterService.wybierzBohaterow()
      .subscribe(bohaterzy => this.bohaterzy = bohaterzy.slice(1,5));
  }
}
