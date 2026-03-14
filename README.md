# SoulDigger 官方网站（Next.js 生产版）

该目录是 **完全独立** 的官网工程，不依赖也不会污染以下业务仓库：

- `/Users/klanshen/survey-backend`
- `/Users/klanshen/survey_app`
- `/Users/klanshen/survey-backoffice`

## 技术栈

- Next.js 15（App Router, TypeScript）
- 静态导出模式（`output: export`）
- 适配腾讯云 COS + CDN 部署

## 功能特性

- 多页面：首页、产品、解决方案、公司介绍、咨询、隐私、条款
- SEO：页面级 metadata、Open Graph、Twitter Card
- 结构化数据：Organization JSON-LD
- 自动 `sitemap.xml` / `robots.txt`
- 响应式设计，移动端适配
- 咨询表单（当前为 mailto 直达商务邮箱，可后续切 API）

## 本地开发

```bash
cd /Users/klanshen/souldigger-website
npm install
npm run dev
```

打开：`http://localhost:3000`

## 构建检查

```bash
npm run lint
npm run build
```

构建输出在 `out/` 目录（可直接上传 COS）。

## 腾讯云部署（推荐）

1. 创建 COS 存储桶（静态网站托管）
2. 上传 `out/` 目录所有文件
3. 开启 CDN，绑定域名（如 `www.souldigger.cn` / `vantara.souldigger.cn`）
4. 配置 HTTPS 证书
5. 域名 DNS CNAME 指向 CDN
6. 域名完成备案后正式启用大陆访问

## 可配置项

修改 `data/site.ts`：

- 品牌名、产品名
- 官网域名
- 商务邮箱与电话

