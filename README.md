# Gatsby
Gatsby 為靜態網頁開發工具，使用 React 作為前端開發框架並且整合查詢語言 GraphQL 處理資料。
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

註：由於 React 的特性，以上渲染方式皆支援 Client-Side Rendering（CSR）。
## Search Engine Optimization（SEO）
SEO 為搜尋引擎最佳化，SEO 能使網站的搜尋排名變好並且提升網站的能見度與流量。Google 會使用 Googlebot（網路檢索器）對網頁進行<a href="https://developers.google.com/search/docs/fundamentals/how-search-works?hl=en#crawling">檢索（crawling）</a>及對網頁內容分析並且<a href="https://developers.google.com/search/docs/fundamentals/how-search-works?hl=en#indexing">建立索引（indexing）</a>。
<br/>
<br/>
Googlebot 檢索 CSR 的網頁則會有無法解析網頁內容的疑慮，<a href="https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics?hl=en#how-googlebot-processes-javascript">由於初始的 HTML 並未有完整的網頁內容，此時 Google 就必須執行 JavaScript 才能查看產生的實際網頁內容</a>。

## Reference
<ol>
    <li>https://www.gatsbyjs.com/docs</li>
    <li>https://ithelp.ithome.com.tw/articles/10244948 （SSR）</li>
    <li>https://shubo.io/rendering-patterns/#ssr-server-side-rendering （SSR）</li>
    <li>https://progressbar.tw/posts/297 （SEO）</li>
    <li>https://developers.google.com/search/docs/fundamentals/seo-starter-guide?hl=zh-tw （SEO）</li>
    <li>https://progressbar.tw/posts/247 （SEO）</li>
<ol>