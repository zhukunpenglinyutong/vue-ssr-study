<template>
  <div id="app">
    <div>我的姓名是1：{{ name }}</div>
    <name />
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