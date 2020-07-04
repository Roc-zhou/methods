# rz-methods
常用js方法集合

```sh
npm install --save rz-methods or cnpm install --save rz-methods
```

### example
```JavaScript
import tool from 'rz-methods'

const { formatDate } = require('rz-methods').default

tool.formatDate(new Date()) => 2018-03-23 13:35:47

```

- formatDate(date)  => 2018-03-23 13:35:47
- timeStamp(date) => 转换时间戳
- _timeStamp => 获取当前时间戳
- isBrowser => 验证浏览器方法
- ...

### 增加typescript支持

```
npm install --save @types/rz-methods
```
使用 

```
import $util from 'rz-methods'

console.log($util);
```