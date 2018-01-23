<template>
<div id="main" class="login-main">
<el-row  class="mg-b">
        <el-col :span="24">
             <el-input v-model="account" placeholder="帐号"></el-input>

        </el-col>
     
    </el-row>
    <el-row  class="mg-b">
         <el-col :span="24">
            <el-input  type="password" v-model="passowrd" placeholder="登录密码"></el-input>

        </el-col>
    </el-row>
    <el-row  class="mg-b">
  
         <el-col :span="24">
             <el-button type="primary" @click="login">登录</el-button>
        </el-col>
    </el-row>
</div>

</template>
<script>
export default {
  data () {
    return {
      account: '',
      passowrd: ''
    }
  },
  methods: {
    login () {
      if (this.account !== 'admin' && this.passowrd !== 'admin') {
        this.$message({
          showClose: true,
          message: '用户名或密码不正确！',
          type: 'error'
        })
      } else {
        let userData = JSON.stringify({ account: 'admin', name: '管理员' })
        sessionStorage.setItem('userInfo', userData)
        this.$router.push('/')
      }
    }
  }
}
</script>
<style>
.login-main {
  padding: 10px;
  max-width: 500px;
  position: relative;
  margin:10% auto;
}
.mg-b {
  margin-bottom: 15px;
}
</style>
