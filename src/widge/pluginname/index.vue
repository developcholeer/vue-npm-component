<template>
  <div>
    <img src="./assets/logo.png">
    <p>{{title}}</p>
    <div v-for="item in list" v-bind:key="item.id">
      <p>{{item.text}}</p>
      <button @click="click(item)">点击</button>
    </div>
   
  </div>
</template>

<script>
/**
 * @author 作者
 * @version 版本
 * @description 功能描述
 * @update 更新记录
 * @memo 使用说明
 * [注：其中TODO为组件需要实现的逻辑]
 */
// 引用文件
import './js/index'
export default {
  name: 'dcv-pluginname',
  // TODO 设置动态属性
  data() {
    return {test: ''}
  },
  // TODO 设置用于接收父组件传来的数据
  props:{
    title: String,
    btnClick: Function,
    list: Array
  },
  methods:{
    // TODO点击事件
    click(item) {
      // 判断btnClick是否有值是否是函数
      if(this.btnClick && typeof this.btnClick === 'function') {
        this.btnClick(item)
      }
    }
  }
}
</script>

<style lang="scss">
@import './style/index.scss';

</style>
