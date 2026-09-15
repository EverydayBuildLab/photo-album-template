window.DEMO_CONFIG = {
  siteName: '你我身邊・台灣日常相簿',
  subtitle: '照片、影片實際由 Google Drive 載入。',
  badge: '4 × 10 DEMO',
  note: '主題：你我身邊的真實日常｜台灣城市生活的片刻。人物皆為去敏 AI 示範素材；「影片」為由示範照片製作的短動態相簿，「AI後製」可直接複製提示詞再套用到自己的照片。',
  driveFolder: 'https://drive.google.com/drive/folders/1qRZZr0tV-TrCgFdoZtmIJqatX53nmNDd?usp=sharing',
  password: 'test',
  // 固定預留 8 個分類槽位。網站只顯示 enabled:true 的槽位。
  // 對應依 slot + Google Drive folderId，不依資料夾名稱，所以 Drive 資料夾可自由改名。
  folderSlots: [
    { slot: 1, id: 'everyone', label: '大家', unit: '張', kind: 'image', enabled: true, folderId: '1hUs7VJisp3gXN2HGbtGJNccNECTkwFNb' },
    { slot: 2, id: 'personal', label: '個人', unit: '張', kind: 'image', enabled: true, folderId: '1ASlI_ebySGifMj8bEcGnDM_HcQsT0uNl' },
    { slot: 3, id: 'video', label: '影片', unit: '部', kind: 'video', enabled: true, folderId: '14QXWbhr73Wu530dyN3Adqnf--_H3-sxH' },
    { slot: 4, id: 'ai', label: 'AI後製', unit: '張', kind: 'image', enabled: true, aiPrompt: true, folderId: '1ZEYJOcKX-6XHdSN9EXrc2qsAef5LmsIc' },
    { slot: 5, id: 'slot5', label: '自訂分類5', unit: '張', kind: 'image', enabled: false, folderId: '19b4CoFXdyyLAqvmf7gZEl0gBgvVVL5x6' },
    { slot: 6, id: 'slot6', label: '自訂分類6', unit: '張', kind: 'image', enabled: false, folderId: '1WwVINwyxp18bqglvEnmmOg4vF2VD9hXF' },
    { slot: 7, id: 'slot7', label: '自訂分類7', unit: '張', kind: 'image', enabled: false, folderId: '1ZManiC-BHD2BICiwl0gdOvkeEc9886kU' },
    { slot: 8, id: 'slot8', label: '自訂分類8', unit: '張', kind: 'image', enabled: false, folderId: '1s69FIqnTeEBz_UzYrv7xF2vzV1kZ330z' }
  ],
  themes: [
    { name: '鼠尾草', bg: '#f6f3ed', panel: '#fffdf9', ink: '#25302c', muted: '#6f7773', line: '#ddd8cf', accent: '#5e746a', accent2: '#b86f68', soft: '#e8eee9', hero1: '#fffdf9', hero2: '#eef2ed' },
    { name: '深海藍', bg: '#eef3f7', panel: '#fbfdff', ink: '#152637', muted: '#5d6e7f', line: '#cfdae3', accent: '#275f87', accent2: '#d07a5d', soft: '#dceaf4', hero1: '#fbfdff', hero2: '#dfeaf2' },
    { name: '奶油杏', bg: '#fff6e9', panel: '#fffdf8', ink: '#413226', muted: '#7b6b5c', line: '#eadac6', accent: '#a66a3f', accent2: '#c9505c', soft: '#f8e8d2', hero1: '#fffdf8', hero2: '#fae6ca' },
    { name: '森林綠', bg: '#eef3ee', panel: '#f9fcf8', ink: '#183127', muted: '#64766d', line: '#cfdcd2', accent: '#2f6b50', accent2: '#c47b4e', soft: '#dce9df', hero1: '#fbfdf9', hero2: '#dfeadf' },
    { name: '夜航', bg: '#111722', panel: '#192230', ink: '#eef4fb', muted: '#a6b4c4', line: '#314052', accent: '#6ea6d8', accent2: '#f1a36d', soft: '#24364a', hero1: '#1a2431', hero2: '#152334' },
    { name: '珊瑚粉', bg: '#fff0ef', panel: '#fffafa', ink: '#432b30', muted: '#826a70', line: '#eed2d6', accent: '#b75064', accent2: '#356d76', soft: '#f6dce0', hero1: '#fffafb', hero2: '#f7dce0' },
    { name: '藍灰', bg: '#f0f3f5', panel: '#fbfcfd', ink: '#27343f', muted: '#697781', line: '#d6dfe4', accent: '#536f80', accent2: '#9c6b56', soft: '#e1e8ec', hero1: '#fbfcfd', hero2: '#e5ebee' },
    { name: '葡萄紫', bg: '#f5f0f7', panel: '#fdfbfe', ink: '#37293c', muted: '#76687b', line: '#dfd4e3', accent: '#76527d', accent2: '#b76a59', soft: '#e9deec', hero1: '#fdfbfe', hero2: '#eadfed' },
    { name: '沙丘', bg: '#f4efe5', panel: '#fcfaf5', ink: '#382f25', muted: '#776b5d', line: '#ded3c2', accent: '#8b6a43', accent2: '#5d7b75', soft: '#ebe0cf', hero1: '#fcfaf5', hero2: '#eadfcf' },
    { name: '黑金', bg: '#151515', panel: '#202020', ink: '#f3eee3', muted: '#b7ad9d', line: '#3b3831', accent: '#b89a5b', accent2: '#c96c5b', soft: '#2d2a24', hero1: '#23211e', hero2: '#181817' }
  ],
  items: [
    { id:'everyone-01', category:'everyone', kind:'image', fileId:'1sCkwOlNfJhW_97ViSguc6Y-usL1bn-JA', fileName:'01-街角早餐店.jpg' },
    { id:'everyone-02', category:'everyone', kind:'image', fileId:'1aNKnTwxT3jrJ9-rarwFYogFqRvzSqoS8', fileName:'02-海線列車.jpg' },
    { id:'everyone-03', category:'everyone', kind:'image', fileId:'1p4EBpXU4YEAb6lW2RmmT0AsRQZ2KH2iE', fileName:'03-午後街角.jpg' },
    { id:'everyone-04', category:'everyone', kind:'image', fileId:'11YDmUdtsYBaTmxCl0yk9bikL3Gs0LUf8', fileName:'04-家人茶聚.jpg' },
    { id:'everyone-05', category:'everyone', kind:'image', fileId:'1pXzO2RoHb9AOkrT3M6XMjL5J-X09d_Ep', fileName:'05-夜市宵夜.jpg' },
    { id:'everyone-06', category:'everyone', kind:'image', fileId:'1IwV4aH3mCbQVqynlgf5pjVrVxMRLNlGm', fileName:'06-城市花園.jpg' },
    { id:'everyone-07', category:'everyone', kind:'image', fileId:'1XA76yNgujv3WEOFpH9S-VDM5DzLmdEZh', fileName:'07-朋友聚餐.jpg' },
    { id:'everyone-08', category:'everyone', kind:'image', fileId:'1RSWS7AkOnnggIhkZQhNnAsPNdRx0qBfv', fileName:'08-公共圖書館.jpg' },
    { id:'everyone-09', category:'everyone', kind:'image', fileId:'1QA-w9_2kNCjW6o9bkRrGxuAV-WV-9bJ5', fileName:'09-週末花市.jpg' },
    { id:'everyone-10', category:'everyone', kind:'image', fileId:'1NWjfT7BXeRi7KNXShwA_AjKHXdYWGnOi', fileName:'10-雨夜倒影.jpg' },

    { id:'personal-01', category:'personal', kind:'image', fileId:'1M5iaG_cclwuaDIsoM2QHTJ1UZ1RLWxqd', fileName:'01-早餐店女孩.jpg' },
    { id:'personal-02', category:'personal', kind:'image', fileId:'1LVQPPuPEgByYgp5FFJKdBKMutaADjDLi', fileName:'02-列車旅伴.jpg' },
    { id:'personal-03', category:'personal', kind:'image', fileId:'1JdjodtQRDck_Dt6Mlqn8F084m9yKCB6q', fileName:'03-街角女孩.jpg' },
    { id:'personal-04', category:'personal', kind:'image', fileId:'1aOJjItXA3XY3jBGRJBqyvcNUtKE-ZG2-', fileName:'04-午後茶聚.jpg' },
    { id:'personal-05', category:'personal', kind:'image', fileId:'1wSCijICsCgBSehxOGlcUrQ5488pLw4hw', fileName:'05-夜市女孩.jpg' },
    { id:'personal-06', category:'personal', kind:'image', fileId:'11zWPA8BDnuwXUxvH51E9PEI_WIM_VOGM', fileName:'06-賞花女孩.jpg' },
    { id:'personal-07', category:'personal', kind:'image', fileId:'1XC0mOIeI1_gdykACY8gwBRwogAwuj7CP', fileName:'07-聚餐朋友.jpg' },
    { id:'personal-08', category:'personal', kind:'image', fileId:'13dhuUTanQBWwZLdeEju0A3G_7kIEN71N', fileName:'08-閱讀女孩.jpg' },
    { id:'personal-09', category:'personal', kind:'image', fileId:'16GB0AlFNeAeCOVMbLDLO6RIUC_IYiIjw', fileName:'09-花市女孩.jpg' },
    { id:'personal-10', category:'personal', kind:'image', fileId:'1B6pWQw0xs_OI_JrgewBzb0IWUT4COjGS', fileName:'10-雨夜行人.jpg' },

    { id:'video-01', category:'video', kind:'video', fileId:'1z4ijUHMkpQ_AdSOJh5cVgWOvE2ZgePj4', posterFileId:'1sCkwOlNfJhW_97ViSguc6Y-usL1bn-JA', fileName:'01-早餐店晨光.mp4' },
    { id:'video-02', category:'video', kind:'video', fileId:'1xgM5F1j3f8xcP0nQEpAfTxvvfz-RrfB1', posterFileId:'1aNKnTwxT3jrJ9-rarwFYogFqRvzSqoS8', fileName:'02-海線列車.mp4' },
    { id:'video-03', category:'video', kind:'video', fileId:'1TuSkJ262K5bcjqZIEvNRt1rL7EnG0fCM', posterFileId:'1p4EBpXU4YEAb6lW2RmmT0AsRQZ2KH2iE', fileName:'03-午後街角.mp4' },
    { id:'video-04', category:'video', kind:'video', fileId:'1H8EmVOxGpDiUmoqSBaAonTrCrNoJlq-G', posterFileId:'11YDmUdtsYBaTmxCl0yk9bikL3Gs0LUf8', fileName:'04-家人茶聚.mp4' },
    { id:'video-05', category:'video', kind:'video', fileId:'1JCvnLY11VwC2B9vZjlX_CZ-Y9eCFXXsu', posterFileId:'1pXzO2RoHb9AOkrT3M6XMjL5J-X09d_Ep', fileName:'05-夜市宵夜.mp4' },
    { id:'video-06', category:'video', kind:'video', fileId:'10wHrAuwmaqK9HoCFo3ID51tgBMOj2_iQ', posterFileId:'1IwV4aH3mCbQVqynlgf5pjVrVxMRLNlGm', fileName:'06-城市花園.mp4' },
    { id:'video-07', category:'video', kind:'video', fileId:'1oYb0FuaDnHt1oFjmF3nUTlGw2xhXE4UJ', posterFileId:'1XA76yNgujv3WEOFpH9S-VDM5DzLmdEZh', fileName:'07-朋友聚餐.mp4' },
    { id:'video-08', category:'video', kind:'video', fileId:'1YYfyaYs4M-PVcMki2EBebZMGc0s4Wmzd', posterFileId:'1RSWS7AkOnnggIhkZQhNnAsPNdRx0qBfv', fileName:'08-公共圖書館.mp4' },
    { id:'video-09', category:'video', kind:'video', fileId:'1cF_7HD7e_8IwQo_b35xT9UzMdL0FsbP3', posterFileId:'1QA-w9_2kNCjW6o9bkRrGxuAV-WV-9bJ5', fileName:'09-週末花市.mp4' },
    { id:'video-10', category:'video', kind:'video', fileId:'1kYGLUfH_s07IMyE3Sa0rRLC6DK7s7koD', posterFileId:'1NWjfT7BXeRi7KNXShwA_AjKHXdYWGnOi', fileName:'10-雨夜倒影.mp4' },

    { id:'ai-01', category:'ai', kind:'image', fileId:'18gm5sB95A4SjZORchdvN8IhzohCGsZ8W', fileName:'01-日式浮世繪與現代動畫融合.jpg', prompt:'請以「日式浮世繪與現代動畫融合，墨線色塊」重新繪製這張照片。保留原本人數、人物位置、五官神韻、服裝、場景與構圖，不增刪人物、不加文字，只改整體藝術風格；人物自然好看、畫面明亮精緻。' },
    { id:'ai-02', category:'ai', kind:'image', fileId:'1Qe-jJRBJW3SLXoKLt6L3UwAYFF4bsVWU', fileName:'02-昭和復古手繪電影海報.jpg', prompt:'請以「昭和復古手繪電影海報，水粉印刷」重新繪製這張照片。保留原本人數、人物位置、五官神韻、服裝、場景與構圖，不增刪人物、不加文字，只改整體藝術風格；人物自然好看、畫面明亮精緻。' },
    { id:'ai-03', category:'ai', kind:'image', fileId:'1Cub9YurwkUW_SUfQzdzFOu4gCEWB2i-3', fileName:'03-法國新藝術運動裝飾畫.jpg', prompt:'請以「法國新藝術運動裝飾畫，曲線裝飾」重新繪製這張照片。保留原本人數、人物位置、五官神韻、服裝、場景與構圖，不增刪人物、不加文字，只改整體藝術風格；人物自然好看、畫面明亮精緻。' },
    { id:'ai-04', category:'ai', kind:'image', fileId:'1gUTGjR6hGblr8uKNjgT_xPpPIunCZFN-', fileName:'04-1950年代美式彩色漫畫.jpg', prompt:'請以「1950 年代美式彩色漫畫，漫畫網點」重新繪製這張照片。保留原本人數、人物位置、五官神韻、服裝、場景與構圖，不增刪人物、不加文字，只改整體藝術風格；人物自然好看、畫面明亮精緻。' },
    { id:'ai-05', category:'ai', kind:'image', fileId:'1gJ8q2p-P205BJ5dQWbiyBQXR2TlgonHN', fileName:'05-日系青年漫畫彩稿.jpg', prompt:'請以「日系青年漫畫彩稿，墨線水彩」重新繪製這張照片。保留原本人數、人物位置、五官神韻、服裝、場景與構圖，不增刪人物、不加文字，只改整體藝術風格；人物自然好看、畫面明亮精緻。' },
    { id:'ai-06', category:'ai', kind:'image', fileId:'1kqQ9COSKJqmVdW1xEEmru6ZFpD0mg-uj', fileName:'06-透明水彩人物肖像.jpg', prompt:'請以「透明水彩人物肖像，透明水彩」重新繪製這張照片。保留原本人數、人物位置、五官神韻、服裝、場景與構圖，不增刪人物、不加文字，只改整體藝術風格；人物自然好看、畫面明亮精緻。' },
    { id:'ai-07', category:'ai', kind:'image', fileId:'1tzgSTOf7Bgq9ZqL75Db-ovYe2Bi3qGgz', fileName:'07-三維黏土動畫電影.jpg', prompt:'請以「三維黏土動畫電影，黏土立體」重新繪製這張照片。保留原本人數、人物位置、五官神韻、服裝、場景與構圖，不增刪人物、不加文字，只改整體藝術風格；人物自然好看、畫面明亮精緻。' },
    { id:'ai-08', category:'ai', kind:'image', fileId:'1vDBDKjdMpMOJ15nj_XW-yRZLLeRhUdd4', fileName:'08-精緻紙雕立體藝術.jpg', prompt:'請以「精緻紙雕立體藝術，層疊紙雕」重新繪製這張照片。保留原本人數、人物位置、五官神韻、服裝、場景與構圖，不增刪人物、不加文字，只改整體藝術風格；人物自然好看、畫面明亮精緻。' },
    { id:'ai-09', category:'ai', kind:'image', fileId:'1WKJZDZ7WLMpj4OYgUI5219WKzvqqEPiZ', fileName:'09-彩色琉璃光影寶石鑲嵌藝術.jpg', prompt:'請以「彩色琉璃光影寶石鑲嵌藝術，明亮透光」重新繪製這張照片。保留原本人數、人物位置、五官神韻、服裝、場景與構圖，不增刪人物、不加文字，只改整體藝術風格；人物自然好看、畫面明亮精緻。' },
    { id:'ai-10', category:'ai', kind:'image', fileId:'1cK6c5rpD4pZd6K9qDVl5EYMGc7WXh7SG', fileName:'10-復古刮畫與金色墨線插畫.jpg', prompt:'請以「復古刮畫與金色墨線插畫，刮畫金線」重新繪製這張照片。保留原本人數、人物位置、五官神韻、服裝、場景與構圖，不增刪人物、不加文字，只改整體藝術風格；人物自然好看、畫面明亮精緻。' }
  ].map(item => ({
    ...item,
    src: item.kind === 'video'
      ? null
      : `https://drive.google.com/thumbnail?id=${item.fileId}&sz=w1600`,
    thumb: item.kind === 'video'
      ? null
      : `https://drive.google.com/thumbnail?id=${item.fileId}&sz=w800`,
    poster: item.posterFileId ? `https://drive.google.com/thumbnail?id=${item.posterFileId}&sz=w800` : null,
    preview: item.kind === 'video' ? `https://drive.google.com/file/d/${item.fileId}/preview` : null,
    download: `https://drive.google.com/uc?export=download&id=${item.fileId}`
  }))
};

// 相容網站 UI：只把啟用中的槽位轉成分類，並以固定 folderId 建立 Drive 對應。
window.DEMO_CONFIG.categories = window.DEMO_CONFIG.folderSlots
  .filter(slot => slot.enabled)
  .map(({ slot, id, label, unit, kind, aiPrompt = false }) => ({ slot, id, label, unit, kind, aiPrompt }));
window.DEMO_CONFIG.driveFolders = Object.fromEntries(
  window.DEMO_CONFIG.folderSlots.map(slot => [slot.id, slot.folderId])
);
