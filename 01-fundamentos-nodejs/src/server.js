// OLD
// CommonJS => using require
//const http = require('http')

// NEW
// To use import/export we need to config package.json "type": "module",
import http from 'node:http'

const server = http.createServer((request, response) => { 
    return response.end('Hello Ignite')
})

server.listen(3333)