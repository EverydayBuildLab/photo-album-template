window.DEMO_CONFIG = {
  siteName: '你我身邊・台灣日常相簿',
  subtitle: '四種相簿示範：大家、個人、影片、AI後製。每一類都有 10 個去敏示範素材；公開 DEMO 素材直接內建，客製時可改接自己的 Google Drive。',
  badge: '4 × 10 DEMO',
  note: '主題：你我身邊的真實日常｜台灣城市生活的片刻。人物皆為去敏 AI 示範素材；公開模板不綁原作者私人雲端帳號。',
  password: 'test',
  demoMode: true,
  driveFolder: '',
  // 固定預留 8 個分類槽位。網站只顯示 enabled:true 的槽位。
  // folderId 留空代表公開 DEMO 使用內建素材；客製時再填入使用者自己的 Google Drive folderId。
  folderSlots: [
    { slot: 1, id: 'everyone', label: '大家', unit: '張', kind: 'image', enabled: true, folderId: '' },
    { slot: 2, id: 'personal', label: '個人', unit: '張', kind: 'image', enabled: true, folderId: '' },
    { slot: 3, id: 'video', label: '影片', unit: '部', kind: 'video', enabled: true, folderId: '' },
    { slot: 4, id: 'ai', label: 'AI後製', unit: '張', kind: 'image', enabled: true, aiPrompt: true, folderId: '' },
    { slot: 5, id: 'slot5', label: '自訂分類5', unit: '張', kind: 'image', enabled: false, folderId: '' },
    { slot: 6, id: 'slot6', label: '自訂分類6', unit: '張', kind: 'image', enabled: false, folderId: '' },
    { slot: 7, id: 'slot7', label: '自訂分類7', unit: '張', kind: 'image', enabled: false, folderId: '' },
    { slot: 8, id: 'slot8', label: '自訂分類8', unit: '張', kind: 'image', enabled: false, folderId: '' }
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
    { id:'everyone-01', category:'everyone', kind:'image', title:'街角早餐店', date:'2026-09-10', src:'assets/demo/everyone/01.jpg', download:'assets/demo/everyone/01.jpg', sourceLabel:'DEMO', fileName:'01-街角早餐店.jpg' },
    { id:'everyone-02', category:'everyone', kind:'image', title:'海線列車', date:'2026-09-09', src:'assets/demo/everyone/02.jpg', download:'assets/demo/everyone/02.jpg', sourceLabel:'DEMO', fileName:'02-海線列車.jpg' },
    { id:'everyone-03', category:'everyone', kind:'image', title:'午後街角', date:'2026-09-08', src:'assets/demo/everyone/03.jpg', download:'assets/demo/everyone/03.jpg', sourceLabel:'DEMO', fileName:'03-午後街角.jpg' },
    { id:'everyone-04', category:'everyone', kind:'image', title:'家人茶聚', date:'2026-09-07', src:'assets/demo/everyone/04.jpg', download:'assets/demo/everyone/04.jpg', sourceLabel:'DEMO', fileName:'04-家人茶聚.jpg' },
    { id:'everyone-05', category:'everyone', kind:'image', title:'夜市宵夜', date:'2026-09-06', src:'assets/demo/everyone/05.jpg', download:'assets/demo/everyone/05.jpg', sourceLabel:'DEMO', fileName:'05-夜市宵夜.jpg' },
    { id:'everyone-06', category:'everyone', kind:'image', title:'城市花園', date:'2026-09-05', src:'assets/demo/everyone/06.jpg', download:'assets/demo/everyone/06.jpg', sourceLabel:'DEMO', fileName:'06-城市花園.jpg' },
    { id:'everyone-07', category:'everyone', kind:'image', title:'朋友聚餐', date:'2026-09-04', src:'assets/demo/everyone/07.jpg', download:'assets/demo/everyone/07.jpg', sourceLabel:'DEMO', fileName:'07-朋友聚餐.jpg' },
    { id:'everyone-08', category:'everyone', kind:'image', title:'公共圖書館', date:'2026-09-03', src:'assets/demo/everyone/08.jpg', download:'assets/demo/everyone/08.jpg', sourceLabel:'DEMO', fileName:'08-公共圖書館.jpg' },
    { id:'everyone-09', category:'everyone', kind:'image', title:'週末花市', date:'2026-09-02', src:'assets/demo/everyone/09.jpg', download:'assets/demo/everyone/09.jpg', sourceLabel:'DEMO', fileName:'09-週末花市.jpg' },
    { id:'everyone-10', category:'everyone', kind:'image', title:'雨夜倒影', date:'2026-09-01', src:'assets/demo/everyone/10.jpg', download:'assets/demo/everyone/10.jpg', sourceLabel:'DEMO', fileName:'10-雨夜倒影.jpg' },
    { id:'personal-01', category:'personal', kind:'image', title:'早餐店人物特寫', date:'2026-09-10', src:'assets/demo/personal/01.jpg', download:'assets/demo/personal/01.jpg', sourceLabel:'DEMO', fileName:'01-早餐店女孩.jpg' },
    { id:'personal-02', category:'personal', kind:'image', title:'列車旅伴特寫', date:'2026-09-09', src:'assets/demo/personal/02.jpg', download:'assets/demo/personal/02.jpg', sourceLabel:'DEMO', fileName:'02-列車旅伴.jpg' },
    { id:'personal-03', category:'personal', kind:'image', title:'街角人物特寫', date:'2026-09-08', src:'assets/demo/personal/03.jpg', download:'assets/demo/personal/03.jpg', sourceLabel:'DEMO', fileName:'03-街角女孩.jpg' },
    { id:'personal-04', category:'personal', kind:'image', title:'午後茶聚特寫', date:'2026-09-07', src:'assets/demo/personal/04.jpg', download:'assets/demo/personal/04.jpg', sourceLabel:'DEMO', fileName:'04-午後茶聚.jpg' },
    { id:'personal-05', category:'personal', kind:'image', title:'夜市人物特寫', date:'2026-09-06', src:'assets/demo/personal/05.jpg', download:'assets/demo/personal/05.jpg', sourceLabel:'DEMO', fileName:'05-夜市女孩.jpg' },
    { id:'personal-06', category:'personal', kind:'image', title:'賞花人物特寫', date:'2026-09-05', src:'assets/demo/personal/06.jpg', download:'assets/demo/personal/06.jpg', sourceLabel:'DEMO', fileName:'06-賞花女孩.jpg' },
    { id:'personal-07', category:'personal', kind:'image', title:'聚餐人物特寫', date:'2026-09-04', src:'assets/demo/personal/07.jpg', download:'assets/demo/personal/07.jpg', sourceLabel:'DEMO', fileName:'07-聚餐朋友.jpg' },
    { id:'personal-08', category:'personal', kind:'image', title:'閱讀人物特寫', date:'2026-09-03', src:'assets/demo/personal/08.jpg', download:'assets/demo/personal/08.jpg', sourceLabel:'DEMO', fileName:'08-閱讀女孩.jpg' },
    { id:'personal-09', category:'personal', kind:'image', title:'花市人物特寫', date:'2026-09-02', src:'assets/demo/personal/09.jpg', download:'assets/demo/personal/09.jpg', sourceLabel:'DEMO', fileName:'09-花市女孩.jpg' },
    { id:'personal-10', category:'personal', kind:'image', title:'雨夜人物特寫', date:'2026-09-01', src:'assets/demo/personal/10.jpg', download:'assets/demo/personal/10.jpg', sourceLabel:'DEMO', fileName:'10-雨夜行人.jpg' },
    { id:'video-01', category:'video', kind:'video', title:'早餐店晨光・動態短片', date:'2026-09-10', videoSrc:'assets/demo/video/01.mp4', poster:'assets/demo/everyone/01.jpg', download:'assets/demo/video/01.mp4', sourceLabel:'DEMO', fileName:'01-早餐店晨光.mp4' },
    { id:'video-02', category:'video', kind:'video', title:'海線列車・動態短片', date:'2026-09-09', videoSrc:'assets/demo/video/02.mp4', poster:'assets/demo/everyone/02.jpg', download:'assets/demo/video/02.mp4', sourceLabel:'DEMO', fileName:'02-海線列車.mp4' },
    { id:'video-03', category:'video', kind:'video', title:'午後街角・動態短片', date:'2026-09-08', videoSrc:'assets/demo/video/03.mp4', poster:'assets/demo/everyone/03.jpg', download:'assets/demo/video/03.mp4', sourceLabel:'DEMO', fileName:'03-午後街角.mp4' },
    { id:'video-04', category:'video', kind:'video', title:'家人茶聚・動態短片', date:'2026-09-07', videoSrc:'assets/demo/video/04.mp4', poster:'assets/demo/everyone/04.jpg', download:'assets/demo/video/04.mp4', sourceLabel:'DEMO', fileName:'04-家人茶聚.mp4' },
    { id:'video-05', category:'video', kind:'video', title:'夜市宵夜・動態短片', date:'2026-09-06', videoSrc:'assets/demo/video/05.mp4', poster:'assets/demo/everyone/05.jpg', download:'assets/demo/video/05.mp4', sourceLabel:'DEMO', fileName:'05-夜市宵夜.mp4' },
    { id:'video-06', category:'video', kind:'video', title:'城市花園・動態短片', date:'2026-09-05', videoSrc:'assets/demo/video/06.mp4', poster:'assets/demo/everyone/06.jpg', download:'assets/demo/video/06.mp4', sourceLabel:'DEMO', fileName:'06-城市花園.mp4' },
    { id:'video-07', category:'video', kind:'video', title:'朋友聚餐・動態短片', date:'2026-09-04', videoSrc:'assets/demo/video/07.mp4', poster:'assets/demo/everyone/07.jpg', download:'assets/demo/video/07.mp4', sourceLabel:'DEMO', fileName:'07-朋友聚餐.mp4' },
    { id:'video-08', category:'video', kind:'video', title:'公共圖書館・動態短片', date:'2026-09-03', videoSrc:'assets/demo/video/08.mp4', poster:'assets/demo/everyone/08.jpg', download:'assets/demo/video/08.mp4', sourceLabel:'DEMO', fileName:'08-公共圖書館.mp4' },
    { id:'video-09', category:'video', kind:'video', title:'週末花市・動態短片', date:'2026-09-02', videoSrc:'assets/demo/video/09.mp4', poster:'assets/demo/everyone/09.jpg', download:'assets/demo/video/09.mp4', sourceLabel:'DEMO', fileName:'09-週末花市.mp4' },
    { id:'video-10', category:'video', kind:'video', title:'雨夜倒影・動態短片', date:'2026-09-01', videoSrc:'assets/demo/video/10.mp4', poster:'assets/demo/everyone/10.jpg', download:'assets/demo/video/10.mp4', sourceLabel:'DEMO', fileName:'10-雨夜倒影.mp4' },
    { id:'ai-01', category:'ai', kind:'image', title:'日式浮世繪 × 現代動畫', date:'2026-09-10', src:'assets/demo/ai/01.jpg', download:'assets/demo/ai/01.jpg', sourceLabel:'DEMO', fileName:'01-日式浮世繪與現代動畫融合.jpg', prompt:'請以「日式浮世繪與現代動畫融合，墨線色塊」重新繪製這張照片。保留原本人數、人物位置、五官神韻、服裝、場景與構圖，不增刪人物、不加文字，只改整體藝術風格；人物自然好看、畫面明亮精緻。' },
    { id:'ai-02', category:'ai', kind:'image', title:'昭和復古手繪電影海報', date:'2026-09-09', src:'assets/demo/ai/02.jpg', download:'assets/demo/ai/02.jpg', sourceLabel:'DEMO', fileName:'02-昭和復古手繪電影海報.jpg', prompt:'請以「昭和復古手繪電影海報，水粉印刷」重新繪製這張照片。保留原本人數、人物位置、五官神韻、服裝、場景與構圖，不增刪人物、不加文字，只改整體藝術風格；人物自然好看、畫面明亮精緻。' },
    { id:'ai-03', category:'ai', kind:'image', title:'法國新藝術運動裝飾畫', date:'2026-09-08', src:'assets/demo/ai/03.jpg', download:'assets/demo/ai/03.jpg', sourceLabel:'DEMO', fileName:'03-法國新藝術運動裝飾畫.jpg', prompt:'請以「法國新藝術運動裝飾畫，曲線裝飾」重新繪製這張照片。保留原本人數、人物位置、五官神韻、服裝、場景與構圖，不增刪人物、不加文字，只改整體藝術風格；人物自然好看、畫面明亮精緻。' },
    { id:'ai-04', category:'ai', kind:'image', title:'1950年代美式彩色漫畫', date:'2026-09-07', src:'assets/demo/ai/04.jpg', download:'assets/demo/ai/04.jpg', sourceLabel:'DEMO', fileName:'04-1950年代美式彩色漫畫.jpg', prompt:'請以「1950 年代美式彩色漫畫，漫畫網點」重新繪製這張照片。保留原本人數、人物位置、五官神韻、服裝、場景與構圖，不增刪人物、不加文字，只改整體藝術風格；人物自然好看、畫面明亮精緻。' },
    { id:'ai-05', category:'ai', kind:'image', title:'日系青年漫畫彩稿', date:'2026-09-06', src:'assets/demo/ai/05.jpg', download:'assets/demo/ai/05.jpg', sourceLabel:'DEMO', fileName:'05-日系青年漫畫彩稿.jpg', prompt:'請以「日系青年漫畫彩稿，墨線水彩」重新繪製這張照片。保留原本人數、人物位置、五官神韻、服裝、場景與構圖，不增刪人物、不加文字，只改整體藝術風格；人物自然好看、畫面明亮精緻。' },
    { id:'ai-06', category:'ai', kind:'image', title:'透明水彩人物肖像', date:'2026-09-05', src:'assets/demo/ai/06.jpg', download:'assets/demo/ai/06.jpg', sourceLabel:'DEMO', fileName:'06-透明水彩人物肖像.jpg', prompt:'請以「透明水彩人物肖像，透明水彩」重新繪製這張照片。保留原本人數、人物位置、五官神韻、服裝、場景與構圖，不增刪人物、不加文字，只改整體藝術風格；人物自然好看、畫面明亮精緻。' },
    { id:'ai-07', category:'ai', kind:'image', title:'三維黏土動畫電影', date:'2026-09-04', src:'assets/demo/ai/07.jpg', download:'assets/demo/ai/07.jpg', sourceLabel:'DEMO', fileName:'07-三維黏土動畫電影.jpg', prompt:'請以「三維黏土動畫電影，黏土立體」重新繪製這張照片。保留原本人數、人物位置、五官神韻、服裝、場景與構圖，不增刪人物、不加文字，只改整體藝術風格；人物自然好看、畫面明亮精緻。' },
    { id:'ai-08', category:'ai', kind:'image', title:'精緻紙雕立體藝術', date:'2026-09-03', src:'assets/demo/ai/08.jpg', download:'assets/demo/ai/08.jpg', sourceLabel:'DEMO', fileName:'08-精緻紙雕立體藝術.jpg', prompt:'請以「精緻紙雕立體藝術，層疊紙雕」重新繪製這張照片。保留原本人數、人物位置、五官神韻、服裝、場景與構圖，不增刪人物、不加文字，只改整體藝術風格；人物自然好看、畫面明亮精緻。' },
    { id:'ai-09', category:'ai', kind:'image', title:'彩色琉璃光影寶石鑲嵌', date:'2026-09-02', src:'assets/demo/ai/09.jpg', download:'assets/demo/ai/09.jpg', sourceLabel:'DEMO', fileName:'09-彩色琉璃光影寶石鑲嵌藝術.jpg', prompt:'請以「彩色琉璃光影寶石鑲嵌藝術，明亮透光」重新繪製這張照片。保留原本人數、人物位置、五官神韻、服裝、場景與構圖，不增刪人物、不加文字，只改整體藝術風格；人物自然好看、畫面明亮精緻。' },
    { id:'ai-10', category:'ai', kind:'image', title:'復古刮畫 × 金色墨線', date:'2026-09-01', src:'assets/demo/ai/10.jpg', download:'assets/demo/ai/10.jpg', sourceLabel:'DEMO', fileName:'10-復古刮畫與金色墨線插畫.jpg', prompt:'請以「復古刮畫與金色墨線插畫，刮畫金線」重新繪製這張照片。保留原本人數、人物位置、五官神韻、服裝、場景與構圖，不增刪人物、不加文字，只改整體藝術風格；人物自然好看、畫面明亮精緻。' },
  ]
};

// 相容網站 UI：只把啟用中的槽位轉成分類；客製成 Google Drive 版本時再填入 folderId。
window.DEMO_CONFIG.categories = window.DEMO_CONFIG.folderSlots
  .filter(slot => slot.enabled)
  .map(({ slot, id, label, unit, kind, aiPrompt = false }) => ({ slot, id, label, unit, kind, aiPrompt }));
window.DEMO_CONFIG.driveFolders = Object.fromEntries(
  window.DEMO_CONFIG.folderSlots.map(slot => [slot.id, slot.folderId])
);
