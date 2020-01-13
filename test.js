const app = require('express')()

const db = {
  users: [
    { id: 0, firstname: 'Jean', lastname: 'Bond' },
    { id: 1, firstname: 'Emilie', lastname: 'Lol' },
  ]
}

class HttpError extends Error {
  toJSON() {
    const stack = process.env.NODE_ENV === 'development' ? this.stack : undefined
    return {
      type: this.type || 'SERVER_ERROR',
      message: this.message || 'Server Error',
      stack
    }
  }
}

class NotFoundError extends HttpError {
  constructor(message = 'Not found', type = 'NOT_FOUND') {
    super(message)
    this.status = 404
    this.type = type
  }
}

class BadRequestError extends HttpError {
  constructor(message = 'Bad request', type = 'BAD_REQUEST') {
    super(message)
    this.status = 400
    this.type = type
  }
}

class ServerError extends HttpError {
  constructor(message = 'Server Error', type = 'SERVER_ERROR') {
    super(message)
    this.status = 500
    this.type = type
  }
}

app.get('/', (req, res, next) => {
  res.json({ data: {  message: 'hello world' } })
})

app.get('/users', (req, res, next) => {
  res.json({ data: db.users })
})

app.get('/users/:id', (req, res, next) => {
  const id = +req.params.id
  if (id != req.params.id) throw new BadRequestError('Id should be a number')

  const data = db.users.find(user => user.id === id)
  if (!data) throw new NotFoundError('User not found')
  res.json({ data })
})

app.use((req, res, next) => {
  throw new NotFoundError()
})

app.use((error, req, res, next) => {  
  if (!(error instanceof HttpError)) {
    console.error(error)
    error = new ServerError()
  }

  return res.status(error.status || 500).json({ error })
})

app.listen(8080)