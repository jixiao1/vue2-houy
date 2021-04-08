<template>
  <div class="login_container">
    <div class="content">
      <div class="avas-bvox">
        <img src="../assets/logo.png" alt="">
      </div>
      <LoginForm/>
    </div>
  </div>
</template>

<script>
import LoginForm from '../components/login/LoginForm.vue'
export default {
  components: {
    LoginForm
  }
}
</script>

<style lang="less" scoped>
.login_container {
  height: 100%;
  background-color: #2b4b6b;
  .content {
    width: 450px;
    height: 300px;
    border-radius: 3px;
    background-color: #ffffff;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    .avas-bvox {
      width: 130px;
      height: 130px;
      border-radius: 50%;
      border: 1px solid #eeeeee;
      padding: 10px;
      position: absolute;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: #ffffff;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: #eeeeee;
      }
    }
  }
}
</style>
