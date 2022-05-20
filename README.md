# 个人博客网站



19219111344袁肖杨

# 工程结构

>   **Root**
>
>   >   **node_modules**		包文件
>   >
>   >   **public**		公共资源文件 单页面
>   >
>   >   >   favicon.icon
>   >   >
>   >   >   index.html
>   >
>   >   **src**
>   >
>   >   >   **assets**			静态资源文件（第三方库）
>   >   >
>   >   >   >   font-awesome-4.7.0
>   >   >   >
>   >   >   >   logo.png
>   >   >
>   >   >   **component**		组件文件
>   >   >
>   >   >   >   Card.vue
>   >   >   >
>   >   >   >   List.vue
>   >   >   >
>   >   >   >   Page.vue
>   >   >
>   >   >   **css**		样式文件
>   >   >
>   >   >   >   common.less
>   >   >   >
>   >   >   >   global.less
>   >   >   >
>   >   >   >   md.css
>   >   >   >
>   >   >   >   style.less
>   >   >
>   >   >   **data**			数据文件
>   >   >
>   >   >   >   database.js
>   >   >
>   >   >   **router**			路由配置
>   >   >
>   >   >   >   index.js
>   >   >
>   >   >   **store**			vuex未用
>   >   >
>   >   >   **views**
>   >   >
>   >   >   >   **blog**
>   >   >   >
>   >   >   >   >   Blog.vue
>   >   >   >   >
>   >   >   >   >   ShowBlog.vue
>   >   >   >
>   >   >   >   **resume**
>   >   >   >
>   >   >   >   >   个人照片.jpeg
>   >   >   >   >
>   >   >   >   >   Resume.vue
>   >   >   >
>   >   >   >   Home.vue
>   >   >   >
>   >   >   >   Main.vue
>   >   >
>   >   >   App.vue
>   >   >
>   >   >   main.js		
>   >
>   >   .browserslistrc		配置文件
>   >
>   >   .gitignore		git忽略管理文件
>   >
>   >   Babel.config.js		配置文件
>   >
>   >   package-lock.json	包配置信息文件
>   >
>   >   package.json		包版本控制文件
>   >
>   >   README.md		项目介绍文件

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).



## 完成进度

1.   个人简历，介绍
2.   博文
3.   作业作品



## 更新日志

2022-5-20 15:39

1.   开发完成
2.   完成首页动画
3.   更改导航了logo文字
4.   文字大小自适应



2022-5-19 15:00

1.   完成了博客列表页面的和博客详细内容页面的制作，并配置路由
2.   分离数据于/src/data/database.js文件中



2022-5-11 22:56

1.   配置各页面的路由
2.   完成简历页面



2022-5-10 22:39

1.   完成List组件
2.   分离当前Page组件



2022-5-10 00:59

1.   完成bm控间距组件
2.   CARD组件化



2022-5-9 16:34

1.   完成了栅格系统的开发
2.   CARD组件的开发
3.   group-list的开发
4.   页码初步样式 后续任然还需要修改



2022-5-9 0:13

1.   修复之前NAVBAR菜单图标存在的bug：手机端不显示菜单图标
2.   完成了手机端菜单点击显示效果



2022-5-4

1.   初始化项目

2.   色调和基本样式的确定

3.   NAVBAR响应式布局

     1.   Collapse 的动态显示隐藏
     2.   手机端NAVBAR菜单图标仍然存在bug

4.   字体图标库的导入

5.   less环境配置和全局变量设置

     
