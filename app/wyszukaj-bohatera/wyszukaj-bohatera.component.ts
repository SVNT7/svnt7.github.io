import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import { Bohater } from '../bohater';
import { BohaterService } from '../bohater.service';
@Component({
  selector: 'app-wyszukaj-bohatera',
  templateUrl: './wyszukaj-bohatera.component.html',
  styleUrls: ['./wyszukaj-bohatera.component.css']
})
export class WyszukajBohateraComponent implements OnInit {
  bohaterzy$: Observable<Bohater[]>;
  private searchTerms = new Subject<string>();
 
  constructor(private bohaterService: BohaterService) {}
 
  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }
 
  ngOnInit(): void {
    this.bohaterzy$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),
 
      // ignore new term if same as previous term
      distinctUntilChanged(),
 
      // switch to new search observable each time the term changes
      switchMap((term: string) => this.bohaterService.wyszukajBohatera(term)),
    );
  }
}

