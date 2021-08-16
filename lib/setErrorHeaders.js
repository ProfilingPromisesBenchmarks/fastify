'use strict'

function setErrorHeaders (error, reply) {
  console.log('setErrorHeaders', error)
  const res = reply.raw
  let statusCode = res.statusCode
  statusCode = (statusCode >= 400) ? statusCode : 500
  // treat undefined and null as same
  if (error != null) {
    if (error.headers !== undefined) {
      reply.headers(error.headers)
    }
    if (error.status >= 400) {
      statusCode = error.status
    } else if (error.statusCode >= 400) {
      statusCode = error.statusCode
    }
  }
  res.statusCode = statusCode
}

module.exports = setErrorHeaders
