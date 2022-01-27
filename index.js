const questionForm = document.querySelector('.question__form')
const titleInput = document.querySelector('#title')
const descriptionInput = document.querySelector('#description')
const questionContainer = document.querySelector('.question__container')
const addQuestionBtn = document.querySelector('.add__question')
const submitQuestion = document.querySelector('.submit__question')
const popup = document.querySelector('.popup')


const data = [{
  title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quam asperiores culpa quisquam magni atque facilis ullam dicta dignissimos pariatur.',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quam asperiores culpa quisquam magni atque facilis ullam dicta dignissimos pariatur. gdfgdgfdfgdfgdfgdfgdfgdfgdf',
  id: 1,
}]

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

const renderQuestions = (data) => {

  data.forEach((question) => {
    const div = document.createElement('div')
    const h3 = document.createElement('h3')
    const para = document.createElement('p')

    div.classList.add('question')
    div.dataset.id = question.id

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
questionContainer.addEventListener('click', getQuestion)
addQuestionBtn.addEventListener('click', displayPopup)
submitQuestion.addEventListener('click', appendQuestion)

