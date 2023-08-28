const n=JSON.parse('{"key":"v-d4d7431e","path":"/posts/rust/rust%E9%A1%B9%E7%9B%AE/blog/2.html","title":"","lang":"zh-CN","frontmatter":{"description":"设置数据库 -- 用于存储文章数据 CREATE TABLE articles( id SERIAL NOT NULL, title character varying(255) NOT NULL, content text NOT NULL, date date NOT NULL DEFAULT CURRENT_DATE, PRIMARY KEY(id) ); -- 用于存储文章的评论数据 CREATE TABLE comments( id SERIAL NOT NULL, user_id integer NOT NULL, content character varying(1024) NOT NULL, date date NOT NULL DEFAULT CURRENT_DATE, article integer NOT NULL, PRIMARY KEY(id) ); -- 用于存储使用 Github 登录过的用户信息 CREATE TABLE users( id integer NOT NULL, name character varying(255) NOT NULL, avatar_url character varying(255) NOT NULL, PRIMARY KEY(id) );","head":[["meta",{"property":"og:url","content":"https://zhangyufeng19988.github.io/zyf/posts/rust/rust%E9%A1%B9%E7%9B%AE/blog/2.html"}],["meta",{"property":"og:description","content":"设置数据库 -- 用于存储文章数据 CREATE TABLE articles( id SERIAL NOT NULL, title character varying(255) NOT NULL, content text NOT NULL, date date NOT NULL DEFAULT CURRENT_DATE, PRIMARY KEY(id) ); -- 用于存储文章的评论数据 CREATE TABLE comments( id SERIAL NOT NULL, user_id integer NOT NULL, content character varying(1024) NOT NULL, date date NOT NULL DEFAULT CURRENT_DATE, article integer NOT NULL, PRIMARY KEY(id) ); -- 用于存储使用 Github 登录过的用户信息 CREATE TABLE users( id integer NOT NULL, name character varying(255) NOT NULL, avatar_url character varying(255) NOT NULL, PRIMARY KEY(id) );"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"ZYF"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"ZYF\\",\\"url\\":\\"https://zhangyufeng19989.github.io\\",\\"email\\":\\"907392790@qq.com\\"}]}"]]},"headers":[{"level":2,"title":"设置数据库","slug":"设置数据库","link":"#设置数据库","children":[]},{"level":2,"title":"读取文章并以JSON格式返回给客户端","slug":"读取文章并以json格式返回给客户端","link":"#读取文章并以json格式返回给客户端","children":[{"level":3,"title":"读取文章","slug":"读取文章","link":"#读取文章","children":[]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":2.18,"words":655},"filePathRelative":"posts/rust/rust项目/blog/2.md","excerpt":"<h2> 设置数据库</h2>\\n<div class=\\"language-sql line-numbers-mode\\" data-ext=\\"sql\\"><pre class=\\"language-sql\\"><code><span class=\\"token comment\\">-- 用于存储文章数据</span>\\n\\n<span class=\\"token keyword\\">CREATE</span> <span class=\\"token keyword\\">TABLE</span>\\n    articles<span class=\\"token punctuation\\">(</span>\\n        id <span class=\\"token keyword\\">SERIAL</span> <span class=\\"token operator\\">NOT</span> <span class=\\"token boolean\\">NULL</span><span class=\\"token punctuation\\">,</span>\\n        title <span class=\\"token keyword\\">character</span> <span class=\\"token keyword\\">varying</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">255</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">NOT</span> <span class=\\"token boolean\\">NULL</span><span class=\\"token punctuation\\">,</span>\\n        content <span class=\\"token keyword\\">text</span> <span class=\\"token operator\\">NOT</span> <span class=\\"token boolean\\">NULL</span><span class=\\"token punctuation\\">,</span>\\n        <span class=\\"token keyword\\">date</span> <span class=\\"token keyword\\">date</span> <span class=\\"token operator\\">NOT</span> <span class=\\"token boolean\\">NULL</span> <span class=\\"token keyword\\">DEFAULT</span> <span class=\\"token keyword\\">CURRENT_DATE</span><span class=\\"token punctuation\\">,</span>\\n        <span class=\\"token keyword\\">PRIMARY</span> <span class=\\"token keyword\\">KEY</span><span class=\\"token punctuation\\">(</span>id<span class=\\"token punctuation\\">)</span>\\n    <span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token comment\\">-- 用于存储文章的评论数据</span>\\n\\n<span class=\\"token keyword\\">CREATE</span> <span class=\\"token keyword\\">TABLE</span>\\n    comments<span class=\\"token punctuation\\">(</span>\\n        id <span class=\\"token keyword\\">SERIAL</span> <span class=\\"token operator\\">NOT</span> <span class=\\"token boolean\\">NULL</span><span class=\\"token punctuation\\">,</span>\\n        user_id <span class=\\"token keyword\\">integer</span> <span class=\\"token operator\\">NOT</span> <span class=\\"token boolean\\">NULL</span><span class=\\"token punctuation\\">,</span>\\n        content <span class=\\"token keyword\\">character</span> <span class=\\"token keyword\\">varying</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">1024</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">NOT</span> <span class=\\"token boolean\\">NULL</span><span class=\\"token punctuation\\">,</span>\\n        <span class=\\"token keyword\\">date</span> <span class=\\"token keyword\\">date</span> <span class=\\"token operator\\">NOT</span> <span class=\\"token boolean\\">NULL</span> <span class=\\"token keyword\\">DEFAULT</span> <span class=\\"token keyword\\">CURRENT_DATE</span><span class=\\"token punctuation\\">,</span>\\n        article <span class=\\"token keyword\\">integer</span> <span class=\\"token operator\\">NOT</span> <span class=\\"token boolean\\">NULL</span><span class=\\"token punctuation\\">,</span>\\n        <span class=\\"token keyword\\">PRIMARY</span> <span class=\\"token keyword\\">KEY</span><span class=\\"token punctuation\\">(</span>id<span class=\\"token punctuation\\">)</span>\\n    <span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token comment\\">-- 用于存储使用 Github 登录过的用户信息</span>\\n\\n<span class=\\"token keyword\\">CREATE</span> <span class=\\"token keyword\\">TABLE</span>\\n    users<span class=\\"token punctuation\\">(</span>\\n        id <span class=\\"token keyword\\">integer</span> <span class=\\"token operator\\">NOT</span> <span class=\\"token boolean\\">NULL</span><span class=\\"token punctuation\\">,</span>\\n        name <span class=\\"token keyword\\">character</span> <span class=\\"token keyword\\">varying</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">255</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">NOT</span> <span class=\\"token boolean\\">NULL</span><span class=\\"token punctuation\\">,</span>\\n        avatar_url <span class=\\"token keyword\\">character</span> <span class=\\"token keyword\\">varying</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">255</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">NOT</span> <span class=\\"token boolean\\">NULL</span><span class=\\"token punctuation\\">,</span>\\n        <span class=\\"token keyword\\">PRIMARY</span> <span class=\\"token keyword\\">KEY</span><span class=\\"token punctuation\\">(</span>id<span class=\\"token punctuation\\">)</span>\\n    <span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};
