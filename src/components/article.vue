<template>
    <div id="app">
      <ul class="list">
          <li v-for="a in a">{{a.title}}</li>
      </ul>
    </div>
</template>
<script>
var arrs = [{'title': 'javascript'}, {'title': 'react-dev'}, {'title': 'vue-cli'}]
export default {
  data () {
    return {
      a: arrs
    }
  },
  computed: {

  }
}
</script>
<style lang="scss" scoped>
.list{
    padding:10px;margin:0;display: -webkit-flex;
    & li{
        border:1px solid #ccc;border-radius:5px;height:60px;
        margin-bottom: 15px;flex: 1;-webkit-flex:1;margin-right:15px;
        list-style: none;
    }
}
</style>
