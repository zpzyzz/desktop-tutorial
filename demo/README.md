1. cra初始化项目 create-react-app my-project
2. 自定义(覆盖) webpack配置  craco
    1. 安装 npm i -D @craco/craco (或者yarn add @craco/craco -D)
    2. 配置文件 
        1创建配置文件craco.config.js  
        2修改package.json中的脚本命令,将 start/build/test 三个命令修改为 craco

3. tailwindcss [https://www.tailwindcss.cn/docs/guides/create-react-app]
    1. yarn add -D tailwindcss
    2. npx tailwindcss init
    存在冲突在.tailwindcss文件添加
            corePlugins: {
              preflight: false,
            },

4. jsconfig.json 配置路径别名的映射
5. UI库的配置 [https://ant.design/docs/react/use-with-create-react-app-cn]
    1. yarn add antd

6. 请求库的配置

代码规范
1. 安装插件editorconfig ---> 新建.editorconfig文件 
2. 安装yarn add prettier -D --> 新建.prettierrc文件  
3. 安装yarn add eslint -D --> (初始化不成功先yarn add @eslint/create-config -D)npx eslint --init [3,1,1] 
    --> 安装插件ESLint
4. 解决prettier和ESLint的冲突
   1.安装 yarn add eslint-plugin-prettier eslint-config-prettier -D
   2.在.eslintrc.js中的extends中添加 'plugin:prettier/recommended'
   3.错误较多可以在package.json的调试中添加 "lint": "npx eslint --fix",运行yarn lint即可

-------仅了解-------
npx abc => 运行./node_,odules/.bin/abc.js
#！/usr/bin/env  node 告诉操作系统 该文件由谁来执行

webpack => 去环境变量中 Path 去匹配路径寻找 webpack 这个可执行文件
尝试：
npm i webpack -g

1. D:\Program Files\Git\cmd\webpack
2. C:\Program Files\nodejs\webpack
3. C:\python27\webpack
