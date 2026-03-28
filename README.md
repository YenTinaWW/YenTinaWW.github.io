# 個人網站與作品集 (Personal Portfolio)

這是一個具備極簡風格、雙語切換功能，並融入侘寂美學 (Wabi-Sabi) 與現代毛玻璃質感的個人網站。

---

## 🛠 搭建此網頁使用的技術 (Technologies Used)
- **前端開發框架**: React.js (由 Vite 驅動，提供極速的啟動與編譯體驗)
- **多頁面路由**: React Router DOM (使用 `HashRouter` 模式，確保網站透過 GitHub Pages 發布時不會產生路由 404 問題)
- **樣式與響應式排版**: Vanilla CSS (純原生 CSS 完全客製化，打造獨特的漸層、玻璃立體圓潤設計，未使用外部龐大的 CSS 框架)
- **向量圖示庫**: Lucide React
- **靜態部署解決方案**: GitHub Pages (`gh-pages` 套件)

---

## 📝 如何更改文字與資料內容

本網頁的架構支援在地化的「中/英雙語切換」。在修改任何文字時，請記得**同時更新該檔案內的 `en` (英文) 以及 `zh` (中文)** 屬性，確保語言切換功能正常運作。

### 1. 修改首頁與介面文字 (如 Header, Hero 等組件)
介面上的固定文字大部分都存放在該組件 (Component) 的檔案內部。
- **頂部導覽列 (Header)**：`src/components/Header.jsx` (可修改選單名稱如 Home, Projects)
- **首頁橫幅與自我介紹 (Hero)**：`src/components/Hero.jsx` (修改您的名字、簡歷內容與歡迎標語)
- **聯絡我區塊 (Contact)**：`src/components/Contact.jsx` (修改聯絡理念、社交連結的文字)
- **頁尾版權 (Footer)**：`src/components/Footer.jsx`

> 💡 **修改方式範例**：打開上述檔案，尋找 `const content = { ... }` 字典，並直接更改引號內的文字即可。

### 2. 如何新增作品集 (Projects)
作品集的資料已統一提取到獨立的數據檔案中，您可以非常方便地新增或隱藏作品，且能夠自由篩選分類。
- **修改檔案位置**：`src/data/projects.js`
- **新增步驟**：
  在對應語言 (`en` 與 `zh`) 的陣列中，依原格式加入一個新的物件。例如：
  ```javascript
  {
    id: 6,                     // 給予不重複的 id 編號
    category: 'app dev',       // 分類標籤 (對應頂部的篩選器，如: app dev, ai, design)
    title: '您的專案名稱',      
    description: '專案的詳細敘述。',
    tags: ['React', 'CSS'],    // 顯示在該卡片左下角的技術標籤陣列
    featured: true             // 非常重要！若設為 true，該專案就會同步出現在首頁的「精選作品」中
  }
  ```

### 3. 如何新增技術筆記與部落格 (Blog)
與作品集相同，部落格文章也由專屬的資料檔統一管理。
- **修改檔案位置**：`src/data/blog.js`
- **新增步驟**：
  在對應語言區塊中加入新的文章物件。例如：
  ```javascript
  {
    id: 4,
    date: '2025-11-20',
    title: '文章標題',
    summary: '放在清單上預覽的文章摘要敘述...',
    readTime: '5 min read'     // 中文版可以對應改寫為 '5 分鐘閱讀'
  }
  ```

### 4. 調整整體顏色與視覺風格
如果您未來想要微調網站的背景底色、字體顏色或是按鈕的漸層色：
- **修改檔案位置**：`src/index.css`
只需在檔案最上方的 `:root { ... }` 區塊中，修改原本設定好的色碼 (如 `--bg-primary`, `--accent-secondary`)，整份網站就會套用最新的顏色配置了！

---

## 👩‍💻 開發與部署指令說明

- `npm run dev`：在本地電腦上啟動開發伺服器，並即時預覽您修改的內容。
- `npm run build`：將網頁全部打包、優化並壓縮（如果只是一般發布不需特別單獨執行這步）。
- `npm run deploy`：將網站的最新版本**正式發布並推送到您的 GitHub Pages 上**，這是您最後完成修改後一定要下的指令！

---

### ⚠️ 首次發布 GitHub Pages 注意事項

如果是**第一次**發佈到 `<帳號>.github.io` 此類型的個人專案，如果執行 deploy 後，點進去專屬網址只看到這份 README 純文字文件，而不是網頁畫面，請至 GitHub 進行以下設定：

1. 開啟瀏覽器進入您的 GitHub 專案倉庫頁面 (例如: `https://github.com/您的帳號/您的帳號.github.io`)。
2. 點擊上方的 **Settings (設定)** 標籤。
3. 在左側選單中往下滑，點選 **Pages (頁面)**。
4. 找到 **Build and deployment** 區塊，將 Source 確認選為 `Deploy from a branch`。
5. 在下方的 **Branch** 選單中，將預設的 `main` 切換為 **`gh-pages`**，後面的資料夾維持 `/ (root)`，然後點擊旁邊的 **Save (儲存)**。
6. GitHub 在您按下儲存後會進行背景部署，請大約等待 1-3 分鐘後重新整理您的專屬網址，就能看見漂亮的網站了！
