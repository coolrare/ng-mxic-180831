import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo1';
  keyword = '123';

  data = [];

  ngOnInit(): void {
    fetch('/api/articles.json').then((res) => {
      res.json().then(value => {
        this.data = value;
      })
    })
  }

  changeKeyword(value: string) {
    this.keyword = value;
  }
  changeTitle(value: HeaderComponent) {
    value.title = this.keyword;
  }


}
