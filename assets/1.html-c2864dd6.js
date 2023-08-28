import{_ as n,X as a,Y as s,a2 as e}from"./framework-a8949fcd.js";const t="/zyf/assets/1-d1d70794.png",p="/zyf/assets/2-e8e171bf.png",i="/zyf/assets/3-81a50e4a.png",c="/zyf/assets/4-561420b6.png",l="/zyf/assets/6-caa8cd90.png",o="/zyf/assets/5-8c339601.png",u="/zyf/assets/7-4b359b1d.png",r={},d=e('<h2 id="服务器通信原理" tabindex="-1"><a class="header-anchor" href="#服务器通信原理" aria-hidden="true">#</a> 服务器通信原理</h2><figure><img src="'+t+`" alt="服务器通信原理" tabindex="0" loading="lazy"><figcaption>服务器通信原理</figcaption></figure><h3 id="java实现一个最简的http服务器" tabindex="-1"><a class="header-anchor" href="#java实现一个最简的http服务器" aria-hidden="true">#</a> Java实现一个最简的HTTP服务器</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>zyf<span class="token punctuation">.</span>nio</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">IOException</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">PrintWriter</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>net<span class="token punctuation">.</span></span><span class="token class-name">ServerSocket</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>net<span class="token punctuation">.</span></span><span class="token class-name">Socket</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HttpServer01</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token class-name">ServerSocket</span> serverSocket <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ServerSocket</span><span class="token punctuation">(</span><span class="token number">8801</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">try</span> <span class="token punctuation">{</span>
                <span class="token class-name">Socket</span> socket <span class="token operator">=</span> serverSocket<span class="token punctuation">.</span><span class="token function">accept</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 阻塞</span>
                <span class="token function">server</span><span class="token punctuation">(</span>socket<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">server</span><span class="token punctuation">(</span><span class="token class-name">Socket</span> socket<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token class-name">PrintWriter</span> printWriter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PrintWriter</span><span class="token punctuation">(</span>socket<span class="token punctuation">.</span><span class="token function">getOutputStream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// true表示自动刷新</span>
            printWriter<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;HTTP/1.1 200 OK&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 返回响应头</span>
            printWriter<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Content-Type:text/html;charset=utf-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 返回响应头</span>
            <span class="token class-name">String</span> body <span class="token operator">=</span> <span class="token string">&quot;hello,nio1&quot;</span><span class="token punctuation">;</span>  <span class="token comment">// 返回响应体</span>
            printWriter<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Content-Length:&quot;</span> <span class="token operator">+</span> body<span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 返回响应头</span>
            printWriter<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 返回空行</span>
            printWriter<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>body<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 返回响应体</span>
            printWriter<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 关闭流</span>
            socket<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="io模型" tabindex="-1"><a class="header-anchor" href="#io模型" aria-hidden="true">#</a> IO模型</h2><ul><li>同步异步 是通信模式。 <ul><li>同步：发送一个请求之后，一直等待</li><li>异步：发送请求之后去干别的，等待通知或者主动检查</li><li>比如让别人买东西，同步就是一直等待到东西买回来，异步就是先干别的</li></ul></li><li>阻塞、非阻塞是线程处理模式。</li></ul><h3 id="五种io模型" tabindex="-1"><a class="header-anchor" href="#五种io模型" aria-hidden="true">#</a> 五种IO模型</h3><figure><img src="`+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>阻塞的IO是BIO</li><li>非阻塞的IO是NIO</li></ul><h4 id="io模型-01" tabindex="-1"><a class="header-anchor" href="#io模型-01" aria-hidden="true">#</a> IO模型-01</h4><p>阻塞式 IO、BIO一般通过在 while(true) 循环中服务端会调用 accept() 方法等待接收客户端的连接的方式监听请求，请求一旦接收到一个连接请求，就可以建立通信套接字在这个通信套接字上进行读写操作，此时不能再接收其他客户端连接请求，只能等待同当前连接的客户端的操作执行完成， 不过可以通过多线程来支持多个客户端的连接。</p><p><img src="'+i+'" alt="" loading="lazy"><img src="'+c+'" alt="" loading="lazy"></p><h4 id="io模型-02-非阻塞式io" tabindex="-1"><a class="header-anchor" href="#io模型-02-非阻塞式io" aria-hidden="true">#</a> IO模型-02 非阻塞式IO</h4><p>非阻塞式 IO和阻塞 IO 类比，内核会立即返回，返回后获得足够的 CPU 时间继续做其它的事情。用户进程第一个阶段不是阻塞的,需要不断的主动询问 kernel 数据好了没有；第二个阶段依然总是阻塞的。</p><h4 id="io模型-03-io复用" tabindex="-1"><a class="header-anchor" href="#io模型-03-io复用" aria-hidden="true">#</a> IO模型-03 IO复用</h4><p>IO 多路复用(IO multiplexing)，也称事件驱动 IO(event-driven IO)，就是在单个线程里同时监控多个套接字，通过 select 或poll 轮询所负责的所有 socket，当某个socket 有数据到达了，就通知用户进程。</p><p>IO 复用同非阻塞 IO 本质一样，不过利用了新的 select 系统调用，由内核来负责本来是请求进程该做的轮询操作。看似比非阻塞 IO 还多了一个系统调用开销，不过因为可以支持多路 IO，才算提高了效率。</p><p>进程先是阻塞在 select/poll 上，再是阻塞在读操作的第二个阶段上。</p><ul><li>select/pool的缺点 <ul><li>每次调用select，都需要把fd集合从用户态拷贝到内核态，这个开销在fd很多时会很大</li><li>同时每次调用select都需要在内核遍历传递进来的所有fd，这个开销在fd很多时也很大</li><li>select支持的文件描述符数量太小了，默认是1024</li></ul></li><li>epoll <ul><li>内核与用户空间共享一块内存</li><li>通过回调解决遍历问题</li><li>fd没有限制，可以支持10万连接</li></ul></li></ul><figure><img src="'+l+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="io模型-04-信号驱动-i-o" tabindex="-1"><a class="header-anchor" href="#io模型-04-信号驱动-i-o" aria-hidden="true">#</a> IO模型-04 信号驱动 I/O</h4><p>信号驱动 IO 与 BIO 和 NIO 最大的区别就在于，在 IO 执行的数据准备阶段，不需要轮询。 如图所示：当用户进程需要等待数据的时候，会向内核发送一个信号，告诉内核我要什么数据，然后用户进程就继续做别的事情去了，而当内核中的数据准备好之后，内核立马发给用户进程一个信号，说”数据准备好了，快来查收“，用户进程收到信号之后，立马调用 recvfrom，去查收数据。</p><figure><img src="'+o+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="io模型-05-异步式-io" tabindex="-1"><a class="header-anchor" href="#io模型-05-异步式-io" aria-hidden="true">#</a> IO模型-05 异步式 IO</h4><p>异步 IO 真正实现了 IO 全流程的非阻塞。用户进程发出系统调用后立即返回，内核等待数据准备完成，然后将数据拷贝到用户进程缓冲区，然后发送信号告诉用户进程 IO 操作执行完毕（与 SIGIO 相比，一个是发送信号告诉用户进程数据准备完毕，一个是 IO执行完毕）。</p><p>一个场景，去打印店打印文件:</p><ul><li>同步阻塞 <ul><li>直接排队，别的啥也干不成，直到轮到你使用打印机了，自己打印文件</li></ul></li><li>Reactor <ul><li>拿个号码，回去该干嘛干嘛，等轮到你使用打印机了，店主通知你来用打印机，打印文件</li></ul></li><li>Proactor <ul><li>拿个号码，回去该干嘛干嘛，等轮到你使用打印机了，店主直接给你打印好文件，通知你来拿</li></ul></li></ul><h2 id="netty-框架" tabindex="-1"><a class="header-anchor" href="#netty-框架" aria-hidden="true">#</a> Netty 框架</h2><h3 id="netty概览" tabindex="-1"><a class="header-anchor" href="#netty概览" aria-hidden="true">#</a> Netty概览</h3><p>Netty是网络应用开发框架</p><ol><li>异步</li><li>事件驱动</li><li>基于NIO</li></ol><p>适用于：</p><ol><li>服务端</li><li>客户端</li><li>TCP/UDP/HTTP</li></ol><figure><img src="'+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="netty特性" tabindex="-1"><a class="header-anchor" href="#netty特性" aria-hidden="true">#</a> Netty特性</h3><p>高性能的协议服务器:</p><ul><li>高吞吐</li><li>低延迟</li><li>低开销</li><li>零拷贝</li><li>可扩容</li><li>松耦合: 网络和业务逻辑分离</li><li>使用方便、可维护性好</li></ul><h3 id="基本概念" tabindex="-1"><a class="header-anchor" href="#基本概念" aria-hidden="true">#</a> 基本概念</h3><h4 id="channel" tabindex="-1"><a class="header-anchor" href="#channel" aria-hidden="true">#</a> Channel</h4><p>通道，java NIO中的基础概念，代表一个打开的连接，可执行读取/写入IO操作。Netty堆<code>Channel</code>的所有IO操作都是非阻塞的。</p><h4 id="channelfuture" tabindex="-1"><a class="header-anchor" href="#channelfuture" aria-hidden="true">#</a> ChannelFuture</h4><p>java的<code>Future</code>接口，只能查询操作的完成情况，或者阻塞当前线程等待操作完成。Netty封装一个<code>ChannelFuture</code>接口。我们可以将回调方法传递给<code>ChannelFuture</code>，在操作完成时自动执行</p><h4 id="event-handler" tabindex="-1"><a class="header-anchor" href="#event-handler" aria-hidden="true">#</a> Event&amp;Handler</h4><p>Netty基于事件驱动，事件和处理器可以关联到入站和出站数据流</p><h4 id="encoder-decoder" tabindex="-1"><a class="header-anchor" href="#encoder-decoder" aria-hidden="true">#</a> Encoder&amp;Decoder</h4><p>处理网络IO时，需要进行序列化和反序列化，转换java对象与字节流。对入站数据进行解码，基类是<code>ByteToMessageDecoder</code>。对出站数据进行编码，基类是<code>MessageToMessageEncoder</code>。</p><h4 id="channelpipeline" tabindex="-1"><a class="header-anchor" href="#channelpipeline" aria-hidden="true">#</a> ChannelPipeline</h4><p>数据处理管道就是时间处理链。有顺序、同一<code>Channel</code>的出站处理器和入站处理器在同一个列表中</p><h3 id="event-handler-1" tabindex="-1"><a class="header-anchor" href="#event-handler-1" aria-hidden="true">#</a> Event &amp; Handler</h3><p>入站事件：</p><ul><li>通道激活和停用</li><li>读操作事件</li><li>异常事件</li><li>用户事件</li></ul><p>出站事件：</p><ul><li>打开连接</li><li>关闭连接</li><li>写入数据</li><li>刷新数据</li></ul><p>事件处理程序接口:</p><ul><li>ChannelHandler</li><li>ChannelOutboundHandler</li><li>ChannelInboundHandler</li></ul><p>适配器（空实现，需要继承使用）：</p><ul><li>ChannelInboundHandlerAdapter</li><li>ChannelOutboundHandlerAdapter</li></ul><p>Netty 应用组成:</p><ul><li>网络事件</li><li>应用程序逻辑事件</li><li>事件处理程序</li></ul>',59),k=[d];function h(m,v){return a(),s("div",null,k)}const b=n(r,[["render",h],["__file","1.html.vue"]]);export{b as default};
