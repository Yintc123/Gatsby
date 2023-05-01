# Gatsby
Gatsby 為 Jamstack 架構的靜態網頁開發工具，以 React 作為前端開發框架並且整合查詢語言 GraphQL 處理資料。
## <a href="https://jamstack.org/">Jamstack</a>
Jamstack 為一種網站開發架構，其中 Jam 分別代表 JavaScript, APIs, Markup。
- JavaScript：在瀏覽器運作的 JavaScript（Client-side JavaScript）動態渲染網頁內容及與使用者互動。
- APIs：使用第三方的 API 服務。
- HTML Markup：預先渲染完成的 HTML。（靜態檔案）
### Principles
- <a href="https://jamstack.org/glossary/pre-render/">預先渲染（Pre-rendering）</a>：使用 Static Site Generation（SSG）技術，於編譯期（build time）就將網頁渲染完成。
- <a href="https://jamstack.org/glossary/decoupling/">解耦合（Decouple）</a>：前端與後端僅須透過 API 溝通及傳遞資料，使開發者可以專注於前端或後端開發。
### <a href="https://jamstack.org/why-jamstack/">Benefits</a>
- 速度：網頁伺服器僅須直接回應已渲染完成的靜態檔案，不需做資料處理後再渲染 HTML 檔案，響應速度相較 Server-Side Rendering（SSR）的單體式網站架構（monolithic architectures）快。
- 部署彈性：靜態檔案不僅可以部署在網頁伺服器上，也能放置於物件儲存服務（如 GCP 的 Cloud storage）透過內容傳遞網路（Content Delivery Network，CDN）取得靜態網頁。
- 開發體驗：前後端分離的特性，使開發者可以專注於前端或後端開發。
- 安全性：使用 CDN 或是網站伺服器不需要處理資料可以避免伺服器攻擊（Server-Side Includes (SSI) Injection）以及資料庫攻擊（SQL Injection）。
- 維護性：部署的複雜度低甚至能直接放置於物件儲存服務中，相較 SSR 網站架構的維護性低。

註：Jamstack 架構的網站仍可能受到 XSS （Cross-Site Script）攻擊。
## Rendering
Gatsby 能選擇使用以下三種方式渲染網頁：
- <a href="https://www.gatsbyjs.com/docs/conceptual/rendering-options/#static-site-generation-ssg">
    Static Site Generation（SSG）
  </a>：預設的渲染方式，於編譯期（build time）就將網頁渲染完成。
- <a href="https://www.gatsbyjs.com/docs/conceptual/rendering-options/#deferred-static-generation-dsg">
    Deferred Static Generation（DSG）
  </a>：延遲靜態網頁生成。開發者選定特定頁面先不編譯，待瀏覽器對該特定頁面送出請求時再進行編譯動作。（適用於網頁架構龐大時使用）
- <a href="https://www.gatsbyjs.com/docs/conceptual/rendering-options/#server-side-rendering-ssr">
    Server-Side Rendering（SSR）
  </a>：伺服器端渲染，伺服器收到瀏覽器的請求之後，在伺服器端渲染完成後再回傳給瀏覽器。

註：於本地端（Local）開發時，Gatsby 以 <a href="https://developers.google.com/search/docs/crawling-indexing/googlebot?hl=en">Client-Side Rendering（CSR）</a>的方式渲染網頁。
## Search Engine Optimization（SEO）
SEO 為搜尋引擎最佳化，SEO 能使網站的搜尋排名變好並且提升網站的能見度與流量。Google 會使用 <a href="https://developers.google.com/search/docs/crawling-indexing/googlebot?hl=en">Googlebot（網路檢索器）</a>對網頁進行<a href="https://developers.google.com/search/docs/fundamentals/how-search-works?hl=en#crawling">檢索（crawling）</a>及對網頁內容分析並且<a href="https://developers.google.com/search/docs/fundamentals/how-search-works?hl=en#indexing">建立索引（indexing）</a>。
<br/>
<br/>
Googlebot 檢索 CSR 的網頁有無法解析網頁內容的疑慮，由於初始的 HTML 並未有完整的網頁內容，<a href="https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics?hl=en#how-googlebot-processes-javascript">此時 Google 就必須執行 JavaScript 才能查看產生的實際網頁內容</a>。
<br/>
<br/>
使用 Gatsby 開發網頁則可以避免此疑慮，由於 Gatsby 預設使用 SSG 的渲染方式，於編譯期就將 React 開發的網頁元件（components）檔和 CSS 檔預先渲染成一 HTML 並且依據每個網頁頁面製成各頁面的 HTML 檔；而 <a href="https://www.gatsbyjs.com/blog/how-does-deferred-static-generation-affect-seo/#gatsby-skip-here">DSG 的渲染方式</a>未預先渲染選定的頁面，網站伺服器於第一次收到該特定頁面的請求才開始編譯並渲染（如同 SSR 的運作機制），會導致載入的時間較 SSG 稍久，可能影響到 SEO 的結果。

## Reference
<ol>
    <li>https://www.gatsbyjs.com/docs</li>
    <li>https://simonallen.coderbridge.io/2021/07/23/what-is-jamstack/ （Jamstack）</li>
    <li>https://ithelp.ithome.com.tw/articles/10235208 （Jamstack）</li>
    <li>https://www.youtube.com/watch?v=2mnNuTCAGkI （Jamstack）</li>
    <li>https://www.youtube.com/watch?v=Y8PXMbr0Kqo （Jamstck）</li>
    <li>https://ithelp.ithome.com.tw/articles/10244948 （SSR）</li>
    <li>https://shubo.io/rendering-patterns/#ssr-server-side-rendering （SSR）</li>
    <li>https://ithelp.ithome.com.tw/articles/10266781 （CSR-SEO）</li>
    <li>https://progressbar.tw/posts/297 （SEO）</li>
    <li>https://developers.google.com/search/docs/fundamentals/seo-starter-guide?hl=zh-tw （SEO）</li>
    <li>https://progressbar.tw/posts/247 （SEO）</li>
<ol>