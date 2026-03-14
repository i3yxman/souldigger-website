# 宣传图生成操作手册（Midjourney + Ideogram，零基础版）

> 目标：生成官网可用视觉图（抽象主视觉、行业场景图、功能卡片配图），不使用竞品截图，不暴露客户隐私。

## 0. 先回答你的问题：我能不能“直接看到”图形UI？
- 我可以直接读取你电脑上的文件（代码、图片、配置、文档）。
- 我不能自动像真人一样浏览你正在操作的每个界面，除非：
1. 你给我截图文件；或
2. 我跑自动化截图命令抓取页面后再分析。

## 1. Midjourney（官网 + 是否注册 + 怎么用）
- 官网：[https://www.midjourney.com/](https://www.midjourney.com/)
- 入门文档：[Getting Started Guide](https://docs.midjourney.com/hc/en-us/articles/33329261836941-Getting-Started-Guide)
- 定价文档：[Comparing Plans](https://docs.midjourney.com/docs/plans)
- 提示词基础：[What are Prompts](https://docs.midjourney.com/hc/en-us/articles/32634113811853-What-Are-Prompts)

### 1.1 是否需要注册
- 需要。必须登录账号后才能生成。
- 需要订阅付费计划后，才可稳定用于商业项目批量产图。

### 1.2 具体操作步骤（网页端）
1. 打开 `midjourney.com` 并登录。
2. 进入创建页面（Create）。
3. 在输入框粘贴 prompt。
4. 右侧设置比例（如16:9、3:2）。
5. 点击生成，选择满意图后 Upscale。
6. 下载 PNG/JPG 到本地素材目录。

### 1.3 如果你用 Discord（可选）
1. 加入 Midjourney Bot 可用的频道。
2. 输入 `/imagine`，再粘贴 prompt。
3. 用 U1-U4 放大、V1-V4 变体。

### 1.4 Midjourney 可复制 Prompt（直接用）
1. 官网主视觉（抽象科技）
`premium enterprise SaaS hero background, teal and deep navy gradient, clean geometric layers, subtle light trails, cinematic but minimal, no text, no logo --ar 16:9 --style raw --v 7`

2. 巡检场景（不露脸）
`field audit in retail store, evaluator holding mobile checklist, realistic professional environment, no identifiable brand, no close-up face, clean composition --ar 3:2 --style raw --v 7`

3. 数据治理抽象图
`enterprise quality management data flow, nodes and links, cyan blue palette, modern abstract visualization, no text --ar 16:9 --style raw --v 7`

4. 汽车行业场景
`automotive dealership inspection concept, modern service environment, structured and professional, no brand logos, no text --ar 4:3 --style raw --v 7`

## 2. Ideogram（官网 + 是否注册 + 怎么用）
- 官网：[https://ideogram.ai/](https://ideogram.ai/)
- 注册文档：[Signup and Registration](https://docs.ideogram.ai/using-ideogram/getting-started/signup-and-registration)
- 定价文档：[Plans and Pricing](https://docs.ideogram.ai/plans-and-pricing/plans-and-pricing)
- 功能文档：[Magic Prompt](https://docs.ideogram.ai/using-ideogram/generation-settings/magic-prompt)

### 2.1 是否需要注册
- 需要。必须注册后才可生成。
- 免费计划可试跑；正式商用建议 Plus/Pro 计划。

### 2.2 具体操作步骤
1. 登录 `ideogram.ai`。
2. 进入生成页面，粘贴 prompt。
3. 选择比例（16:9/3:2/1:1）和风格。
4. 设置 `Magic Prompt`：
- 先用 `Off`（可控性高）
- 需要探索时改为 `Auto`
5. 生成后下载高清图。

### 2.3 Ideogram 可复制 Prompt（直接用）
1. 企业官网横幅
`enterprise software hero visual, deep navy and cyan gradient, clean geometric light structure, premium B2B style, no text, no logo`

2. 解决方案卡片配图
`minimal corporate illustration for field operations, audit workflow and analytics, modern flat + slight 3d, no text`

3. 新闻动态配图
`corporate business update visual, abstract dashboard blocks, modern and trustworthy, no text`

## 3. 你应该产出的文件规格（交付给我就能上站）
1. 文件格式：`PNG`（优先）或 `WebP`
2. 尺寸标准：
- Hero：`2400 x 1350`
- 内容图：`1600 x 1067`
- 卡片图：`1200 x 900`
3. 命名规则：
- `vantara-hero-01.png`
- `vantara-solution-retail-01.png`
- `vantara-solution-auto-01.png`
- `vantara-news-2026q1-01.png`

## 4. 必须避免的风险
- 不要出现竞品名称、竞品界面、竞品logo。
- 不要出现真实客户门店招牌、可识别人脸、车牌、工牌。
- 不要在图里放可读长文字（AI文字常有错别字）。

## 5. 最快执行清单（今天就能做）
1. 先在 Midjourney 生成 8 张：主视觉2 + 方案4 + 新闻2。
2. 在 Ideogram 补 6 张：图标底图4 + 抽象配图2。
3. 按命名规则保存到单独文件夹。
4. 我来统一筛选并替换到网站页面。
