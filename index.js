const questionForm = document.querySelector('.question__form')
const titleInput = document.querySelector('#title')
const descriptionInput = document.querySelector('#description')
const questionContainer = document.querySelector('.question__container')
const addQuestionBtn = document.querySelector('.add__question')
const submitQuestion = document.querySelector('.submit__question')
const popup = document.querySelector('.popup')


const displayPopup = () => {
  popup.classList.add('pop__show')
}

const appendQuestion = (e) => {
  e.preventDefault()
  const title = titleInput.value
  const description = descriptionInput.value
  renderQuestion(title, description);

  titleInput.value = ''
  descriptionInput.value = ''

  popup.classList.remove('pop__show')
  
}

const renderQuestion = (title, text) => {
  const div = document.createElement('div');
  const h3 = document.createElement('h3')
  const para = document.createElement('p')
  
  div.classList.add('question')

  h3.textContent = title
  para.textContent = text

  div.appendChild(h3)
  div.appendChild(para)
  questionContainer.appendChild(div)
}

addQuestionBtn.addEventListener('click', displayPopup)
submitQuestion.addEventListener('click', appendQuestion)

