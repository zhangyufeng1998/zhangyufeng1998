const e=JSON.parse('{"key":"v-5c10d818","path":"/posts/rust/rust%E5%85%A5%E9%97%A8/7-Package.html","title":"7.Package,Crate,Module","lang":"zh-CN","frontmatter":{"title":"7.Package,Crate,Module","date":"2023-05-11T00:00:00.000Z","icon":"rust","category":"rust","description":"7.1 Package,Crate,定义Module Rust的代码组织 代码组织主要包括 那些细节可以暴露，哪些细节是私有的 作用域内哪些名称有效 模块系统 Package（包） Cargo的特性，让你构建、测试、共享crate Crate（单元包） 一个模块树，它可以产生一个library或可执行文件 Module（模块） use让你控制代码的组织、作用域、私有路径 Path（路径） 为struct、function、module等命名的方式","head":[["meta",{"property":"og:url","content":"https://zhangyufeng19988.github.io/zyf/posts/rust/rust%E5%85%A5%E9%97%A8/7-Package.html"}],["meta",{"property":"og:title","content":"7.Package,Crate,Module"}],["meta",{"property":"og:description","content":"7.1 Package,Crate,定义Module Rust的代码组织 代码组织主要包括 那些细节可以暴露，哪些细节是私有的 作用域内哪些名称有效 模块系统 Package（包） Cargo的特性，让你构建、测试、共享crate Crate（单元包） 一个模块树，它可以产生一个library或可执行文件 Module（模块） use让你控制代码的组织、作用域、私有路径 Path（路径） 为struct、function、module等命名的方式"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-22T03:59:03.000Z"}],["meta",{"property":"article:author","content":"ZYF"}],["meta",{"property":"article:published_time","content":"2023-05-11T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-22T03:59:03.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"7.Package,Crate,Module\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-05-11T00:00:00.000Z\\",\\"dateModified\\":\\"2023-05-22T03:59:03.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"ZYF\\",\\"url\\":\\"https://zhangyufeng19989.github.io\\",\\"email\\":\\"907392790@qq.com\\"}]}"]]},"headers":[{"level":2,"title":"7.1 Package,Crate,定义Module","slug":"_7-1-package-crate-定义module","link":"#_7-1-package-crate-定义module","children":[{"level":3,"title":"Rust的代码组织","slug":"rust的代码组织","link":"#rust的代码组织","children":[]},{"level":3,"title":"Package和Crate","slug":"package和crate","link":"#package和crate","children":[]},{"level":3,"title":"Cargo的惯例","slug":"cargo的惯例","link":"#cargo的惯例","children":[]},{"level":3,"title":"Crate 的作用","slug":"crate-的作用","link":"#crate-的作用","children":[]},{"level":3,"title":"定义moudle来控制作用域和私有性","slug":"定义moudle来控制作用域和私有性","link":"#定义moudle来控制作用域和私有性","children":[]}]},{"level":2,"title":"7.2 路径Path","slug":"_7-2-路径path","link":"#_7-2-路径path","children":[{"level":3,"title":"Path","slug":"path","link":"#path","children":[]},{"level":3,"title":"私有边界（privacy boundary）","slug":"私有边界-privacy-boundary","link":"#私有边界-privacy-boundary","children":[]},{"level":3,"title":"pub关键字","slug":"pub关键字","link":"#pub关键字","children":[]},{"level":3,"title":"super关键字","slug":"super关键字","link":"#super关键字","children":[]},{"level":3,"title":"pub struct","slug":"pub-struct","link":"#pub-struct","children":[]},{"level":3,"title":"pub enum","slug":"pub-enum","link":"#pub-enum","children":[]}]},{"level":2,"title":"7.3 use关键字","slug":"_7-3-use关键字","link":"#_7-3-use关键字","children":[{"level":3,"title":"use的习惯用法","slug":"use的习惯用法","link":"#use的习惯用法","children":[]},{"level":3,"title":"as 关键字","slug":"as-关键字","link":"#as-关键字","children":[]},{"level":3,"title":"使用pub use重新导出名称","slug":"使用pub-use重新导出名称","link":"#使用pub-use重新导出名称","children":[]},{"level":3,"title":"使用外部包","slug":"使用外部包","link":"#使用外部包","children":[]},{"level":3,"title":"使用嵌套路径来清理大量的use语句","slug":"使用嵌套路径来清理大量的use语句","link":"#使用嵌套路径来清理大量的use语句","children":[]},{"level":3,"title":"通配符*","slug":"通配符","link":"#通配符","children":[]}]},{"level":2,"title":"7.4 将模块拆分为不同的文件","slug":"_7-4-将模块拆分为不同的文件","link":"#_7-4-将模块拆分为不同的文件","children":[{"level":3,"title":"将模块内容移动到其他文件","slug":"将模块内容移动到其他文件","link":"#将模块内容移动到其他文件","children":[]}]}],"git":{"createdTime":1684727943000,"updatedTime":1684727943000,"contributors":[{"name":"zyf","email":"907392790@qq.com","commits":1}]},"readingTime":{"minutes":4.71,"words":1413},"filePathRelative":"posts/rust/rust入门/7-Package.md","localizedDate":"2023年5月11日","excerpt":"<h2> 7.1 Package,Crate,定义Module</h2>\\n<h3> Rust的代码组织</h3>\\n<ul>\\n<li>代码组织主要包括\\n<ul>\\n<li>那些细节可以暴露，哪些细节是私有的</li>\\n<li>作用域内哪些名称有效</li>\\n</ul>\\n</li>\\n<li>模块系统\\n<ul>\\n<li><mark>Package（包）</mark> Cargo的特性，让你构建、测试、共享crate</li>\\n<li><mark>Crate（单元包）</mark> 一个模块树，它可以产生一个library或可执行文件</li>\\n<li><mark>Module（模块）</mark> use让你控制代码的组织、作用域、私有路径</li>\\n<li><mark>Path（路径）</mark> 为struct、function、module等命名的方式</li>\\n</ul>\\n</li>\\n</ul>","autoDesc":true}');export{e as data};
