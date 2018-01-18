<template>
   <div class="warper">
       <ul>
           <li v-for='v in dataList'>{{v}}</li>
       </ul>
   </div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  props: ['dataList']
}
</script>
<style >
ul{
    width:500px;margin:auto;
    
}
ul li{
        list-style:none;border-bottom:1px solid #ccc;line-height:30px;text-align: left;
    }
</style>


