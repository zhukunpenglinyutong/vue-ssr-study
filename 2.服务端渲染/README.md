## 服务端渲染 介绍

### src 目录介绍

这个就是一个Vue的基础结构（Vue-Cli也生成的这种），最后到处的是一个创构建 Vue实例的方法（createApp）

---

### webpack 目录介绍

为什么要用webpack呢，因为我们 src 里面写的文件都是 .vue 格式的，需要转为 .js 格式，否则不认识

---

### entry 目录介绍

创建 和 返回 Vue实例，还有就是 服务器端路由匹配（后面说）

---

### dist 目录介绍

build.server.js 这个就是打包之后的 Vue实例（componets，router, store... 都可以使用）（Server Bundle）

---

### serve.js 介绍

```js
const express = require('express')
const serverRenderer = require('vue-server-renderer')
const createApp = require('./dist/build.server.js')['default']
const server = express()

// 页面模板
let renderer = serverRenderer.createRenderer({
  template: require('fs').readFileSync('./template.html', 'utf-8')
})

// 
server.get("*", (req, res) => {
  let app = createApp() // Vue实例
  // 将 Vue实例 转为 字符串，并根据HTML模板拼接成一个页面，返回给前端
  renderer.renderToString(app, (err, html) => {
    res.end(html)
  })
})

server.listen(8000, () => {
  console.log('服务器端运行地址：http://localhost:8000/')
})
```

---

### 客户端 & 服务端

> 演示 v-model 的情况

- 服务器端就是返回给你一个HTML页面
- 客户端是将返回的HTML页面具有Vue特性

---

### 总结

- 总结：这里介绍的主要是，.vue --> 通过webpack打包成 Vue实例（entry/entry-server.js创建实例）--> serve拿到实例，转为字符串，拼接成页面，返回给客户端