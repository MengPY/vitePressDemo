# API 概述

欢迎使用欧贝 API 参考文档。本章节提供了完整的 API 接口说明。

## 概览

欧贝 API 采用 RESTful 风格设计，提供以下核心功能：

| 模块 | 描述 | 状态 |
|------|------|------|
| 用户认证 | 用户登录、注册、权限管理 | ✅ 稳定 |
| 数据管理 | 数据的增删改查操作 | ✅ 稳定 |
| 文件服务 | 文件上传、下载、管理 | 🚧 开发中 |
| 消息通知 | 系统消息、推送服务 | 📋 计划中 |

## 快速开始

### 基础 URL

```
https://api.obei.example.com/v1
```

### 认证方式

所有 API 请求都需要在请求头中携带认证令牌：

```http
Authorization: Bearer <your-token>
```

### 请求示例

```bash
curl -X GET "https://api.obei.example.com/v1/users" \
  -H "Authorization: Bearer <your-token>" \
  -H "Content-Type: application/json"
```

## 响应格式

所有 API 响应均采用 JSON 格式：

```json
{
  "code": 200,
  "message": "success",
  "data": {
    // 响应数据
  }
}
```

## 错误处理

当请求发生错误时，API 将返回相应的错误码和信息：

| 状态码 | 说明 |
|--------|------|
| 400 | 请求参数错误 |
| 401 | 未授权访问 |
| 403 | 禁止访问 |
| 404 | 资源不存在 |
| 500 | 服务器内部错误 |

## 版本控制

API 采用 URL 版本控制策略，当前版本为 `v1`。

::: warning 注意
重大版本更新可能引入不兼容的变更，请关注更新日志。
:::
