import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getArticle() {
    return this.http.get<any[]>('/api/articles.json').toPromise();
  }

  deleteArticle(id: number) {
    console.log('您刪除了一篇文章: ', id);
  }

}
