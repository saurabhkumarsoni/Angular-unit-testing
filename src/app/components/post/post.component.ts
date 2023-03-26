import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Post } from 'src/app/models/Post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() post!: Post;
  @Output() delete = new EventEmitter<Post>()
  constructor() { }

  ngOnInit(): void {
  } 


  onDeletePost(event: Event){
    event.stopPropagation();
    this.delete.emit(this.post);
  }

}
