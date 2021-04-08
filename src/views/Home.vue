<template>
  <div>home组件
   <el-button type="info" @click="toggleLogin">退出</el-button>
  </div>
</template>

<script>
export default {
  methods: {
    toggleLogin () {
      // 清空token 并且跳到登录页面
      window.sessionStorage.clear()
      this.$router.push('/login')
    }
  }
}
</script>

<style lang='less' scoped>

</style>
