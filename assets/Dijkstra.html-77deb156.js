import{_ as l,X as i,Y as a,a2 as e}from"./framework-a8949fcd.js";const r={},t=e('<h2 id="常见的最短路问题" tabindex="-1"><a class="header-anchor" href="#常见的最短路问题" aria-hidden="true">#</a> 常见的最短路问题</h2><ol><li>单源最短路 <ul><li>一个点到其他点的最短距离</li><li>第一类：所有边权都是正数 <ul><li>朴素dijkstra算法 时间复杂度（n^2 n为图中点的数量m表示边的数量）适合稠密图</li><li>堆优化dijkstra算法 时间复杂度为（mlogn）</li></ul></li><li>第二类：存在负权边 <ul><li>bellman-ford 时间复杂度（nm）</li><li>spfa 对bellman-ford进行优化 一边情况下O（m）最坏情况O（nm） <ul><li>限制经过的边数小于等于k的情况不能使用</li></ul></li></ul></li></ul></li><li>多源汇最短路 <ul><li>源点就是起点</li><li>汇点就是终点</li><li>floyd算法O（n^3）</li></ul></li></ol><h2 id="朴素dijkstra" tabindex="-1"><a class="header-anchor" href="#朴素dijkstra" aria-hidden="true">#</a> 朴素Dijkstra</h2><p>算法步骤：</p><ul><li>s:所有当前已经确定最短距离的点</li></ul><ol><li>初始化距离dis[1] = 0,dis[i] = +∞</li><li>for(i:0~n) <ol><li>找到不在s中的距离最近的点t</li><li>将t加入到s中</li><li>用t更新其他点的距离</li></ol></li></ol><p>稠密图使用邻接矩阵来存，稀疏图用邻接表来存</p><h2 id="堆优化dijkstra" tabindex="-1"><a class="header-anchor" href="#堆优化dijkstra" aria-hidden="true">#</a> 堆优化Dijkstra</h2><ol><li>手写堆</li><li>优先队列</li></ol>',9),s=[t];function d(n,o){return i(),a("div",null,s)}const c=l(r,[["render",d],["__file","Dijkstra.html.vue"]]);export{c as default};
