import { Component, OnInit } from '@angular/core';
import {WiadomosciService} from "../wiadomosci.service";

@Component({
  selector: 'app-wiadomosci',
  templateUrl: './wiadomosci.component.html',
  styleUrls: ['./wiadomosci.component.css']
})
export class WiadomosciComponent implements OnInit {

  constructor(public wiadomosciService: WiadomosciService) { }

  ngOnInit() {
  }

}
