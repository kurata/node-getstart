// index.js

// require('./app/index')

// const _ = require('lodash')
// _.assign({ 'a':1 } , {'b':2}, {'c':3});

const http = require('http')
const port = 3000

const requestHandler = (request , response) => {
	console.log(request.url)
	response.end('Hello Node.js Server!')
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
	if (err) {
		return console.log('something bad happened', err)
	}

	console.log(`server is listening on ${port}`)
})
