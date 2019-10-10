const http = require('http')
const Vue = require('vue')
const serverRenderer = require('vue-server-renderer')

let app = new Vue({
  template: `
  <h1>my name is {{ name }}</h1>
  `,
  data: {
    name: 'zkp'
  }
})

let renderer = serverRenderer.createRenderer() // 创建一个针对Vue模板的构造器（可以把Vue的实例转为字符串）
renderer.renderToString(app, (err, html) => {
  console.log(html)
})

// 1️⃣ 启动服务，返回片段
// let serve = http.createServer((req, res) => {
//   renderer.renderToString(app, (err, html) => {
//     res.end(html)
//   })
// })
// serve.listen(8000)

// 2️⃣ 返回具体的一个html页面（不够规范）
// let serve = http.createServer((req, res) => {
//   renderer.renderToString(app, (err, html) => {
//     res.end(`
//     <!DOCTYPE html>
//     <html lang="en">
//     <head>
//       <meta charset="UTF-8">
//       <meta name="viewport" content="width=device-width, initial-scale=1.0">
//       <meta http-equiv="X-UA-Compatible" content="ie=edge">
//       <title>模板</title>
//     </head>
//     <body>
//       ${html}
//     </body>
//     </html>
//     `)
//   })
// })
// serve.listen(8000)

// 3️⃣ 创建rend构造器的时候 可以指定一个文件作为模板（<!--vue-ssr-outlet--> 放到模板的这个里面）
// let renderer = serverRenderer.createRenderer({
//   template: require('fs').readFileSync('./template.html', 'utf-8')
// })
// let serve = http.createServer((req, res) => {
//   renderer.renderToString(app, (err, html) => {
//     res.end(html)
//   })
// })
// serve.listen(8000)

// 备注：

// 总结：vue-ssr-renderer 就是把我们的Vue实例变为字符串