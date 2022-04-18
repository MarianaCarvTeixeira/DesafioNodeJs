const express = require('express')
const path = require('path')
const http = require('http')
const router = require('./app/routes')
 
class App {
  constructor () {
    this.express = express()
    this.http = http.Server(this.express)
    this.middlewares()
    this.router()
  }
 
  router () {
    this.express.use(router)
  }
 
  middlewares () {
    this.express.use(express.json())
    this.express.use(express.urlencoded())
    this.express.use(
      '/files',
      express.static(path.resolve(__dirname, '..', 'tmp', 'uploads'))
    )
  }
}
module.exports = new App().http