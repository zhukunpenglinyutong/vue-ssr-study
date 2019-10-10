<template>
  <div>
    <input type="text" v-model="name">
    {{ name }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '朱昆鹏'
    }
  }
}
</script>