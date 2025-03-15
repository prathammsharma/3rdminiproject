import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AngularFireModule } from '@angular/fire/compat';
import { RouterModule } from '@angular/router';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { environment } from '../environments/environment';

import { AppComponent } from './app.component';

import { CourseComponent } from './components/course/course.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { ProgressComponent } from './components/progress/progress.component';

import { CourseService } from './services/course.service';

@NgModule({
  declarations: [
    AppComponent, 
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    CommonModule,
    AngularFireModule.initializeApp(environment.firebaseConfig), 
    AngularFireAuthModule, 
    AngularFirestoreModule, 

    CourseComponent, 
    QuizComponent,
    ProgressComponent,
  ],
  providers: [CourseService], 
  bootstrap: [AppComponent]
})
export class AppModule {}
