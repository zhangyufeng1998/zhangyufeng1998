const n=JSON.parse('{"key":"v-ffd48994","path":"/posts/rust/rust%E7%AE%97%E6%B3%95/%E5%BF%AB%E9%80%9F%E6%8E%92%E5%BA%8F.html","title":"快速排序","lang":"zh-CN","frontmatter":{"title":"快速排序","description":"fn main() { let mut numbers:Vec&lt;i32&gt; = vec![1, 22, 32, 4, 5, 6, 7, 13]; quick_sort(&amp;mut numbers,0,7); for i in numbers{ println!(\\"{}\\",i) } } fn quick_sort(nums: &amp;mut Vec&lt;i32&gt;, left: usize, right: usize) { if left &gt;= right { return; } let mut l = left; let mut r = right; while l &lt; r { while l &lt; r &amp;&amp; nums[r] &gt;= nums[left] { r -= 1; } while l &lt; r &amp;&amp; nums[l] &lt;= nums[left] { l += 1; } nums.swap(l, r); } nums.swap(left, l); if l &gt; 1 { quick_sort(nums, left, l - 1); } quick_sort(nums, r + 1, right); }","head":[["meta",{"property":"og:url","content":"https://zhangyufeng19988.github.io/zyf/posts/rust/rust%E7%AE%97%E6%B3%95/%E5%BF%AB%E9%80%9F%E6%8E%92%E5%BA%8F.html"}],["meta",{"property":"og:title","content":"快速排序"}],["meta",{"property":"og:description","content":"fn main() { let mut numbers:Vec&lt;i32&gt; = vec![1, 22, 32, 4, 5, 6, 7, 13]; quick_sort(&amp;mut numbers,0,7); for i in numbers{ println!(\\"{}\\",i) } } fn quick_sort(nums: &amp;mut Vec&lt;i32&gt;, left: usize, right: usize) { if left &gt;= right { return; } let mut l = left; let mut r = right; while l &lt; r { while l &lt; r &amp;&amp; nums[r] &gt;= nums[left] { r -= 1; } while l &lt; r &amp;&amp; nums[l] &lt;= nums[left] { l += 1; } nums.swap(l, r); } nums.swap(left, l); if l &gt; 1 { quick_sort(nums, left, l - 1); } quick_sort(nums, r + 1, right); }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-22T03:59:03.000Z"}],["meta",{"property":"article:author","content":"ZYF"}],["meta",{"property":"article:modified_time","content":"2023-05-22T03:59:03.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"快速排序\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-05-22T03:59:03.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"ZYF\\",\\"url\\":\\"https://zhangyufeng19989.github.io\\",\\"email\\":\\"907392790@qq.com\\"}]}"]]},"headers":[],"git":{"createdTime":1684727943000,"updatedTime":1684727943000,"contributors":[{"name":"zyf","email":"907392790@qq.com","commits":1}]},"readingTime":{"minutes":0.32,"words":95},"filePathRelative":"posts/rust/rust算法/快速排序.md","localizedDate":"2023年5月22日","excerpt":"<div class=\\"language-rust line-numbers-mode\\" data-ext=\\"rs\\"><pre class=\\"language-rust\\"><code><span class=\\"token keyword\\">fn</span> <span class=\\"token function-definition function\\">main</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">let</span> <span class=\\"token keyword\\">mut</span> numbers<span class=\\"token punctuation\\">:</span><span class=\\"token class-name\\">Vec</span><span class=\\"token operator\\">&lt;</span><span class=\\"token keyword\\">i32</span><span class=\\"token operator\\">&gt;</span> <span class=\\"token operator\\">=</span> <span class=\\"token macro property\\">vec!</span><span class=\\"token punctuation\\">[</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">22</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">32</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">4</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">5</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">6</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">7</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">13</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token function\\">quick_sort</span><span class=\\"token punctuation\\">(</span><span class=\\"token operator\\">&amp;</span><span class=\\"token keyword\\">mut</span> numbers<span class=\\"token punctuation\\">,</span><span class=\\"token number\\">0</span><span class=\\"token punctuation\\">,</span><span class=\\"token number\\">7</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token keyword\\">for</span> i <span class=\\"token keyword\\">in</span> numbers<span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token macro property\\">println!</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"{}\\"</span><span class=\\"token punctuation\\">,</span>i<span class=\\"token punctuation\\">)</span>\\n    <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token keyword\\">fn</span> <span class=\\"token function-definition function\\">quick_sort</span><span class=\\"token punctuation\\">(</span>nums<span class=\\"token punctuation\\">:</span> <span class=\\"token operator\\">&amp;</span><span class=\\"token keyword\\">mut</span> <span class=\\"token class-name\\">Vec</span><span class=\\"token operator\\">&lt;</span><span class=\\"token keyword\\">i32</span><span class=\\"token operator\\">&gt;</span><span class=\\"token punctuation\\">,</span> left<span class=\\"token punctuation\\">:</span> <span class=\\"token keyword\\">usize</span><span class=\\"token punctuation\\">,</span> right<span class=\\"token punctuation\\">:</span> <span class=\\"token keyword\\">usize</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">if</span> left <span class=\\"token operator\\">&gt;=</span> right <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token keyword\\">return</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n    <span class=\\"token keyword\\">let</span> <span class=\\"token keyword\\">mut</span> l <span class=\\"token operator\\">=</span> left<span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token keyword\\">let</span> <span class=\\"token keyword\\">mut</span> r <span class=\\"token operator\\">=</span> right<span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token keyword\\">while</span> l <span class=\\"token operator\\">&lt;</span> r <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token keyword\\">while</span> l <span class=\\"token operator\\">&lt;</span> r <span class=\\"token operator\\">&amp;&amp;</span> nums<span class=\\"token punctuation\\">[</span>r<span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">&gt;=</span> nums<span class=\\"token punctuation\\">[</span>left<span class=\\"token punctuation\\">]</span> <span class=\\"token punctuation\\">{</span>\\n            r <span class=\\"token operator\\">-=</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token punctuation\\">}</span>\\n        <span class=\\"token keyword\\">while</span> l <span class=\\"token operator\\">&lt;</span> r <span class=\\"token operator\\">&amp;&amp;</span> nums<span class=\\"token punctuation\\">[</span>l<span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">&lt;=</span> nums<span class=\\"token punctuation\\">[</span>left<span class=\\"token punctuation\\">]</span> <span class=\\"token punctuation\\">{</span>\\n            l <span class=\\"token operator\\">+=</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token punctuation\\">}</span>\\n        nums<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">swap</span><span class=\\"token punctuation\\">(</span>l<span class=\\"token punctuation\\">,</span> r<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n    nums<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">swap</span><span class=\\"token punctuation\\">(</span>left<span class=\\"token punctuation\\">,</span> l<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token keyword\\">if</span> l <span class=\\"token operator\\">&gt;</span> <span class=\\"token number\\">1</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token function\\">quick_sort</span><span class=\\"token punctuation\\">(</span>nums<span class=\\"token punctuation\\">,</span> left<span class=\\"token punctuation\\">,</span> l <span class=\\"token operator\\">-</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n    <span class=\\"token function\\">quick_sort</span><span class=\\"token punctuation\\">(</span>nums<span class=\\"token punctuation\\">,</span> r <span class=\\"token operator\\">+</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">,</span> right<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};
