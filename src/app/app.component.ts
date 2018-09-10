import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'demo1';
  keyword = '123';

  data = [];

  constructor() {

  }

  ngOnInit(): void {
    fetch('/api/articles.json').then((res) => {
      res.json().then(value => {
        this.data = value;
      })
    })
  }

  doDelete($event) {
    console.log('您刪除了一篇文章: ', $event);
  }

  changeKeyword(value: string) {
    this.keyword = value;
  }
  changeTitle(value: HeaderComponent) {
    value.title = this.keyword;
  }


}
