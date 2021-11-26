# chrome-extension-demo

chrome extension demo

1.初始化文件

```bash
$ npm init -y
```

2.安装

```bash
$ npm i @types/chrome
```

3.设置 chrome 浏览器进入下面这个地址，选择开发者模式

```
chrome://extensions/
```

4.根目录下添加清单文件 manifest.json
参考：https://developer.chrome.com/docs/extensions/mv3/getstarted/

```json
{
  "name": "my first extension",
  "version": "1.0.0",
  "description": "This is my very first cool extension",
  "manifest_version": 3 // 当前manifest_version的最新版本是3
}
```

5.chrome 中点击 Load unpacked 选择这个项目的文件夹，就会看到加载了

6.在清单文件中注册后台运行脚本

```json
{
  "name": "my first extension",
  "version": "1.0.0",
  "description": "This is my very first cool extension",
  "manifest_version": 3, // 当前manifest_version的最新版本是3
  "background": {
    "service_worker": "background.js"
  }
}
```
