<template>
  <div class="wartch">
    <input type="text" v-model="message">
    <input type="button" @click="add" value="添加">
    <List :data-list="messageArr"></List>
  </div>
</template>
<script>
import List from '../components/list'
export default {
  data () {
    return {
      message: '',
      messageArr: []
    }
  },
  props: ['texts'],
  methods: {
    add () {
      if (this.message) {
        this.messageArr.push(this.message)
        this.message = ''
      }
    }
  },
  components: {
    List
  }
}
</script>
