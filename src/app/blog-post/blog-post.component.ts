import { Component } from '@angular/core';

interface IBlogPost{
  title:string;
  body:string;
}

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent{


  posts: IBlogPost[] = [
    {title: 'Ahoj', body: 'mrkev'},
    {title: 'Ahoj 2', body: 'mrkev 2'}
  ]

  editedTitle = '';
  editedBody = '';

  editedPost: IBlogPost;

  save(): void{
    this.editedPost.title = this.editedTitle;
    this.editedPost.body = this.editedBody;
  }
}
