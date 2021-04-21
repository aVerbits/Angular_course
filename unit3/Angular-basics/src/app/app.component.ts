import { Component, OnInit } from '@angular/core';

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
export class AppComponent implements OnInit{
  // title = 'Angular-basics';
  posts: Post[] = [
    {title: 'first title', text: 'first text', id: 1},
    {title: 'second title', text: 'second text', id: 2} 
]

ngOnInit(): void {
  setTimeout(() => {
console.log('Timeout')
this.posts[0] = {
  title: 'changed',
  text: 'sfdsf',
  id: 33
}
  }, 5000)
}

  updatePosts(post: Post) {
    this.posts.unshift(post)
    // console.log('Post', post)
  }

  removePost(id:number) {
console.log('Id to remove', id)
this.posts = this.posts.filter(p=> p.id !== id)
  }
}
