import { Component } from '@angular/core';

@Component({
  selector: 'app-Feed',
  templateUrl: 'Feed.page.html',
  styleUrls: ['Feed.page.scss']
})
export class FeedPage {

  constructor() {}

  today = Date.now();
}
