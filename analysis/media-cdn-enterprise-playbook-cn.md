# SoulDigger 官网媒体与 CDN 企业级落地手册

## 1. 目标架构（推荐）

- 页面 HTML：继续由源站 `souldigger.cn` 提供
- 静态媒体（图片/视频）：迁移到腾讯云 COS
- 加速域名：使用独立域名，如 `assets.souldigger.cn`，通过 CDN 回源到 COS

## 2. 媒体目录规范（COS）

建议统一前缀 `souldigger-web/`：

```text
souldigger-web/
  images/
    company/
    product/
    news/
    cases/
  videos/
    product/
    cases/
  posters/
    video/
```

## 3. 命名规范

- 图片：`{scene}-{date}-{version}.webp`
- 视频：`{topic}-{date}.mp4`
- 视频封面：`{topic}-{date}-poster.webp`

示例：

- `images/company/office-202604-v1.webp`
- `videos/product/vantara-demo-202604.mp4`
- `posters/video/vantara-demo-202604-poster.webp`

## 4. CDN 缓存策略

- HTML：`Cache-Control: no-cache`
- 带版本号或哈希的静态资源：`Cache-Control: public, max-age=31536000, immutable`
- 普通图片：`Cache-Control: public, max-age=2592000`
- 视频文件：`Cache-Control: public, max-age=604800`
- 视频封面：`Cache-Control: public, max-age=2592000`

## 5. 安全与治理

- 开启 HTTPS（强制回源 HTTPS）
- 开启防盗链（按域名白名单）
- 开启 URL 鉴权（视频目录推荐）
- 开启访问日志投递（CLS）
- 配置 CDN 监控告警（4xx/5xx、回源失败率、带宽突增）

## 6. 图片与视频规格建议

- 图片：优先 WebP，必要时 AVIF；单图建议小于 500KB
- 视频：H.264 + AAC，1080p，码率 6-10Mbps
- 长视频建议转 HLS（m3u8 + ts 分片），提高首开速度和弱网表现

## 7. 发布流程建议

1. 本地生成 `out/`
2. 同步站点页面到源站
3. 同步媒体到 COS（按目录）
4. 仅刷新必要 CDN 路径（避免全量刷新）
5. 线上抽检：首页、产品页、新闻页、视频播放

## 8. 你当前站点的优化建议（结合现状）

- 当前主站仍是源站直出，建议尽快把图片/视频迁移到 COS + CDN
- 当前源站静态缓存 30 天，可对带哈希资源升级到 1 年
- 建议新增 `assets.souldigger.cn`，与页面域名职责分离
- 建议补充视频专用策略（Range、缓存、防盗链、鉴权）
