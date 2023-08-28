const n=JSON.parse('{"key":"v-2c13802e","path":"/posts/%E7%AE%97%E6%B3%95%E5%9F%BA%E7%A1%80/%E6%90%9C%E7%B4%A2%E4%B8%8E%E5%9B%BE%E8%AE%BA/BFS.html","title":"BFS","lang":"zh-CN","frontmatter":{"title":"BFS","date":"2023-06-04T00:00:00.000Z","icon":"bit","description":"最短路 搜索所有距离为1的点 搜索所有距离为2的点 搜索所有距离为3的点 ... DP问题可以看成一种特殊的最短路问题 例子 走迷宫 #include &lt;iostream&gt; #include &lt;algorithm&gt; #include &lt;cstring&gt; using namespace std; typedef pair&lt;int, int&gt; PII; const int N = 110; int n, m; int g[N][N]; // 存储地图 int d[N][N]; // 每一个点到起点的距离 PII q[N * N]; // 队列 int bfs() { int hh = 0, tt = 0; // 队列头和队列尾 q[0] = {0, 0}; // 起点 memset(d, -1, sizeof d); // 初始化所有点到起点的距离为-1 d[0][0] = 0; // 起点到起点的距离为0 int dy[4] = {0, 1, 0, -1}; int dx[4] = {-1, 0, 1, 0}; // 方向数组 while (hh &lt;= tt) { auto t = q[hh++]; for (int i = 0; i &lt; 4; i++) { int x = t.first + dx[i], y = t.second + dy[i]; if (x &gt;= 0 &amp;&amp; x &lt; n &amp;&amp; y &gt;= 0 &amp;&amp; y &lt; m &amp;&amp; g[x][y] == 0 &amp;&amp; d[x][y] == -1) { d[x][y] = d[t.first][t.second] + 1; q[++tt] = {x, y}; } } } return d[n - 1][m - 1]; } int main() { cin &gt;&gt; n &gt;&gt; m; for (int i = 0; i &lt; n; i++) for (int j = 0; j &lt; m; j++) cin &gt;&gt; g[i][j]; cout &lt;&lt; bfs() &lt;&lt; endl; return 0; }","head":[["meta",{"property":"og:url","content":"https://zhangyufeng19988.github.io/zyf/posts/%E7%AE%97%E6%B3%95%E5%9F%BA%E7%A1%80/%E6%90%9C%E7%B4%A2%E4%B8%8E%E5%9B%BE%E8%AE%BA/BFS.html"}],["meta",{"property":"og:title","content":"BFS"}],["meta",{"property":"og:description","content":"最短路 搜索所有距离为1的点 搜索所有距离为2的点 搜索所有距离为3的点 ... DP问题可以看成一种特殊的最短路问题 例子 走迷宫 #include &lt;iostream&gt; #include &lt;algorithm&gt; #include &lt;cstring&gt; using namespace std; typedef pair&lt;int, int&gt; PII; const int N = 110; int n, m; int g[N][N]; // 存储地图 int d[N][N]; // 每一个点到起点的距离 PII q[N * N]; // 队列 int bfs() { int hh = 0, tt = 0; // 队列头和队列尾 q[0] = {0, 0}; // 起点 memset(d, -1, sizeof d); // 初始化所有点到起点的距离为-1 d[0][0] = 0; // 起点到起点的距离为0 int dy[4] = {0, 1, 0, -1}; int dx[4] = {-1, 0, 1, 0}; // 方向数组 while (hh &lt;= tt) { auto t = q[hh++]; for (int i = 0; i &lt; 4; i++) { int x = t.first + dx[i], y = t.second + dy[i]; if (x &gt;= 0 &amp;&amp; x &lt; n &amp;&amp; y &gt;= 0 &amp;&amp; y &lt; m &amp;&amp; g[x][y] == 0 &amp;&amp; d[x][y] == -1) { d[x][y] = d[t.first][t.second] + 1; q[++tt] = {x, y}; } } } return d[n - 1][m - 1]; } int main() { cin &gt;&gt; n &gt;&gt; m; for (int i = 0; i &lt; n; i++) for (int j = 0; j &lt; m; j++) cin &gt;&gt; g[i][j]; cout &lt;&lt; bfs() &lt;&lt; endl; return 0; }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://zhangyufeng19988.github.io/zyf/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"BFS"}],["meta",{"property":"article:author","content":"ZYF"}],["meta",{"property":"article:published_time","content":"2023-06-04T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"BFS\\",\\"image\\":[\\"https://zhangyufeng19988.github.io/zyf/\\"],\\"datePublished\\":\\"2023-06-04T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"ZYF\\",\\"url\\":\\"https://zhangyufeng19989.github.io\\",\\"email\\":\\"907392790@qq.com\\"}]}"]]},"headers":[{"level":2,"title":"例子","slug":"例子","link":"#例子","children":[{"level":3,"title":"走迷宫","slug":"走迷宫","link":"#走迷宫","children":[]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":2.12,"words":636},"filePathRelative":"posts/算法基础/搜索与图论/BFS.md","localizedDate":"2023年6月4日","excerpt":"<ul>\\n<li>最短路\\n<ul>\\n<li>搜索所有距离为1的点</li>\\n<li>搜索所有距离为2的点</li>\\n<li>搜索所有距离为3的点</li>\\n<li>...</li>\\n</ul>\\n</li>\\n<li>DP问题可以看成一种特殊的最短路问题</li>\\n</ul>\\n<h2> 例子</h2>\\n<h3> 走迷宫</h3>\\n<p>\\n</p>\\n<div class=\\"language-cpp line-numbers-mode\\" data-ext=\\"cpp\\"><pre class=\\"language-cpp\\"><code><span class=\\"token macro property\\"><span class=\\"token directive-hash\\">#</span><span class=\\"token directive keyword\\">include</span> <span class=\\"token string\\">&lt;iostream&gt;</span></span>\\n<span class=\\"token macro property\\"><span class=\\"token directive-hash\\">#</span><span class=\\"token directive keyword\\">include</span> <span class=\\"token string\\">&lt;algorithm&gt;</span></span>\\n<span class=\\"token macro property\\"><span class=\\"token directive-hash\\">#</span><span class=\\"token directive keyword\\">include</span> <span class=\\"token string\\">&lt;cstring&gt;</span></span>\\n\\n<span class=\\"token keyword\\">using</span> <span class=\\"token keyword\\">namespace</span> std<span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token keyword\\">typedef</span> pair<span class=\\"token operator\\">&lt;</span><span class=\\"token keyword\\">int</span><span class=\\"token punctuation\\">,</span> <span class=\\"token keyword\\">int</span><span class=\\"token operator\\">&gt;</span> PII<span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token keyword\\">const</span> <span class=\\"token keyword\\">int</span> N <span class=\\"token operator\\">=</span> <span class=\\"token number\\">110</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token keyword\\">int</span> n<span class=\\"token punctuation\\">,</span> m<span class=\\"token punctuation\\">;</span>\\n<span class=\\"token keyword\\">int</span> g<span class=\\"token punctuation\\">[</span>N<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">[</span>N<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">// 存储地图</span>\\n<span class=\\"token keyword\\">int</span> d<span class=\\"token punctuation\\">[</span>N<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">[</span>N<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">// 每一个点到起点的距离</span>\\nPII q<span class=\\"token punctuation\\">[</span>N <span class=\\"token operator\\">*</span> N<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">// 队列</span>\\n\\n<span class=\\"token keyword\\">int</span> <span class=\\"token function\\">bfs</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">int</span> hh <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">,</span> tt <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">;</span>  <span class=\\"token comment\\">// 队列头和队列尾</span>\\n    q<span class=\\"token punctuation\\">[</span><span class=\\"token number\\">0</span><span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">{</span><span class=\\"token number\\">0</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>  <span class=\\"token comment\\">// 起点</span>\\n    <span class=\\"token function\\">memset</span><span class=\\"token punctuation\\">(</span>d<span class=\\"token punctuation\\">,</span> <span class=\\"token operator\\">-</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">,</span> <span class=\\"token keyword\\">sizeof</span> d<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>  <span class=\\"token comment\\">// 初始化所有点到起点的距离为-1</span>\\n    d<span class=\\"token punctuation\\">[</span><span class=\\"token number\\">0</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">[</span><span class=\\"token number\\">0</span><span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">;</span>  <span class=\\"token comment\\">// 起点到起点的距离为0</span>\\n    <span class=\\"token keyword\\">int</span> dy<span class=\\"token punctuation\\">[</span><span class=\\"token number\\">4</span><span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">{</span><span class=\\"token number\\">0</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">,</span> <span class=\\"token operator\\">-</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token keyword\\">int</span> dx<span class=\\"token punctuation\\">[</span><span class=\\"token number\\">4</span><span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">{</span><span class=\\"token operator\\">-</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>  <span class=\\"token comment\\">// 方向数组</span>\\n    <span class=\\"token keyword\\">while</span> <span class=\\"token punctuation\\">(</span>hh <span class=\\"token operator\\">&lt;=</span> tt<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token keyword\\">auto</span> t <span class=\\"token operator\\">=</span> q<span class=\\"token punctuation\\">[</span>hh<span class=\\"token operator\\">++</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token keyword\\">for</span> <span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">int</span> i <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">;</span> i <span class=\\"token operator\\">&lt;</span> <span class=\\"token number\\">4</span><span class=\\"token punctuation\\">;</span> i<span class=\\"token operator\\">++</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n            <span class=\\"token keyword\\">int</span> x <span class=\\"token operator\\">=</span> t<span class=\\"token punctuation\\">.</span>first <span class=\\"token operator\\">+</span> dx<span class=\\"token punctuation\\">[</span>i<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span> y <span class=\\"token operator\\">=</span> t<span class=\\"token punctuation\\">.</span>second <span class=\\"token operator\\">+</span> dy<span class=\\"token punctuation\\">[</span>i<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">;</span>\\n            <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>x <span class=\\"token operator\\">&gt;=</span> <span class=\\"token number\\">0</span> <span class=\\"token operator\\">&amp;&amp;</span> x <span class=\\"token operator\\">&lt;</span> n <span class=\\"token operator\\">&amp;&amp;</span> y <span class=\\"token operator\\">&gt;=</span> <span class=\\"token number\\">0</span> <span class=\\"token operator\\">&amp;&amp;</span> y <span class=\\"token operator\\">&lt;</span> m <span class=\\"token operator\\">&amp;&amp;</span> g<span class=\\"token punctuation\\">[</span>x<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">[</span>y<span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">==</span> <span class=\\"token number\\">0</span> <span class=\\"token operator\\">&amp;&amp;</span> d<span class=\\"token punctuation\\">[</span>x<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">[</span>y<span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">==</span> <span class=\\"token operator\\">-</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n                d<span class=\\"token punctuation\\">[</span>x<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">[</span>y<span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">=</span> d<span class=\\"token punctuation\\">[</span>t<span class=\\"token punctuation\\">.</span>first<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">[</span>t<span class=\\"token punctuation\\">.</span>second<span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">+</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">;</span>\\n                q<span class=\\"token punctuation\\">[</span><span class=\\"token operator\\">++</span>tt<span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">{</span>x<span class=\\"token punctuation\\">,</span> y<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n            <span class=\\"token punctuation\\">}</span>\\n        <span class=\\"token punctuation\\">}</span>\\n    <span class=\\"token punctuation\\">}</span>\\n    <span class=\\"token keyword\\">return</span> d<span class=\\"token punctuation\\">[</span>n <span class=\\"token operator\\">-</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">[</span>m <span class=\\"token operator\\">-</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token keyword\\">int</span> <span class=\\"token function\\">main</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    cin <span class=\\"token operator\\">&gt;&gt;</span> n <span class=\\"token operator\\">&gt;&gt;</span> m<span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token keyword\\">for</span> <span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">int</span> i <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">;</span> i <span class=\\"token operator\\">&lt;</span> n<span class=\\"token punctuation\\">;</span> i<span class=\\"token operator\\">++</span><span class=\\"token punctuation\\">)</span>\\n        <span class=\\"token keyword\\">for</span> <span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">int</span> j <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">;</span> j <span class=\\"token operator\\">&lt;</span> m<span class=\\"token punctuation\\">;</span> j<span class=\\"token operator\\">++</span><span class=\\"token punctuation\\">)</span>\\n            cin <span class=\\"token operator\\">&gt;&gt;</span> g<span class=\\"token punctuation\\">[</span>i<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">[</span>j<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">;</span>\\n    cout <span class=\\"token operator\\">&lt;&lt;</span> <span class=\\"token function\\">bfs</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">&lt;&lt;</span> endl<span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token keyword\\">return</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};
