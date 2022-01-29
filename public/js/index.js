const questionForm = document.querySelector('.question__form')
const titleInput = document.querySelector('#title')
const descriptionInput = document.querySelector('#description')
const questionContainer = document.querySelector('.question__container')
const addQuestionBtn = document.querySelector('.add__question')
const submitQuestion = document.querySelector('.submit__question')
const popup = document.querySelector('.popup')

// App functions

// Create questions
// Read them - when you click them they show up in a thread
// Update them - be able to edit them
// Delete them - self explanatory
const data = []

const uniqueID = () => {
  return Math.floor(Math.random() * Date.now())
}

const displayPopup = () => {
  popup.classList.add('pop__show')
}

const appendQuestion = (e) => {
  e.preventDefault()
  const questionTitle = titleInput.value
  const questionDescription = descriptionInput.value

  const dataObj = {
    title: questionTitle,
    description: questionDescription,
    id: uniqueID(),
  }
 
  data.push(dataObj)
  renderQuestions(data)

  titleInput.value = ''
  descriptionInput.value = ''

  popup.classList.remove('pop__show')
}
const getQuestion = (e) => {
  if(!e.target.classList.contains('question__title')) {
    return;
  }
  const questionID = Number(e.target.dataset.id)

  const questionQuery = data.find((question) => question.id === questionID)
  
  return questionQuery
}

const displayThread = (e) => {
  const threadQuestion = getQuestion(e);

  console.log(threadQuestion)

  const div = document.createElement('div')
  const title = document.createElement('h2')
  const body = document.createElement('p')

  title.textContent = threadQuestion.title
  body.textContent = threadQuestion.description

  div.appendChild(title)
  div.appendChild(body)

  console.log(div)
  questionContainer.innerHTML = div;
}

const renderQuestions = (data) => {
  questionContainer.innerHTML = ''

  data.forEach((question) => {
    const div = document.createElement('div')
    const h3 = document.createElement('h3')
    const para = document.createElement('p')

    div.classList.add('question')
    h3.classList.add('question__title')
    h3.dataset.id = question.id

    h3.textContent = question.title
    para.textContent = question.description

    div.appendChild(h3)
    div.appendChild(para)

    questionContainer.appendChild(div)
  })
}

const init = () => {
  renderQuestions(data)
}

window.addEventListener('DOMContentLoaded', init)
questionContainer.addEventListener('click', displayThread)
addQuestionBtn.addEventListener('click', displayPopup)
submitQuestion.addEventListener('click', appendQuestion)

