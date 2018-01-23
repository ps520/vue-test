<template>
  <div class="heads">
      <!-- <div class="user-center">
          <span class="name">{{name}}</span>
          <span><button class="link-btn" @click="loginOut">退出</button></span>
      </div>
     <ul class="nav">
         <li @click='cur=1' :class="{on:cur==1}">
             <router-link to="">首页</router-link>
         </li>
         <li @click='cur=2' :class="{on:cur==2}">
             <router-link to="/channel">栏目{{num}}</router-link>
         </li>
         <li @click='cur=3' :class="{on:cur==3}">
             <router-link to="">个人中心{{totals}}</router-link>
         </li>
         <li @click='cur=4' :class="{on:cur==4}">
             <router-link to="">充值</router-link>
         </li>
          <li @click='cur=5' :class="{on:cur==5}">
             <router-link to="/login">登录</router-link>
         </li>
     </ul>
      <router-link to="/test">点击</router-link>
      <router-link to="/list">list</router-link>
      
      <button @click='add'>add</button>
     <router-view></router-view> -->
<el-container>
  <el-header>
      <div class="head">
          <div class="logo">
              AdminManage
          </div>
          <div class="login-info">
              {{name}}
              <button class="link-btn" @click="loginOut">退出</button>
          </div>
      </div>
  </el-header>
  <el-container>
    <el-aside width="200px" style="overflow:hidden">
        <ul class="left-nav">
            <li v-for='(v,i) in navList'>
                    <div class="nav-h" @click="listShow=i"><i :class="[listShow==i?'el-icon-minus':'el-icon-plus']"></i><span>{{v.channelName}}</span></div>
                    <ul v-show="listShow==i">
                        <li v-for="t in v.list"> <router-link :to="t.link">{{t.name}}</router-link></li>
                    </ul>
            </li>
        </ul>
    </el-aside>
    <el-main><router-view></router-view></el-main>
  </el-container>
</el-container>
  </div>
</template>
<script>
export default {
  data () {
    return {
      dd: '1',
      cur: '',
      name: '',
      listShow: 0,
      navList: [{channelName: '栏目管理', list: [{name: '栏目', link: '/channel'}]}, {channelName: '文章管理', list: [{name: 'test', link: '/test'}]}, {channelName: '用户管理', list: [{name: '列表', link: '/list'}, {name: '用户列表', link: '/userlist'}]}]
    }
  },
  created () {
    this.$store.state.nums = 3
  },
  computed: {
    totals () { return this.$store.state.count },
    num () { return this.$store.state.nums }
  },
  mounted: function () {
    let userData = JSON.parse(sessionStorage.getItem('userInfo'))
    this.name = userData.name
  },
  methods: {
    add () {
      this.$store.commit('addcount')
    },
    loginOut () {
      sessionStorage.removeItem('userInfo')
      location.reload()
    }
  }
}
</script>
<style scoped >
.logo{
    color:#fff;font-size: 20px;text-align:left;line-height: 60px;display: inline-block
}
.nav{
    margin:0;padding:0;display: -webkit-box;display: -webkit-flex;
    width: 100%;
}
.nav li{
    list-style: none;flex: 1;-webkit-box-flex: 1;-webkit-flex:1;background:green;height: 35px;line-height: 35px;text-align: center;
    border-right:1px solid #056c05;
}
.nav li.on{
    background: #056c05
}
.nav li a{
   color:#fff;text-decoration: none;font-size: 12px;
}
.login-info{
    display: inline-block;float:right;position:relative;top:15px;color:rgb(224, 11, 11);
}
.user-center{
    text-align: right;
}
.link-btn{
    background:none;border:0;color:#f8f9fa
}
.heads{
    background: #555;
}
.el-header{
    border-bottom:1px solid rgb(95, 94, 94);text-align: left
}
.el-aside{
    background: rgb(12, 12, 12);position: relative;height: 100%;
}
.el-main{
    background: #fff;padding:10px 20px;
}
.left-nav{
    width:200px;margin:0;padding:0;font-size:0;
}
.left-nav li{
      line-height:35px;list-style: none;font-size: 14px;font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif
      ;border-bottom:1px solid #3c3d3e;
    }
.left-nav li .nav-h{
        line-height:35px;padding-left: 15px;background: #303133;color:#fff;cursor: pointer
}
.left-nav li .nav-h:hover{
    background: #1078f0de;
}
.left-nav li .nav-h i{
    float:left; line-height:35px;
}
.left-nav li .nav-h span{
   display: block;margin-left: 25px;text-align: left;
}
.left-nav li  ul{
    margin: 0;padding: 0;
}
.left-nav li  ul li{
    padding-left: 10px;font-size:12px;text-align: left;padding-left: 35px;background: #fff;
}
.left-nav li  ul li:last-child{
    border-bottom:0;
}
.left-nav li  ul li a{
    color:#2d8cf8;text-decoration: none;display: block;
}
</style>
