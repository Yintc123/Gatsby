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

## Reference
<ol>
    <li>https://www.gatsbyjs.com/docs</li>
    <li>https://ithelp.ithome.com.tw/articles/10244948 （SSR）</li>
<ol>