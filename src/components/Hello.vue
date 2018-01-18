<template>
  <div class="hello">

    {{names}}
    <input type="text" v-model="names">
    <template v-if="names!=''">
      <h3>show</h3>
    </template>
    <template v-else>
      <h3>hide</h3>
    </template>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      names: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
