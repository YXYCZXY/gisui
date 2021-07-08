# GISUI

#### 介绍
{**以下是 Gitee 平台说明，您可以替换此简介**
Gitee 是 OSCHINA 推出的基于 Git 的代码托管平台（同时支持 SVN）。专为开发者提供稳定、高效、安全的云端软件开发协作平台
无论是个人、团队、或是企业，都能够用 Gitee 实现代码托管、项目管理、协作开发。企业项目请看 [https://gitee.com/enterprises](https://gitee.com/enterprises)}

#### 软件架构
软件架构说明


#### 安装教程

1.  npm i gisui

#### 使用说明

1.main.js中导入

`import GISUI from 'gisui'
Vue.use(GISUI)`

2.需要用到的地方配置文件

```
<sip-legend :led="stops" :mode="place" unit="单位"/>
```
| 参数  | 作用  |
|---|---|
|  led|  颜色和范围|
| mode  |  定义的样式 |
|  unit |  单位 |

led  参数：
```
const stops = [
  {
    "min": 0,
    "max": 0,
    "color": "#00F9F3"
  }
]
```
mode 样式：

```
const place = "bottomleft" //custom 自定义 bottomleft 左下 bottomright 右下 topleft 左下 topright 右下
```








#### 参与贡献

1.  yuanxy


#### 特技

1.  使用 Readme\_XXX.md 来支持不同的语言，例如 Readme\_en.md, Readme\_zh.md
2.  Gitee 官方博客 [blog.gitee.com](https://blog.gitee.com)
3.  你可以 [https://gitee.com/explore](https://gitee.com/explore) 这个地址来了解 Gitee 上的优秀开源项目
4.  [GVP](https://gitee.com/gvp) 全称是 Gitee 最有价值开源项目，是综合评定出的优秀开源项目
5.  Gitee 官方提供的使用手册 [https://gitee.com/help](https://gitee.com/help)
6.  Gitee 封面人物是一档用来展示 Gitee 会员风采的栏目 [https://gitee.com/gitee-stars/](https://gitee.com/gitee-stars/)
