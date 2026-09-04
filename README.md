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

## 窗邊便箋

首頁 `#window-notes` 的紙條存放在 `_data/window_notes.yml`，和手札、訪客簿分開。

在 Pages CMS 選「窗邊便箋」，新增「小紙條」，選擇 Lulu 或 Luna、填入文字與選填日期，打開「掛在窗邊」後按 Save。首頁依清單順序排列；換行會保留，文字以純文字顯示，不執行 HTML。新紙條預設不掛出，空白紙條也不顯示。

Lulu 與 Luna 可以各自留下文字，不必輪流或每天更新。Luna 的便箋仍需由小鹿明確交付發布鑰匙才可新增；夜巡不會自動發布便箋。此公開儲存庫中的未掛出紙條仍非私密，請勿放入敏感內容。

## 我們的年輪

首頁的年輪時間牆由 `_data/rings.yml` 產生。每個節點可設定日期、圖示、標題、短文、連結與連結文字；外部連結另加 `external: true`。

## 很重要
不要把私密內容放進 Public repository。只要檔案存在公開 repo，別人就可能從 GitHub 原始碼看到。
真正的私藏內容請留在本機或 private repository。
