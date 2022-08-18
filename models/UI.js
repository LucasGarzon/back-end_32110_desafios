export class UI {
  showQuestion(text) {
    const questionTitle = document.getElementById("question")
    questionTitle.innerText = text
  }

  showChoices(choices, scores, callback) {
    const choicesContainer = document.getElementById("choices")
    choicesContainer.innerHTML = ""
    for (let i=0; i < choices.length; i++) {
      const button = document.createElement("button")
      button.innerText = choices[i]
      button.className = "button"
      button.addEventListener("click", () => callback(scores[i]))
      choicesContainer.append(button)
    }
  }

  showScore(score) {
    const quizEndHTML = `
    <h1>Resultado</h1>
    <h2>El puntaje asignado es: ${score}</h2>
    <h3>Donde 10 es el máximo y 0 es el mínimo</h3>
    `
    const element = document.getElementById("quiz")
    element.innerHTML = quizEndHTML
  }

  showProgress(currentIndex, total) {
    const element = document.getElementById("progress")
    element.innerHTML = `Question ${currentIndex} of ${total}`
  }

}