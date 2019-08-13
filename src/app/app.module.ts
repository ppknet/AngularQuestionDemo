import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core'
import { FormsModule } from "@angular/forms"
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { questionComponent } from "./question/question.component"
import {
  MatInputModule,
  MatCardModule,
  MatListModule,
  MatToolbarModule
} from '@angular/material'
import { APIService } from './Service/api.service';
import { QuestionsComponent } from './question/questions.component';
import { RouterModule } from "@angular/router";
import { HomeComponent } from './home/home.component';
import{NavComponent} from './Nav.component';
import { QuizComponent } from './quiz/quiz.component';
import { QuizzesComponent } from './quiz/quizzes.component'

const routes = [
  { path: '', component: HomeComponent },
  { path: 'question', component: questionComponent },
  { path: 'question/:quizid', component: questionComponent },
  { path: 'questions', component: QuestionsComponent },
  { path: 'questions/:quizid', component: QuestionsComponent },
  {path:'quiz',component:QuizComponent},
  {path:'quizzes',component:QuizzesComponent}
]
@NgModule({
  declarations: [
    AppComponent, 
    questionComponent, 
    QuestionsComponent, HomeComponent,NavComponent,
     QuizComponent, 
     QuizzesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    RouterModule.forRoot(routes),
    

    FormsModule,
    AppRoutingModule,
    MatInputModule,
    MatCardModule,
    MatListModule,
    BrowserAnimationsModule,
    MatToolbarModule
  ],
  providers: [APIService],
  bootstrap: [AppComponent],
  exports: [QuestionsComponent, QuizComponent, QuizzesComponent]
})
export class AppModule { }
