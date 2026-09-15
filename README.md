# 你我身邊・台灣日常相簿 DEMO

這是一個可直接拿來客製的純靜態相簿網站模板。DEMO 主題是 **「你我身邊的真實日常｜台灣城市生活的片刻」**，示範人物與素材皆為去敏／AI 示範內容，不對應特定現實人物或組織。

公開模板本身使用內建 DEMO 素材，不綁定原作者的 Google Drive、私人雲端帳號或任何私密金鑰。建立自己的版本後，再依需求接上自己的 Google Drive。

## 線上 DEMO

- 線上相簿：<https://everydaybuildlab.github.io/photo-album-template/>
- GitHub Template：<https://github.com/EverydayBuildLab/photo-album-template>
- DEMO 密碼：`test`

## 最推薦的使用方式：Use this template

不要以 Fork 作為一般使用流程。請在 GitHub 上按：

**Use this template → Create a new repository**

這會建立一個獨立的新 Repository，適合拿來變成你自己的網站。

接著把新 Repo 交給 Codex / ChatGPT，並告訴它：

> 先讀 `CODEX_SETUP_PROMPT.md`，用問答方式幫我把這個相簿模板改成自己的版本。

它會先問清楚分類、Google Drive、視覺、密碼與部署方式，再開始修改。

## DEMO 密碼

`test`

> 這只是純前端展示門檻，不是真正的存取控制。私人或敏感內容不要只靠前端密碼保護。

## 核心機制：固定 8 個槽位，目前啟用 4 個

模板預留 **01～08 共 8 個分類槽位**；網站只顯示 `enabled: true` 的分類。

| 槽位 | DEMO 狀態 | 網站名稱 | 類型 | 數量 |
|---|---|---|---|---:|
| 01 | 啟用 | 大家 | 圖片 | 10 |
| 02 | 啟用 | 個人 | 圖片 | 10 |
| 03 | 啟用 | 影片 | 影片 | 10 |
| 04 | 啟用 | AI後製 | 圖片＋提示詞 | 10 |
| 05 | 預留 | 自訂分類5 | 圖片 | 0 |
| 06 | 預留 | 自訂分類6 | 圖片 | 0 |
| 07 | 預留 | 自訂分類7 | 圖片 | 0 |
| 08 | 預留 | 自訂分類8 | 圖片 | 0 |

### Google Drive 資料夾可以自由改名

可以。客製成 Google Drive 版本後，網站不是靠資料夾名稱判斷分類，而是以 `site-config.js` 中每個槽位的 `folderId` 綁定。

因此：

- **Drive 資料夾名稱**：可自由修改。
- **網站分類按鈕名稱**：由 `folderSlots[].label` 控制。
- **真正穩定的綁定鍵**：Google Drive `folderId`。

槽位序號只是模板內的邏輯位置，不要求 Drive 資料夾一定叫 `01-大家`、`02-個人`。

## 目前四個 DEMO 分類

| 分類 | 內容 |
|---|---|
| 大家 | 10 張多人／生活場景 |
| 個人 | 10 張人物特寫 |
| 影片 | 10 部短動態相簿影片 |
| AI後製 | 10 種不同 AI 藝術後製，每張都有可複製提示詞 |

「AI後製」完整提示詞存在每筆 `items[].prompt`，網站卡片與 Lightbox 都能複製。

## 主要功能

- 密碼進站
- 最多 8 個分類槽位，可個別啟用／停用
- 最新／最舊排序
- 圖片 Lightbox、上一個／下一個
- 本地 MP4 或 Google Drive 影片
- 圖片／影片下載
- AI 後製提示詞預覽與一鍵複製
- 10 套配色，`localStorage` 記住目前配色
- 手機／筆電／桌機響應式版面
- 無後端、無資料庫、Repo 不需要 Secrets

## 公開 DEMO 為什麼不用原作者 Google Drive？

這個模板刻意把公開展示素材直接放在 `assets/demo/`，避免公開 Repo 再去連結原作者的私人雲端帳號或檔案 ID。

建立你自己的版本時，可以改成：

1. 使用自己的 Google Drive；或
2. 繼續使用本地／其他合法公開素材。

如果使用 Google Drive，圖片常用：

```text
https://drive.google.com/thumbnail?id=FILE_ID&sz=w1600
```

影片預覽常用：

```text
https://drive.google.com/file/d/FILE_ID/preview
```

下載常用：

```text
https://drive.google.com/uc?export=download&id=FILE_ID
```

請只公開自己有權分享的檔案。

## `site-config.js`

### `folderSlots`

每個槽位包含：

- `slot`：固定邏輯序號 1～8
- `id`：程式內部分類 ID
- `label`：網站按鈕名稱
- `unit`：例如「張」「部」
- `kind`：`image` 或 `video`
- `enabled`：是否顯示
- `folderId`：使用 Google Drive 時填入資料夾 ID
- `aiPrompt`：此分類是否需要 AI 提示詞功能

### `items`

DEMO 內建素材可直接使用：

- `src`：圖片路徑
- `videoSrc`：本地影片路徑
- `poster`：影片封面
- `download`：下載來源
- `prompt`：AI 後製提示詞

客製成 Google Drive 後，可由 Codex 依使用者提供的 Drive 檔案建立 `fileId`、`posterFileId`、`preview` 與 `download`。

## 圖片素材品質

網站卡片使用 `object-fit: cover`，但若來源圖片本身帶黑色畫布／黑邊，CSS 不會自動消除那些像素。

上傳或替換素材前應檢查：

- 右側、下方或四周是否有嵌入式黑邊／padding
- 若只是連續純黑外框，只裁掉黑框，不要重畫人物或改變內容
- AI 後製每張需保留對應提示詞

## 本機預覽

```powershell
cd D:\你的路徑\photo-album-template
python -m http.server 4173
```

再開啟：

```text
http://127.0.0.1:4173/
```

## 專案結構

```text
.
├─ index.html
├─ site-config.js
├─ CODEX_SETUP_PROMPT.md
├─ README.md
├─ LICENSE
├─ .gitignore
└─ assets/
   └─ demo/
      ├─ everyone/
      ├─ personal/
      ├─ video/
      └─ ai/
```

## 去敏與安全

公開版本請遵守：

- 不放真實公司內部名稱、活動資料、同事姓名或私人資訊。
- 不提交 Service Account JSON、API Key、Token、Cookie、`.env`、私鑰或其他 Secrets。
- 不提交本機使用者路徑、私人 email、私人雲端帳號識別資訊。
- 不沿用含敏感資料的舊 `.git` 歷史；公開版本應從乾淨的新 Git 歷史開始。
- 圖片與影片公開前應移除不必要的 metadata。
- 建立自己版本後，請換成自己有權使用與公開的素材。

## License

程式碼採 MIT License。DEMO 媒體僅供此模板展示與測試；建立個人版本時，請換成自己有權使用的照片、影片或其他素材。
