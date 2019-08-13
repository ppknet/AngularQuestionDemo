import { Component, OnInit } from '@angular/core';
import { APIService } from '../Service/api.service';
import {Quiz  } from "../Question.interface";
@Component({
  selector: 'quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.less']
})
export class QuizComponent implements OnInit {
  Quiz :Quiz=null
  constructor(private service: APIService) {
  }

  ngOnInit() {
   this.Quiz={}
    this.service.selQuiz.subscribe(quiz=>this.Quiz=quiz);
  }
  PostQuiz() {
    console.log(this.Quiz);
    this.service.PostQuiz(this.Quiz);
  }
  EditQuiz() {
    this.service.PutQuiz(this.Quiz);
  }

  
}
