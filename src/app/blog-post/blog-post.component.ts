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
    {title: 'klůmadlkmdawlkm§§kml', body: 'bruh'},
    {title: 'mklůawdlkmklmklghnuoeú', body: 'bruhxd'}
  ]

  editedTitle = '';
  editedBody = '';

  editedPost: IBlogPost;

  save(): void{
    this.editedPost.title = this.editedTitle;
    this.editedPost.body = this.editedBody;
  }
}
