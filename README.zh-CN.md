# qkt-cli (中文文档)

一个用于快速搭建基于 qiankun 的微前端项目的 CLI 工具。

## 功能特性

*   **主应用与微应用生成**: 通过一个命令即可生成主应用和微应用。
*   **基于模板**: 使用预定义的模板来创建主应用（例如，基于 Vue 的 qiankun 主应用）和微应用（例如，基于 Vue 的 qiankun 子应用）。
*   **交互式配置**: 通过引导式提示来配置项目名称、描述和作者信息。
*   **快速启动**: 在几秒钟内让你的 qiankun 微前端项目运行起来。

## 使用方法

### 环境准备

*   Node.js (如有版本要求请注明)
*   npm 或 yarn

### 安装

```bash
npm install -g qkt-cli
# 或者
yarn global add qkt-cli
```

### 创建新项目

```bash
qkt-cli init
```
该命令将提示你输入主项目和微项目的详细信息。

### 运行项目

初始化完成后，进入你的主项目目录并安装依赖：
```bash
cd <你的主项目名称>
npm install # 或 yarn install
```

然后，进入你的微项目目录并安装依赖：
```bash
cd ../<你的微项目名称>
npm install # 或 yarn install
```

现在你可以开始开发你的 qiankun 微前端应用了！

## 模板

当前支持的模板：

*   **主应用**: `vue-main` (一个基于 Vue 的 qiankun 主应用)
*   **微应用**: `vue-micro` (一个基于 Vue 的 qiankun 微应用)

未来将添加更多模板。

## 贡献

欢迎贡献代码！请阅读贡献指南（如果有的话）。

## 许可证

ISC