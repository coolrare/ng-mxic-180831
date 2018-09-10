import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getArticle() {
    return fetch('/api/articles.json').then((res) => res.json());
  }

}
