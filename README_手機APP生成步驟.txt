TKA FAMILY｜王國 3570 Android 手機 APP（GitHub Actions 產生 APK）

這個專案是 Android APP 外殼。開啟後會載入你目前已部署在 Netlify 的正式網站，
因此排行榜、Supabase、Netlify Functions、管理員登入及網站資料仍由原網站提供。
不需要把 Service Role Key 或 Supabase 密碼放進 APP/GitHub。

【先準備】
1. 確認目前網站已經能在手機瀏覽器正常開啟。
2. 複製目前 Netlify 網站網址，例如 https://你的網站名稱.netlify.app
3. 解壓本 ZIP。

【第一步：設定網站網址（必做）】
1. 用記事本或 VS Code 開啟 capacitor.config.ts。
2. 找到：
   url: 'https://請先填入你的Netlify網址.netlify.app',
3. 改成你的真實 Netlify 網址，例如：
   url: 'https://tka3570.netlify.app',
4. 保留 https://，網址結尾不要加 /。
5. 儲存檔案。

【第二步：建立 GitHub Repository】
1. 登入 https://github.com
2. 右上角 + → New repository。
3. Repository name 輸入：TKA3570-Mobile-App
4. 選 Public 或 Private 都可以。
5. 按 Create repository。

【第三步：上傳檔案】
1. 進入剛建立的 Repository。
2. 按 Add file → Upload files。
3. 將解壓後資料夾內的所有檔案及 .github 資料夾內容一起拖曳上傳。
   注意：要上傳 .github/workflows/build-android.yml；
   GitHub 網頁若看不到 .github，請使用「Add file → Create new file」建立，
   或使用 GitHub Desktop 上傳整個資料夾。
4. Commit changes。

【第四步：讓 GitHub 自動產生 APK】
1. 進入 Repository 上方 Actions。
2. 選 Build TKA FAMILY Android APK。
3. 若尚未自動執行，按 Run workflow → Run workflow。
4. 等待工作流程顯示綠色勾勾（通常需數分鐘）。
5. 點進成功的執行紀錄，往下找到 Artifacts。
6. 下載 TKA-FAMILY-Android-APK.zip。
7. 解壓後取得 app-debug.apk。

【第五步：安裝到 Android 手機】
1. 將 app-debug.apk 傳到 Android 手機。
2. 點擊 APK 安裝。
3. 若手機詢問，允許該檔案來源安裝未知應用程式。
4. 安裝完成後開啟「TKA FAMILY」。

【重要說明】
- 本包目前產生 Android 測試/側載 APK（debug APK），可安裝在 Android 手機測試。
- 這不是 Google Play 上架用的正式簽章版本；若要上架 Play 商店，還要建立簽章金鑰並設定 GitHub Secrets，產生簽章 AAB。
- iPhone 不能安裝 APK。iPhone 版本需要另外用 macOS/Xcode 建置 iOS App，並使用 Apple Developer 帳號簽署。
- APP 需要網路連線，因為它載入 Netlify 上的正式網站。
- 之後網站更新並部署到 Netlify，APP 下次開啟就會載入更新後的網站，不必每次重做 APK。
- 若更換 Netlify 網址，需修改 capacitor.config.ts 並重新跑 GitHub Actions。
- 請勿把 Supabase service_role key、Gemini API key 或任何密碼放進 GitHub 專案。

【疑難排解】
1. APP 開啟空白：檢查 capacitor.config.ts 的網址是否正確、網站是否可在手機瀏覽器開啟。
2. GitHub Actions 失敗：先打開失敗步驟的紅色錯誤訊息；常見原因是網址未改、檔案未完整上傳或 GitHub workflow 沒上傳。
3. 手機顯示無法安裝：確認下載的是解壓後的 app-debug.apk，而不是 GitHub Artifacts 外層 ZIP。
