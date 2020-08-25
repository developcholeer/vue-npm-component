## 1 vue-npm-component
基于vue的npm组件工程模板

## 2 组件工程结构

```
|-- vue-npm-component
    |-- .babelrc
    |-- index.html
    |-- index.js
    |-- package-lock.json
    |-- package.json
    |-- README.md
    |-- build
    |   |-- webpack.cfg.js
    |   |-- webpack.common.js
    |   |-- webpack.dev.js
    |   |-- webpack.prod.js
    |   |-- webpack.until.js
    |-- src
        |-- package-lock.json
        |-- package.json
        |-- README.md
        |-- widge
            |-- index.js
            |-- pluginname
                |-- assets
                |-- index.vue
                |-- js
                |   |-- index.js
                |-- style
                    |-- index.scss
```

其中src目录为组件工程目录，其他资源为测试工程内容，发布组件仅需要发布src目录下的文件即可;

build为测试工程配置文件;

index.html、index.js为组件测试页面;

pluginname 为模板占位符，实际工程中需要替换为真实组件名称。


## 3 定义组件
参见./src/readme.md

## 4 测试组件
```js
   <template>
        <div>
            <Pluginname :title="title" :btnClick="btnClick"></Pluginname>
        </div>
    </template>

    <script>
        import Pluginname from './src/widge/index.js';
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

```

## 5 编译运行
```js
npm run dev
```

### 6 工程打包
```js
npm run build
```
