import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  info: Info = new Info();
  comment: Comment = new Comment();
  comments: Array<Comment> = [];

  constructor() { }

  ngOnInit(): void {
    this.info.email = 'test@test.com';
    this.info.name = 'John Smith';
    this.info.tel = '01010101';
  }

  addComment(): void {
    if (this.comment.message) {
      this.comment.date = new Date();
      this.comments.push({ ...this.comment });
      this.comment.message = '';
    }
  }

}

export class Info {
  name = '';
  tel = '';
  email = '';
}

export class Comment {
  message = '';
  date: Date;
}
