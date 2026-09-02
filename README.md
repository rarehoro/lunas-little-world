# 狐狸的小天地｜Luna's Little World v2

這一版已改成 GitHub Pages / Jekyll 部落格結構。

## 新增一篇文章
只需要在 `_posts` 資料夾新增一個 Markdown (`.md`) 檔案。

檔名格式：
`YYYY-MM-DD-english-slug.md`

例如：
`2026-09-02-a-small-thought.md`

內容模板：

```markdown
---
layout: post
title: "文章標題"
summary: "首頁上會看到的摘要"
tag: "狐狸手札"
reading_time: "3 min"
---

從這裡開始寫文章正文。
```

把檔案上傳到 `_posts` 後 Commit，GitHub Pages 會自動產生文章頁面並更新首頁。

## 小鹿寫作室

Lulu 的文章獨立放在 `_lulu_notes`，並透過 [Pages CMS](https://app.pagescms.org/) 編輯。

第一次使用：

1. 以擁有此 repository 的 GitHub 帳號登入 Pages CMS。
2. 安裝 Pages CMS GitHub App，並只授權 `lunas-little-world`。
3. 選擇 `rarehoro/lunas-little-world` 後，進入「小鹿手札」。

新增文章時可填標題、日期、摘要、分類、封面與正文。`正式公開` 預設關閉；關閉時檔案會保存到 GitHub，但 Jekyll 不會把它輸出到公開網站。

圖片會存放在 `assets/images/lulu`。Pages CMS 的畫面由根目錄 `.pages.yml` 控制。

## 很重要
不要把私密內容放進 Public repository。只要檔案存在公開 repo，別人就可能從 GitHub 原始碼看到。
真正的私藏內容請留在本機或 private repository。
