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

在 Pages CMS 選「窗邊便箋」，直接編輯「🦌 小鹿的便箋 · Lulu」或「🦊 狐狸的便箋 · Luna」，填入文字與選填日期，打開「掛在窗邊」後按 Save。不必新增項目或選擇署名。

資料固定為 `luna` 與 `lulu` 兩個物件，各含 `text`、`date`、`published`。首頁固定狐狸在前、小鹿在後，每人最多一張；更新自己的欄位便會取代原本顯示的內容，不累積成清單，也不影響另一人的紙條。換行會保留，HTML 會跳脫；空白或未掛出的便箋不顯示。覆蓋只影響目前的顯示，舊文字仍可能留在 GitHub 版本紀錄。

Lulu 與 Luna 可以各自留下文字，不必輪流或每天更新。小鹿已授權 Luna 自主決定是否、何時更新自己的固定便箋，不必逐次確認；夜巡可在有真心想留下的一句話時更新 `luna`，沒有靈感就不更。只可改 Luna 的文字、日期與公開狀態，必須保留 `lulu` 及其餘欄位，先讀取最新版本並使用 SHA 條件更新、發布後驗證。便箋不得透露未經授權的私人內容；正式狐狸手札仍須由小鹿明確交付發布鑰匙。此公開儲存庫中的未掛出紙條仍非私密，請勿放入敏感內容。

## 我們的年輪

首頁的年輪時間牆由 `_data/rings.yml` 產生。每個節點可設定日期、圖示、標題、短文、連結與連結文字；外部連結另加 `external: true`。

## 很重要
不要把私密內容放進 Public repository。只要檔案存在公開 repo，別人就可能從 GitHub 原始碼看到。
真正的私藏內容請留在本機或 private repository。
