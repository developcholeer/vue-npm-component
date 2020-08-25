# 工程介绍
基于vue组件模板

## 1、模板工程使用

### 组件功能要求：

    1、支持主题皮肤；

    2、组件基于vue开发(https://cn.vuejs.org/)

    3、样式文件放在style中，统一使用scss作为样式文件，<span style="color:red">组件样式以组件名为前缀，防止样式冲突</span>； 

    4、图片资源放在assets中，图集或同组文件在assets中创建新的目录放置

    5、特别注意组件package文件配置项name（组件名称）、version（组件版本）、description（组件描述）、main（组件入口文件）的配置；

    6、组件统一使用dcv-作为前缀;

    7、组件输出统一在widge文件下index.js

### 组件功能实现

修改widge下的组件名称为真实组件名称；

修改package配置文件组件名称(name)、描述(description)、版本(version)、入口文件（main）；

修改组件目录下的vue布局文件，调整为实际组件布局；

修改组件目录下的js脚本文件，调整为实际组件实现逻辑；

修改组件目录下的scss样式文件，调整为实际组件样式内容；

将组件所需的资源文件放在组件目录下的assets文件夹下，注意引用路径；

修改根目录下的组件测试入口文件index.vue，调整为实际组件调用方式；

修改根目录下的工程配置文件,调整组件名称(name)、描述(description)、版本(version)、入口文件（main）字段；

## 单元测试 （TODO）
暂不实现，待后期补充

## 生成api文档 (TODO)
```
sien-cli jsdoc .
```
注：jsdoc命令暂未实现，执行方式待定

## 发布组件
特别注意，发布组件仅需要发布src目录下的文件即可，进入到src目录下，执行以下命令：

```
npm publish
```
发布组件至npm仓库详情参见《本地npm仓库使用笔记》

# 2、组件使用

- 安装自定义list组件，注意使用本地npm仓库地址
```
    npm i pluginname
```

- 使用组件


        <template>
            <div>
                <Pluginname :title="title" :btnClick="btnClick"></Pluginname>
            </div>
        </template>

        <script>
        import Pluginname from 'dcv-Pluginname';
        export default {
        name: 'App',
            components: { Pluginname },
            data() {
                return {
                    title: '组件的标题',
                    btnClick: function() {
                        console.log('组件触发了点击事件')
                    }
                }
            }
        }
        </script>

注：其中pluginname、PluginName为模板占位符，实际工程中需要替换为真实组件名称