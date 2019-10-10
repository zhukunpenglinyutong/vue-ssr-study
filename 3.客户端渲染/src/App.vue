<template>
  <div id="app">
    <h1>我的姓名是1：{{ name }}</h1>
    <h1>组件引用 <name /></h1>
  </div>
</template>

<script>
import Name from './components/Name.vue'
export default {
  data () {
    return {
      name: '朱昆鹏 '
    }
  },
  components: {
    Name
  }
}
</script>