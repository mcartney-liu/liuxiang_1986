# 淘小宝 - 类似淘宝的基础电商应用

这是一个使用Next.js、TypeScript和Tailwind CSS构建的基础电商应用，模仿了淘宝的主要功能和界面。

## 技术栈

- **Next.js**: React框架，支持服务端渲染
- **TypeScript**: JavaScript的超集，提供类型安全
- **Tailwind CSS**: 实用优先的CSS框架
- **React**: 用户界面库

## 功能特性

- 首页展示热门商品
- 商品分类浏览
- 商品详情页面
- 购物车功能
- 响应式设计，支持移动端

## 页面结构

- `/` - 首页，展示热门商品和分类
- `/products` - 所有商品列表页
- `/product/[id]` - 商品详情页
- `/cart` - 购物车页面

## 安装与运行

1. 克隆项目：
   ```bash
   git clone https://github.com/mcartney-liu/MoltBot.git
   cd MoltBot
   ```

2. 安装依赖：
   ```bash
   npm install
   ```

3. 启动开发服务器：
   ```bash
   npm run dev
   ```

4. 在浏览器中访问 `http://localhost:3000`

## 项目结构

```
taobao-clone/
├── pages/              # 页面组件
│   ├── api/           # API路由
│   ├── _app.tsx       # 应用根组件
│   ├── index.tsx      # 首页
│   ├── cart.tsx       # 购物车页面
│   ├── products.tsx   # 商品列表页面
│   └── product/       # 商品详情页面
├── components/        # 可复用组件
├── styles/            # 样式文件
├── public/            # 静态资源
├── package.json       # 项目依赖和脚本
└── README.md          # 项目说明
```

## 开发说明

此项目是一个基础电商应用的原型，实现了以下核心功能：

1. 商品展示：首页和商品列表页展示商品信息
2. 商品详情：单个商品的详细信息页面
3. 购物车：添加、删除、修改商品数量
4. 响应式设计：适配桌面端和移动端

后续可以扩展的功能包括：
- 用户认证系统
- 订单管理系统
- 支付集成
- 商品搜索和筛选
- 用户评论系统
- 管理后台