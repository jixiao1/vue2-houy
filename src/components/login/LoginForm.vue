<template>
     <el-form ref="formRef" :model="loginForm" :rules="loginRules" class="forms">
        <el-form-item prop="username">
          <el-input prefix-icon="iconfont icon-user"
          v-model="loginForm.username"
           type="text"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input prefix-icon="iconfont icon-3702mima"
          v-model="loginForm.password"
          type="password"></el-input>
        </el-form-item>
         <el-form-item class="btns">
           <el-button type="primary" @click="login">登录</el-button>
          <el-button type="info" @click="resetClickHandler">重置</el-button>
        </el-form-item>
      </el-form>
</template>

<script>
import { Login } from '../../utils/http.js'
// import axios from 'axios'
export default {
  data () {
    return {
      // 表单对象
      loginForm: {
        username: 'admin',
        password: '123456'
      },
      loginRules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    resetClickHandler () {
      // 重置表单
      this.$refs.formRef.resetFields()
    },
    login () {
      //  验证表单规则
      this.$refs.formRef.validate(async callback => {
        // console.log(callback)
        if (!callback) {
          return false
        }
        const { data: res } = await Login(this.loginForm)
        // console.log(res)
        // let { data } = res
        console.log(res.data)
        console.log(res.meta)
        if (res.meta.status !== 200) {
          // return console.log('登录失败')
          return this.$message.error('登录失败')
        } else {
          // return console.log('登录成功')
          this.$message.success('登录成功')
          // 登录成功之后将token 保存到sessionStroage中
          // const  token = window.sessionStorage.setItem('token', res.data.token)
          window.sessionStorage.setItem('token', res.data.token)
          this.$router.push('/home')
        }
      })
    }
  }
}
</script>

<style lang='less' scoped>
.forms {
      width: 100%;
      padding: 20px;
      box-sizing: border-box;
      position: absolute;
      bottom: 0;
      .btns {
      display: flex;
      justify-content: flex-end;
    }
    }
</style>
