# webpack learning 

## 安装

###  全局

```shell
npm i webpack -g
```

### 项目中安装

```shell
npm i webpack -D   // npm install webpack --save-dev
```

## 配置项

### 命令行参数

```shell
webpack <entry> <output>  // webpack ./app.js bundle.js
参数：
   -p  压缩
   --watch  文件变化,重新打包
   --config 指定配置文件
   --progress 终端显示打包进度
```

### 配置文件 `webpack.config.js`

#### `context`

默认值：`process.cwd()` 当前目录

#### `entry`

参数：字符串、数组、对象

```shell
entry: {page1:'./page1',page2:'/page2'}
output: {filename:'[name].bundle.js'} // [name] 为entry中的 键名
```

#### `output`

```shell
output: {
  filename: 'bundle.js',  // [name],[hash],[chunkhash]
  path: __dirname + '/build'
}
```

#### `module`

```shell
module: {
  rules: [
        {    test: '\.jsx$',
            includes: [],
            loader: 'babel-loader'
         }
  ]
}
```

#### `devServer`

```shell
devServer: {
  contentBae: './build',
  host: '',
  port: '',
  compress: '',
  inline: true // 文件发生变化时可以自动刷新浏览器
}
```

#### `plugins`

## loader

### 加载 `CSS`

安装

```shell
npm install --save-dev style-loader css-loader
```

配置

```shell
{
  test:/\.css$/,
  use: ['style-loader','css-loader']
},
```

### 加载 `iamges` `font` 

安装

```shell
npm install --save-dev file-loader
```

配置

```shell
{
  test: /\.(png|jpg|gif|svg)$/,
  use: ['file-loader']
},
{
  test: /\.(woff|woff2|eot|ttf|otf)$/,
  use: ['file-loader']
}
```


