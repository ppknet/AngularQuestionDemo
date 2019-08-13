import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment.prod';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class APIService {

  private selectedQuestionSub = new Subject<any>();
  selQuestion = this.selectedQuestionSub.asObservable();

  private selectedQuizSub = new Subject<any>();
  selQuiz = this.selectedQuizSub.asObservable();

  constructor(private httpClient: HttpClient) {
  }

  PostQuestion(question) {

    this.httpClient.post(environment.apiUrl + "Question", question)
      .subscribe(rx => { console.log(rx) })
  }

  GetQuestions() {
    return this.httpClient.get(environment.apiUrl + "Question");

  }
  GetQuestionsByQuizId(quizid) {
    return this.httpClient.get(`${environment.apiUrl}Question/${quizid}`);

  }
  SelectQuestion(question) {
    this.selectedQuestionSub.next(question)
  }

  PutQuestion(question) {
    this.httpClient.put(`${environment.apiUrl}Question/${question.id}`, question)
      .subscribe(rx => { console.log(rx) })
  }
  GetQuiz() {
    return this.httpClient.get(environment.apiUrl + "Quiz");
  }

  SelectQuiz(quiz) {
    this.selectedQuizSub.next(quiz)
  }

  PutQuiz(quiz) {
    this.httpClient.put(`${environment.apiUrl}Quiz/${quiz.id}`, quiz)
      .subscribe(rx => { console.log(rx) })
  }
  
  PostQuiz(quiz) {
    //console.log(quiz);
    this.httpClient.post(environment.apiUrl + "Quiz", quiz)
      .subscribe(rx => { console.log(rx) })
  }
}
