import { Component, OnInit,OnChanges, Input, SimpleChanges } from '@angular/core';
import { APIService } from '../Service/api.service'
import {Quiz  } from "../Question.interface";
@Component({
  selector: 'quizzes',
  templateUrl: './quizzes.component.html'
})
export class QuizzesComponent implements OnInit,OnChanges {

@Input()
quizzes:Quiz[]=null;
constructor(protected service: APIService) {
}

  ngOnInit() {
    this.service.GetQuiz().subscribe(res=>{this.quizzes=res});
  }
  ngOnChanges(changes:SimpleChanges){

    if (changes['quizzes']) {
    //  this.quizzes=quizList;
  }
    
  }

}
