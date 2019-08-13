import { Component, OnInit } from '@angular/core'
import { APIService } from '../Service/api.service';
import{ActivatedRoute} from '@angular/router'
import {Question  } from "../Question.interface";
@Component({
    selector: 'question',
    templateUrl: 'question.component.html'
    
})

export class questionComponent implements OnInit {
    constructor(private service:APIService,private route:ActivatedRoute) { 
    }
    quizid:number
    public Question:Question={}
    
    ngOnInit() { 
        this.quizid= Number(this.route.snapshot.paramMap.get('quizid'));
       // console.log(this.quizid)
        this.service.selQuestion.subscribe(question=>this.Question=question);
    }

   

    PostQuestion() {
        this.Question.quizId=this.quizid;
        this.service.PostQuestion(this.Question);
    }
    EditQuestion() {
        this.service.PutQuestion(this.Question);
    }
}