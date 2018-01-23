<template>
  <div class="nav">
     <ul class="nav-main">
         <li v-for="a in navList"><a :href="a.link" v-if="a.link">{{a.name}}</a><template v-else>{{a.name}}</template></li>
     </ul> 
  </div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  props: {
    navList: {
      type: Array
    }
  }
}
</script>
<style lang="scss">
.nav{
border-bottom:1px solid #f0f0f0;padding:5px 10px;
}
.nav-main{
    margin:0;padding:0;display: block;text-align:left;
    & li{
      display: inline-block;list-style: none;padding-right:15px;font-size:14px;color:#555;position: relative;border-bottom:0;margin-right:5px;
      &:before{
           content:">";font-size: 16px;position: absolute;right:0;color: #666;
      }
      & a{
          color:dodgerblue;text-decoration: none;
      }
    }
    & li:last-child{
         &:before{
           content:"";font-size: 16px;
      }
    }
}
</style>
