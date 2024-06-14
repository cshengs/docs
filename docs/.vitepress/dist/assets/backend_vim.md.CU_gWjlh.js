import{_ as e,c as o,o as l,a4 as c}from"./chunks/framework.E4YCCYO0.js";const _=JSON.parse('{"title":"Vim","description":"","frontmatter":{},"headers":[],"relativePath":"backend/vim.md","filePath":"backend/vim.md","lastUpdated":1717500097000}'),i={name:"backend/vim.md"},d=c('<h1 id="vim" tabindex="-1">Vim <a class="header-anchor" href="#vim" aria-label="Permalink to &quot;Vim&quot;">​</a></h1><h2 id="基础命令" tabindex="-1">基础命令 <a class="header-anchor" href="#基础命令" aria-label="Permalink to &quot;基础命令&quot;">​</a></h2><h3 id="normal-模式" tabindex="-1">Normal 模式 <a class="header-anchor" href="#normal-模式" aria-label="Permalink to &quot;Normal 模式&quot;">​</a></h3><ul><li><p><code>h</code> <code>j</code> <code>k</code> <code>l</code> : 左下上右</p></li><li><p><code>u</code> : 撤销</p></li><li><p><code>d</code> : 删除</p></li><li><p><code>dd</code> : 删除当前行</p></li><li><p><code>:set number</code> : 显示行号(set number 可以简写为 set nu)</p></li><li><p><code>:set nonumber</code> : 隐藏行号(set nonumber 可以简写为 set nonu)</p></li></ul><p><strong>查找及替换</strong></p><ul><li><p><code>/</code> : 搜索</p></li><li><p><code>n/N</code> : 下一个/上一个搜索结果</p></li><li><p><code>:s/old/new/g</code> : 替换当前行中的所有 old 为 new</p></li></ul><blockquote><p>:{作用范围}s/{目标}/{替换}/{替换标志}</p></blockquote><p>作用范围包括：</p><ul><li><p><code>.</code> : 当前行</p></li><li><p><code>1,5</code> : 1 到 5 行</p></li><li><p><code>%</code> : 所有行</p></li></ul><p>替换标志包括：</p><ul><li><p><code>g</code> : 全局替换</p></li><li><p><code>c</code> : 替换前询问（y/n/a/q/l 分别表示：yes/no/all/quit/last）</p></li></ul><p><strong>内容编辑</strong></p><ul><li><p><code>yy</code> : 复制当前行</p></li><li><p><code>p</code> : 粘贴</p></li><li><p><code>P</code> : 粘贴到当前行的前面</p></li><li><p><code>o</code> : 在当前行下面插入新行</p></li><li><p><code>x</code> : 删除当前字符</p></li><li><p><code>X</code> : 删除前一个字符</p></li><li><p><code>r</code> : 替换当前字符</p></li></ul><p><strong>翻页</strong></p><ul><li><p><code>Ctrl + f</code> : 向下翻页</p></li><li><p><code>Ctrl + b</code> : 向上翻页</p></li></ul><p><strong>跳转</strong></p><ul><li><p><code>gg</code> : 跳转到文件开头</p></li><li><p><code>GG</code> : 跳转到文件结尾</p></li></ul><h3 id="visual-block-模式" tabindex="-1">Visual Block 模式 <a class="header-anchor" href="#visual-block-模式" aria-label="Permalink to &quot;Visual Block 模式&quot;">​</a></h3><blockquote><p>按下 <code>Ctrl + v</code> 进入 Visual Block 模式 Visual Block 模式下，可以选中一个矩形区域，然后对这个区域进行操作</p></blockquote>',19),a=[d];function p(t,r,n,s,u,m){return l(),o("div",null,a)}const b=e(i,[["render",p]]);export{_ as __pageData,b as default};
