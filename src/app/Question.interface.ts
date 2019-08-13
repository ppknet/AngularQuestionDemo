export interface Question{
    id:number,
    quizid:number,
    text:string,
    answer1:string,
    answer2: String,
    answer3:string,
    answer4:string
}

export interface Quiz{
    id:number,
    title:string,
    desc:string
}