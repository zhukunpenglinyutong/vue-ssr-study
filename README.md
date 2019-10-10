# Vue-SSR 原理实践Demo

## 目录介绍

### 1.node-serve

主要是对服务端渲染中 Node Serve 的实践，基本作用就是，有一个Vue实例，如何通过Bundle Renderer 使其输出 HTML字符串

<img src="https://itzkp-1253302184.cos.ap-beijing.myqcloud.com/notes/2.notes/5.MVVM%E6%A1%86%E6%9E%B6%EF%BC%88Vue%EF%BC%89/VueSSR/6.node-serve.png" />

---

### 2.服务端渲染

这里主要是对 Vue-SSR 中 服务端渲染部分的实践，作用就是通过 webpack，使我们写的Vue代码，能够输出一个 Vue实例，然后交给 Bundle Renderer 函数 输出 HTML字符串，通过Node将拼接好的HTML页面发送给客户端

<img src="https://itzkp-1253302184.cos.ap-beijing.myqcloud.com/notes/2.notes/5.MVVM%E6%A1%86%E6%9E%B6%EF%BC%88Vue%EF%BC%89/VueSSR/7.%E6%9C%8D%E5%8A%A1%E7%AB%AF%E6%B8%B2%E6%9F%93.png" />


---

### 3.客户端渲染

上述通过服务端渲染，可以输出一个完整页面，但是不具有Vue的特性，于是还需要客户端渲染

原理是：服务端渲染的页面会携带上特定的字段，例如 #app，并且会在最后 请求用于客户端渲染的 bunndle.client.js，这个会 将Vue实例 挂载到 #app 上，让客户端具有Vue的特性

<img src="https://cloud.githubusercontent.com/assets/499550/17607895/786a415a-5fee-11e6-9c11-45a2cfdf085c.png" />

