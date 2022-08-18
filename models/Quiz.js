export class Quiz {
  constructor(questions) {
    this.questions = questions
    this.score = 0
    this.questionIndex = 0
  }

  getCurrentQuestion() {
    return this.questions[this.questionIndex]
  }

  validateAndContinue(scores){ 
    this.score = this.score + scores
    this.questionIndex++
  }

  isEnded() {
    return this.questions.length === this.questionIndex
  }
}