import { Component, OnInit } from '@angular/core';
import { APIService } from '../Service/api.service'
import{ActivatedRoute} from '@angular/router'
import {Question  } from "../Question.interface";
@Component({
  selector: 'questions',
  templateUrl: './questions.component.html'
  
})
export class QuestionsComponent implements OnInit {

  constructor(private service:APIService,private route:ActivatedRoute) { 
  }
  public questions:Question[] = []
  quizid:number;

  ngOnInit() {
    this.quizid=Number(this.route.snapshot.paramMap.get('quizid'));
      //  console.log(this.quizid)
    this.service.GetQuestionsByQuizId(this.quizid).subscribe(res=>{this.questions=res});
  }
  
}
