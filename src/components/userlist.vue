<template>
  <div class="data">
<nav-bar :nav-list='navList'></nav-bar>
        <el-table
    :data="tableData"
    stripe
    style="width: 100%">
    <el-table-column
      prop="date"
      label="日期"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      align="center"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
        align="center"
      label="地址">
    </el-table-column>
  </el-table>
  </div>
</template>
<script>
import navBar from '../components/navbar'
export default {
  data () {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }],
      navList: [
        {name: '首页', link: '/'},
        {name: '用户管理', link: '/'},
        {name: '用户列表', link: ''}
      ]
    }
  },
  components: {
    navBar: navBar
  }
}
</script>
<style>
</style>
