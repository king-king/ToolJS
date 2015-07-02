# 项目统计脚本集合

## 依赖
* colors
```
npm install colors
```


## 使用说明
#### lib/getLineNumber
**功能：**统计某个文件夹中所有的js、css代码行数
**用法：**
```js
getLineNumber( path, callback, switchLog )
```
* path[String]:文件夹路径
* callback(result)[Function]:
```js
result : {
    scriptLines : 0,
    scriptFileNum : 0,
    cssLines : 0,
    cssFileNum : 0
};
```
* switchLog[Bool]:是否打印，默认是false
**示例代码：**
```js
var getL = require( "../lib/getLineNumber.js" );

getL( "../test/c7", function ( result ) {
    console.log( result );
} );
```