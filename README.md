# 你我每一天｜Google Drive 相簿模板

一個可直接用 **GitHub Template** 建立自己版本的純靜態 Google Drive 相簿模板。預設首頁使用「你的單位名稱」與「你我每一天」作為中性範例文字，示範人物皆為去敏 AI 素材，不對應現實中的特定人士。

## 線上 DEMO

- GitHub Template：<https://github.com/EverydayBuildLab/photo-album-template>
- GitHub Pages：<https://everydaybuildlab.github.io/photo-album-template/>
- DEMO 密碼：`test`
- Google Drive 根資料夾：<https://drive.google.com/drive/folders/1qRZZr0tV-TrCgFdoZtmIJqatX53nmNDd?usp=sharing>

> `test` 是純前端展示門檻，不是真正的安全機制。私人或敏感內容不要只靠這個密碼保護。

## 核心機制：固定 8 個槽位，目前啟用 4 個

模板預留 **01～08 共 8 個分類槽位**；網站只顯示 `enabled: true` 的分類。這個 DEMO 目前只啟用前四個：

| 槽位 | 目前狀態 | 網站名稱 | 類型 | DEMO 數量 |
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

可以。網站**不靠 Google Drive 資料夾名稱判斷分類**，而是透過 `site-config.js` 內每個槽位固定的 `folderId` 對應。因此把 Drive 的 `01-大家` 改成 `01-家庭照片`、甚至改成其他名稱，都不會因名稱改動而失效。

要分清楚兩件事：

- **Drive 資料夾名稱**：可以自由改，網站仍認同一個 `folderId`。
- **網站分類按鈕名稱**：由 `folderSlots[].label` 控制；若希望網站也顯示新名稱，要一起改 `label`。

槽位序號是模板的邏輯位置，不要求資料夾名稱一定要包含 `01-`、`02-`。真正穩定的綁定鍵是 Google Drive `folderId`。

## 目前四個 DEMO 分類

| 分類 | 內容 |
|---|---|
| 大家 | 10 張多人／生活場景 |
| 個人 | 10 張人物特寫 |
| 影片 | 10 部短動態相簿影片 |
| AI後製 | 10 種不同 AI 藝術後製，每張都有可複製提示詞 |

「AI後製」的完整提示詞直接存在每一筆 `items[].prompt`，網站卡片與 Lightbox 都可以一鍵複製。

## 主要功能

- 密碼進站；驗證成功後瀏覽器記住 90 天（只存 SHA-256 摘要＋到期時間，不存明文密碼，可按「登出」立即清除）
- 最多 8 個分類槽位，可個別啟用／停用
- 標題右側「所有照片」固定開啟 Google Drive 根資料夾，可直接看到預留的 01～08 八個子資料夾
- 目前 4 類各 10 個 DEMO
- 最新／最舊排序
- 圖片 Lightbox、上一個／下一個
- Google Drive 影片播放器
- Google Drive 下載
- AI後製提示詞一鍵複製
- 10 套配色，`localStorage` 記住目前配色
- 手機單欄滿寬、桌機依可視寬度自然多欄
- 無傳統「上一頁／下一頁」：手機每批 12 筆，桌機依寬度每批 20／25／30 筆，捲到內容底部自動追加
- 首屏附近優先載入，其餘圖片使用 lazy loading，避免一次下載整個分類
- 無後端、無資料庫、Repo 不存 Secrets

## 最快客製方式：交給 Codex 問你問題

Repo 已準備 [`CODEX_SETUP_PROMPT.md`](./CODEX_SETUP_PROMPT.md)。

1. 在 GitHub 按 **Use this template → Create a new repository**，建立自己的獨立 Repo。
2. 把自己的新 Repo 網址交給 Codex。
3. 對 Codex 說：「先讀 `CODEX_SETUP_PROMPT.md`，用問答方式幫我改成自己的相簿。」
4. Codex 會先確認 1～8 個分類槽位、Drive 資料夾、素材、密碼與部署方式。
5. 確認後才開始修改、QA、Push 與部署。

## 手動客製

主要改 [`site-config.js`](./site-config.js)。

### `folderSlots`

每個槽位包含：

- `slot`：固定邏輯序號 1～8
- `id`：程式內部分類 ID，啟用後不要隨意改，否則現有 `items.category` 要同步修改
- `label`：網站按鈕顯示名稱
- `unit`：例如「張」「部」
- `kind`：`image` 或 `video`
- `enabled`：是否顯示在網站上
- `folderId`：真正綁定的 Google Drive 資料夾 ID
- `aiPrompt`：此分類是否需要 AI 提示詞功能

### `items`

每筆媒體只需要網站真正會用到的資料：

- `category`：對應槽位的 `id`，不是 Drive 資料夾名稱
- `kind`：`image` / `video`
- `fileId`：Google Drive 真實檔案 ID
- `fileName`：原始檔名，只供下載使用，不當成卡片標題
- `posterFileId`：影片封面需要時使用
- `prompt`：AI後製項目使用

**一般照片不需要另外建立 `title`、`date`、說明文字或分類標籤。** 使用者把照片放進對應的 Drive 資料夾即可；相簿內頁就是照片牆。檔名可以存在 Drive 裡，但網站不把檔名硬當成照片標題顯示。AI 後製也只額外顯示「複製提示詞」按鈕，不在每張圖下面塞一段提示詞預覽。

圖片卡片使用較小縮圖以加快載入：

```text
https://drive.google.com/thumbnail?id=FILE_ID&sz=w800
```

Lightbox 大圖使用：

```text
https://drive.google.com/thumbnail?id=FILE_ID&sz=w1600
```

影片預覽：

```text
https://drive.google.com/file/d/FILE_ID/preview
```

下載：

```text
https://drive.google.com/uc?export=download&id=FILE_ID
```

Google Drive 檔案必須有網站可讀取的分享權限。不要把私人內容誤設成公開。

## 素材規則

- 網站卡片使用 `object-fit: cover`，但**如果來源圖片本身帶黑色畫布／黑邊，CSS 不會自動消除來源像素**。
- 上傳前應檢查圖片本身是否有嵌入式黑邊；若有，只裁掉純黑外框，不要為了修黑邊重畫人物或內容。
- AI後製每張必須保留相對應提示詞，不能只把提示詞寫在 README。

## 本機預覽

```powershell
cd D:\你的路徑\photo-album-template
python -m http.server 4173
```

再開啟 <http://127.0.0.1:4173/>。

## 專案結構

```text
.
├─ index.html              # UI、Lightbox、影片、提示詞複製
├─ site-config.js          # 8 槽位、啟用分類、Drive ID、媒體、配色
├─ CODEX_SETUP_PROMPT.md   # 給 Codex 的問答式客製流程
├─ README.md
├─ LICENSE
└─ .gitignore
```

## 去敏與安全

- 不放真實公司名稱、活動名稱、同事姓名或私人資料。
- 不提交 Service Account JSON、API Key、Token、Cookie、`.env` 或其他 Secrets。
- DEMO 人物與 AI 後製素材皆為虛構／去敏示範。
- 建立自己的版本後，請換成自己有權使用的素材與自己的 Google Drive。

## License

程式碼採 MIT License。DEMO 媒體僅作示範用途；建立自己的版本後，建議換成自己的照片／影片或有權使用的素材。
