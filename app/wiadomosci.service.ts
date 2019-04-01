import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WiadomosciService {
  wiadomosci: string[] = [];
  
  add(wiadomosc: string){
    this.wiadomosci.push(wiadomosc);
  }

  clear(){
    this.wiadomosci = [];
  }
}
