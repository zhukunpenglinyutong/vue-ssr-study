const express = require('express')
const serverRenderer = require('vue-server-renderer')
const createApp = require('./dist/build.server.js')['default']
const server = express()

let renderer = serverRenderer.createRenderer({
  template: require('fs').readFileSync('./template.html', 'utf-8')
})

server.get("*", (req, res) => {
  let app = createApp()
  renderer.renderToString(app, (err, html) => {
    res.end(html)
  })
})

server.listen(8000, () => {
  console.log('服务器端运行地址：http://localhost:8000/')
})