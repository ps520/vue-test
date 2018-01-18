<template>
  <div class="apps">
     <ul class="channel">
         <li>
             <router-link to="">
                 <img src="../assets/logo.png" alt="">
                 <div class="title">第一个栏目</div>
             </router-link>
         </li>
          <li>
             <router-link to="">
                 <img src="../assets/logo.png" alt="">
                 <div class="title">第一个栏目</div>
             </router-link>
         </li>
          <li>
             <router-link to="">
                 <img src="../assets/logo.png" alt="">
                 <div class="title">第一个栏目</div>
             </router-link>
         </li>
     </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  }
}
</script>
<style>
.channel{
    width:100%;padding:0;margin:0;font-size:0;
}
.channel li{
    width:33.33%;display: inline-block;list-style: none;font-size:13px;
    padding-right:10px;box-sizing: border-box;-webkit-box-sizing: border-box;
}
.channel li img{
  width:100%;height: 150px;
}
.channel li .title{
    line-height: 35px;
}
</style>

