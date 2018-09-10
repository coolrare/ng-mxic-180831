import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = 'The Will Will Web';
  subtitle = '記載著 <strong>Will</strong> 在網路世界的學習心得與技術分享';
  sitelogo = '/assets/images/logo.png';

  counter = 0;

  constructor() { }

  ngOnInit() {
  }

  incCounter($event: MouseEvent) {
    if ($event.ctrlKey) this.counter--;
    if (!$event.ctrlKey) this.counter++;
    console.log($event);
  }

  clickImg($event: MouseEvent) {
    if ($event.ctrlKey) {
      this.title = 'Clicked';
    }
  }


}
