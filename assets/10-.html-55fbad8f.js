const l=JSON.parse('{"key":"v-3d1794ba","path":"/posts/rust/rust%E5%85%A5%E9%97%A8/10-.html","title":"10.泛型、Trait、生命周期","lang":"zh-CN","frontmatter":{"title":"10.泛型、Trait、生命周期","date":"2023-05-15T00:00:00.000Z","icon":"rust","category":"rust","description":"10.1 如何提取函数消除重复 重复代码 危害 容易出错 需求变更时需要在多处修改 消除重复：定义函数 消除重复的步骤 识别重复代码 提取重复代码到函数体中，并在函数签名中指定函数的输入和返回值 将重复的代码使用函数调用进行替代 10.2 泛型 泛型 泛型：提高代码复用能力 泛型是具体类型或其他属性的抽象代替 编写的代码不是最终的代码，而是一种模板，里面有一些占位符 编译器在编译的时候，将占位符替换为具体的类型。 fn largest&lt;T&gt;(list:&amp;[T]) -&gt; T{...}(单态化) 类型参数 很短，通常一个字母 camelCase T：type的缩写","head":[["meta",{"property":"og:url","content":"https://zhangyufeng19988.github.io/zyf/posts/rust/rust%E5%85%A5%E9%97%A8/10-.html"}],["meta",{"property":"og:title","content":"10.泛型、Trait、生命周期"}],["meta",{"property":"og:description","content":"10.1 如何提取函数消除重复 重复代码 危害 容易出错 需求变更时需要在多处修改 消除重复：定义函数 消除重复的步骤 识别重复代码 提取重复代码到函数体中，并在函数签名中指定函数的输入和返回值 将重复的代码使用函数调用进行替代 10.2 泛型 泛型 泛型：提高代码复用能力 泛型是具体类型或其他属性的抽象代替 编写的代码不是最终的代码，而是一种模板，里面有一些占位符 编译器在编译的时候，将占位符替换为具体的类型。 fn largest&lt;T&gt;(list:&amp;[T]) -&gt; T{...}(单态化) 类型参数 很短，通常一个字母 camelCase T：type的缩写"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-22T03:59:03.000Z"}],["meta",{"property":"article:author","content":"ZYF"}],["meta",{"property":"article:published_time","content":"2023-05-15T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-22T03:59:03.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"10.泛型、Trait、生命周期\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-05-15T00:00:00.000Z\\",\\"dateModified\\":\\"2023-05-22T03:59:03.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"ZYF\\",\\"url\\":\\"https://zhangyufeng19989.github.io\\",\\"email\\":\\"907392790@qq.com\\"}]}"]]},"headers":[{"level":2,"title":"10.1 如何提取函数消除重复","slug":"_10-1-如何提取函数消除重复","link":"#_10-1-如何提取函数消除重复","children":[{"level":3,"title":"重复代码","slug":"重复代码","link":"#重复代码","children":[]},{"level":3,"title":"消除重复的步骤","slug":"消除重复的步骤","link":"#消除重复的步骤","children":[]}]},{"level":2,"title":"10.2 泛型","slug":"_10-2-泛型","link":"#_10-2-泛型","children":[{"level":3,"title":"泛型","slug":"泛型","link":"#泛型","children":[]},{"level":3,"title":"函数中定义的泛型","slug":"函数中定义的泛型","link":"#函数中定义的泛型","children":[]},{"level":3,"title":"Struct定义中的泛型","slug":"struct定义中的泛型","link":"#struct定义中的泛型","children":[]},{"level":3,"title":"Enum定义中的泛型","slug":"enum定义中的泛型","link":"#enum定义中的泛型","children":[]},{"level":3,"title":"方法定义中的泛型","slug":"方法定义中的泛型","link":"#方法定义中的泛型","children":[]},{"level":3,"title":"泛型代码的性能","slug":"泛型代码的性能","link":"#泛型代码的性能","children":[]}]},{"level":2,"title":"10.3 Trait（上）","slug":"_10-3-trait-上","link":"#_10-3-trait-上","children":[{"level":3,"title":"定义一个Trait","slug":"定义一个trait","link":"#定义一个trait","children":[]},{"level":3,"title":"在类型上实现trait","slug":"在类型上实现trait","link":"#在类型上实现trait","children":[]},{"level":3,"title":"实现trait约束","slug":"实现trait约束","link":"#实现trait约束","children":[]},{"level":3,"title":"默认实现","slug":"默认实现","link":"#默认实现","children":[]}]},{"level":2,"title":"10.4 Trait（下）","slug":"_10-4-trait-下","link":"#_10-4-trait-下","children":[{"level":3,"title":"把trait作为参数","slug":"把trait作为参数","link":"#把trait作为参数","children":[]},{"level":3,"title":"使用trait作为返回类型","slug":"使用trait作为返回类型","link":"#使用trait作为返回类型","children":[]},{"level":3,"title":"使用trait bound的例子","slug":"使用trait-bound的例子","link":"#使用trait-bound的例子","children":[]},{"level":3,"title":"使用trait bound有条件的实现方法","slug":"使用trait-bound有条件的实现方法","link":"#使用trait-bound有条件的实现方法","children":[]}]},{"level":2,"title":"10.5 生命周期（1/4）","slug":"_10-5-生命周期-1-4","link":"#_10-5-生命周期-1-4","children":[{"level":3,"title":"生命周期","slug":"生命周期","link":"#生命周期","children":[]},{"level":3,"title":"生命周期-避免悬垂引用（dangling reference）","slug":"生命周期-避免悬垂引用-dangling-reference","link":"#生命周期-避免悬垂引用-dangling-reference","children":[]},{"level":3,"title":"借用检查器","slug":"借用检查器","link":"#借用检查器","children":[]},{"level":3,"title":"函数中的泛型生命周期","slug":"函数中的泛型生命周期","link":"#函数中的泛型生命周期","children":[]}]},{"level":2,"title":"10.6 生命周期（2/4）","slug":"_10-6-生命周期-2-4","link":"#_10-6-生命周期-2-4","children":[{"level":3,"title":"生命周期标注","slug":"生命周期标注","link":"#生命周期标注","children":[]},{"level":3,"title":"生命周期标注-语法","slug":"生命周期标注-语法","link":"#生命周期标注-语法","children":[]},{"level":3,"title":"生命周期标注例子","slug":"生命周期标注例子","link":"#生命周期标注例子","children":[]},{"level":3,"title":"函数签名中的生命周期标注","slug":"函数签名中的生命周期标注","link":"#函数签名中的生命周期标注","children":[]}]},{"level":2,"title":"10.6 生命周期（3/4）","slug":"_10-6-生命周期-3-4","link":"#_10-6-生命周期-3-4","children":[{"level":3,"title":"深入理解生命周期","slug":"深入理解生命周期","link":"#深入理解生命周期","children":[]},{"level":3,"title":"struct结构体定义中的生命周期标注","slug":"struct结构体定义中的生命周期标注","link":"#struct结构体定义中的生命周期标注","children":[]},{"level":3,"title":"生命周期的省略","slug":"生命周期的省略","link":"#生命周期的省略","children":[]},{"level":3,"title":"输入、输出的生命周期","slug":"输入、输出的生命周期","link":"#输入、输出的生命周期","children":[]},{"level":3,"title":"生命周期省略的三个规则","slug":"生命周期省略的三个规则","link":"#生命周期省略的三个规则","children":[]},{"level":3,"title":"例子","slug":"例子","link":"#例子","children":[]}]},{"level":2,"title":"10.8 生命周期（4/4）","slug":"_10-8-生命周期-4-4","link":"#_10-8-生命周期-4-4","children":[{"level":3,"title":"方法定义中的生命周期标注","slug":"方法定义中的生命周期标注","link":"#方法定义中的生命周期标注","children":[]},{"level":3,"title":"静态生命周期","slug":"静态生命周期","link":"#静态生命周期","children":[]},{"level":3,"title":"泛型参数类型、trait bound、生命周期","slug":"泛型参数类型、trait-bound、生命周期","link":"#泛型参数类型、trait-bound、生命周期","children":[]}]}],"git":{"createdTime":1684727943000,"updatedTime":1684727943000,"contributors":[{"name":"zyf","email":"907392790@qq.com","commits":1}]},"readingTime":{"minutes":9.46,"words":2837},"filePathRelative":"posts/rust/rust入门/10-.md","localizedDate":"2023年5月15日","excerpt":"<h2> 10.1 如何提取函数消除重复</h2>\\n<h3> 重复代码</h3>\\n<ul>\\n<li>危害\\n<ul>\\n<li>容易出错</li>\\n<li>需求变更时需要在多处修改</li>\\n</ul>\\n</li>\\n<li>消除重复：定义函数</li>\\n</ul>\\n<h3> 消除重复的步骤</h3>\\n<ul>\\n<li>识别重复代码</li>\\n<li>提取重复代码到函数体中，并在函数签名中指定函数的输入和返回值</li>\\n<li>将重复的代码使用函数调用进行替代</li>\\n</ul>\\n<h2> 10.2 泛型</h2>\\n<h3> 泛型</h3>\\n<ul>\\n<li>泛型：提高代码<mark>复用</mark>能力</li>\\n<li>泛型是具体类型或其他属性的抽象代替\\n<ul>\\n<li>编写的代码不是最终的代码，而是一种<strong>模板</strong>，里面有一些<mark>占位符</mark></li>\\n<li>编译器在<mark>编译的时候</mark>，将占位符<mark>替换为具体的类型</mark>。</li>\\n</ul>\\n</li>\\n<li><code>fn largest&lt;T&gt;(list:&amp;[T]) -&gt; T{...}</code>(单态化)</li>\\n<li>类型参数\\n<ul>\\n<li>很短，通常一个字母</li>\\n<li>camelCase</li>\\n<li>T：type的缩写</li>\\n</ul>\\n</li>\\n</ul>","autoDesc":true}');export{l as data};
