# ��Ŀͳ�ƽű�����

## ����
* colors
```
npm install colors
```


## ʹ��˵��
#### lib/getLineNumber
**���ܣ�**ͳ��ĳ���ļ��������е�js��css��������
**�÷���**
```js
getLineNumber( path, callback, switchLog )
```
* path[String]:�ļ���·��
* callback(result)[Function]:
```js
result : {
    scriptLines : 0,
    scriptFileNum : 0,
    cssLines : 0,
    cssFileNum : 0
};
```
* switchLog[Bool]:�Ƿ��ӡ��Ĭ����false
**ʾ�����룺**
```js
var getL = require( "../lib/getLineNumber.js" );

getL( "../test/c7", function ( result ) {
    console.log( result );
} );
```