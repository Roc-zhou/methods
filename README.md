# rz-methods
常用js方法集合

```sh
npm install --save rz-methods or cnpm install --save rz-methods
```

### example
```JavaScript
import { formatDate } from 'rz-methods'

formatDate(new Date()) => 2018-03-23 13:35:47

```

- formatDate(date)  => 2018-03-23 13:35:47
- timeStamp(date) => 转换时间戳
- _timeStamp => 获取当前时间戳
- outPut(e) => 线下输出线上关闭
- isBrowser => 验证浏览器方法
- ...