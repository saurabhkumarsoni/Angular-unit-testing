import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StrengthPipe } from './pipe/strength/strength.pipe';
import { PostsComponent } from './components/posts/posts.component';
import { HttpClientModule } from '@angular/common/http';
import { PostComponent } from './components/post/post.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { FormsModule } from '@angular/forms';
import { StudentComponent } from './components/student/student.component';
import { StudentService } from './services/Student/student.service';
@NgModule({
  declarations: [
    AppComponent,
    StrengthPipe,
    PostsComponent,
    PostComponent,
    PostDetailComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
