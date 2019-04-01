import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Bohater} from "./bohater";
import {BOHATERZY} from "./falszywi-bohaterzy";
import { WiadomosciService } from './wiadomosci.service';
import { catchError, map, tap } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})

export class BohaterService {
  private heroesUrl = 'api/bohaterzy';  // URL to web api
  
  constructor(
    private http: HttpClient,
    private wiadomosciService: WiadomosciService) { }
    
    private handleError<T> (operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
     
        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead
     
        // TODO: better job of transforming error for user consumption
        this.log(`${operation} failed: ${error.message}`);
     
        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }
    
    wybierzBohaterow(): Observable<Bohater[]> {
      return this.http.get<Bohater[]>(this.heroesUrl)
      .pipe(
        tap(_ => this.log('Pobrano bohaterow')),
        catchError(this.handleError<Bohater[]>('wybierzBohaterow',[]))
      );
   }
  
    wybierzBohatera(id: number): Observable<Bohater>{
      const url = `${this.heroesUrl}/${id}`;
      return this.http.get<Bohater>(url).pipe(
        tap(_ => this.log(`Pobrano bohatera o id: ${id}`)),
        catchError(this.handleError<Bohater>(` id=${id}`))
      );
    }
  private log(wiadomosc: string){
    this.wiadomosciService.add(`Usluga Bohater: ${wiadomosc}`);
  }

  zaktualizujBohatera(bohater: Bohater): Observable<any>{
    return this.http.put(this.heroesUrl, bohater, httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${bohater.id}`)),
      catchError(this.handleError<any>('zaaktualizujBohatera'))
    )
  }
  dodajBohatera (bohater: Bohater): Observable<Bohater> {
    return this.http.post<Bohater>(this.heroesUrl, bohater, httpOptions).pipe(
      tap((nowyBohater: Bohater) => this.log(`Dodano bohatera z id: ${nowyBohater.id}`)),
      catchError(this.handleError<Bohater>('addHero'))
    );
  }

  usunBohatera (bohater: Bohater | number): Observable<Bohater> {
    const id = typeof bohater === 'number' ? bohater : bohater.id;
    const url = `${this.heroesUrl}/${id}`;
  
    return this.http.delete<Bohater>(url, httpOptions).pipe(
      tap(_ => this.log(`Usunieto bohatera o id: ${id}`)),
      catchError(this.handleError<Bohater>('deleteHero'))
    );
  }

  wyszukajBohatera(term: string):Observable<Bohater[]>{
    if(!term.trim()){
      return of([]);
    }
    return this.http.get<Bohater[]>(`${this.heroesUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`Znaleziono bohaterow:  "${term}"`)),
      catchError(this.handleError<Bohater[]>('searchHeroes', []))
    );
  }
  }

