const express = require('express')
const path = require('path');

let initial_path = path.join(__dirname, 'public')
const app = express()

app.use(express.static(initial_path))

app.get('/', (req, res) => {
  res.sendFile(path.join(initial_path, 'index.html'))
})

app.get('/blog', (req, res) => {
  res.sendFile(path.join(initial_path, 'blog.html'))
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log('Server started on port 3001')
})