import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'demo1';
  keyword = '123';

  data = [];

  constructor(private dataSvc: DataService) {

  }

  ngOnInit(): void {
    this.dataSvc.getArticle().then(value => {
      this.data = value;
    })
  }

  doDelete($event) {
    this.dataSvc.deleteArticle($event);
  }

  changeKeyword(value: string) {
    this.keyword = value;
  }
  changeTitle(value: HeaderComponent) {
    value.title = this.keyword;
  }


}
