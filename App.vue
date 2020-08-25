<template>
  <div>
      <!-- 使用组件 -->
      <Pluginname :title="title" :btnClick="btnClick" :list="list"></Pluginname>
  </div>
</template>

<script>
// import Pluginname from './src/widge/index.js';
/**
 * @author 作者
 * @version 版本
 * @description 组件使用和测试
 * [注：其中PluginName需要替换为真实组件名称,路径中的pluginname需要替换为真实的组件名称]
 */
// TODO 引用组件
import Pluginname from 'dcv-pluginname';
export default {
  name: 'App',
  // 注册组件
    components: { Pluginname },
    data() {
        // TODO 初始化数据
        return {
            title: '组件的标题',
            list: [{text:'第一行',id: 0},{text:'第二行',id: 1},{text:'第三行',id: 2},{text:'第四行',id: 3}],
            // TODO 传入一个点击事件的回调
            btnClick: function(item) {
                console.log('组件触发了点击事件,点击了：',item.text)
            }
        }
    }
}
</script>
