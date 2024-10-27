import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TitleService {

  title = ""
  constructor() { }

  titleWindow(title:string){
    this.title = title;
  }

  getTitle(){
    return this.title
  }
}
