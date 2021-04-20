import { Component } from '@angular/core';

export interface Post{
  title: string
  text: string
  id?: number 
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // title = 'Angular-basics';
  posts: Post[] = [
    {title: 'first title', text: 'first text', id: 1},
    {title: 'second title', text: 'second text', id: 2}

  ]
  updatePosts(post: Post) {
    this.posts.unshift(post)
    // console.log('Post', post)
  }
}
