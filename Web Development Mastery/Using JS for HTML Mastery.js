    // ===== THEME DATA =====
    const PRESET_THEMES = [
      { id: "dark", name: "Midnight Dark", bg: "#0a0a1a", bg2: "#12122a", bg3: "#0d0d22", bg4: "#080818", text: "#d0d0ee", text2: "#b0b0d0", text3: "#8888bb", accent: "#6c63ff", accent2: "#3ecfcf", accent3: "#ffa36b", border: "#6c63ff22", card: "#12122a", codeBg: "#080818", sbBg: "#0f0f24", hdrBg: "linear-gradient(135deg,#1a0a3e,#0f2027,#0a1628)" },
      { id: "light", name: "Clean Light", bg: "#f0f0f8", bg2: "#ffffff", bg3: "#f5f5ff", bg4: "#eeeef8", text: "#1a1a2e", text2: "#333333", text3: "#666666", accent: "#5b54e6", accent2: "#1aada0", accent3: "#e8823a", border: "#5b54e622", card: "#ffffff", codeBg: "#f0f0f8", sbBg: "#ffffff", hdrBg: "linear-gradient(135deg,#5b54e6,#1aada0)" },
      { id: "ocean", name: "Deep Ocean", bg: "#0a192f", bg2: "#112240", bg3: "#0d1b33", bg4: "#0a1628", text: "#ccd6f6", text2: "#8892b0", text3: "#5a6a8a", accent: "#64ffda", accent2: "#57cbff", accent3: "#f5a623", border: "#64ffda22", card: "#112240", codeBg: "#0a1628", sbBg: "#0d1d38", hdrBg: "linear-gradient(135deg,#0a192f,#112240,#1a365d)" },
      { id: "purple", name: "Neon Purple", bg: "#13091f", bg2: "#1c1030", bg3: "#170d28", bg4: "#100820", text: "#e0d0ff", text2: "#b8a0dd", text3: "#8877aa", accent: "#bf5af2", accent2: "#ff6bcb", accent3: "#ffd60a", border: "#bf5af222", card: "#1c1030", codeBg: "#100820", sbBg: "#150b25", hdrBg: "linear-gradient(135deg,#2d1b52,#1c1030,#13091f)" },
      { id: "green", name: "Forest Green", bg: "#0a1a0f", bg2: "#122a18", bg3: "#0d220f", bg4: "#081808", text: "#d0eeda", text2: "#a0c0a8", text3: "#6a8a70", accent: "#4ade80", accent2: "#22d3ee", accent3: "#fbbf24", border: "#4ade8022", card: "#122a18", codeBg: "#081808", sbBg: "#0f2414", hdrBg: "linear-gradient(135deg,#0a2e14,#122a18,#1a3e22)" },
      { id: "dracula", name: "Dracula", bg: "#282a36", bg2: "#44475a", bg3: "#3b3d4d", bg4: "#21222c", text: "#f8f8f2", text2: "#e2e2dc", text3: "#6272a4", accent: "#bd93f9", accent2: "#ff79c6", accent3: "#f1fa8c", border: "#bd93f933", card: "#44475a", codeBg: "#21222c", sbBg: "#282a36", hdrBg: "linear-gradient(135deg,#282a36,#44475a,#6272a4)" },
      { id: "monokai", name: "Monokai", bg: "#272822", bg2: "#3e3d32", bg3: "#33332d", bg4: "#1e1f1c", text: "#f8f8f2", text2: "#cfcfc2", text3: "#75715e", accent: "#f92672", accent2: "#a6e22e", accent3: "#fd971f", border: "#f9267233", card: "#3e3d32", codeBg: "#1e1f1c", sbBg: "#272822", hdrBg: "linear-gradient(135deg,#1e1f1c,#272822,#3e3d32)" },
      { id: "solarized_dark", name: "Solarized Dark", bg: "#002b36", bg2: "#073642", bg3: "#04303c", bg4: "#001e26", text: "#839496", text2: "#93a1a1", text3: "#586e75", accent: "#b58900", accent2: "#2aa198", accent3: "#cb4b16", border: "#b5890033", card: "#073642", codeBg: "#001e26", sbBg: "#002b36", hdrBg: "linear-gradient(135deg,#001e26,#002b36,#073642)" },
      { id: "nord", name: "Nordic Frost", bg: "#2e3440", bg2: "#3b4252", bg3: "#343b48", bg4: "#242933", text: "#eceff4", text2: "#e5e9f0", text3: "#4c566a", accent: "#88c0d0", accent2: "#81a1c1", accent3: "#ebcb8b", border: "#88c0d033", card: "#3b4252", codeBg: "#242933", sbBg: "#2e3440", hdrBg: "linear-gradient(135deg,#242933,#2e3440,#3b4252)" },
      { id: "synthwave", name: "Synthwave 84", bg: "#262335", bg2: "#34294f", bg3: "#2d2642", bg4: "#1d1a29", text: "#f3eee8", text2: "#dfd6ce", text3: "#848bbd", accent: "#ff7edb", accent2: "#36f9f6", accent3: "#fede5d", border: "#ff7edb33", card: "#34294f", codeBg: "#1d1a29", sbBg: "#262335", hdrBg: "linear-gradient(135deg,#1d1a29,#262335,#34294f)" },
      { id: "gruvbox", name: "Gruvbox Dark", bg: "#282828", bg2: "#3c3836", bg3: "#32302f", bg4: "#1d2021", text: "#ebdbb2", text2: "#d5c4a1", text3: "#928374", accent: "#fabd2f", accent2: "#b8bb26", accent3: "#fe8019", border: "#fabd2f33", card: "#3c3836", codeBg: "#1d2021", sbBg: "#282828", hdrBg: "linear-gradient(135deg,#1d2021,#282828,#3c3836)" },
      { id: "tokyo_night", name: "Tokyo Night", bg: "#1a1b26", bg2: "#24283b", bg3: "#1f2231", bg4: "#16161e", text: "#c0caf5", text2: "#a9b1d6", text3: "#565f89", accent: "#7aa2f7", accent2: "#bb9af7", accent3: "#ff9e64", border: "#7aa2f733", card: "#24283b", codeBg: "#16161e", sbBg: "#1a1b26", hdrBg: "linear-gradient(135deg,#16161e,#1a1b26,#24283b)" },
      { id: "matrix", name: "The Matrix", bg: "#0d1112", bg2: "#131a18", bg3: "#101515", bg4: "#090c0c", text: "#d1f1e2", text2: "#a4debe", text3: "#4b7a63", accent: "#00ff41", accent2: "#008f11", accent3: "#003b00", border: "#00ff4133", card: "#131a18", codeBg: "#090c0c", sbBg: "#0d1112", hdrBg: "linear-gradient(135deg,#090c0c,#0d1112,#131a18)" },
      { id: "cherry", name: "Cherry Blossom", bg: "#2a1e26", bg2: "#3d2833", bg3: "#33232c", bg4: "#21151c", text: "#ffeef6", text2: "#f4d1e2", text3: "#a37c96", accent: "#ffb3d9", accent2: "#e18bb3", accent3: "#ff7eb6", border: "#ffb3d933", card: "#3d2833", codeBg: "#21151c", sbBg: "#2a1e26", hdrBg: "linear-gradient(135deg,#21151c,#2a1e26,#3d2833)" },
      { id: "cafe", name: "Cozy Cafe", bg: "#f4ece1", bg2: "#fffdfa", bg3: "#eee3d4", bg4: "#e6d6c3", text: "#4a3f35", text2: "#665a4c", text3: "#998b7e", accent: "#8c5e39", accent2: "#bc8054", accent3: "#d6a57c", border: "#8c5e3933", card: "#fffdfa", codeBg: "#e6d6c3", sbBg: "#f4ece1", hdrBg: "linear-gradient(135deg,#bc8054,#8c5e39)" },
      { id: "sunset", name: "Outrun Sunset", bg: "#190b24", bg2: "#2a1338", bg3: "#210e2e", bg4: "#120718", text: "#fceeff", text2: "#e0c4eb", text3: "#8a659e", accent: "#ff4a8b", accent2: "#ff952b", accent3: "#ffc62b", border: "#ff4a8b33", card: "#2a1338", codeBg: "#120718", sbBg: "#190b24", hdrBg: "linear-gradient(135deg,#2a1338,#ff4a8b,#ff952b)" },
      { id: "cyber", name: "Cyber Neon", bg: "#0b0c10", bg2: "#1f2833", bg3: "#161c24", bg4: "#050608", text: "#c5c6c7", text2: "#9ba1a6", text3: "#4a545c", accent: "#66fcf1", accent2: "#45a29e", accent3: "#ffffff", border: "#66fcf133", card: "#1f2833", codeBg: "#050608", sbBg: "#0b0c10", hdrBg: "linear-gradient(135deg,#050608,#0b0c10,#1f2833)" },
      { id: "hacker", name: "Term Hacker", bg: "#000000", bg2: "#111111", bg3: "#080808", bg4: "#000000", text: "#33ff00", text2: "#2cbd00", text3: "#166000", accent: "#33ff00", accent2: "#ffffff", accent3: "#88ff88", border: "#33ff0033", card: "#111111", codeBg: "#000000", sbBg: "#000000", hdrBg: "linear-gradient(135deg,#000000,#080808,#111111)" },
      { id: "vue", name: "Vue Green", bg: "#34495e", bg2: "#41b883", bg3: "#3b7b62", bg4: "#2c3e50", text: "#ffffff", text2: "#e2f0e9", text3: "#a1ccb8", accent: "#41b883", accent2: "#34495e", accent3: "#f1c40f", border: "#41b88333", card: "#41b883", codeBg: "#2c3e50", sbBg: "#34495e", hdrBg: "linear-gradient(135deg,#2c3e50,#34495e,#41b883)" },
      { id: "blood", name: "Blood Moon", bg: "#1a0404", bg2: "#2b0a0a", bg3: "#210707", bg4: "#100202", text: "#ffd6d6", text2: "#d69c9c", text3: "#8f4e4e", accent: "#e62e2e", accent2: "#ff6b6b", accent3: "#facc15", border: "#e62e2e33", card: "#2b0a0a", codeBg: "#100202", sbBg: "#1a0404", hdrBg: "linear-gradient(135deg,#100202,#1a0404,#2b0a0a)" },
      { id: "halloween", name: "Halloween", bg: "#18181b", bg2: "#27272a", bg3: "#202023", bg4: "#0f0f11", text: "#f4f4f5", text2: "#d4d4d8", text3: "#71717a", accent: "#f97316", accent2: "#a855f7", accent3: "#84cc16", border: "#f9731633", card: "#27272a", codeBg: "#0f0f11", sbBg: "#18181b", hdrBg: "linear-gradient(135deg,#0f0f11,#18181b,#f97316)" },
      { id: "ice", name: "Arctic Ice", bg: "#e0f2fe", bg2: "#ffffff", bg3: "#dcf0fd", bg4: "#cce6f8", text: "#082f49", text2: "#0c4a6e", text3: "#38bdf8", accent: "#0284c7", accent2: "#0284c7", accent3: "#fbbf24", border: "#0284c733", card: "#ffffff", codeBg: "#cce6f8", sbBg: "#e0f2fe", hdrBg: "linear-gradient(135deg,#cce6f8,#0284c7)" },
      { id: "lava", name: "Magma Lair", bg: "#220000", bg2: "#3a1010", bg3: "#2d0707", bg4: "#160000", text: "#ffebeb", text2: "#ffb0b0", text3: "#b35050", accent: "#ff3d3d", accent2: "#ffa600", accent3: "#ffff00", border: "#ff3d3d33", card: "#3a1010", codeBg: "#160000", sbBg: "#220000", hdrBg: "linear-gradient(135deg,#160000,#ff3d3d,#ffa600)" },
      { id: "discord", name: "Gamer Dark", bg: "#36393f", bg2: "#2f3136", bg3: "#32353b", bg4: "#202225", text: "#dcddde", text2: "#b9bbbe", text3: "#72767d", accent: "#5865F2", accent2: "#eb459f", accent3: "#fee75c", border: "#5865F233", card: "#2f3136", codeBg: "#202225", sbBg: "#36393f", hdrBg: "linear-gradient(135deg,#202225,#36393f,#5865F2)" },
      { id: "rose", name: "Rose Pine", bg: "#191724", bg2: "#1f1d2e", bg3: "#1c1a29", bg4: "#121019", text: "#e0def4", text2: "#908caa", text3: "#6e6a86", accent: "#ebbcba", accent2: "#31748f", accent3: "#f6c177", border: "#ebbcba33", card: "#1f1d2e", codeBg: "#121019", sbBg: "#191724", hdrBg: "linear-gradient(135deg,#121019,#191724,#1f1d2e)" }
    ];

    // ===== TAG DATA =====
    const TAGS = [
      // 1
      {
        id: "tag-a", title: 'The <a> (Anchor) Tag', badge: "INLINE", emoji: "🔗", content: `
<h3>📌 What is it?</h3>
<p>The <code>&lt;a&gt;</code> tag creates <strong>hyperlinks</strong> — the fundamental building block of the web. It connects pages, files, email addresses, phone numbers, and locations within the same page.</p>
<h3>📋 All Important Attributes</h3>
<table class="at"><tr><th>Attribute</th><th>Description</th><th>Example</th></tr>
<tr><td><code>href</code></td><td>URL the link points to</td><td><code>"https://google.com"</code></td></tr>
<tr><td><code>target</code></td><td>Where to open the link</td><td><code>_blank, _self, _parent, _top</code></td></tr>
<tr><td><code>rel</code></td><td>Relationship to linked page</td><td><code>"noopener noreferrer"</code></td></tr>
<tr><td><code>download</code></td><td>Downloads file instead of navigating</td><td><code>"file.pdf"</code></td></tr>
<tr><td><code>title</code></td><td>Tooltip text on hover</td><td><code>"Visit Google"</code></td></tr>
<tr><td><code>hreflang</code></td><td>Language of linked page</td><td><code>"en"</code>, <code>"hi"</code></td></tr></table>

<h3>🔍 Deep Dive — <code>href</code> Values</h3>
<ul>
<li><strong>Absolute URL:</strong> <code>https://example.com/page</code></li>
<li><strong>Relative URL:</strong> <code>./about.html</code> or <code>../images/pic.jpg</code></li>
<li><strong>Anchor:</strong> <code>#section-id</code> — jumps within same page</li>
<li><strong>Email:</strong> <code>mailto:you@email.com?subject=Hello</code></li>
<li><strong>Phone:</strong> <code>tel:+919876543210</code></li>
</ul>

<div class="warn"><strong>⚠️ Security:</strong> When using <code>target="_blank"</code>, always add <code>rel="noopener noreferrer"</code> to prevent tabnabbing attacks.</div>
`+ codeBlock("Links", "html", `<!-- External link in new tab -->
<a href="https://google.com" target="_blank" rel="noopener noreferrer">
  Visit Google
</a>

<!-- Same-page anchor link -->
<a href="#contact">Jump to Contact</a>

<!-- Email & Phone links -->
<a href="mailto:sanskar@example.com?subject=Hi">Email Me</a>
<a href="tel:+919876543210">Call Now</a>

<!-- Download link -->
<a href="resume.pdf" download="Sanskar_Resume.pdf">
  Download Resume
</a>`) + `
<div class="demo"><h4>▶ Live Demo</h4>
<a href="https://google.com" target="_blank" rel="noopener noreferrer" style="color:var(--accent)">🔗 Google (new tab)</a> |
<a href="#tag-table" style="color:var(--accent2)">⬇ Jump to Table Tag</a> |
<a href="mailto:test@example.com" style="color:var(--accent3)">✉ Email</a></div>
<div class="tip"><strong>💡 Tip:</strong> You can wrap images, divs, or entire cards inside <code>&lt;a&gt;</code> to make them clickable!</div>`},

      // 2
      {
        id: "tag-img", title: 'The <img> (Image) Tag', badge: "VOID", emoji: "🖼️", content: `
<h3>📌 What is it?</h3>
<p>The <code>&lt;img&gt;</code> tag embeds images. It's a <strong>void element</strong> (no closing tag). The browser fetches images from the <code>src</code> URL and renders them inline.</p>
<h3>📋 Attributes</h3>
<table class="at"><tr><th>Attribute</th><th>Description</th><th>Required?</th></tr>
<tr><td><code>src</code></td><td>Path/URL of image</td><td>✅ Yes</td></tr>
<tr><td><code>alt</code></td><td>Alt text for accessibility & fallback</td><td>✅ Yes</td></tr>
<tr><td><code>width / height</code></td><td>Dimensions in px</td><td>❌ Recommended</td></tr>
<tr><td><code>loading</code></td><td><code>"lazy"</code> or <code>"eager"</code></td><td>❌</td></tr>
<tr><td><code>srcset</code></td><td>Multiple sources for responsive images</td><td>❌</td></tr>
<tr><td><code>title</code></td><td>Tooltip on hover</td><td>❌</td></tr></table>

<h3>🖼️ Supported Formats</h3>
<ul><li><strong>JPEG</strong> — Photos, lossy, small</li><li><strong>PNG</strong> — Transparency, lossless</li><li><strong>GIF</strong> — Animations, 256 colors</li><li><strong>WebP</strong> — Modern, best compression</li><li><strong>SVG</strong> — Vector, scalable, ideal for icons</li><li><strong>AVIF</strong> — Newest, excellent compression</li></ul>
<div class="warn"><strong>⚠️ Always provide alt text!</strong> Required for accessibility (screen readers), SEO, and when images fail to load.</div>
`+ codeBlock("Images", "html", `<!-- Basic image -->
<img src="photo.jpg" alt="Sunset over mountains" width="600" height="400">

<!-- Lazy loading -->
<img src="big-photo.jpg" alt="City skyline" loading="lazy">

<!-- Image as a link -->
<a href="https://example.com">
  <img src="logo.png" alt="Company Logo" width="150">
</a>

<!-- Responsive srcset -->
<img src="small.jpg"
     srcset="small.jpg 480w, medium.jpg 800w, large.jpg 1200w"
     sizes="(max-width:600px) 480px, 800px"
     alt="Responsive image">

<!-- Figure with caption -->
<figure>
  <img src="chart.png" alt="Sales chart 2024">
  <figcaption>Fig 1: Sales growth</figcaption>
</figure>`) + `
<div class="demo"><h4>▶ Live Demo</h4>
<img src="Sanskar Developer.svg" alt="Sanskar Logo" width="80" style="border-radius:12px;border:2px solid var(--accent)">
<p style="font-size:.8rem;color:var(--text3)">↑ SVG logo loaded via &lt;img&gt;</p></div>`},

      // 3
      {
        id: "tag-table", title: 'The <table> Tag', badge: "BLOCK", emoji: "📊", content: `
<h3>📌 What is it?</h3>
<p>Creates <strong>tabular data</strong> — rows and columns. Tables should ONLY be used for data display, <em>not for page layout</em>.</p>
<h3>📋 Sub-Elements</h3>
<table class="at"><tr><th>Element</th><th>Purpose</th></tr>
<tr><td><code>&lt;thead&gt;</code></td><td>Groups header rows</td></tr>
<tr><td><code>&lt;tbody&gt;</code></td><td>Groups body rows</td></tr>
<tr><td><code>&lt;tfoot&gt;</code></td><td>Groups footer rows</td></tr>
<tr><td><code>&lt;tr&gt;</code></td><td>Table Row</td></tr>
<tr><td><code>&lt;th&gt;</code></td><td>Header cell (bold, centered)</td></tr>
<tr><td><code>&lt;td&gt;</code></td><td>Data cell</td></tr>
<tr><td><code>&lt;caption&gt;</code></td><td>Table title</td></tr>
<tr><td><code>&lt;colgroup&gt;</code></td><td>Column styling</td></tr></table>
<h3>🔀 Merging: <code>colspan</code> (horizontal) &amp; <code>rowspan</code> (vertical)</h3>
`+ codeBlock("Table", "html", `<table border="1" style="border-collapse:collapse;width:100%">
  <caption>Student Marks Report</caption>
  <thead>
    <tr>
      <th>Name</th><th>Maths</th><th>Science</th><th>Total</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>Sanskar</td><td>95</td><td>90</td><td>185</td></tr>
    <tr><td>Rahul</td><td>80</td><td>85</td><td>165</td></tr>
  </tbody>
  <tfoot>
    <tr><th colspan="3">Average</th><td>175</td></tr>
  </tfoot>
</table>`)
      },

      // 4
      {
        id: "tag-div", title: 'The <div> & <span> Tags', badge: "CONTAINER", emoji: "📦", content: `
<h3>📌 What are they?</h3>
<p><strong>Generic containers</strong> with no inherent meaning — purely for grouping and styling.</p>
<table class="at"><tr><th>Feature</th><th>&lt;div&gt;</th><th>&lt;span&gt;</th></tr>
<tr><td>Display</td><td><strong>Block</strong> — full width, new line</td><td><strong>Inline</strong> — flows with text</td></tr>
<tr><td>Use Case</td><td>Layouts, sections, wrappers</td><td>Style a word/phrase</td></tr>
<tr><td>Can Contain</td><td>Any elements</td><td>Inline elements only</td></tr></table>
<div class="warn"><strong>⚠️ Don't overuse div!</strong> ("div soup") — prefer semantic tags like &lt;header&gt;, &lt;nav&gt;, &lt;main&gt; when they fit.</div>
`+ codeBlock("div & span", "html", `<!-- div: Block container -->
<div class="card">
  <div class="card-header"><h2>Welcome!</h2></div>
  <div class="card-body"><p>Content here</p></div>
</div>

<!-- span: Inline styling -->
<p>My name is <span style="color:#6c63ff;font-weight:bold">Sanskar</span>
and I love <span style="color:#3ecfcf">web development</span>.</p>

<!-- div for Flexbox layout -->
<div style="display:flex; gap:16px">
  <div>Column 1</div>
  <div>Column 2</div>
</div>`) + `
<div class="demo"><h4>▶ Live Demo</h4>
<p>My name is <span style="color:var(--accent);font-weight:700">Sanskar</span> and I love <span style="color:var(--accent2);font-weight:700">web development</span>.</p></div>`},

      // 5
      {
        id: "tag-semantic", title: 'Semantic HTML5 Tags', badge: "STRUCTURE", emoji: "🏗️", content: `
<h3>📌 What are Semantic Tags?</h3>
<p>Tags that <strong>describe the meaning</strong> of content. Improve <strong>accessibility</strong>, <strong>SEO</strong>, and <strong>readability</strong>.</p>
<table class="at"><tr><th>Tag</th><th>Purpose</th><th>Replaces</th></tr>
<tr><td><code>&lt;header&gt;</code></td><td>Intro, logo, nav</td><td>div.header</td></tr>
<tr><td><code>&lt;nav&gt;</code></td><td>Navigation links</td><td>div.nav</td></tr>
<tr><td><code>&lt;main&gt;</code></td><td>Primary content (ONE per page)</td><td>div.main</td></tr>
<tr><td><code>&lt;section&gt;</code></td><td>Thematic grouping</td><td>div.section</td></tr>
<tr><td><code>&lt;article&gt;</code></td><td>Self-contained content</td><td>div.post</td></tr>
<tr><td><code>&lt;aside&gt;</code></td><td>Side content, sidebar</td><td>div.sidebar</td></tr>
<tr><td><code>&lt;footer&gt;</code></td><td>Footer, credits</td><td>div.footer</td></tr>
<tr><td><code>&lt;figure&gt;</code></td><td>Media + caption</td><td>div.image-wrap</td></tr>
<tr><td><code>&lt;mark&gt;</code></td><td>Highlighted text</td><td>span.highlight</td></tr>
<tr><td><code>&lt;time&gt;</code></td><td>Machine-readable date</td><td>span.date</td></tr></table>
`+ codeBlock("Semantic Layout", "html", `<body>
  <header>
    <nav>
      <a href="/">Home</a>
      <a href="/about">About</a>
    </nav>
  </header>
  <main>
    <article>
      <h1>My Blog Post</h1>
      <time datetime="2026-04-09">April 9, 2026</time>
      <section>
        <h2>Introduction</h2>
        <p>Learning HTML is <mark>important</mark>.</p>
      </section>
    </article>
    <aside><h3>Related Links</h3></aside>
  </main>
  <footer><p>&copy; 2026 Sanskar</p></footer>
</body>`) + `
<div class="tip"><strong>💡 Rule:</strong> If you can describe <em>what</em> the content is, use semantic. If it's just a wrapper, use &lt;div&gt;.</div>`},

      // 6
      {
        id: "tag-list", title: 'List Tags — ul, ol, dl', badge: "BLOCK", emoji: "📝", content: `
<h3>📌 Three Types</h3>
<table class="at"><tr><th>Tag</th><th>Type</th><th>Use</th></tr>
<tr><td><code>&lt;ul&gt;</code></td><td>Unordered (bullets)</td><td>Menus, features</td></tr>
<tr><td><code>&lt;ol&gt;</code></td><td>Ordered (numbers)</td><td>Steps, rankings</td></tr>
<tr><td><code>&lt;dl&gt;</code></td><td>Description</td><td>Glossaries, FAQs</td></tr></table>
<h3>📋 Attributes</h3>
<ul><li><code>type="A"</code> — Letters. Also <code>"a"</code>, <code>"I"</code>, <code>"i"</code></li>
<li><code>start="5"</code> — Start from 5</li>
<li><code>reversed</code> — Count down</li>
<li><code>list-style-type</code> (CSS) — disc, circle, square, none</li></ul>
`+ codeBlock("Lists", "html", `<!-- Unordered List -->
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>

<!-- Ordered (Roman numerals) -->
<ol type="I">
  <li>Plan</li>
  <li>Code</li>
  <li>Test</li>
</ol>

<!-- Nested List -->
<ul>
  <li>Frontend
    <ul><li>HTML</li><li>CSS</li><li>JS</li></ul>
  </li>
  <li>Backend
    <ul><li>Node.js</li><li>Python</li></ul>
  </li>
</ul>

<!-- Description List -->
<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language</dd>
  <dt>CSS</dt>
  <dd>Cascading Style Sheets</dd>
</dl>`)
      },

      // 7
      {
        id: "tag-media", title: 'The <video> & <audio> Tags', badge: "MEDIA", emoji: "🎬", content: `
<h3>📌 What are they?</h3>
<p>HTML5 native media playback — no plugins needed!</p>
<table class="at"><tr><th>Attribute</th><th>Description</th></tr>
<tr><td><code>src</code></td><td>Media file path</td></tr>
<tr><td><code>controls</code></td><td>Show play/pause/volume</td></tr>
<tr><td><code>autoplay</code></td><td>Auto-start (browsers may block)</td></tr>
<tr><td><code>muted</code></td><td>Start muted (needed for autoplay)</td></tr>
<tr><td><code>loop</code></td><td>Repeat on finish</td></tr>
<tr><td><code>preload</code></td><td>auto / metadata / none</td></tr>
<tr><td><code>poster</code> (video)</td><td>Thumbnail before play</td></tr></table>
`+ codeBlock("Video & Audio", "html", `<!-- Video with controls -->
<video controls width="640" poster="thumb.jpg">
  <source src="video.mp4" type="video/mp4">
  <source src="video.webm" type="video/webm">
  Your browser doesn't support video.
</video>

<!-- Background video (autoplay muted loop) -->
<video autoplay muted loop playsinline width="100%">
  <source src="bg.mp4" type="video/mp4">
</video>

<!-- Audio player -->
<audio controls>
  <source src="song.mp3" type="audio/mpeg">
  <source src="song.ogg" type="audio/ogg">
</audio>`) + `
<div class="tip"><strong>💡 Tip:</strong> Browsers block autoplay with sound. You must add <code>muted</code> for autoplay to work.</div>`},

      // 8 - NEW
      {
        id: "tag-canvas", title: 'The <canvas> Tag', badge: "GRAPHICS", emoji: "🎨", content: `
<h3>📌 What is it?</h3>
<p>The <code>&lt;canvas&gt;</code> tag provides a <strong>drawable region</strong> for rendering graphics via JavaScript. Used for charts, games, animations, image manipulation, and data visualization.</p>
<h3>📋 Key Points</h3>
<ul><li>Canvas is <strong>raster-based</strong> (pixel-by-pixel) — unlike SVG which is vector</li>
<li>You draw using the <strong>2D context</strong> (<code>getContext("2d")</code>) or <strong>WebGL</strong> for 3D</li>
<li>Content inside canvas tags = fallback for unsupported browsers</li>
<li>Canvas has NO accessibility by default — add <code>role</code> and <code>aria-label</code></li>
<li>Dimensions must be set via <code>width</code>/<code>height</code> attributes (not CSS!)</li></ul>
<table class="at"><tr><th>Attribute</th><th>Description</th><th>Default</th></tr>
<tr><td><code>width</code></td><td>Canvas width in pixels</td><td>300</td></tr>
<tr><td><code>height</code></td><td>Canvas height in pixels</td><td>150</td></tr></table>
<h3>🎨 Common Drawing Methods</h3>
<table class="at"><tr><th>Method</th><th>What it does</th></tr>
<tr><td><code>fillRect(x,y,w,h)</code></td><td>Filled rectangle</td></tr>
<tr><td><code>strokeRect(x,y,w,h)</code></td><td>Outlined rectangle</td></tr>
<tr><td><code>fillText(text,x,y)</code></td><td>Filled text</td></tr>
<tr><td><code>arc(x,y,r,start,end)</code></td><td>Circle/arc</td></tr>
<tr><td><code>beginPath() + lineTo()</code></td><td>Custom shapes</td></tr>
<tr><td><code>drawImage(img,x,y)</code></td><td>Draw an image</td></tr></table>
`+ codeBlock("Canvas", "html", `<canvas id="myCanvas" width="400" height="200"
  role="img" aria-label="Drawing demo">
  Your browser does not support canvas.
</canvas>

<script>
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

// Gradient rectangle
const grad = ctx.createLinearGradient(0, 0, 400, 0);
grad.addColorStop(0, "#6c63ff");
grad.addColorStop(1, "#3ecfcf");
ctx.fillStyle = grad;
ctx.fillRect(10, 10, 380, 80);

// Text
ctx.fillStyle = "#fff";
ctx.font = "24px Inter";
ctx.fillText("Hello Sanskar! 🎨", 100, 60);

// Circle
ctx.beginPath();
ctx.arc(200, 150, 40, 0, Math.PI * 2);
ctx.fillStyle = "#ff7eb6";
ctx.fill();
<${'/'}script>`) + `
<div class="demo"><h4>▶ Live Demo</h4>
<canvas id="demoCanvas" width="400" height="120" style="border-radius:8px;border:1px solid var(--border);max-width:100%;background:var(--codeBg)"></canvas>
</div>`},

      // 9 - NEW
      {
        id: "tag-details", title: 'The <details> & <summary> Tags', badge: "INTERACTIVE", emoji: "🔽", content: `
<h3>📌 What is it?</h3>
<p>Creates a <strong>collapsible disclosure widget</strong> — content that users can show/hide by clicking, with <strong>zero JavaScript</strong> required! The <code>&lt;summary&gt;</code> is the clickable label.</p>
<h3>📋 Attributes</h3>
<table class="at"><tr><th>Attribute</th><th>On</th><th>Description</th></tr>
<tr><td><code>open</code></td><td>&lt;details&gt;</td><td>If present, content is visible by default</td></tr></table>
<h3>🔍 Deep Dive</h3>
<ul><li>Without <code>&lt;summary&gt;</code>, browser shows "Details" as default label</li>
<li>You can style the triangle marker with <code>::marker</code> or <code>list-style</code></li>
<li>The <code>toggle</code> event fires when opened/closed</li>
<li>Great for FAQs, spoilers, advanced options, accordions</li>
<li>Fully accessible — works with keyboard (Enter/Space)</li>
<li>You can nest details inside details for multi-level accordions</li></ul>
`+ codeBlock("Details/Summary", "html", `<!-- Basic collapsible -->
<details>
  <summary>Click to see the answer</summary>
  <p>HTML stands for HyperText Markup Language!</p>
</details>

<!-- Open by default -->
<details open>
  <summary>This is already open</summary>
  <p>You can see this content immediately.</p>
</details>

<!-- FAQ Accordion -->
<details>
  <summary>What is CSS?</summary>
  <p>CSS (Cascading Style Sheets) controls how HTML
  elements look — colors, fonts, layouts, animations.</p>
</details>
<details>
  <summary>What is JavaScript?</summary>
  <p>JavaScript adds interactivity — click handlers,
  animations, API calls, dynamic content.</p>
</details>

<!-- Nested -->
<details>
  <summary>Web Technologies</summary>
  <details>
    <summary>Frontend</summary>
    <p>HTML, CSS, JavaScript, React, Vue</p>
  </details>
  <details>
    <summary>Backend</summary>
    <p>Node.js, Python, Java, Go</p>
  </details>
</details>`) + `
<div class="demo"><h4>▶ Live Demo</h4>
<details style="margin:6px 0;padding:10px;background:var(--bg4);border-radius:8px;cursor:pointer">
<summary style="color:var(--accent);font-weight:600">What does HTML stand for?</summary>
<p style="margin-top:8px">HTML = <strong>HyperText Markup Language</strong>. It's the standard language for creating web pages.</p></details>
<details style="margin:6px 0;padding:10px;background:var(--bg4);border-radius:8px;cursor:pointer">
<summary style="color:var(--accent);font-weight:600">Is HTML a programming language?</summary>
<p style="margin-top:8px"><strong>No!</strong> HTML is a <em>markup</em> language. It structures content but doesn't have logic, loops, or variables.</p></details></div>`},

      // 10 - NEW
      {
        id: "tag-iframe", title: 'The <iframe> Tag', badge: "EMBED", emoji: "🪟", content: `
<h3>📌 What is it?</h3>
<p>The <code>&lt;iframe&gt;</code> (Inline Frame) embeds <strong>another complete HTML page inside your current page</strong>. Think of it as a window within your window — it loads a completely separate document with its own DOM, CSS, and JavaScript, all rendered inside a rectangular area on your page.</p>
<p>Each iframe creates an <strong>isolated browsing context</strong> — meaning the embedded page cannot directly access your main page's JavaScript variables, CSS styles, or DOM elements (and vice versa). This isolation is what makes iframes both powerful for embedding external content and secure for handling untrusted sources.</p>

<h3>⚙️ How iframes Work Internally</h3>
<ul>
<li>When the browser encounters <code>&lt;iframe src="..."&gt;</code>, it sends a <strong>separate HTTP request</strong> to fetch that URL</li>
<li>The browser creates a <strong>new browsing context</strong> (like a mini-browser inside your page)</li>
<li>The embedded page has its own <code>window</code>, <code>document</code>, <code>localStorage</code>, and <code>cookies</code></li>
<li>CSS from the parent page does NOT affect the iframe content (complete style isolation)</li>
<li>JavaScript from the parent page CANNOT access the iframe's DOM if it's from a <strong>different origin</strong> (Same-Origin Policy)</li>
<li>The iframe can have its own scrollbar if the content is larger than the frame</li>
<li>Each iframe adds memory overhead — the browser must maintain a separate rendering engine instance</li>
</ul>

<h3>🌍 Real-World Uses of iframe</h3>
<table class="at"><tr><th>Use Case</th><th>How It Works</th><th>Example Sites</th></tr>
<tr><td><strong>Video Embedding</strong></td><td>YouTube/Vimeo provide embed URLs that serve their video player inside your page</td><td>Blogs, news sites, any site with videos</td></tr>
<tr><td><strong>Maps</strong></td><td>Google Maps provides embed code that renders an interactive map</td><td>Contact pages, store locators</td></tr>
<tr><td><strong>Payment Forms</strong></td><td>Stripe/PayPal load their secure payment forms via iframe to keep card data off your server (PCI compliance)</td><td>E-commerce checkout pages</td></tr>
<tr><td><strong>Social Embeds</strong></td><td>Twitter, Facebook, Instagram provide embed scripts that create iframes</td><td>News articles, blogs</td></tr>
<tr><td><strong>Code Playgrounds</strong></td><td>CodePen, JSFiddle, StackBlitz render code output inside sandboxed iframes</td><td>Documentation, tutorials</td></tr>
<tr><td><strong>Advertising</strong></td><td>Ad networks load ads in iframes to isolate third-party code from your site</td><td>Most websites with ads</td></tr>
<tr><td><strong>Authentication</strong></td><td>OAuth login popups sometimes use iframes for silent token refresh</td><td>Google Sign-In, SSO systems</td></tr>
<tr><td><strong>Email Preview</strong></td><td>Email clients render HTML emails inside sandboxed iframes for security</td><td>Gmail, Outlook Web</td></tr></table>

<h3>📋 All Attributes — Complete Reference</h3>
<table class="at"><tr><th>Attribute</th><th>Description</th><th>Example</th></tr>
<tr><td><code>src</code></td><td>URL of the page to embed. Can be absolute, relative, or a special embed URL. Changing this via JS reloads the iframe content.</td><td><code>"https://youtube.com/embed/xyz"</code></td></tr>
<tr><td><code>srcdoc</code></td><td>Inline HTML content to display INSTEAD of loading from src. Takes priority over <code>src</code> when both are present.</td><td><code>"&lt;h1&gt;Hello&lt;/h1&gt;"</code></td></tr>
<tr><td><code>width</code></td><td>Width in pixels (number) or any CSS unit via style. Does NOT accept percentage as attribute — use CSS instead.</td><td><code>"560"</code></td></tr>
<tr><td><code>height</code></td><td>Height in pixels. Default is 150px if not specified.</td><td><code>"315"</code></td></tr>
<tr><td><code>title</code></td><td>Describes the iframe for screen readers. <strong>REQUIRED for accessibility</strong> — without it, screen readers say "iframe" with no context.</td><td><code>"YouTube video player"</code></td></tr>
<tr><td><code>loading</code></td><td><code>"lazy"</code> = defers loading until near viewport (saves bandwidth). <code>"eager"</code> = loads immediately (default).</td><td><code>"lazy"</code></td></tr>
<tr><td><code>sandbox</code></td><td>Enables security restrictions. See detailed sandbox section below.</td><td><code>"allow-scripts allow-same-origin"</code></td></tr>
<tr><td><code>allow</code></td><td>Permissions Policy — controls which browser APIs the iframe can use. Newer and more granular than sandbox.</td><td><code>"camera; microphone; fullscreen"</code></td></tr>
<tr><td><code>allowfullscreen</code></td><td>Allows the iframe to go fullscreen. Without this, calling <code>requestFullscreen()</code> from inside the iframe fails.</td><td>(boolean attribute)</td></tr>
<tr><td><code>referrerpolicy</code></td><td>Controls how much referrer info is sent when the browser requests the iframe URL.</td><td><code>"no-referrer"</code>, <code>"origin"</code></td></tr>
<tr><td><code>name</code></td><td>A name for the iframe. Links with <code>target="frameName"</code> open inside this iframe instead of a new tab.</td><td><code>"myFrame"</code></td></tr>
<tr><td><code>credentialless</code></td><td>(Experimental) Creates an iframe that cannot access the parent's cookies or storage. Maximum privacy isolation.</td><td>(boolean attribute)</td></tr></table>

<h3>🔒 The <code>sandbox</code> Attribute — Deep Dive into Security</h3>
<p>The <code>sandbox</code> attribute is your <strong>main security tool</strong>. When present with no value, it applies ALL restrictions. You then selectively allow features with tokens:</p>
<table class="at"><tr><th>Value</th><th>What it Allows</th><th>Risk Level</th></tr>
<tr><td>(empty — just <code>sandbox</code>)</td><td>Maximum restrictions: no scripts, forms, popups, top nav, plugins</td><td>🟢 Safest</td></tr>
<tr><td><code>allow-scripts</code></td><td>JavaScript can run inside the iframe</td><td>🟡 Medium</td></tr>
<tr><td><code>allow-same-origin</code></td><td>Treated as same origin — can access cookies, localStorage, parent DOM</td><td>🟡 Medium</td></tr>
<tr><td><code>allow-forms</code></td><td>Forms can be submitted</td><td>🟢 Low</td></tr>
<tr><td><code>allow-popups</code></td><td>Can open new windows/tabs via <code>window.open()</code> or <code>target="_blank"</code></td><td>🟡 Medium</td></tr>
<tr><td><code>allow-popups-to-escape-sandbox</code></td><td>Popups opened by the iframe are NOT sandboxed</td><td>🔴 High</td></tr>
<tr><td><code>allow-modals</code></td><td>Can show <code>alert()</code>, <code>confirm()</code>, <code>prompt()</code></td><td>🟢 Low</td></tr>
<tr><td><code>allow-top-navigation</code></td><td>Can change the parent page URL — <strong>DANGEROUS: phishing risk!</strong></td><td>🔴 High</td></tr>
<tr><td><code>allow-top-navigation-by-user-activation</code></td><td>Can navigate parent only after user click (safer version)</td><td>🟡 Medium</td></tr>
<tr><td><code>allow-downloads</code></td><td>Can trigger file downloads</td><td>🟡 Medium</td></tr>
<tr><td><code>allow-presentation</code></td><td>Can use Presentation API (screen sharing)</td><td>🟢 Low</td></tr></table>

<div class="warn"><strong>⚠️ CRITICAL Security Warning:</strong> <strong>NEVER</strong> use <code>allow-scripts</code> and <code>allow-same-origin</code> together for untrusted content! The iframe could use JavaScript to reach into the parent page and remove its own <code>sandbox</code> attribute, escaping ALL restrictions. This combination is only safe for content you fully trust (like your own subdomains).</div>

<h3>🔍 The <code>allow</code> Attribute (Permissions Policy) — Detailed</h3>
<p>This is <strong>different from sandbox</strong>. While sandbox restricts what the iframe can DO, the <code>allow</code> attribute controls which <strong>browser APIs</strong> the iframe can ACCESS:</p>
<table class="at"><tr><th>Permission</th><th>What it Controls</th><th>Without It</th></tr>
<tr><td><code>camera</code></td><td>Access to webcam via <code>getUserMedia()</code></td><td>Camera requests are blocked</td></tr>
<tr><td><code>microphone</code></td><td>Access to microphone</td><td>Microphone requests are blocked</td></tr>
<tr><td><code>geolocation</code></td><td>Access to GPS/location via <code>navigator.geolocation</code></td><td>Location requests are blocked</td></tr>
<tr><td><code>fullscreen</code></td><td>Ability to go fullscreen</td><td><code>requestFullscreen()</code> fails</td></tr>
<tr><td><code>autoplay</code></td><td>Auto-play audio/video without user interaction</td><td>Autoplay is blocked</td></tr>
<tr><td><code>clipboard-write</code></td><td>Write to system clipboard</td><td><code>navigator.clipboard.writeText()</code> fails</td></tr>
<tr><td><code>clipboard-read</code></td><td>Read from system clipboard</td><td>Reading clipboard is blocked</td></tr>
<tr><td><code>encrypted-media</code></td><td>Play DRM-protected content (Netflix, Spotify)</td><td>DRM playback fails</td></tr>
<tr><td><code>payment</code></td><td>Use Payment Request API</td><td>Payment API is blocked</td></tr>
<tr><td><code>picture-in-picture</code></td><td>Enable Picture-in-Picture mode for videos</td><td>PiP is blocked</td></tr></table>

<h3>💬 Parent ↔ iframe Communication (postMessage)</h3>
<p>Even though iframes are isolated, you can <strong>send messages between them</strong> using the <code>postMessage()</code> API. This is the only safe way to communicate cross-origin:</p>
`+ codeBlock("Parent ↔ iframe Communication", "javascript", `// === PARENT PAGE (sending message TO iframe) ===
const iframe = document.getElementById("myIframe");

// Send a message to the iframe
iframe.contentWindow.postMessage(
  { action: "changeTheme", theme: "dark" },  // data
  "https://child-site.com"                    // target origin (security!)
);

// Listen for messages FROM the iframe
window.addEventListener("message", (event) => {
  // ALWAYS verify the origin for security!
  if (event.origin !== "https://child-site.com") return;

  console.log("Message from iframe:", event.data);
  // Example: event.data = { status: "theme changed!" }
});


// === IFRAME PAGE (receiving message FROM parent) ===
window.addEventListener("message", (event) => {
  // Verify parent origin
  if (event.origin !== "https://parent-site.com") return;

  if (event.data.action === "changeTheme") {
    document.body.classList.add(event.data.theme);
  }

  // Send response back to parent
  event.source.postMessage(
    { status: "theme changed!" },
    event.origin
  );
});`) + `

<div class="warn"><strong>⚠️ Always verify <code>event.origin</code>!</strong> Without checking the origin, any website could embed your page in an iframe and send fake messages. This is a common security vulnerability called <em>cross-origin message spoofing</em>.</div>

<h3>📐 The <code>srcdoc</code> Attribute — Deep Dive</h3>
<p>Instead of loading an external URL, you can embed HTML directly. Key points:</p>
<ul>
<li><code>srcdoc</code> takes <strong>priority over src</strong> — if both exist, srcdoc wins</li>
<li>The content inherits the <strong>parent page's origin</strong> (unless sandboxed)</li>
<li>You can use full HTML including <code>&lt;style&gt;</code> and scripts</li>
<li>Great for <strong>previews</strong>, <strong>email templates</strong>, and <strong>code output</strong></li>
<li>Quote special characters with HTML entities since the value is in an HTML attribute</li>
</ul>
`+ codeBlock("iframe — srcdoc", "html", `<!-- Inline HTML content (no external HTTP request!) -->
<iframe srcdoc="
  <style>
    body { font-family: Arial; background: #1a1a2e; color: #fff;
           padding: 20px; margin: 0; }
    h2 { color: #6c63ff; }
  </style>
  <h2>Hello from srcdoc!</h2>
  <p>This HTML is embedded directly — no server needed!</p>
  <button onclick='alert(&quot;Clicked!&quot;)'>Click Me</button>
"
  width="100%" height="180"
  title="Inline content demo"
  sandbox="allow-scripts">
</iframe>`) + `

<h3>🚀 Performance Optimization</h3>
<p>Iframes can be <strong>performance-expensive</strong>. Here's how to optimize:</p>
<table class="at"><tr><th>Technique</th><th>How It Helps</th><th>Implementation</th></tr>
<tr><td><strong>Lazy Loading</strong></td><td>Defers iframe loading until user scrolls near it</td><td><code>loading="lazy"</code></td></tr>
<tr><td><strong>Facade Pattern</strong></td><td>Show a static image/thumbnail first, load iframe only on click</td><td>Replace <code>&lt;img&gt;</code> with <code>&lt;iframe&gt;</code> on click via JS</td></tr>
<tr><td><strong>Minimal sandbox</strong></td><td>Restricting features reduces browser work inside the iframe</td><td>Only allow what's needed</td></tr>
<tr><td><strong>Preconnect</strong></td><td>Pre-establish connection to iframe origin before the iframe loads</td><td><code>&lt;link rel="preconnect" href="..."&gt;</code></td></tr>
<tr><td><strong>Avoid excessive iframes</strong></td><td>Each iframe creates overhead (~2-5MB memory). Limit to 2-3 per page.</td><td>Use embeds only when necessary</td></tr></table>

<div class="tip"><strong>💡 Facade Pattern for YouTube:</strong> Instead of loading a heavy YouTube iframe on page load (which downloads ~800KB of JS), show a thumbnail image. Replace it with the real iframe only when the user clicks play. This can improve page load by 2-3 seconds!</div>

<h3>♿ Accessibility Best Practices</h3>
<ul>
<li><strong>Always add <code>title</code></strong> — Screen readers announce: "iframe: YouTube video player" instead of just "iframe"</li>
<li><strong>Make title descriptive</strong> — "YouTube video" is bad. "Tutorial: How to learn HTML in 10 minutes" is good.</li>
<li><strong>Keyboard navigation</strong> — Users can Tab into iframes. Ensure the iframe content is also keyboard-accessible.</li>
<li><strong>Provide alternatives</strong> — For users who can't interact with embeds, provide a direct link: <code>&lt;a href="..."&gt;Watch on YouTube&lt;/a&gt;</code></li>
<li><strong>Use <code>aria-hidden="true"</code></strong> for decorative iframes (like background animations) that add no content value</li>
</ul>

<h3>🆚 iframe vs Other Embedding Methods</h3>
<table class="at"><tr><th>Method</th><th>Use For</th><th>Isolation</th><th>Performance</th></tr>
<tr><td><code>&lt;iframe&gt;</code></td><td>External pages, videos, maps, third-party content</td><td>✅ Full isolation (separate DOM/CSS/JS)</td><td>❌ Heavy (separate document)</td></tr>
<tr><td><code>&lt;embed&gt;</code></td><td>Plugins, PDFs (deprecated for most uses)</td><td>Varies</td><td>Varies</td></tr>
<tr><td><code>&lt;object&gt;</code></td><td>PDFs, SVGs, fallback content</td><td>Partial</td><td>Better than iframe</td></tr>
<tr><td><code>&lt;video&gt;/&lt;audio&gt;</code></td><td>Self-hosted media files</td><td>❌ No isolation (same page)</td><td>✅ Lightest</td></tr>
<tr><td>JavaScript API</td><td>Dynamic content from APIs</td><td>❌ No isolation</td><td>✅ Best (no extra document)</td></tr>
<tr><td>Web Components</td><td>Reusable custom elements with Shadow DOM</td><td>Partial (Shadow DOM CSS)</td><td>✅ Good</td></tr></table>

<h3>💻 All Examples</h3>
`+ codeBlock("iframe — All Uses", "html", `<!-- 1. Embed YouTube video -->
<iframe width="560" height="315"
  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
  title="YouTube video player"
  allow="accelerometer; autoplay; clipboard-write;
         encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
  loading="lazy"
  style="border:none; border-radius:12px;">
</iframe>

<!-- 2. Embed Google Maps -->
<iframe
  src="https://maps.google.com/maps?q=New+Delhi&output=embed"
  width="100%" height="400"
  style="border:0; border-radius:12px;"
  title="Google Maps showing New Delhi, India"
  loading="lazy"
  referrerpolicy="no-referrer">
</iframe>

<!-- 3. Sandboxed iframe for untrusted content -->
<iframe src="untrusted-page.html"
  sandbox="allow-scripts"
  width="100%" height="300"
  title="User submitted content (sandboxed)"
  style="border:2px solid red;">
</iframe>

<!-- 4. Open links inside an iframe -->
<a href="https://example.com" target="myFrame">
  Load Example.com in the iframe below ↓
</a>
<iframe name="myFrame" width="100%" height="300"
  title="Link target frame"
  style="border:1px solid #ccc; border-radius:8px;">
</iframe>

<!-- 5. Responsive iframe (16:9 video) -->
<div style="position:relative; padding-bottom:56.25%;
            height:0; overflow:hidden;">
  <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ"
    style="position:absolute; top:0; left:0;
           width:100%; height:100%; border:none;"
    title="Responsive video"
    allowfullscreen loading="lazy">
  </iframe>
</div>

<!-- 6. YouTube Facade (performance optimized) -->
<div id="ytFacade" style="cursor:pointer; position:relative;"
  onclick="this.innerHTML='<iframe src=&quot;https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&quot; width=&quot;100%&quot; height=&quot;315&quot; allowfullscreen style=&quot;border:none&quot;></iframe>'">
  <img src="https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg"
    alt="Click to play video" width="100%"
    style="border-radius:12px;">
  <div style="position:absolute;top:50%;left:50%;
    transform:translate(-50%,-50%);font-size:60px;">▶️</div>
</div>`) + `

<div class="demo"><h4>▶ Live Demo 1 — srcdoc iframe (self-contained)</h4>
<iframe srcdoc="<div style='font-family:Inter,sans-serif;padding:20px;background:linear-gradient(135deg,#6c63ff,#3ecfcf);color:#fff;border-radius:8px;text-align:center'><h2>🪟 Hello from inside an iframe!</h2><p>This content is loaded via <b>srcdoc</b> — no external URL needed!</p><p style='font-size:.85em;opacity:.8'>I have my own DOM, CSS, and JavaScript context.</p></div>"
  width="100%" height="140" style="border:none;border-radius:8px;" title="srcdoc demo" sandbox></iframe>
</div>

<div class="demo"><h4>▶ Live Demo 2 — Interactive srcdoc with JavaScript</h4>
<iframe srcdoc="<div style='font-family:Inter,sans-serif;padding:20px;background:#0a0a2a;color:#d0d0ee;border-radius:8px;text-align:center'><h3 style='color:#6c63ff'>🎨 Interactive iframe</h3><p>Click the button to change my background!</p><button onclick=&quot;document.body.style.background=document.body.style.background==='#1a3e1a'?'#0a0a2a':'#1a3e1a';this.textContent=document.body.style.background==='#1a3e1a'?'Go Dark':'Go Green'&quot; style='padding:8px 20px;background:linear-gradient(135deg,#6c63ff,#3ecfcf);color:#fff;border:none;border-radius:6px;cursor:pointer;font-size:14px'>Go Green</button></div>"
  width="100%" height="140" style="border:none;border-radius:8px;" title="Interactive iframe demo" sandbox="allow-scripts"></iframe>
</div>

<div class="demo"><h4>▶ Live Demo 3 — Named iframe with link target</h4>
<p style="margin-bottom:8px">Click a link to load content in the iframe below:</p>
<a href="https://en.wikipedia.org/wiki/HTML" target="demoFrame" style="color:var(--accent);margin-right:12px">📖 Wikipedia: HTML</a>
<a href="https://en.wikipedia.org/wiki/CSS" target="demoFrame" style="color:var(--accent2)">🎨 Wikipedia: CSS</a>
<iframe name="demoFrame" width="100%" height="200" style="border:1px solid var(--border);border-radius:8px;margin-top:8px;" title="Wikipedia content viewer" loading="lazy"></iframe>
</div>

<h3>❌ Common Mistakes & Pitfalls</h3>
<table class="at"><tr><th>Mistake</th><th>Why It's Bad</th><th>Fix</th></tr>
<tr><td>Missing <code>title</code> attribute</td><td>Screen readers say "iframe" with no context — fails accessibility audit</td><td>Always add a descriptive <code>title</code></td></tr>
<tr><td>Using iframe for page layout</td><td>Creates navigation problems, breaks browser back button, bad for SEO</td><td>Use CSS Grid/Flexbox for layouts</td></tr>
<tr><td>Too many iframes (5+)</td><td>Each iframe uses ~2-5MB memory and adds network requests</td><td>Use facade pattern or lazy loading</td></tr>
<tr><td>Not setting dimensions</td><td>Causes layout shift (CLS) when iframe loads — hurts performance score</td><td>Always set <code>width</code> and <code>height</code></td></tr>
<tr><td>Embedding sites that block iframes</td><td>Shows blank/error — sites use X-Frame-Options or CSP frame-ancestors to block</td><td>Check if the site provides an embed URL</td></tr>
<tr><td>Using <code>frameborder</code> attribute</td><td>Deprecated in HTML5</td><td>Use CSS: <code>border: none;</code></td></tr></table>

<div class="tip"><strong>💡 Pro Tip — Responsive Embeds:</strong> YouTube gives you a fixed-size iframe. To make it responsive, wrap it in a container with <code>position: relative; padding-bottom: 56.25%;</code> (that's the 16:9 aspect ratio: 9÷16 = 0.5625). Then position the iframe absolutely to fill the container. This technique works for any video embed — Vimeo, Dailymotion, etc.!</div>

<div class="info"><strong>📝 X-Frame-Options & CSP:</strong> Websites can prevent being embedded in iframes via:<br>
• <code>X-Frame-Options: DENY</code> — blocks all iframe embedding<br>
• <code>X-Frame-Options: SAMEORIGIN</code> — only allows same-domain iframes<br>
• <code>Content-Security-Policy: frame-ancestors 'self' https://trusted.com</code> — modern, more flexible<br>
You CANNOT override these — they are server-side security decisions. If a site blocks iframing, you must use their official embed/API instead.</div>

<div class="warn"><strong>⚠️ SEO Note:</strong> Content inside iframes is NOT indexed by Google as part of your page. If you put important text inside an iframe, search engines won't associate it with your page. Only use iframes for third-party embeds, not for your own content.</div>
`},

      // 11 - NEW
      {
        id: "tag-meta", title: 'The <meta> & Head Tags', badge: "DOCUMENT", emoji: "🧠", content: `
<h3>📌 What is it?</h3>
<p>The <code>&lt;meta&gt;</code> tag provides <strong>metadata</strong> — data <em>about</em> the HTML document itself. It lives inside the <code>&lt;head&gt;</code> section and is <strong>invisible to users</strong> but critical for browsers, search engines, social media platforms, and mobile devices. Without proper meta tags, your page won't look right on mobile, won't show up correctly in Google, and won't have a proper preview when shared on WhatsApp or Twitter.</p>

<h3>📋 Essential Meta Tags — Deep Explanation</h3>
<table class="at"><tr><th>Meta Tag</th><th>Purpose</th><th>Required?</th></tr>
<tr><td><code>charset="UTF-8"</code></td><td>Tells the browser which character encoding to use. UTF-8 supports ALL languages (Hindi, Chinese, Arabic, emoji, etc.)</td><td>✅ Yes — MUST be first tag in head</td></tr>
<tr><td><code>viewport</code></td><td>Controls how the page scales on mobile. Without this, your page renders at desktop width (~980px) on phones and looks tiny</td><td>✅ Yes — essential for responsive design</td></tr>
<tr><td><code>description</code></td><td>A 150-160 character summary of your page. This is what appears below your title in Google search results</td><td>✅ Very important for SEO</td></tr>
<tr><td><code>keywords</code></td><td>Comma-separated keywords. Google IGNORES this now, but Bing and some smaller engines still use it</td><td>❌ Optional (low SEO impact)</td></tr>
<tr><td><code>author</code></td><td>Who wrote/owns the page</td><td>❌ Optional</td></tr>
<tr><td><code>robots</code></td><td>Instructions for search engine crawlers: should they index this page? follow its links?</td><td>❌ Optional (defaults to index,follow)</td></tr></table>

<h3>🔍 The Viewport Meta — Deep Dive</h3>
<p>This is the MOST IMPORTANT meta tag for mobile:</p>
<table class="at"><tr><th>Property</th><th>What it does</th><th>Common Value</th></tr>
<tr><td><code>width</code></td><td>Sets the viewport width</td><td><code>device-width</code> (matches phone screen)</td></tr>
<tr><td><code>initial-scale</code></td><td>Initial zoom level (1.0 = no zoom)</td><td><code>1.0</code></td></tr>
<tr><td><code>maximum-scale</code></td><td>Max zoom allowed</td><td><code>5.0</code> (don't set to 1 — blocks accessibility!)</td></tr>
<tr><td><code>user-scalable</code></td><td>Can user pinch-to-zoom?</td><td><code>yes</code> (NEVER set to "no" — it's an accessibility violation)</td></tr></table>

<div class="warn"><strong>⚠️ Accessibility Warning:</strong> NEVER use <code>maximum-scale=1</code> or <code>user-scalable=no</code>. These prevent visually impaired users from zooming in. This is an accessibility violation and some app stores will reject your app for it.</div>

<h3>🔗 Open Graph Meta Tags — Social Media Previews</h3>
<p>When you share a link on WhatsApp, Twitter, Facebook, LinkedIn, or Discord, these tags control what the preview card looks like:</p>
<table class="at"><tr><th>Property</th><th>What it controls</th><th>Example</th></tr>
<tr><td><code>og:title</code></td><td>Title shown in preview card</td><td><code>"Sanskar - Web Developer"</code></td></tr>
<tr><td><code>og:description</code></td><td>Description below the title</td><td><code>"Portfolio showcasing web projects"</code></td></tr>
<tr><td><code>og:image</code></td><td>Preview image (use 1200x630px for best results)</td><td><code>"https://mysite.com/preview.jpg"</code></td></tr>
<tr><td><code>og:url</code></td><td>Canonical URL of the page</td><td><code>"https://mysite.com/"</code></td></tr>
<tr><td><code>og:type</code></td><td>Type of content</td><td><code>"website"</code>, <code>"article"</code></td></tr>
<tr><td><code>og:site_name</code></td><td>Name of overall site</td><td><code>"Sanskar Developer"</code></td></tr></table>

<h3>🐦 Twitter Card Meta Tags</h3>
<p>Twitter has its own meta tags (in addition to Open Graph):</p>
<table class="at"><tr><th>Tag</th><th>Purpose</th></tr>
<tr><td><code>twitter:card</code></td><td>Card type: <code>"summary"</code>, <code>"summary_large_image"</code>, <code>"player"</code></td></tr>
<tr><td><code>twitter:title</code></td><td>Title for Twitter preview</td></tr>
<tr><td><code>twitter:description</code></td><td>Description for Twitter preview</td></tr>
<tr><td><code>twitter:image</code></td><td>Image for Twitter preview</td></tr>
<tr><td><code>twitter:creator</code></td><td>Twitter @username of author</td></tr></table>

<h3>🤖 The <code>robots</code> Meta — Controlling Search Engines</h3>
<table class="at"><tr><th>Value</th><th>Meaning</th></tr>
<tr><td><code>index, follow</code></td><td>Index this page AND follow its links (DEFAULT behavior)</td></tr>
<tr><td><code>noindex</code></td><td>Don't show this page in search results</td></tr>
<tr><td><code>nofollow</code></td><td>Don't follow links on this page</td></tr>
<tr><td><code>noindex, nofollow</code></td><td>Completely hide from search engines</td></tr>
<tr><td><code>nosnippet</code></td><td>Don't show a text snippet in results</td></tr>
<tr><td><code>noimageindex</code></td><td>Don't index images on this page</td></tr></table>

<h3>🧩 Other <code>&lt;head&gt;</code> Tags — Full List</h3>
<table class="at"><tr><th>Tag</th><th>Purpose</th><th>Example</th></tr>
<tr><td><code>&lt;title&gt;</code></td><td>Browser tab title — critical for SEO (50-60 chars ideal)</td><td><code>&lt;title&gt;Sanskar | Web Dev&lt;/title&gt;</code></td></tr>
<tr><td><code>&lt;link rel="stylesheet"&gt;</code></td><td>Load external CSS file</td><td><code>href="styles.css"</code></td></tr>
<tr><td><code>&lt;link rel="icon"&gt;</code></td><td>Favicon (browser tab icon)</td><td><code>href="favicon.ico"</code></td></tr>
<tr><td><code>&lt;link rel="preconnect"&gt;</code></td><td>Pre-connect to a domain for faster loading</td><td><code>href="https://fonts.googleapis.com"</code></td></tr>
<tr><td><code>&lt;link rel="canonical"&gt;</code></td><td>Tells Google the "main" URL if page has duplicates</td><td><code>href="https://mysite.com/page"</code></td></tr>
<tr><td><code>&lt;style&gt;</code></td><td>Internal/inline CSS</td><td><code>&lt;style&gt; body { ... } &lt;/style&gt;</code></td></tr>
<tr><td><code>&lt;script defer&gt;</code></td><td>JavaScript — <code>defer</code> loads after HTML is parsed</td><td><code>src="app.js"</code></td></tr>
<tr><td><code>&lt;script async&gt;</code></td><td>JavaScript — <code>async</code> loads in parallel, runs immediately</td><td>Best for analytics scripts</td></tr>
<tr><td><code>&lt;base&gt;</code></td><td>Sets base URL for all relative links on the page</td><td><code>href="https://mysite.com/"</code></td></tr>
<tr><td><code>&lt;noscript&gt;</code></td><td>Fallback content when JavaScript is disabled</td><td><code>&lt;noscript&gt;Enable JS&lt;/noscript&gt;</code></td></tr></table>

<h3>⚡ <code>defer</code> vs <code>async</code> — Script Loading</h3>
<table class="at"><tr><th>Method</th><th>When it Downloads</th><th>When it Runs</th><th>Order</th></tr>
<tr><td>(no attribute)</td><td>Blocks HTML parsing</td><td>Immediately</td><td>In order</td></tr>
<tr><td><code>defer</code></td><td>In parallel with HTML</td><td>After HTML is fully parsed</td><td>In order ✅</td></tr>
<tr><td><code>async</code></td><td>In parallel with HTML</td><td>As soon as downloaded</td><td>Random order ⚠️</td></tr></table>

<div class="tip"><strong>💡 Pro Tip:</strong> Use <code>defer</code> for your app scripts (order matters). Use <code>async</code> for independent scripts like Google Analytics (order doesn't matter).</div>

<h3>💻 Complete Example — Professional &lt;head&gt;</h3>
`+ codeBlock("Complete Head Section", "html", `<head>
  <!-- 1. Character encoding (MUST be first!) -->
  <meta charset="UTF-8">

  <!-- 2. Viewport for responsive design -->
  <meta name="viewport"
    content="width=device-width, initial-scale=1.0">

  <!-- 3. Page title (SEO — keep under 60 chars) -->
  <title>Sanskar Developer | Web Development Portfolio</title>

  <!-- 4. SEO meta tags -->
  <meta name="description"
    content="Sanskar is a web developer specializing in HTML, CSS, and JavaScript. View projects and get in touch.">
  <meta name="keywords" content="web developer, HTML, CSS, JavaScript, portfolio">
  <meta name="author" content="Sanskar">
  <meta name="robots" content="index, follow">

  <!-- 5. Open Graph (WhatsApp, Facebook, LinkedIn preview) -->
  <meta property="og:title" content="Sanskar Developer">
  <meta property="og:description" content="Web development portfolio">
  <meta property="og:image" content="https://mysite.com/preview.jpg">
  <meta property="og:url" content="https://mysite.com/">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="Sanskar Developer">

  <!-- 6. Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Sanskar Developer">
  <meta name="twitter:description" content="Web dev portfolio">
  <meta name="twitter:image" content="https://mysite.com/preview.jpg">

  <!-- 7. Favicon -->
  <link rel="icon" type="image/svg+xml" href="logo.svg">
  <link rel="apple-touch-icon" href="apple-icon-180x180.png">

  <!-- 8. Preconnect for faster font loading -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

  <!-- 9. Google Fonts -->
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
    rel="stylesheet">

  <!-- 10. External CSS -->
  <link rel="stylesheet" href="styles.css">

  <!-- 11. Canonical URL (prevent duplicate content issues) -->
  <link rel="canonical" href="https://mysite.com/">

  <!-- 12. JavaScript with defer -->
  <script src="app.js" defer><${'/'}script>

  <!-- 13. Theme color (mobile browser address bar color) -->
  <meta name="theme-color" content="#6c63ff">
</head>`) + `

<div class="demo"><h4>▶ Live Demo — This page's own &lt;head&gt;</h4>
<p>Right-click this page → <strong>View Page Source</strong> to see the real <code>&lt;head&gt;</code> section. You'll find: charset, viewport, description, favicon, and Google Fonts — all working together!</p>
<p style="margin-top:8px"><strong>This page's meta:</strong></p>
<ul>
<li><code>charset</code> = UTF-8 ✅</li>
<li><code>viewport</code> = device-width, scale 1.0 ✅</li>
<li><code>description</code> = "Deep dive into HTML tags..." ✅</li>
<li><code>favicon</code> = Sanskar Developer.svg ✅</li>
</ul>
</div>

<div class="warn"><strong>⚠️ Common Mistakes:</strong><br>
• Putting <code>&lt;meta charset&gt;</code> AFTER <code>&lt;title&gt;</code> — charset MUST come first!<br>
• Missing viewport meta — page looks broken on mobile<br>
• Writing <code>og:image</code> with a relative path — use full absolute URL!<br>
• Using <code>user-scalable=no</code> — accessibility violation!</div>
`},

      // 12 - NEW
      {
        id: "tag-pre-code", title: 'The <pre> & <code> Tags', badge: "TEXT", emoji: "💻", content: `
<h3>📌 What are they?</h3>
<p><code>&lt;pre&gt;</code> = <strong>Preformatted Text</strong> — preserves ALL whitespace (spaces, tabs, and line breaks) exactly as written in the source code. The browser normally collapses multiple spaces into one, but <code>&lt;pre&gt;</code> stops this behavior.</p>
<p><code>&lt;code&gt;</code> = <strong>Code</strong> — marks text as computer code. Browsers render it in a monospace font by default. It does NOT preserve whitespace on its own.</p>

<h3>📋 Key Differences — Detailed</h3>
<table class="at"><tr><th>Feature</th><th><code>&lt;pre&gt;</code></th><th><code>&lt;code&gt;</code></th></tr>
<tr><td>Display Type</td><td><strong>Block-level</strong> — takes full width, starts new line</td><td><strong>Inline</strong> — flows with surrounding text</td></tr>
<tr><td>Whitespace</td><td><strong>Preserved exactly</strong> — spaces, tabs, newlines all kept</td><td><strong>Collapsed</strong> — multiple spaces become one (normal HTML behavior)</td></tr>
<tr><td>Default Font</td><td>Monospace (Courier New, etc.)</td><td>Monospace (Courier New, etc.)</td></tr>
<tr><td>Common Use</td><td>Code blocks, ASCII art, poetry, data output</td><td>Inline mentions of functions, variables, commands</td></tr>
<tr><td>Contains</td><td>Can contain any inline elements including <code>&lt;code&gt;</code></td><td>Text and other inline elements</td></tr>
<tr><td>Scrolling</td><td>Overflows horizontally if line is too long</td><td>Wraps with surrounding text</td></tr></table>

<h3>🔗 The Combo: <code>&lt;pre&gt;&lt;code&gt;</code></h3>
<p>The best practice for displaying code blocks is to combine both tags:</p>
<ul>
<li><code>&lt;pre&gt;</code> provides the whitespace preservation</li>
<li><code>&lt;code&gt;</code> provides the semantic meaning ("this is code")</li>
<li>Together they create a proper, accessible code block</li>
<li>Screen readers announce <code>&lt;code&gt;</code> as code content</li>
</ul>

<h3>🔍 All Related Text Tags — Complete List</h3>
<table class="at"><tr><th>Tag</th><th>Purpose</th><th>Renders As</th><th>Example</th></tr>
<tr><td><code>&lt;code&gt;</code></td><td>Computer code</td><td>Monospace font</td><td><code style="background:var(--bg4);padding:2px 6px;border-radius:4px">console.log()</code></td></tr>
<tr><td><code>&lt;kbd&gt;</code></td><td>Keyboard input the user should press</td><td>Monospace, often bordered</td><td><kbd style="background:var(--bg4);padding:2px 6px;border-radius:4px;border:1px solid var(--border)">Ctrl</kbd> + <kbd style="background:var(--bg4);padding:2px 6px;border-radius:4px;border:1px solid var(--border)">S</kbd></td></tr>
<tr><td><code>&lt;samp&gt;</code></td><td>Sample output from a program</td><td>Monospace</td><td><samp style="font-family:monospace;color:var(--accent2)">Error: file not found</samp></td></tr>
<tr><td><code>&lt;var&gt;</code></td><td>Variable name in math or code</td><td>Italic</td><td><var style="font-style:italic;color:var(--accent3)">x</var> = <var style="font-style:italic;color:var(--accent3)">y</var> + 5</td></tr>
<tr><td><code>&lt;abbr&gt;</code></td><td>Abbreviation with tooltip on hover</td><td>Dotted underline</td><td><abbr title="HyperText Markup Language" style="text-decoration:underline dotted;cursor:help">HTML</abbr> (hover me!)</td></tr>
<tr><td><code>&lt;mark&gt;</code></td><td>Highlighted/marked text</td><td>Yellow background</td><td><mark style="background:#ffd70066;padding:1px 4px;border-radius:3px">important</mark></td></tr>
<tr><td><code>&lt;small&gt;</code></td><td>Side comments, legal text</td><td>Smaller font size</td><td><small style="font-size:.8em;color:var(--text3)">Terms apply</small></td></tr>
<tr><td><code>&lt;sub&gt;</code></td><td>Subscript (chemical formulas)</td><td>Below baseline</td><td>H<sub>2</sub>O</td></tr>
<tr><td><code>&lt;sup&gt;</code></td><td>Superscript (powers, footnotes)</td><td>Above baseline</td><td>x<sup>2</sup> + y<sup>2</sup></td></tr></table>

<h3>⚠️ HTML Entities — Required Inside <code>&lt;pre&gt;</code> and <code>&lt;code&gt;</code></h3>
<p>Since these tags display raw text, you MUST escape special HTML characters:</p>
<table class="at"><tr><th>Character</th><th>Entity</th><th>Why?</th></tr>
<tr><td><code>&lt;</code></td><td><code>&amp;lt;</code></td><td>Browser thinks it's an HTML tag opening</td></tr>
<tr><td><code>&gt;</code></td><td><code>&amp;gt;</code></td><td>Browser thinks it's a tag closing</td></tr>
<tr><td><code>&amp;</code></td><td><code>&amp;amp;</code></td><td>Browser thinks it's starting an entity</td></tr>
<tr><td><code>"</code></td><td><code>&amp;quot;</code></td><td>Can break attribute values</td></tr></table>

<div class="warn"><strong>⚠️ Common Mistake:</strong> Writing <code>&lt;pre&gt;&lt;div&gt;Hello&lt;/div&gt;&lt;/pre&gt;</code> — the browser will treat <code>&lt;div&gt;</code> as a REAL div element, not as text! You must write <code>&amp;lt;div&amp;gt;</code> to display it as text.</div>

<h3>💻 All Examples</h3>
`+ codeBlock("pre & code — All Uses", "html", `<!-- 1. Inline code mention -->
<p>Use the <code>console.log()</code> function to debug JavaScript.</p>
<p>Run <code>npm install</code> in your terminal.</p>
<p>The <code>background-color</code> CSS property sets the background.</p>

<!-- 2. Code block (pre + code = best practice) -->
<pre><code>
function greet(name) {
  console.log("Hello, " + name + "!");
}
greet("Sanskar");
// Output: Hello, Sanskar!
</code></pre>

<!-- 3. ASCII Art — pre preserves all spacing -->
<pre>
  ╔═══════════════════════╗
  ║    Sanskar Developer   ║
  ║   ==================   ║
  ║   &lt;/&gt; HTML Expert     ║
  ╚═══════════════════════╝
</pre>

<!-- 4. Keyboard shortcuts using kbd -->
<p>Press <kbd>Ctrl</kbd> + <kbd>C</kbd> to copy.</p>
<p>Press <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>I</kbd> to open DevTools.</p>
<p>Press <kbd>Alt</kbd> + <kbd>Tab</kbd> to switch windows.</p>

<!-- 5. Sample program output -->
<p>Terminal output:</p>
<pre><samp>
$ node app.js
Server running on port 3000
Connected to database successfully
</samp></pre>

<!-- 6. Mathematical variables -->
<p>The quadratic formula: <var>x</var> = (-<var>b</var> &plusmn;
&radic;(<var>b</var><sup>2</sup> - 4<var>a</var><var>c</var>))
/ 2<var>a</var></p>

<!-- 7. Abbreviations with tooltips -->
<p><abbr title="HyperText Markup Language">HTML</abbr>,
<abbr title="Cascading Style Sheets">CSS</abbr>, and
<abbr title="JavaScript">JS</abbr> are the core web technologies.</p>

<!-- 8. Subscript and Superscript -->
<p>Water: H<sub>2</sub>O</p>
<p>Einstein: E = mc<sup>2</sup></p>

<!-- 9. Highlighted text -->
<p>The most <mark>important</mark> thing to remember is...</p>`) + `

<div class="demo"><h4>▶ Live Demo — All Text Tags in Action</h4>
<p style="margin:6px 0"><strong>Inline code:</strong> Use <code style="background:var(--bg4);padding:2px 8px;border-radius:4px">console.log()</code> to debug. Run <code style="background:var(--bg4);padding:2px 8px;border-radius:4px">npm install</code> in terminal.</p>

<pre style="background:var(--bg4);padding:14px;border-radius:8px;font-family:'Fira Code',monospace;font-size:.85rem;overflow-x:auto;color:var(--accent2);margin:8px 0">function greet(name) {
  console.log("Hello, " + name);
}
greet("Sanskar"); // Hello, Sanskar</pre>

<pre style="background:var(--bg4);padding:14px;border-radius:8px;font-family:'Fira Code',monospace;font-size:.85rem;color:var(--accent);margin:8px 0">  ╔═══════════════════════╗
  ║    Sanskar Developer   ║
  ╚═══════════════════════╝</pre>

<p style="margin:6px 0"><strong>Keyboard:</strong> Press <kbd style="background:var(--bg4);padding:2px 8px;border-radius:4px;border:1px solid var(--border)">Ctrl</kbd> + <kbd style="background:var(--bg4);padding:2px 8px;border-radius:4px;border:1px solid var(--border)">S</kbd> to save. <kbd style="background:var(--bg4);padding:2px 8px;border-radius:4px;border:1px solid var(--border)">Ctrl</kbd> + <kbd style="background:var(--bg4);padding:2px 8px;border-radius:4px;border:1px solid var(--border)">Shift</kbd> + <kbd style="background:var(--bg4);padding:2px 8px;border-radius:4px;border:1px solid var(--border)">I</kbd> for DevTools.</p>

<p style="margin:6px 0"><strong>Variables:</strong> The equation: <var style="font-style:italic;color:var(--accent3)">x</var> = <var style="font-style:italic;color:var(--accent3)">y</var><sup>2</sup> + 5</p>

<p style="margin:6px 0"><strong>Abbreviation:</strong> <abbr title="HyperText Markup Language" style="text-decoration:underline dotted;cursor:help;color:var(--accent)">HTML</abbr> (hover to see full form!)</p>

<p style="margin:6px 0"><strong>Chemistry:</strong> Water = H<sub>2</sub>O &nbsp;|&nbsp; <strong>Math:</strong> E = mc<sup>2</sup></p>

<p style="margin:6px 0"><strong>Marked:</strong> This is <mark style="background:#ffd70044;padding:1px 6px;border-radius:3px">very important</mark> text.</p>

<p style="margin:6px 0"><strong>Sample output:</strong> <samp style="font-family:'Fira Code',monospace;color:var(--accent2)">Error 404: Page not found</samp></p>
</div>

<div class="tip"><strong>💡 Pro Tip:</strong> When building documentation or tutorials (like this page!), combine <code>&lt;pre&gt;&lt;code&gt;</code> with CSS for syntax highlighting. Libraries like <strong>Prism.js</strong> or <strong>Highlight.js</strong> can auto-color your code blocks beautifully.</div>
`},

      // 13 - NEW
      {
        id: "tag-dialog", title: 'The <dialog> Tag', badge: "INTERACTIVE", emoji: "💬", content: `
<h3>📌 What is it?</h3>
<p>The <code>&lt;dialog&gt;</code> tag creates a <strong>native modal or non-modal dialog box</strong> — popups, alerts, confirmations, forms, and lightboxes — built right into the browser with <strong>zero external libraries needed</strong>. Before <code>&lt;dialog&gt;</code>, developers had to build modals from scratch using divs, CSS, and complex JavaScript.</p>

<h3>⚙️ How it Works</h3>
<ul>
<li>By default, a <code>&lt;dialog&gt;</code> is <strong>hidden</strong> (not rendered on screen)</li>
<li>Call <code>.show()</code> to open it as a <strong>non-modal</strong> (page still interactive behind it)</li>
<li>Call <code>.showModal()</code> to open it as a <strong>modal</strong> (blocks page interaction, adds backdrop)</li>
<li>Call <code>.close()</code> to close it, or use a <code>&lt;form method="dialog"&gt;</code> inside</li>
<li>The <code>open</code> attribute is present when the dialog is visible</li>
<li>Pressing <kbd>Escape</kbd> automatically closes modal dialogs</li>
<li>Focus is automatically trapped inside modal dialogs (accessibility!)</li>
</ul>

<h3>📋 Attributes & Properties</h3>
<table class="at"><tr><th>Attribute/Method</th><th>Description</th></tr>
<tr><td><code>open</code></td><td>Boolean attribute — if present, dialog is visible</td></tr>
<tr><td><code>.show()</code></td><td>Opens as non-modal (page still usable)</td></tr>
<tr><td><code>.showModal()</code></td><td>Opens as modal with backdrop, traps focus, blocks page</td></tr>
<tr><td><code>.close(returnValue)</code></td><td>Closes dialog. Optional return value accessible via <code>.returnValue</code></td></tr>
<tr><td><code>.returnValue</code></td><td>The value passed to <code>.close()</code> or by a submit button</td></tr>
<tr><td><code>::backdrop</code></td><td>CSS pseudo-element for styling the dark overlay behind modals</td></tr>
<tr><td><code>close</code> event</td><td>Fires when dialog closes</td></tr>
<tr><td><code>cancel</code> event</td><td>Fires when user presses Escape</td></tr></table>

<h3>🎨 Styling the Backdrop</h3>
<p>When opened with <code>.showModal()</code>, the browser creates a <code>::backdrop</code> pseudo-element behind the dialog:</p>
`+ codeBlock("Dialog Styling", "css", `/* Style the dialog box */
dialog {
  border: none;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.3);
  max-width: 500px;
  width: 90%;
}

/* Style the dark overlay behind modal */
dialog::backdrop {
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
}`) + `

<h3>🔒 Why use <code>&lt;dialog&gt;</code> over custom modals?</h3>
<table class="at"><tr><th>Feature</th><th>Native &lt;dialog&gt;</th><th>Custom div modal</th></tr>
<tr><td>Focus trapping</td><td>✅ Automatic</td><td>❌ Manual JS needed</td></tr>
<tr><td>Escape to close</td><td>✅ Built-in</td><td>❌ Manual event listener</td></tr>
<tr><td>Backdrop</td><td>✅ ::backdrop CSS</td><td>❌ Extra div needed</td></tr>
<tr><td>Accessibility</td><td>✅ role="dialog" auto</td><td>❌ Must add ARIA manually</td></tr>
<tr><td>Scroll lock</td><td>✅ Automatic</td><td>❌ Custom CSS/JS</td></tr>
<tr><td>Top layer</td><td>✅ Always on top</td><td>❌ z-index battles</td></tr></table>

`+ codeBlock("Dialog — All Uses", "html", `<!-- 1. Basic modal dialog -->
<dialog id="myDialog">
  <h2>Welcome!</h2>
  <p>This is a native HTML dialog.</p>
  <button onclick="this.closest('dialog').close()">
    Close
  </button>
</dialog>
<button onclick="document.getElementById('myDialog').showModal()">
  Open Modal
</button>

<!-- 2. Confirmation dialog with return value -->
<dialog id="confirmDialog">
  <h3>Are you sure?</h3>
  <p>This action cannot be undone.</p>
  <form method="dialog">
    <button value="cancel">Cancel</button>
    <button value="confirm">Confirm Delete</button>
  </form>
</dialog>

<!-- 3. Form inside a dialog -->
<dialog id="loginDialog">
  <h3>Login</h3>
  <form method="dialog">
    <label>Email: <input type="email" required></label>
    <label>Password: <input type="password" required></label>
    <button value="login">Login</button>
    <button value="cancel" formnovalidate>Cancel</button>
  </form>
</dialog>

<script>
  // Listen for close event
  confirmDialog.addEventListener("close", () => {
    if (confirmDialog.returnValue === "confirm") {
      console.log("User confirmed!");
    }
  });
<${'/'}script>`) + `

<div class="demo"><h4>▶ Live Demo — Native Modal Dialog</h4>
<button onclick="document.getElementById('liveDialog').showModal()" style="padding:10px 24px;background:linear-gradient(135deg,var(--accent),var(--accent2));color:#fff;border:none;border-radius:8px;cursor:pointer;font-size:.9rem;font-weight:600">✨ Open Dialog</button>
<dialog id="liveDialog" style="border:none;border-radius:14px;padding:28px;box-shadow:0 10px 40px #00000044;background:var(--card);color:var(--text);max-width:400px;font-family:Inter,sans-serif">
<h3 style="margin-bottom:12px;color:var(--accent)">💬 Hello Sanskar!</h3>
<p style="color:var(--text2)">This is a <strong>native HTML dialog</strong> — no library needed! Press Escape or click Close.</p>
<form method="dialog" style="margin-top:16px;text-align:right"><button value="close" style="padding:8px 20px;background:var(--accent);color:#fff;border:none;border-radius:6px;cursor:pointer">Close</button></form>
</dialog>
</div>

<div class="tip"><strong>💡 Pro Tip:</strong> Use <code>&lt;form method="dialog"&gt;</code> inside your dialog — clicking a submit button will automatically close the dialog and set <code>.returnValue</code> to the button's <code>value</code>. No JavaScript needed to close it!</div>
`},

      // 14 - NEW
      {
        id: "tag-picture", title: 'The <picture> & <source> Tags', badge: "MEDIA", emoji: "🖼️", content: `
<h3>📌 What is it?</h3>
<p>The <code>&lt;picture&gt;</code> tag lets you serve <strong>different images for different screen sizes, resolutions, and formats</strong>. It contains one or more <code>&lt;source&gt;</code> elements and one <code>&lt;img&gt;</code> fallback. The browser picks the FIRST <code>&lt;source&gt;</code> that matches.</p>
<p>This is essential for <strong>responsive design</strong> and <strong>performance</strong> — serving a massive 4K image to a tiny phone wastes bandwidth and slows your site.</p>

<h3>⚙️ How it Works</h3>
<ul>
<li>The browser evaluates each <code>&lt;source&gt;</code> from top to bottom</li>
<li>It picks the <strong>first one</strong> whose <code>media</code> query or <code>type</code> matches</li>
<li>If no <code>&lt;source&gt;</code> matches, the <code>&lt;img&gt;</code> is used as fallback</li>
<li>The <code>&lt;img&gt;</code> tag is <strong>REQUIRED</strong> — it's also what gets displayed</li>
<li>The <code>&lt;img&gt;</code> provides the <code>alt</code> text and dimensions</li>
</ul>

<h3>📋 Attributes</h3>
<table class="at"><tr><th>Element</th><th>Attribute</th><th>Description</th></tr>
<tr><td><code>&lt;source&gt;</code></td><td><code>srcset</code></td><td>Image URL(s) — can include multiple with width descriptors</td></tr>
<tr><td><code>&lt;source&gt;</code></td><td><code>media</code></td><td>Media query — when this matches, use this source</td></tr>
<tr><td><code>&lt;source&gt;</code></td><td><code>type</code></td><td>MIME type — browser skips if format unsupported</td></tr>
<tr><td><code>&lt;source&gt;</code></td><td><code>sizes</code></td><td>Tells browser the display size for choosing from srcset</td></tr>
<tr><td><code>&lt;img&gt;</code></td><td><code>src</code></td><td>Fallback image URL</td></tr>
<tr><td><code>&lt;img&gt;</code></td><td><code>alt</code></td><td>Alt text (REQUIRED for accessibility)</td></tr>
<tr><td><code>&lt;img&gt;</code></td><td><code>loading</code></td><td><code>"lazy"</code> for deferred loading</td></tr></table>

<h3>🎯 Three Use Cases</h3>
<table class="at"><tr><th>Use Case</th><th>How</th><th>Example</th></tr>
<tr><td><strong>Art Direction</strong></td><td>Different crop/image per screen size</td><td>Wide landscape on desktop, cropped portrait on mobile</td></tr>
<tr><td><strong>Format Selection</strong></td><td>Serve modern formats (AVIF, WebP) with JPEG fallback</td><td>Save 40-60% bandwidth for supported browsers</td></tr>
<tr><td><strong>Resolution Switching</strong></td><td>Serve higher-res images for retina displays</td><td>1x for normal, 2x for retina, 3x for ultra</td></tr></table>

`+ codeBlock("picture — All Uses", "html", `<!-- 1. Art Direction (different images per screen) -->
<picture>
  <source media="(min-width: 1024px)"
    srcset="hero-desktop.jpg">
  <source media="(min-width: 640px)"
    srcset="hero-tablet.jpg">
  <img src="hero-mobile.jpg"
    alt="Hero banner" width="800" height="400"
    loading="lazy">
</picture>

<!-- 2. Modern format with fallback -->
<picture>
  <source srcset="photo.avif" type="image/avif">
  <source srcset="photo.webp" type="image/webp">
  <img src="photo.jpg" alt="Beautiful landscape"
    width="800" height="600">
</picture>

<!-- 3. Resolution switching (retina) -->
<picture>
  <source srcset="logo-1x.png 1x, logo-2x.png 2x,
                  logo-3x.png 3x">
  <img src="logo-1x.png" alt="Company Logo"
    width="200" height="60">
</picture>

<!-- 4. Dark mode different image -->
<picture>
  <source srcset="logo-dark.png"
    media="(prefers-color-scheme: dark)">
  <img src="logo-light.png" alt="Site logo"
    width="200">
</picture>`) + `

<div class="demo"><h4>▶ Live Demo — format-aware image</h4>
<picture>
  <source srcset="Sanskar Developer.svg" type="image/svg+xml">
  <img src="Sanskar Developer.svg" alt="Sanskar Logo" width="80" style="border-radius:12px;border:2px solid var(--accent)">
</picture>
<p style="font-size:.8rem;color:var(--text3)">↑ SVG served via &lt;picture&gt; with type checking</p>
</div>

<div class="warn"><strong>⚠️ Common Mistake:</strong> Forgetting the <code>&lt;img&gt;</code> inside <code>&lt;picture&gt;</code>. The <code>&lt;img&gt;</code> is NOT optional — without it, nothing displays! The <code>&lt;source&gt;</code> elements only provide alternatives.</div>

<div class="tip"><strong>💡 Format Priority Order:</strong> Always list formats from newest to oldest: <strong>AVIF → WebP → JPEG</strong>. AVIF saves ~50% vs JPEG, WebP saves ~30%. The browser picks the first format it supports!</div>
`},

      // 15 - NEW
      {
        id: "tag-progress-meter", title: 'The <progress> & <meter> Tags', badge: "WIDGET", emoji: "📊", content: `
<h3>📌 What are they?</h3>
<p><code>&lt;progress&gt;</code> shows the <strong>completion progress</strong> of a task (like file uploads, installations, loading).</p>
<p><code>&lt;meter&gt;</code> shows a <strong>scalar measurement within a known range</strong> (like disk usage, battery level, scores, ratings).</p>
<p>Both are <strong>semantic HTML elements</strong> that screen readers can announce properly, unlike custom progress bars made from divs.</p>

<h3>📋 Attributes — progress</h3>
<table class="at"><tr><th>Attribute</th><th>Description</th><th>Example</th></tr>
<tr><td><code>value</code></td><td>Current progress (number)</td><td><code>70</code></td></tr>
<tr><td><code>max</code></td><td>Maximum value (default: 1)</td><td><code>100</code></td></tr>
<tr><td>(no value)</td><td>Shows <strong>indeterminate</strong> state (animated loading)</td><td>Spinner/pulsing bar</td></tr></table>

<h3>📋 Attributes — meter</h3>
<table class="at"><tr><th>Attribute</th><th>Description</th><th>Example</th></tr>
<tr><td><code>value</code></td><td>Current measurement (REQUIRED)</td><td><code>65</code></td></tr>
<tr><td><code>min</code></td><td>Minimum bound (default: 0)</td><td><code>0</code></td></tr>
<tr><td><code>max</code></td><td>Maximum bound (default: 1)</td><td><code>100</code></td></tr>
<tr><td><code>low</code></td><td>Below this = low range (yellow/warning)</td><td><code>25</code></td></tr>
<tr><td><code>high</code></td><td>Above this = high range (green/good)</td><td><code>75</code></td></tr>
<tr><td><code>optimum</code></td><td>The ideal value — browser colors based on this</td><td><code>80</code></td></tr></table>

<h3>🆚 progress vs meter</h3>
<table class="at"><tr><th>Feature</th><th>&lt;progress&gt;</th><th>&lt;meter&gt;</th></tr>
<tr><td>Purpose</td><td>Task completion over time</td><td>Static measurement</td></tr>
<tr><td>Changes?</td><td>Yes — updates as task progresses</td><td>No — shows a snapshot value</td></tr>
<tr><td>Indeterminate</td><td>✅ Yes (no value = loading spinner)</td><td>❌ No</td></tr>
<tr><td>Color zones</td><td>❌ No (single color)</td><td>✅ Yes (low/medium/high colors)</td></tr>
<tr><td>Use cases</td><td>Downloads, uploads, installation</td><td>Disk space, grades, ratings</td></tr></table>

`+ codeBlock("progress & meter", "html", `<!-- 1. Determinate progress bar (70%) -->
<label>Download: <progress value="70" max="100">70%</progress></label>

<!-- 2. Indeterminate progress (loading...) -->
<label>Loading: <progress>Please wait...</progress></label>

<!-- 3. File upload progress with JS -->
<progress id="uploadBar" value="0" max="100"></progress>
<script>
  // Simulate upload
  let pct = 0;
  const timer = setInterval(() => {
    pct += 10;
    document.getElementById("uploadBar").value = pct;
    if (pct >= 100) clearInterval(timer);
  }, 500);
<${'/'}script>

<!-- 4. Meter — Disk usage (good range) -->
<label>Disk Space:
  <meter value="45" min="0" max="100"
    low="70" high="90" optimum="30">
    45 GB / 100 GB
  </meter>
</label>

<!-- 5. Meter — Low battery (warning) -->
<label>Battery:
  <meter value="15" min="0" max="100"
    low="20" high="80" optimum="90">
    15%
  </meter>
</label>

<!-- 6. Meter — Exam score -->
<label>Score:
  <meter value="85" min="0" max="100"
    low="40" high="70" optimum="90">
    85/100
  </meter>
</label>`) + `

<div class="demo"><h4>▶ Live Demo — progress & meter</h4>
<p style="margin:6px 0"><strong>Progress (70%):</strong><br>
<progress value="70" max="100" style="width:100%;height:22px;border-radius:6px">70%</progress></p>

<p style="margin:6px 0"><strong>Indeterminate (loading):</strong><br>
<progress style="width:100%;height:22px;border-radius:6px">Loading...</progress></p>

<p style="margin:6px 0"><strong>Meter — Disk OK (45%):</strong><br>
<meter value="45" min="0" max="100" low="70" high="90" optimum="30" style="width:100%;height:22px">45%</meter></p>

<p style="margin:6px 0"><strong>Meter — Battery Low (15%):</strong><br>
<meter value="15" min="0" max="100" low="20" high="80" optimum="90" style="width:100%;height:22px">15%</meter></p>

<p style="margin:6px 0"><strong>Meter — Great Score (85%):</strong><br>
<meter value="85" min="0" max="100" low="40" high="70" optimum="90" style="width:100%;height:22px">85%</meter></p>
</div>

<div class="info"><strong>📝 Fallback Content:</strong> Text between <code>&lt;progress&gt;</code> or <code>&lt;meter&gt;</code> tags is shown in browsers that don't support them. Always include fallback text!</div>
`},

      // 16 - NEW
      {
        id: "tag-template", title: 'The <template> Tag', badge: "ADVANCED", emoji: "📄", content: `
<h3>📌 What is it?</h3>
<p>The <code>&lt;template&gt;</code> tag holds <strong>HTML content that is NOT rendered</strong> when the page loads. It acts as a reusable blueprint/stamp — you use JavaScript to <strong>clone and insert</strong> its contents whenever needed. Think of it like a cookie cutter: the template is the cutter, and each clone is a new cookie.</p>

<h3>⚙️ How it Works</h3>
<ul>
<li>Content inside <code>&lt;template&gt;</code> is <strong>parsed but NOT rendered</strong></li>
<li>Images inside don't load, scripts don't run, CSS doesn't apply</li>
<li>Access content via <code>.content</code> property (returns a DocumentFragment)</li>
<li>Use <code>.content.cloneNode(true)</code> to create a copy you can insert into the DOM</li>
<li>Each clone is independent — modifying one doesn't affect others</li>
<li>It's a core building block of <strong>Web Components</strong></li>
</ul>

<h3>🎯 Why use templates?</h3>
<table class="at"><tr><th>Benefit</th><th>Explanation</th></tr>
<tr><td><strong>Performance</strong></td><td>Content isn't rendered until needed — no wasted resources</td></tr>
<tr><td><strong>Reusability</strong></td><td>Define once, stamp out many copies</td></tr>
<tr><td><strong>Clean Code</strong></td><td>HTML stays in HTML (not in JS strings)</td></tr>
<tr><td><strong>Dynamic Lists</strong></td><td>Perfect for rendering lists, cards, table rows from data</td></tr>
<tr><td><strong>Web Components</strong></td><td>Used inside Custom Elements for Shadow DOM content</td></tr></table>

`+ codeBlock("template — All Uses", "html", `<!-- 1. Basic template (invisible on page) -->
<template id="cardTemplate">
  <div class="card" style="border:1px solid #ccc;
    padding:16px; border-radius:8px; margin:8px 0">
    <h3 class="card-title">Title</h3>
    <p class="card-desc">Description</p>
    <button class="card-btn">Learn More</button>
  </div>
</template>

<!-- 2. Use JS to clone and insert -->
<div id="cardContainer"></div>
<script>
  const template = document.getElementById("cardTemplate");
  const container = document.getElementById("cardContainer");

  const courses = [
    { title: "HTML", desc: "Structure of the web" },
    { title: "CSS", desc: "Styling and layout" },
    { title: "JavaScript", desc: "Logic and interactivity" }
  ];

  courses.forEach(course => {
    // Clone the template content
    const clone = template.content.cloneNode(true);

    // Fill in the data
    clone.querySelector(".card-title").textContent
      = course.title;
    clone.querySelector(".card-desc").textContent
      = course.desc;

    // Insert into the page
    container.appendChild(clone);
  });
<${'/'}script>

<!-- 3. Table row template -->
<template id="rowTemplate">
  <tr>
    <td class="name"></td>
    <td class="email"></td>
    <td class="role"></td>
  </tr>
</template>`) + `

<div class="demo"><h4>▶ Live Demo — template cannot be seen!</h4>
<p>There's a <code>&lt;template&gt;</code> element below this text. Can you see it? <strong>No!</strong> Because templates are invisible until cloned via JavaScript.</p>
<template id="hiddenTemplate"><div style="background:var(--accent);color:#fff;padding:12px;border-radius:8px">🎉 You can't see me! I'm inside a template.</div></template>
<p style="color:var(--text3);font-size:.85rem">↑ There IS a template here with content, but the browser doesn't render it. Inspect the HTML to see it!</p>
</div>

<div class="tip"><strong>💡 template vs innerHTML:</strong> Using <code>&lt;template&gt;</code> is cleaner and safer than building HTML strings in JavaScript. Templates are pre-parsed by the browser, prevent XSS vulnerabilities, and keep your HTML out of JS strings.</div>

<div class="warn"><strong>⚠️ Common Mistake:</strong> Trying to select elements inside a template with <code>querySelector</code> directly won't work — you must access them through <code>template.content.querySelector()</code> first!</div>
`},

      // 17 - NEW
      {
        id: "tag-map-area", title: 'The <map> & <area> Tags', badge: "INTERACTIVE", emoji: "🗺️", content: `
<h3>📌 What is it?</h3>
<p>The <code>&lt;map&gt;</code> tag creates an <strong>image map</strong> — making specific regions of an image <strong>clickable</strong>. Each clickable region is defined by an <code>&lt;area&gt;</code> element. It's like having invisible hotspot buttons overlaid on an image. The <code>&lt;img&gt;</code> tag connects to the map using the <code>usemap</code> attribute.</p>

<h3>⚙️ How it Works</h3>
<ul>
<li>An <code>&lt;img&gt;</code> with <code>usemap="#mapName"</code> connects to the matching <code>&lt;map name="mapName"&gt;</code></li>
<li>Inside the <code>&lt;map&gt;</code>, each <code>&lt;area&gt;</code> defines a clickable region</li>
<li>The <code>shape</code> and <code>coords</code> attributes define the region's shape and position</li>
<li>Clicking an area navigates to its <code>href</code> URL</li>
<li>Areas can also trigger JavaScript events</li>
</ul>

<h3>📋 Attributes — &lt;area&gt;</h3>
<table class="at"><tr><th>Attribute</th><th>Description</th><th>Example</th></tr>
<tr><td><code>shape</code></td><td>Shape of the clickable region</td><td><code>"rect"</code>, <code>"circle"</code>, <code>"poly"</code>, <code>"default"</code></td></tr>
<tr><td><code>coords</code></td><td>Coordinates defining the shape (pixels from top-left)</td><td>See table below</td></tr>
<tr><td><code>href</code></td><td>URL to navigate to when clicked</td><td><code>"https://example.com"</code></td></tr>
<tr><td><code>alt</code></td><td>Alt text for the area (REQUIRED for accessibility)</td><td><code>"Click for details"</code></td></tr>
<tr><td><code>target</code></td><td>Where to open the link</td><td><code>"_blank"</code></td></tr>
<tr><td><code>download</code></td><td>Download the linked file instead of navigating</td><td><code>"file.pdf"</code></td></tr></table>

<h3>📐 Shape Coordinates</h3>
<table class="at"><tr><th>Shape</th><th>Coords Format</th><th>Meaning</th></tr>
<tr><td><code>rect</code></td><td><code>x1,y1,x2,y2</code></td><td>Top-left corner (x1,y1) to bottom-right corner (x2,y2)</td></tr>
<tr><td><code>circle</code></td><td><code>cx,cy,radius</code></td><td>Center point (cx,cy) and radius</td></tr>
<tr><td><code>poly</code></td><td><code>x1,y1,x2,y2,...xn,yn</code></td><td>Series of points forming a polygon</td></tr>
<tr><td><code>default</code></td><td>(none needed)</td><td>Entire image (catch-all)</td></tr></table>

<h3>🌍 Real-World Uses</h3>
<ul>
<li><strong>Interactive maps</strong> — Click on countries/states to navigate</li>
<li><strong>Floor plans</strong> — Click rooms for details</li>
<li><strong>Product images</strong> — Click parts to see specifications</li>
<li><strong>Anatomy diagrams</strong> — Click body parts for medical info</li>
<li><strong>Infographics</strong> — Make sections of an infographic clickable</li>
<li><strong>Game interfaces</strong> — Simple click-based games</li>
</ul>

`+ codeBlock("Image Map", "html", `<!-- Step 1: Create the image with usemap -->
<img src="office-floor-plan.png"
  alt="Office Floor Plan"
  usemap="#officeMap"
  width="600" height="400">

<!-- Step 2: Define the map with areas -->
<map name="officeMap">
  <!-- Rectangle: Conference Room -->
  <area shape="rect" coords="50,30,200,150"
    href="#conference-room"
    alt="Conference Room"
    title="Conference Room A">

  <!-- Circle: Reception Desk -->
  <area shape="circle" coords="400,200,50"
    href="#reception"
    alt="Reception Desk"
    title="Reception Area">

  <!-- Polygon: Kitchen (irregular shape) -->
  <area shape="poly"
    coords="300,300,450,300,450,380,350,380,300,350"
    href="#kitchen"
    alt="Kitchen Area"
    title="Kitchen & Break Room">

  <!-- Default: catch-all for rest of image -->
  <area shape="default"
    href="#overview"
    alt="General Office" >
</map>

<!-- With JavaScript event handlers -->
<map name="interactiveMap">
  <area shape="rect" coords="0,0,100,100"
    alt="Zone A"
    onclick="alert('You clicked Zone A!')"
    style="cursor:pointer">
  <area shape="circle" coords="200,100,60"
    alt="Zone B"
    onmouseover="showTooltip(this)"
    onmouseout="hideTooltip(this)">
</map>`) + `

<div class="demo"><h4>▶ Live Demo — Clickable Image Map</h4>
<div style="position:relative;display:inline-block">
<svg width="300" height="200" viewBox="0 0 300 200" style="border-radius:8px;border:1px solid var(--border)">
  <rect width="300" height="200" fill="var(--bg3)"/>
  <rect x="20" y="20" width="100" height="70" rx="8" fill="var(--accent)" opacity="0.3"/>
  <text x="70" y="60" fill="var(--accent)" font-size="12" text-anchor="middle" font-family="Inter">Zone A</text>
  <circle cx="210" cy="55" r="35" fill="var(--accent2)" opacity="0.3"/>
  <text x="210" y="60" fill="var(--accent2)" font-size="12" text-anchor="middle" font-family="Inter">Zone B</text>
  <rect x="50" y="130" width="200" height="50" rx="8" fill="var(--accent3)" opacity="0.3"/>
  <text x="150" y="160" fill="var(--accent3)" font-size="12" text-anchor="middle" font-family="Inter">Zone C</text>
</svg>
<p style="font-size:.8rem;color:var(--text3)">↑ Shapes showing how image maps define clickable regions (rect, circle, polygon). In a real map, these would be invisible hotspots over a photograph.</p>
</div>
</div>

<div class="warn"><strong>⚠️ Responsiveness:</strong> Image maps use <strong>pixel coordinates</strong>, which means they DON'T scale when the image resizes. For responsive designs, either use SVG-based clickable regions, JavaScript-based solutions, or recalculate coords on resize.</div>

<div class="tip"><strong>💡 Modern Alternative:</strong> For responsive interactive images, consider using <strong>SVG with clickable elements</strong> or <strong>CSS overlay divs with position:absolute</strong>. These scale with the image. Image maps are still useful for quick, non-responsive implementations.</div>
`},

      // 18 - NEW
      {
        id: "tag-datalist", title: 'The <datalist> Tag', badge: "FORM", emoji: "📝", content: `
<h3>📌 What is it?</h3>
<p>The <code>&lt;datalist&gt;</code> tag provides an <strong>autocomplete dropdown</strong> for input fields. It creates a list of suggested options that appears as the user types, but unlike <code>&lt;select&gt;</code>, the user can still type <strong>any custom value</strong>. Think of it as Google's search suggestions — it offers options but doesn't restrict input.</p>

<h3>⚙️ How it Works</h3>
<ul>
<li>Create a <code>&lt;datalist&gt;</code> with an <code>id</code> containing <code>&lt;option&gt;</code> elements</li>
<li>Connect an <code>&lt;input&gt;</code> to it using the <code>list</code> attribute matching the datalist's <code>id</code></li>
<li>As the user types, matching options appear as suggestions</li>
<li>The user can select a suggestion OR type their own value</li>
<li>Works with <code>text</code>, <code>email</code>, <code>url</code>, <code>tel</code>, <code>number</code>, <code>range</code>, <code>color</code>, <code>date</code>, and more input types</li>
</ul>

<h3>🆚 datalist vs select</h3>
<table class="at"><tr><th>Feature</th><th>&lt;datalist&gt;</th><th>&lt;select&gt;</th></tr>
<tr><td>Custom input</td><td>✅ User can type anything</td><td>❌ Must pick from list</td></tr>
<tr><td>Autocomplete</td><td>✅ Filters as you type</td><td>❌ No built-in filter</td></tr>
<tr><td>Appearance</td><td>Text input with dropdown</td><td>Standard dropdown box</td></tr>
<tr><td>Required value</td><td>❌ Can submit unlisted value</td><td>✅ Must be from options</td></tr>
<tr><td>Best for</td><td>Suggestions, search, tags</td><td>Fixed choices (country, gender)</td></tr></table>

`+ codeBlock("datalist — All Uses", "html", `<!-- 1. Basic autocomplete -->
<label>Choose a language:
  <input type="text" list="languages" placeholder="Start typing...">
</label>
<datalist id="languages">
  <option value="HTML">
  <option value="CSS">
  <option value="JavaScript">
  <option value="Python">
  <option value="Java">
  <option value="C++">
  <option value="TypeScript">
  <option value="Go">
  <option value="Rust">
</datalist>

<!-- 2. With labels (shown as hints) -->
<input type="text" list="browsers">
<datalist id="browsers">
  <option value="Chrome" label="Google Chrome - Most popular">
  <option value="Firefox" label="Mozilla Firefox - Privacy focused">
  <option value="Safari" label="Apple Safari - Mac/iOS">
  <option value="Edge" label="Microsoft Edge - Chromium based">
</datalist>

<!-- 3. Email suggestions -->
<input type="email" list="emails" placeholder="Enter email">
<datalist id="emails">
  <option value="sanskar@gmail.com">
  <option value="sanskar@outlook.com">
  <option value="sanskar@yahoo.com">
</datalist>

<!-- 4. Color picker with presets -->
<input type="color" list="colors">
<datalist id="colors">
  <option value="#6c63ff">
  <option value="#3ecfcf">
  <option value="#ff7eb6">
  <option value="#ffd700">
</datalist>

<!-- 5. Range with tick marks -->
<input type="range" min="0" max="100" list="ticks">
<datalist id="ticks">
  <option value="0">
  <option value="25">
  <option value="50">
  <option value="75">
  <option value="100">
</datalist>`) + `

<div class="demo"><h4>▶ Live Demo — Autocomplete Input</h4>
<label style="display:block;margin-bottom:8px;color:var(--text2)">Your favorite language:</label>
<input type="text" list="demolang" placeholder="Start typing..." style="width:100%;padding:10px 14px;background:var(--bg3);border:1px solid var(--border);border-radius:8px;color:var(--text);font-family:Inter,sans-serif;font-size:.9rem">
<datalist id="demolang">
<option value="HTML"><option value="CSS"><option value="JavaScript"><option value="Python"><option value="Java"><option value="TypeScript"><option value="React"><option value="Node.js"><option value="Go"><option value="Rust">
</datalist>
<p style="font-size:.8rem;color:var(--text3);margin-top:6px">↑ Type "J" to see JavaScript and Java suggestions. You can also type anything custom!</p>
</div>

<div class="tip"><strong>💡 Pro Tip:</strong> Datalists work with <code>type="color"</code> to provide preset color swatches, and with <code>type="range"</code> to add visible tick marks on the slider. Very few developers know this!</div>
`},

      // 19 - NEW
      {
        id: "tag-output", title: 'The <output> Tag', badge: "FORM", emoji: "🖥️", content: `
<h3>📌 What is it?</h3>
<p>The <code>&lt;output&gt;</code> tag represents the <strong>result of a calculation or user action</strong>. It's a semantic element that tells the browser and screen readers: "this content is a computed result." Perfect for calculators, dynamic totals, live previews, and form output.</p>

<h3>📋 Attributes</h3>
<table class="at"><tr><th>Attribute</th><th>Description</th><th>Example</th></tr>
<tr><td><code>for</code></td><td>Space-separated list of IDs of elements that contributed to the result</td><td><code>"price qty"</code></td></tr>
<tr><td><code>name</code></td><td>Name for form submission</td><td><code>"total"</code></td></tr>
<tr><td><code>form</code></td><td>Associates with a form by ID (even if outside it)</td><td><code>"calcForm"</code></td></tr></table>

<h3>🆚 output vs span/div</h3>
<table class="at"><tr><th>Feature</th><th>&lt;output&gt;</th><th>&lt;span&gt;/&lt;div&gt;</th></tr>
<tr><td>Semantic meaning</td><td>✅ "This is a result"</td><td>❌ None</td></tr>
<tr><td>Screen readers</td><td>✅ Announce as live region</td><td>❌ Silent updates</td></tr>
<tr><td>Form association</td><td>✅ <code>for</code> attribute links inputs</td><td>❌ No connection</td></tr>
<tr><td>Submittable</td><td>✅ With <code>name</code> attribute</td><td>❌ Not part of form data</td></tr></table>

`+ codeBlock("output — All Uses", "html", `<!-- 1. Simple calculator -->
<form oninput="result.value = Number(a.value) + Number(b.value)">
  <input type="number" id="a" value="50"> +
  <input type="number" id="b" value="25"> =
  <output name="result" for="a b">75</output>
</form>

<!-- 2. Price calculator -->
<form id="shop" oninput="
  total.value = '$' + (price.value * qty.value).toFixed(2)
">
  <label>Price: $<input type="number" id="price" value="29.99"></label>
  <label>Qty: <input type="number" id="qty" value="2" min="1"></label>
  <p>Total: <output name="total" for="price qty">$59.98</output></p>
</form>

<!-- 3. Live slider value -->
<input type="range" id="slider" min="0" max="100" value="50"
  oninput="sliderOut.value = this.value + '%'">
<output id="sliderOut" for="slider">50%</output>

<!-- 4. Character counter -->
<textarea id="msg" maxlength="280"
  oninput="charCount.value = this.value.length + '/280'"
></textarea>
<output id="charCount" for="msg">0/280</output>`) + `

<div class="demo"><h4>▶ Live Demo — Calculator</h4>
<form oninput="demoResult.value = Number(demoA.value) + Number(demoB.value)" style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">
<input type="number" id="demoA" value="50" style="width:80px;padding:8px;background:var(--bg3);border:1px solid var(--border);border-radius:6px;color:var(--text);font-family:Inter;text-align:center"> <span style="font-size:1.2rem;color:var(--text3)">+</span>
<input type="number" id="demoB" value="25" style="width:80px;padding:8px;background:var(--bg3);border:1px solid var(--border);border-radius:6px;color:var(--text);font-family:Inter;text-align:center"> <span style="font-size:1.2rem;color:var(--text3)">=</span>
<output name="demoResult" for="demoA demoB" style="font-size:1.4rem;font-weight:700;color:var(--accent);min-width:60px">75</output>
</form>
<p style="font-size:.8rem;color:var(--text3);margin-top:6px">↑ Change the numbers — the output updates instantly!</p>
</div>

<div class="info"><strong>📝 Accessibility:</strong> <code>&lt;output&gt;</code> has an implicit ARIA <code>role="status"</code>, which means screen readers automatically announce changes. This makes it perfect for dynamic content that updates without page reload.</div>
`},

      // 20 - NEW
      {
        id: "tag-fieldset", title: 'The <fieldset> & <legend> Tags', badge: "FORM", emoji: "📦", content: `
<h3>📌 What are they?</h3>
<p><code>&lt;fieldset&gt;</code> groups <strong>related form controls</strong> together with a visible border. <code>&lt;legend&gt;</code> provides a <strong>caption/title</strong> for the group that sits inside the border. Together they improve form readability, accessibility, and organization.</p>

<h3>⚙️ How it Works</h3>
<ul>
<li><code>&lt;fieldset&gt;</code> draws a <strong>border around grouped controls</strong></li>
<li><code>&lt;legend&gt;</code> must be the <strong>first child</strong> of fieldset</li>
<li>The legend text appears <strong>embedded in the top border</strong></li>
<li>When <code>disabled</code> is set on fieldset, <strong>ALL inputs inside are disabled</strong></li>
<li>Screen readers announce the legend as the group label — critical for accessibility</li>
</ul>

<h3>📋 Attributes</h3>
<table class="at"><tr><th>Element</th><th>Attribute</th><th>Description</th></tr>
<tr><td><code>&lt;fieldset&gt;</code></td><td><code>disabled</code></td><td>Disables ALL form elements inside the fieldset at once</td></tr>
<tr><td><code>&lt;fieldset&gt;</code></td><td><code>form</code></td><td>Associates with a form by ID (even if outside the form element)</td></tr>
<tr><td><code>&lt;fieldset&gt;</code></td><td><code>name</code></td><td>Name visible to JS via <code>form.elements</code></td></tr>
<tr><td><code>&lt;legend&gt;</code></td><td>(none specific)</td><td>Only standard global attributes (id, class, style, etc.)</td></tr></table>

<h3>🎯 When to Use</h3>
<ul>
<li><strong>Radio button groups</strong> — Always wrap related radios in a fieldset</li>
<li><strong>Checkbox groups</strong> — Group related checkboxes together</li>
<li><strong>Address sections</strong> — Billing Address vs Shipping Address</li>
<li><strong>Multi-step forms</strong> — Each step can be a fieldset</li>
<li><strong>Disabling sections</strong> — Disable an entire group with one attribute</li>
</ul>

`+ codeBlock("fieldset & legend", "html", `<!-- 1. Basic grouping -->
<form>
  <fieldset>
    <legend>Personal Information</legend>
    <label>Name: <input type="text" name="name"></label><br>
    <label>Email: <input type="email" name="email"></label><br>
    <label>Phone: <input type="tel" name="phone"></label>
  </fieldset>

  <fieldset>
    <legend>Shipping Address</legend>
    <label>Street: <input type="text" name="street"></label><br>
    <label>City: <input type="text" name="city"></label><br>
    <label>PIN: <input type="text" name="pin"></label>
  </fieldset>
</form>

<!-- 2. Radio button group (BEST PRACTICE) -->
<fieldset>
  <legend>Select Plan</legend>
  <label><input type="radio" name="plan" value="free"> Free</label>
  <label><input type="radio" name="plan" value="pro"> Pro - $9/mo</label>
  <label><input type="radio" name="plan" value="team"> Team - $29/mo</label>
</fieldset>

<!-- 3. Disabled fieldset (disables ALL inputs inside) -->
<fieldset disabled>
  <legend>Premium Features (Upgrade Required)</legend>
  <label><input type="checkbox"> Dark Mode</label>
  <label><input type="checkbox"> Custom Domain</label>
  <label><input type="checkbox"> Analytics</label>
  <p><em>Upgrade to Pro to unlock these features.</em></p>
</fieldset>

<!-- 4. Styled fieldset -->
<fieldset style="border:2px solid #6c63ff; border-radius:12px;
  padding:20px;">
  <legend style="background:#6c63ff; color:white;
    padding:4px 16px; border-radius:20px; font-weight:bold;">
    ✨ Contact Us
  </legend>
  <label>Message: <textarea rows="3" style="width:100%"></textarea></label>
  <button type="submit">Send</button>
</fieldset>`) + `

<div class="demo"><h4>▶ Live Demo — Styled Fieldset</h4>
<fieldset style="border:2px solid var(--accent);border-radius:12px;padding:16px;background:var(--bg3)">
<legend style="background:linear-gradient(135deg,var(--accent),var(--accent2));color:#fff;padding:4px 16px;border-radius:20px;font-weight:700;font-size:.85rem">✨ Choose Your Theme</legend>
<label style="display:block;margin:6px 0;color:var(--text2)"><input type="radio" name="demoPlan" value="dark"> 🌙 Dark Mode</label>
<label style="display:block;margin:6px 0;color:var(--text2)"><input type="radio" name="demoPlan" value="light" checked> ☀️ Light Mode</label>
<label style="display:block;margin:6px 0;color:var(--text2)"><input type="radio" name="demoPlan" value="ocean"> 🌊 Ocean Mode</label>
</fieldset>
</div>

<div class="warn"><strong>⚠️ Accessibility Rule:</strong> Radio button groups should <strong>ALWAYS</strong> be wrapped in a <code>&lt;fieldset&gt;</code> with a <code>&lt;legend&gt;</code>. Without it, screen readers can't tell users what the radio group is about. This is a WCAG requirement.</div>
`},

      // 21 - NEW
      {
        id: "tag-blockquote", title: 'Quotation Tags — blockquote, q, cite', badge: "TEXT", emoji: "💬", content: `
<h3>📌 What are they?</h3>
<p>HTML provides three dedicated tags for handling quotations and citations — each for a different purpose:</p>
<table class="at"><tr><th>Tag</th><th>Purpose</th><th>Display</th></tr>
<tr><td><code>&lt;blockquote&gt;</code></td><td>Long block quotation from another source</td><td><strong>Block</strong> — indented paragraph</td></tr>
<tr><td><code>&lt;q&gt;</code></td><td>Short inline quotation within text</td><td><strong>Inline</strong> — adds quotation marks automatically</td></tr>
<tr><td><code>&lt;cite&gt;</code></td><td>Title of a work (book, movie, article, song)</td><td><strong>Inline</strong> — italic by default</td></tr></table>

<h3>📋 Attributes</h3>
<table class="at"><tr><th>Tag</th><th>Attribute</th><th>Description</th></tr>
<tr><td><code>&lt;blockquote&gt;</code></td><td><code>cite</code></td><td>URL of the source (not displayed — metadata for machines)</td></tr>
<tr><td><code>&lt;q&gt;</code></td><td><code>cite</code></td><td>URL of the source (not displayed)</td></tr>
<tr><td><code>&lt;cite&gt;</code></td><td>(none specific)</td><td>Only global attributes</td></tr></table>

<h3>🔍 Deep Dive</h3>
<ul>
<li><code>&lt;blockquote&gt;</code> is for quoting <strong>entire paragraphs</strong> from other sources (articles, books, speeches)</li>
<li><code>&lt;q&gt;</code> is for <strong>short phrases</strong> quoted within your own text — the browser adds quotation marks automatically</li>
<li><code>&lt;cite&gt;</code> is <strong>NOT for author names</strong> — it's for <em>titles of works</em> (book titles, movie names, song titles)</li>
<li>The <code>cite</code> attribute on blockquote/q is <strong>invisible</strong> — it provides a machine-readable URL for the source</li>
<li>Search engines use the <code>cite</code> attribute to understand content relationships</li>
<li>Screen readers may announce blockquote content differently (as a quotation)</li>
</ul>

`+ codeBlock("Quotation Tags", "html", `<!-- 1. Block quotation -->
<blockquote cite="https://en.wikipedia.org/wiki/HTML">
  <p>HyperText Markup Language (HTML) is the standard
  markup language for documents designed to be displayed
  in a web browser.</p>
  <footer>— <cite>Wikipedia</cite></footer>
</blockquote>

<!-- 2. Inline quotation (adds quotes automatically) -->
<p>As Steve Jobs said,
  <q cite="https://example.com/jobs-speech">
    Stay hungry, stay foolish.
  </q>
</p>

<!-- 3. Citing a work title -->
<p>My favorite book is
  <cite>Atomic Habits</cite> by James Clear.</p>
<p>The movie <cite>Inception</cite> was directed
  by Christopher Nolan.</p>
<p>I love the song
  <cite>Bohemian Rhapsody</cite> by Queen.</p>

<!-- 4. Styled blockquote (modern design) -->
<blockquote style="border-left:4px solid #6c63ff;
  padding:16px 20px; margin:16px 0;
  background:#6c63ff10; border-radius:0 8px 8px 0;
  font-style:italic; font-size:1.1rem;">
  <p>"The only way to do great work is to love
  what you do."</p>
  <footer style="font-style:normal; font-size:.85rem;
    margin-top:8px; color:#888;">
    — Steve Jobs
  </footer>
</blockquote>

<!-- 5. Nested quotation -->
<blockquote>
  <p>The report states:
    <q>Our findings show that
      <q>nested quotes</q>
    work correctly in HTML.</q>
  </p>
</blockquote>`) + `

<div class="demo"><h4>▶ Live Demo</h4>
<blockquote style="border-left:4px solid var(--accent);padding:16px 20px;margin:8px 0;background:var(--bg4);border-radius:0 8px 8px 0;font-style:italic;font-size:1.05rem;color:var(--text)">
<p>“The best way to predict the future is to create it.”</p>
<footer style="font-style:normal;font-size:.85rem;margin-top:8px;color:var(--text3)">— <cite style="color:var(--accent2)">Abraham Lincoln</cite></footer>
</blockquote>
<p style="color:var(--text2);margin-top:8px">As the saying goes, <q style="color:var(--accent)">knowledge is power</q> — and HTML is the foundation of all web knowledge!</p>
<p style="color:var(--text2);margin-top:6px">Currently reading <cite style="color:var(--accent3);font-style:italic">Eloquent JavaScript</cite> by Marijn Haverbeke.</p>
</div>

<div class="info"><strong>📝 <code>&lt;q&gt;</code> quotation marks:</strong> Different languages use different quote marks. The <code>&lt;q&gt;</code> tag automatically uses the correct ones based on the <code>lang</code> attribute: English uses “”, French uses «», German uses „“. This is why <code>&lt;q&gt;</code> is better than typing manual quote characters!</div>
`},

      // 22 - NEW
      {
        id: "tag-object-embed", title: 'The <object> & <embed> Tags', badge: "EMBED", emoji: "📥", content: `
<h3>📌 What are they?</h3>
<p><code>&lt;object&gt;</code> embeds <strong>external resources</strong> like PDFs, SVGs, Flash (deprecated), and other HTML pages. It supports <strong>fallback content</strong> between its tags. <code>&lt;embed&gt;</code> is a simpler, <strong>void element</strong> for embedding content with no fallback support.</p>

<h3>🆚 object vs embed vs iframe</h3>
<table class="at"><tr><th>Feature</th><th>&lt;object&gt;</th><th>&lt;embed&gt;</th><th>&lt;iframe&gt;</th></tr>
<tr><td>Fallback content</td><td>✅ Yes</td><td>❌ No</td><td>❌ No</td></tr>
<tr><td>Closing tag</td><td>✅ Required</td><td>❌ Void element</td><td>✅ Required</td></tr>
<tr><td>PDF embedding</td><td>✅ Best for this</td><td>✅ Also works</td><td>✅ Also works</td></tr>
<tr><td>Nested fallback</td><td>✅ Can nest another object</td><td>❌ No</td><td>❌ No</td></tr>
<tr><td>External pages</td><td>✅ Limited</td><td>❌ No</td><td>✅ Best for this</td></tr>
<tr><td>Modern usage</td><td>PDFs, SVGs</td><td>PDFs, media</td><td>Videos, maps, pages</td></tr></table>

<h3>📋 Attributes — &lt;object&gt;</h3>
<table class="at"><tr><th>Attribute</th><th>Description</th><th>Example</th></tr>
<tr><td><code>data</code></td><td>URL of the resource to embed</td><td><code>"document.pdf"</code></td></tr>
<tr><td><code>type</code></td><td>MIME type of the resource</td><td><code>"application/pdf"</code></td></tr>
<tr><td><code>width / height</code></td><td>Dimensions</td><td><code>"100%"</code> / <code>"500"</code></td></tr>
<tr><td><code>name</code></td><td>Name for form interaction</td><td><code>"myPdf"</code></td></tr>
<tr><td><code>form</code></td><td>Associates with a form</td><td><code>"formId"</code></td></tr></table>

<h3>📋 Attributes — &lt;embed&gt;</h3>
<table class="at"><tr><th>Attribute</th><th>Description</th><th>Example</th></tr>
<tr><td><code>src</code></td><td>URL of the resource</td><td><code>"file.pdf"</code></td></tr>
<tr><td><code>type</code></td><td>MIME type</td><td><code>"application/pdf"</code></td></tr>
<tr><td><code>width / height</code></td><td>Dimensions</td><td><code>"600"</code> / <code>"400"</code></td></tr></table>

<h3>📄 Common MIME Types</h3>
<table class="at"><tr><th>Content</th><th>MIME Type</th></tr>
<tr><td>PDF</td><td><code>application/pdf</code></td></tr>
<tr><td>SVG</td><td><code>image/svg+xml</code></td></tr>
<tr><td>HTML</td><td><code>text/html</code></td></tr>
<tr><td>Video (MP4)</td><td><code>video/mp4</code></td></tr>
<tr><td>Audio (MP3)</td><td><code>audio/mpeg</code></td></tr></table>

`+ codeBlock("object & embed", "html", `<!-- 1. Embed a PDF with fallback -->
<object data="resume.pdf" type="application/pdf"
  width="100%" height="600"
  title="Sanskar's Resume">
  <p>Your browser can't display PDFs.
    <a href="resume.pdf">Download the PDF</a>.
  </p>
</object>

<!-- 2. Embed SVG via object (allows interaction) -->
<object data="diagram.svg" type="image/svg+xml"
  width="400" height="300"
  title="Architecture Diagram">
  <img src="diagram-fallback.png"
    alt="Architecture Diagram (static)">
</object>

<!-- 3. Simple embed (no fallback) -->
<embed src="document.pdf" type="application/pdf"
  width="100%" height="500"
  title="PDF Viewer">

<!-- 4. Nested object fallback chain -->
<object data="video.mp4" type="video/mp4" width="640" height="360">
  <object data="video.webm" type="video/webm" width="640" height="360">
    <p>Your browser doesn't support embedded video.
      <a href="video.mp4">Download the video</a>.
    </p>
  </object>
</object>

<!-- 5. Embed another HTML page -->
<object data="widget.html" type="text/html"
  width="100%" height="200"
  title="Embedded widget">
  <p>Widget failed to load.</p>
</object>`) + `

<div class="demo"><h4>▶ Live Demo — SVG via &lt;object&gt;</h4>
<object data="Sanskar Developer.svg" type="image/svg+xml" width="80" height="80" title="Sanskar Logo" style="border-radius:12px;border:2px solid var(--accent)">
<p style="color:var(--text3)">SVG not supported — fallback text shown instead.</p>
</object>
<p style="font-size:.8rem;color:var(--text3);margin-top:6px">↑ SVG loaded via <code>&lt;object&gt;</code>. Unlike <code>&lt;img&gt;</code>, this allows you to interact with SVG elements via JavaScript!</p>
</div>

<div class="tip"><strong>💡 object vs img for SVG:</strong> When you use <code>&lt;img src="logo.svg"&gt;</code>, the SVG is treated as a static image — no interaction possible. But <code>&lt;object data="logo.svg"&gt;</code> loads it as a live document, so you can style SVG elements with CSS and add JavaScript event listeners to individual paths!</div>

<div class="warn"><strong>⚠️ PDF Support Varies:</strong> Some mobile browsers don't have built-in PDF viewers. Always provide a <strong>download link</strong> as fallback content inside your <code>&lt;object&gt;</code> tag. Never assume the user can view embedded PDFs.</div>
`},

      // 23 - NEW
      {
        id: "tag-select", title: 'The <select> & <optgroup> Tags', badge: "FORM", emoji: "📩", content: `
<h3>📌 What is it?</h3>
<p>The <code>&lt;select&gt;</code> tag creates a <strong>dropdown menu</strong> for choosing one or more options. Each choice is an <code>&lt;option&gt;</code>. The <code>&lt;optgroup&gt;</code> tag lets you <strong>group related options</strong> under labeled headings — making long dropdowns much easier to navigate.</p>

<h3>📋 Attributes — &lt;select&gt;</h3>
<table class="at"><tr><th>Attribute</th><th>Description</th><th>Example</th></tr>
<tr><td><code>name</code></td><td>Name sent with form data</td><td><code>"country"</code></td></tr>
<tr><td><code>multiple</code></td><td>Allow selecting multiple options (hold Ctrl/Cmd)</td><td>(boolean)</td></tr>
<tr><td><code>size</code></td><td>Number of visible options (no dropdown — shows list)</td><td><code>5</code></td></tr>
<tr><td><code>required</code></td><td>Must select a value before submitting</td><td>(boolean)</td></tr>
<tr><td><code>disabled</code></td><td>Disables the entire dropdown</td><td>(boolean)</td></tr>
<tr><td><code>autofocus</code></td><td>Focuses this field when page loads</td><td>(boolean)</td></tr></table>

<h3>📋 Attributes — &lt;option&gt;</h3>
<table class="at"><tr><th>Attribute</th><th>Description</th></tr>
<tr><td><code>value</code></td><td>The value sent to the server (can differ from displayed text)</td></tr>
<tr><td><code>selected</code></td><td>Pre-selects this option</td></tr>
<tr><td><code>disabled</code></td><td>Makes this option unselectable (grayed out)</td></tr>
<tr><td><code>label</code></td><td>Shorter label for the option</td></tr></table>

<h3>📋 Attributes — &lt;optgroup&gt;</h3>
<table class="at"><tr><th>Attribute</th><th>Description</th></tr>
<tr><td><code>label</code></td><td><strong>Required</strong> — the heading text shown for the group</td></tr>
<tr><td><code>disabled</code></td><td>Disables all options in this group</td></tr></table>

`+ codeBlock("select & optgroup", "html", `<!-- 1. Basic dropdown -->
<label>Country:
  <select name="country" required>
    <option value="" disabled selected>-- Choose --</option>
    <option value="IN">India</option>
    <option value="US">United States</option>
    <option value="UK">United Kingdom</option>
    <option value="JP">Japan</option>
  </select>
</label>

<!-- 2. Grouped options with optgroup -->
<select name="language">
  <optgroup label="Frontend">
    <option>HTML</option>
    <option>CSS</option>
    <option>JavaScript</option>
    <option>TypeScript</option>
  </optgroup>
  <optgroup label="Backend">
    <option>Node.js</option>
    <option>Python</option>
    <option>Java</option>
    <option>Go</option>
  </optgroup>
  <optgroup label="Database">
    <option>MySQL</option>
    <option>MongoDB</option>
    <option>PostgreSQL</option>
  </optgroup>
</select>

<!-- 3. Multiple selection -->
<label>Skills (hold Ctrl to select multiple):
  <select name="skills" multiple size="5">
    <option>HTML</option>
    <option>CSS</option>
    <option>JavaScript</option>
    <option>React</option>
    <option>Node.js</option>
  </select>
</label>

<!-- 4. Placeholder option pattern -->
<select required>
  <option value="" hidden>Select your role...</option>
  <option>Developer</option>
  <option>Designer</option>
  <option>Manager</option>
</select>`) + `

<div class="demo"><h4>▶ Live Demo — Grouped Dropdown</h4>
<select style="width:100%;padding:10px;background:var(--bg3);border:1px solid var(--border);border-radius:8px;color:var(--text);font-family:Inter,sans-serif;font-size:.9rem">
<option value="" disabled selected>-- Pick a Technology --</option>
<optgroup label="🎨 Frontend"><option>HTML</option><option>CSS</option><option>JavaScript</option><option>React</option></optgroup>
<optgroup label="⚙️ Backend"><option>Node.js</option><option>Python</option><option>Java</option></optgroup>
<optgroup label="🗄️ Database"><option>MongoDB</option><option>MySQL</option><option>PostgreSQL</option></optgroup>
</select>
<p style="font-size:.8rem;color:var(--text3);margin-top:6px">↑ Options are organized into labeled groups using <code>&lt;optgroup&gt;</code></p>
</div>

<div class="tip"><strong>💡 Placeholder Pattern:</strong> Use <code>&lt;option value="" disabled selected&gt;Choose...&lt;/option&gt;</code> as your first option to create a placeholder. Add <code>hidden</code> to hide it from the dropdown list after selection. Combine with <code>required</code> on the select to force a real choice.</div>
`},

      // 24 - NEW
      {
        id: "tag-ins-del", title: 'The <ins> & <del> Tags', badge: "TEXT", emoji: "✍️", content: `
<h3>📌 What are they?</h3>
<p><code>&lt;del&gt;</code> marks text that has been <strong>deleted/removed</strong> from the document (shown with strikethrough). <code>&lt;ins&gt;</code> marks text that has been <strong>inserted/added</strong> (shown with underline). Together they track changes — like "Track Changes" in Microsoft Word or Google Docs.</p>

<h3>📋 Attributes (both tags)</h3>
<table class="at"><tr><th>Attribute</th><th>Description</th><th>Example</th></tr>
<tr><td><code>cite</code></td><td>URL explaining why the change was made</td><td><code>"/changelog#v2"</code></td></tr>
<tr><td><code>datetime</code></td><td>When the change was made (ISO 8601 format)</td><td><code>"2026-04-09T14:30:00"</code></td></tr></table>

<h3>🆚 del/ins vs CSS strikethrough</h3>
<table class="at"><tr><th>Feature</th><th>&lt;del&gt; / &lt;ins&gt;</th><th>CSS text-decoration</th></tr>
<tr><td>Semantic meaning</td><td>✅ "Content was changed"</td><td>❌ None (visual only)</td></tr>
<tr><td>Screen readers</td><td>✅ Announce as deleted/inserted</td><td>❌ Silent</td></tr>
<tr><td>Metadata</td><td>✅ cite + datetime attributes</td><td>❌ None</td></tr>
<tr><td>SEO</td><td>✅ Search engines understand changes</td><td>❌ Invisible to crawlers</td></tr></table>

<h3>🎯 Real-World Uses</h3>
<ul>
<li><strong>Changelogs</strong> — Show what was changed between versions</li>
<li><strong>Price updates</strong> — Cross out old price, show new price</li>
<li><strong>Legal documents</strong> — Track contract amendments</li>
<li><strong>Wiki edits</strong> — Show revision history</li>
<li><strong>Todo lists</strong> — Strike through completed tasks</li>
<li><strong>Code reviews</strong> — Highlight removed/added lines</li>
</ul>

`+ codeBlock("ins & del", "html", `<!-- 1. Basic text changes -->
<p>My favorite language is
  <del>Java</del>
  <ins>JavaScript</ins>.
</p>

<!-- 2. Price update (e-commerce) -->
<p class="price">
  <del style="color:#888">$99.99</del>
  <ins style="color:#22c55e; text-decoration:none;
    font-weight:bold;">$49.99</ins>
  <span style="color:red">(50% OFF!)</span>
</p>

<!-- 3. With cite and datetime metadata -->
<del cite="/changelog#v2.0"
  datetime="2026-04-01T10:00:00">
  Old API endpoint: /api/v1/users
</del>
<ins cite="/changelog#v2.0"
  datetime="2026-04-09T14:30:00">
  New API endpoint: /api/v2/users
</ins>

<!-- 4. Todo list with completed items -->
<ul>
  <li><del>Learn HTML basics</del> ✅</li>
  <li><del>Build first webpage</del> ✅</li>
  <li><ins>Learn CSS Grid</ins> 🟡 In Progress</li>
  <li>Learn JavaScript ⭕ Pending</li>
</ul>

<!-- 5. Legal document amendment -->
<p>The agreement shall be valid for
  <del>12 months</del>
  <ins>24 months</ins>
  from the date of signing.</p>

<!-- 6. Block-level changes -->
<del>
  <p>This entire paragraph has been removed
  from the updated version of the document.</p>
</del>
<ins>
  <p>This new paragraph replaces the old content
  with updated information.</p>
</ins>`) + `

<div class="demo"><h4>▶ Live Demo</h4>
<p style="color:var(--text2)">My favorite framework is <del style="color:var(--accent3);text-decoration:line-through">Angular</del> <ins style="color:var(--accent2);text-decoration:none;font-weight:700">React</ins>.</p>
<p style="font-size:1.3rem;margin:10px 0"><del style="color:var(--text3);text-decoration:line-through">₹999</del> <ins style="color:#22c55e;text-decoration:none;font-weight:800">₹499</ins> <span style="background:#ff000022;color:#ff4444;padding:2px 8px;border-radius:4px;font-size:.75rem;font-weight:700">50% OFF</span></p>
<ul style="color:var(--text2);list-style:none;padding:0">
<li><del style="color:var(--text3)">Learn HTML</del> ✅</li>
<li><del style="color:var(--text3)">Build first page</del> ✅</li>
<li style="color:var(--accent)"><ins style="text-decoration:none">Learn CSS Grid</ins> 🟡</li>
</ul>
</div>

<div class="info"><strong>📝 <code>&lt;s&gt;</code> vs <code>&lt;del&gt;</code>:</strong> Both show strikethrough, but they mean different things! <code>&lt;del&gt;</code> = "this WAS here and was removed" (edit tracking). <code>&lt;s&gt;</code> = "this is no longer accurate or relevant" (like an expired offer). Use the right one for the right purpose!</div>
`},

      // 25 - NEW
      {
        id: "tag-ruby", title: 'The <ruby>, <rt> & <rp> Tags', badge: "TEXT", emoji: "🌼", content: `
<h3>📌 What are they?</h3>
<p><strong>Ruby annotations</strong> are small text placed above or beside characters to show <strong>pronunciation guides</strong>. Essential for East Asian languages (Japanese, Chinese, Korean) where characters may have multiple pronunciations. The <code>&lt;ruby&gt;</code> tag wraps the base text, <code>&lt;rt&gt;</code> provides the annotation, and <code>&lt;rp&gt;</code> adds fallback parentheses for browsers that don't support ruby.</p>

<h3>⚙️ The Three Tags</h3>
<table class="at"><tr><th>Tag</th><th>Purpose</th><th>Meaning</th></tr>
<tr><td><code>&lt;ruby&gt;</code></td><td>Container for base text + annotation</td><td>"Ruby" = small type used in print</td></tr>
<tr><td><code>&lt;rt&gt;</code></td><td>The annotation text (appears above/beside)</td><td>"Ruby Text"</td></tr>
<tr><td><code>&lt;rp&gt;</code></td><td>Fallback parentheses for unsupported browsers</td><td>"Ruby Parenthesis"</td></tr></table>

<h3>🌍 Use Cases Beyond Asian Languages</h3>
<ul>
<li><strong>Japanese Furigana</strong> — Hiragana above Kanji characters</li>
<li><strong>Chinese Pinyin</strong> — Romanized pronunciation above Chinese characters</li>
<li><strong>Korean pronunciation</strong> — Hangul readings</li>
<li><strong>Educational content</strong> — Adding pronunciation to any language</li>
<li><strong>Musical notation</strong> — Chord names above lyrics</li>
<li><strong>Scientific notation</strong> — Element names above symbols</li>
<li><strong>Language learning apps</strong> — Pronunciation guides</li>
</ul>

`+ codeBlock("ruby annotations", "html", `<!-- 1. Japanese Kanji with Furigana -->
<p>
  <ruby>漢<rp>(</rp><rt>かん</rt><rp>)</rp></ruby>
  <ruby>字<rp>(</rp><rt>じ</rt><rp>)</rp></ruby>
  = Kanji (Chinese characters used in Japanese)
</p>

<!-- 2. Chinese with Pinyin -->
<p>
  <ruby>你<rp>(</rp><rt>nǐ</rt><rp>)</rp></ruby>
  <ruby>好<rp>(</rp><rt>hǎo</rt><rp>)</rp></ruby>
  = Hello in Chinese
</p>

<!-- 3. English pronunciation guide -->
<p>The word
  <ruby>colonel<rp>(</rp><rt>KER-nul</rt><rp>)</rp></ruby>
  is often mispronounced.</p>

<!-- 4. Chemical elements -->
<p>
  <ruby>Fe<rp>(</rp><rt>Iron</rt><rp>)</rp></ruby> +
  <ruby>O₂<rp>(</rp><rt>Oxygen</rt><rp>)</rp></ruby> →
  <ruby>Fe₂O₃<rp>(</rp><rt>Rust</rt><rp>)</rp></ruby>
</p>

<!-- 5. Music chords above lyrics -->
<p style="font-size:1.1rem">
  <ruby>Twinkle<rp>(</rp><rt>C</rt><rp>)</rp></ruby>
  <ruby>twinkle<rp>(</rp><rt>C</rt><rp>)</rp></ruby>
  <ruby>little<rp>(</rp><rt>F</rt><rp>)</rp></ruby>
  <ruby>star<rp>(</rp><rt>C</rt><rp>)</rp></ruby>
</p>

<!-- 6. Styled ruby -->
<style>
  rt { color: #6c63ff; font-size: 0.6em; }
</style>`) + `

<div class="demo"><h4>▶ Live Demo — Ruby Annotations</h4>
<p style="font-size:1.6rem;line-height:2.2;color:var(--text)">
<ruby>漢<rp>(</rp><rt style="color:var(--accent);font-size:.5em">かん</rt><rp>)</rp></ruby><ruby>字<rp>(</rp><rt style="color:var(--accent);font-size:.5em">じ</rt><rp>)</rp></ruby> —
<ruby>你<rp>(</rp><rt style="color:var(--accent2);font-size:.5em">nǐ</rt><rp>)</rp></ruby><ruby>好<rp>(</rp><rt style="color:var(--accent2);font-size:.5em">hǎo</rt><rp>)</rp></ruby>
</p>
<p style="font-size:1.1rem;color:var(--text2)"><ruby>colonel<rp>(</rp><rt style="color:var(--accent3);font-size:.6em">KER-nul</rt><rp>)</rp></ruby> — English words with surprising pronunciation</p>
<p style="font-size:1.2rem;color:var(--text2);margin-top:8px">🎵 <ruby>Twinkle<rp>(</rp><rt style="color:var(--accent);font-size:.55em">C</rt><rp>)</rp></ruby> <ruby>twinkle<rp>(</rp><rt style="color:var(--accent);font-size:.55em">C</rt><rp>)</rp></ruby> <ruby>little<rp>(</rp><rt style="color:var(--accent2);font-size:.55em">F</rt><rp>)</rp></ruby> <ruby>star<rp>(</rp><rt style="color:var(--accent);font-size:.55em">C</rt><rp>)</rp></ruby></p>
</div>

<div class="info"><strong>📝 Why <code>&lt;rp&gt;</code>?</strong> Most modern browsers support ruby. But if an old browser doesn't, without <code>&lt;rp&gt;</code> the annotation would just appear inline with the text, making it unreadable. The <code>&lt;rp&gt;</code> tags add parentheses as fallback: 漢(かん) instead of 漢かん.</div>
`},

      // 26 - NEW
      {
        id: "tag-data-time", title: 'The <data> & <time> Tags', badge: "SEMANTIC", emoji: "⏰", content: `
<h3>📌 What are they?</h3>
<p><code>&lt;time&gt;</code> represents a <strong>date, time, or duration</strong> in a machine-readable format. It helps search engines, calendars, and screen readers understand temporal data.</p>
<p><code>&lt;data&gt;</code> links <strong>any human-readable content</strong> with a <strong>machine-readable value</strong>. It's for non-temporal data like product IDs, prices, or quantities.</p>

<h3>📋 Attributes</h3>
<table class="at"><tr><th>Tag</th><th>Attribute</th><th>Description</th><th>Example</th></tr>
<tr><td><code>&lt;time&gt;</code></td><td><code>datetime</code></td><td>Machine-readable date/time in ISO 8601</td><td><code>"2026-04-09"</code></td></tr>
<tr><td><code>&lt;data&gt;</code></td><td><code>value</code></td><td>Machine-readable equivalent of the content</td><td><code>"SKU-12345"</code></td></tr></table>

<h3>⏰ <code>datetime</code> Format Examples</h3>
<table class="at"><tr><th>Format</th><th>Example</th><th>Meaning</th></tr>
<tr><td>Date only</td><td><code>2026-04-09</code></td><td>April 9, 2026</td></tr>
<tr><td>Time only</td><td><code>14:30:00</code></td><td>2:30 PM</td></tr>
<tr><td>Date + Time</td><td><code>2026-04-09T14:30:00</code></td><td>April 9, 2026 at 2:30 PM</td></tr>
<tr><td>With timezone</td><td><code>2026-04-09T14:30:00+05:30</code></td><td>IST (India)</td></tr>
<tr><td>Year + Month</td><td><code>2026-04</code></td><td>April 2026</td></tr>
<tr><td>Week</td><td><code>2026-W15</code></td><td>Week 15 of 2026</td></tr>
<tr><td>Duration</td><td><code>PT2H30M</code></td><td>2 hours 30 minutes</td></tr>
<tr><td>Duration</td><td><code>P3D</code></td><td>3 days</td></tr></table>

<h3>🌍 Why Machine-Readable Matters</h3>
<ul>
<li><strong>Google</strong> can show event dates in search results (rich snippets)</li>
<li><strong>Calendar apps</strong> can extract dates and create events</li>
<li><strong>Screen readers</strong> announce dates in the user's locale format</li>
<li><strong>Translation tools</strong> can format dates for different regions</li>
<li><strong>E-commerce</strong> platforms can parse prices and product IDs from <code>&lt;data&gt;</code></li>
</ul>

`+ codeBlock("data & time", "html", `<!-- 1. Simple date -->
<p>Published on
  <time datetime="2026-04-09">April 9, 2026</time></p>

<!-- 2. Date and time -->
<p>Event starts at
  <time datetime="2026-04-09T18:00:00+05:30">
    6:00 PM IST, April 9
  </time></p>

<!-- 3. Duration -->
<p>Course duration:
  <time datetime="PT2H30M">2 hours 30 minutes</time></p>

<!-- 4. Relative dates -->
<p>Last updated:
  <time datetime="2026-04-09">2 days ago</time></p>

<!-- 5. Data tag for product info -->
<p>Product:
  <data value="SKU-HTML-101">HTML Masterclass</data></p>
<p>Price:
  <data value="49.99">$49.99 USD</data></p>
<p>Rating:
  <data value="4.8">4.8 out of 5 stars</data></p>

<!-- 6. Event listing with time -->
<article>
  <h3>Web Dev Meetup</h3>
  <p><time datetime="2026-04-15T19:00:00">April 15, 7 PM</time></p>
  <p>Duration: <time datetime="PT1H30M">1.5 hours</time></p>
  <p>Tickets: <data value="0">Free!</data></p>
</article>`) + `

<div class="demo"><h4>▶ Live Demo</h4>
<p style="color:var(--text2)">This page was built on <time datetime="2026-04-09" style="color:var(--accent);font-weight:600">April 9, 2026</time></p>
<p style="color:var(--text2)">Current session started at <time datetime="2026-04-09T20:00:00+05:30" style="color:var(--accent2);font-weight:600">8:00 PM IST</time></p>
<p style="color:var(--text2)">Study time today: <time datetime="PT3H15M" style="color:var(--accent3);font-weight:600">3 hours 15 minutes</time></p>
<p style="color:var(--text2)">Course price: <data value="0" style="color:#22c55e;font-weight:700">Free!</data></p>
</div>

<div class="tip"><strong>💡 Pro Tip:</strong> Always use <code>&lt;time&gt;</code> for dates in blog posts and articles. Google can use the <code>datetime</code> attribute to show "Published 2 hours ago" in search results. Without <code>&lt;time&gt;</code>, Google has to guess what "April 9" means — and might get it wrong!</div>
`},

      // 27 - NEW
      {
        id: "tag-wbr-br", title: 'The <br> & <wbr> Tags', badge: "INLINE", emoji: "↩️", content: `
<h3>📌 What are they?</h3>
<p><code>&lt;br&gt;</code> forces a <strong>hard line break</strong> — the text after it always starts on a new line. <code>&lt;wbr&gt;</code> (Word Break Opportunity) suggests a <strong>possible break point</strong> — the browser only breaks here if the line is too long to fit. Both are <strong>void elements</strong> (no closing tag).</p>

<h3>🆚 br vs wbr vs CSS</h3>
<table class="at"><tr><th>Method</th><th>What it does</th><th>When to use</th></tr>
<tr><td><code>&lt;br&gt;</code></td><td><strong>Always</strong> breaks to new line</td><td>Addresses, poems, line-by-line content</td></tr>
<tr><td><code>&lt;wbr&gt;</code></td><td>Breaks <strong>only if needed</strong> (soft break)</td><td>Long URLs, code, long words</td></tr>
<tr><td><code>word-break: break-all</code></td><td>CSS — allows break anywhere</td><td>Last resort for overflow</td></tr>
<tr><td><code>&amp;shy;</code></td><td>Soft hyphen — breaks with a hyphen</td><td>Long compound words</td></tr>
<tr><td><code>white-space: pre-wrap</code></td><td>CSS — preserves whitespace</td><td>Code, monospace text</td></tr></table>

<h3>⚠️ When NOT to Use &lt;br&gt;</h3>
<ul>
<li><strong>Don't use for spacing</strong> — Use CSS <code>margin</code>/<code>padding</code> instead</li>
<li><strong>Don't use for paragraphs</strong> — Use <code>&lt;p&gt;</code> elements</li>
<li><strong>Don't use for layout</strong> — Use CSS Flexbox/Grid</li>
<li><strong>DO use for</strong> addresses, poems, song lyrics, line-specific content</li>
</ul>

<h3>🎯 <code>&lt;wbr&gt;</code> Deep Dive</h3>
<ul>
<li>Stands for <strong>"Word Break Opportunity"</strong></li>
<li>Browser only breaks here if the text <strong>overflows</strong> its container</li>
<li>No visible character is added (unlike <code>&amp;shy;</code> which adds a hyphen)</li>
<li>Perfect for long URLs, email addresses, file paths, and code</li>
<li>Helps prevent horizontal scrolling on mobile devices</li>
</ul>

`+ codeBlock("br & wbr", "html", `<!-- 1. Address (correct use of br) -->
<address>
  Sanskar Developer<br>
  123 Web Street<br>
  New Delhi, India 110001<br>
  Phone: +91 98765 43210
</address>

<!-- 2. Poem / Song lyrics -->
<p>
  Roses are red,<br>
  Violets are blue,<br>
  HTML is awesome,<br>
  And so are you!
</p>

<!-- 3. wbr in long URLs -->
<p>Visit:
  https://www.<wbr>example.<wbr>com/<wbr>very/<wbr>long/<wbr>path/<wbr>to/<wbr>page.<wbr>html
</p>

<!-- 4. wbr in long words -->
<p>The medicine name is
  Pneumono<wbr>ultra<wbr>microscopic<wbr>silico<wbr>volcano<wbr>coniosis.</p>

<!-- 5. wbr in file paths -->
<p>File location:
  C:\<wbr>Users\<wbr>Sanskar\<wbr>Desktop\<wbr>Projects\<wbr>Web\<wbr>index.html
</p>

<!-- 6. wbr in email -->
<p>Email:
  sanskar.<wbr>developer.<wbr>2026@<wbr>gmail.<wbr>com
</p>

<!-- 7. Haiku (line breaks matter!) -->
<p class="haiku">
  An old silent pond<br>
  A frog jumps into the pond—<br>
  Splash! Silence again.
</p>

<!-- BAD: Don't use br for spacing! -->
<!-- <br><br><br> = WRONG! Use CSS margin instead -->`) + `

<div class="demo"><h4>▶ Live Demo</h4>
<div style="background:var(--bg4);padding:14px;border-radius:8px;margin:8px 0">
<p style="color:var(--text2);font-style:italic;line-height:1.8">
  Roses are red,<br>
  Violets are blue,<br>
  HTML is awesome,<br>
  And so are you! 🌹
</p>
</div>
<p style="color:var(--text2);margin-top:8px"><strong>Long URL with &lt;wbr&gt;:</strong><br>
<span style="font-family:'Fira Code',monospace;font-size:.85rem;color:var(--accent2)">https://www.<wbr>sanskar<wbr>developer.<wbr>com/<wbr>projects/<wbr>html-deep-dive/<wbr>chapter-27</span></p>
<p style="color:var(--text2);margin-top:8px"><strong>Address:</strong></p>
<address style="color:var(--text2);font-style:normal;background:var(--bg4);padding:10px;border-radius:6px">
Sanskar Developer<br>
123 Web Dev Lane<br>
New Delhi, India 110001
</address>
</div>

<div class="warn"><strong>⚠️ Common Mistake:</strong> Using <code>&lt;br&gt;&lt;br&gt;&lt;br&gt;</code> to add spacing between elements. This is semantically wrong and makes your HTML unmaintainable. Always use CSS <code>margin</code> or <code>padding</code> for spacing!</div>

<div class="tip"><strong>💡 <code>&amp;shy;</code> vs <code>&lt;wbr&gt;</code>:</strong> Both create break opportunities. The difference: <code>&amp;shy;</code> adds a visible <strong>hyphen</strong> (-) when it breaks, while <code>&lt;wbr&gt;</code> breaks <strong>silently</strong> with no character. Use <code>&amp;shy;</code> for long compound words (like super&shy;cali&shy;fragilistic), and <code>&lt;wbr&gt;</code> for URLs and code where a hyphen would be confusing.</div>
`},

      // 28 - NEW
      {
        id: "tag-abbr-dfn", title: 'The <abbr> & <dfn> Tags', badge: "TEXT", emoji: "📚", content: `
<h3>📌 What are they?</h3>
<p><code>&lt;abbr&gt;</code> marks an <strong>abbreviation or acronym</strong> and shows its full form in a tooltip on hover. <code>&lt;dfn&gt;</code> marks the <strong>defining instance</strong> of a term — the place where a term is first introduced and explained. Together they improve accessibility, SEO, and reader comprehension.</p>

<h3>📋 Attributes</h3>
<table class="at"><tr><th>Tag</th><th>Attribute</th><th>Description</th></tr>
<tr><td><code>&lt;abbr&gt;</code></td><td><code>title</code></td><td>Full expanded form shown on hover (REQUIRED for accessibility)</td></tr>
<tr><td><code>&lt;dfn&gt;</code></td><td><code>title</code></td><td>If present, this is the term being defined (overrides text content)</td></tr>
<tr><td><code>&lt;dfn&gt;</code></td><td><code>id</code></td><td>Allows other parts of the page to link back to this definition</td></tr></table>

<h3>🆚 abbr vs dfn</h3>
<table class="at"><tr><th>Feature</th><th>&lt;abbr&gt;</th><th>&lt;dfn&gt;</th></tr>
<tr><td>Purpose</td><td>Expand abbreviations</td><td>Mark where a term is defined</td></tr>
<tr><td>Default styling</td><td>Dotted underline</td><td>Italic</td></tr>
<tr><td>Tooltip</td><td>✅ Shows <code>title</code> on hover</td><td>✅ Shows <code>title</code> on hover</td></tr>
<tr><td>Frequency</td><td>Every occurrence of the abbreviation</td><td>Only the FIRST defining instance</td></tr>
<tr><td>Screen readers</td><td>Can announce full form</td><td>Marks as a definition</td></tr>
<tr><td>SEO</td><td>Helps search engines understand acronyms</td><td>Helps identify key concepts</td></tr></table>

<h3>🎯 When to Use</h3>
<ul>
<li><strong><code>&lt;abbr&gt;</code></strong> — Every acronym: HTML, CSS, API, DOM, SEO, HTTP, JSON, REST, SQL, etc.</li>
<li><strong><code>&lt;dfn&gt;</code></strong> — First time you introduce a technical term in documentation, textbooks, glossaries</li>
<li><strong>Combine them</strong> — When defining an abbreviation for the first time</li>
</ul>

`+ codeBlock("abbr & dfn", "html", `<!-- 1. Basic abbreviation with tooltip -->
<p>Learn <abbr title="HyperText Markup Language">HTML</abbr>
  and <abbr title="Cascading Style Sheets">CSS</abbr>
  to build websites.</p>

<!-- 2. Definition of a term -->
<p><dfn>Semantic HTML</dfn> means using HTML elements
  that describe the MEANING of content, not just how
  it looks.</p>

<!-- 3. Combining dfn + abbr (FIRST use) -->
<p><dfn><abbr title="Application Programming Interface">
  API</abbr></dfn> is a set of rules that allows
  software programs to communicate with each other.</p>

<!-- 4. Linking to definitions -->
<p><dfn id="def-dom">
  <abbr title="Document Object Model">DOM</abbr></dfn>
  is the tree structure that browsers create from
  your HTML.</p>
<!--  Later in the document: -->
<p>JavaScript manipulates the
  <a href="#def-dom">DOM</a> to update the page.</p>

<!-- 5. Styled abbreviation -->
<style>
  abbr {
    text-decoration: underline dotted;
    cursor: help;
    color: #6c63ff;
  }
</style>

<!-- 6. Multiple tech abbreviations -->
<p>The <abbr title="Representational State Transfer">REST</abbr>
  <abbr title="Application Programming Interface">API</abbr>
  returns <abbr title="JavaScript Object Notation">JSON</abbr>
  data over <abbr title="Hypertext Transfer Protocol Secure">HTTPS</abbr>.</p>`) + `

<div class="demo"><h4>▶ Live Demo — Hover to see full forms</h4>
<p style="color:var(--text2);line-height:1.8">
Learn <abbr title="HyperText Markup Language" style="text-decoration:underline dotted;cursor:help;color:var(--accent)">HTML</abbr>,
<abbr title="Cascading Style Sheets" style="text-decoration:underline dotted;cursor:help;color:var(--accent2)">CSS</abbr>, and
<abbr title="JavaScript" style="text-decoration:underline dotted;cursor:help;color:var(--accent3)">JS</abbr> to become a
<dfn style="font-style:italic;color:var(--accent)" title="A developer skilled in both frontend and backend">Full-Stack Developer</dfn>.
</p>
<p style="color:var(--text2)">The <abbr title="Representational State Transfer" style="text-decoration:underline dotted;cursor:help;color:var(--accent)">REST</abbr> <abbr title="Application Programming Interface" style="text-decoration:underline dotted;cursor:help;color:var(--accent2)">API</abbr> returns <abbr title="JavaScript Object Notation" style="text-decoration:underline dotted;cursor:help;color:var(--accent3)">JSON</abbr> data.</p>
<p style="font-size:.8rem;color:var(--text3);margin-top:6px">↑ Hover over the dotted-underlined words to see their full meanings!</p>
</div>

<div class="tip"><strong>💡 Best Practice:</strong> Use <code>&lt;dfn&gt;&lt;abbr&gt;</code> together the FIRST time you introduce an acronym, then just <code>&lt;abbr&gt;</code> for every subsequent use. This mimics how academic papers define terms on first use!</div>
`},

      // 29 - NEW
      {
        id: "tag-bdo-bdi", title: 'The <bdo> & <bdi> Tags', badge: "TEXT", emoji: "↔️", content: `
<h3>📌 What are they?</h3>
<p><code>&lt;bdo&gt;</code> (<strong>Bidirectional Override</strong>) <strong>forces</strong> text direction. <code>&lt;bdi&gt;</code> (<strong>Bidirectional Isolation</strong>) <strong>isolates</strong> text that might have a different direction from surrounding content. Essential for supporting Arabic, Hebrew, Urdu, and other right-to-left (RTL) languages alongside left-to-right (LTR) content.</p>

<h3>📋 Attributes</h3>
<table class="at"><tr><th>Tag</th><th>Attribute</th><th>Values</th><th>Description</th></tr>
<tr><td><code>&lt;bdo&gt;</code></td><td><code>dir</code></td><td><code>"rtl"</code> or <code>"ltr"</code></td><td><strong>Required</strong> — Forces text direction</td></tr>
<tr><td><code>&lt;bdi&gt;</code></td><td><code>dir</code></td><td><code>"rtl"</code>, <code>"ltr"</code>, <code>"auto"</code></td><td>Optional — default is <code>auto</code> (browser detects)</td></tr></table>

<h3>🆚 bdo vs bdi</h3>
<table class="at"><tr><th>Feature</th><th>&lt;bdo&gt;</th><th>&lt;bdi&gt;</th></tr>
<tr><td>Full name</td><td>Bidirectional Override</td><td>Bidirectional Isolation</td></tr>
<tr><td>What it does</td><td><strong>Forces</strong> direction (overrides browser)</td><td><strong>Isolates</strong> direction (prevents leaking)</td></tr>
<tr><td>Use case</td><td>Deliberately reverse/change text</td><td>Embed unknown-direction user content</td></tr>
<tr><td><code>dir</code> required?</td><td>✅ Yes</td><td>❌ No (defaults to auto)</td></tr></table>

<h3>🌍 Why This Matters</h3>
<ul>
<li><strong>Arabic, Hebrew, Urdu, Persian</strong> are right-to-left languages</li>
<li>When mixing RTL and LTR text, the browser's <strong>bidirectional algorithm</strong> can get confused</li>
<li><code>&lt;bdi&gt;</code> prevents RTL text from disrupting the layout of surrounding LTR text</li>
<li>Critical for <strong>usernames, reviews, search results</strong> where you don't know the language</li>
<li>Without <code>&lt;bdi&gt;</code>, numbers and punctuation near RTL text can appear in wrong positions</li>
</ul>

`+ codeBlock("bdo & bdi", "html", `<!-- 1. bdo: Force right-to-left -->
<p><bdo dir="rtl">This text is reversed!</bdo></p>
<!-- Output: !desrever si txet sihT -->

<!-- 2. bdo: Force left-to-right for RTL content -->
<p><bdo dir="ltr">مرحبا</bdo></p>
<!-- Forces Arabic to display LTR -->

<!-- 3. bdi: Isolate user-generated content -->
<ul>
  <li>User: <bdi>أحمد</bdi> - Score: 85</li>
  <li>User: <bdi>Sanskar</bdi> - Score: 92</li>
  <li>User: <bdi>דניאל</bdi> - Score: 78</li>
</ul>

<!-- 4. Without bdi (BROKEN layout) -->
<p>User أحمد posted 3 comments</p>
<!-- The "3" might appear in wrong place! -->

<!-- 5. With bdi (FIXED layout) -->
<p>User <bdi>أحمد</bdi> posted 3 comments</p>
<!-- Everything displays correctly -->

<!-- 6. Combining with lang attribute -->
<p>The Arabic word <bdi lang="ar">مرحبا</bdi>
  means "hello".</p>`) + `

<div class="demo"><h4>▶ Live Demo</h4>
<p style="color:var(--text2)"><strong>Reversed text:</strong> <bdo dir="rtl" style="color:var(--accent)">Hello Sanskar!</bdo></p>
<p style="color:var(--text2)"><strong>User list with bdi:</strong></p>
<ul style="color:var(--text2);list-style:none;padding:0">
<li style="margin:4px 0">👤 <bdi style="color:var(--accent)">أحمد</bdi> — Score: 85</li>
<li style="margin:4px 0">👤 <bdi style="color:var(--accent2)">Sanskar</bdi> — Score: 92</li>
<li style="margin:4px 0">👤 <bdi style="color:var(--accent3)">דניאל</bdi> — Score: 78</li>
</ul>
</div>

<div class="info"><strong>📝 When to use <code>&lt;bdi&gt;</code>:</strong> Whenever you display user-generated text where you DON'T know the language — usernames, reviews, search results, forum posts. It prevents RTL text from breaking your layout. If you build international apps, this tag is essential!</div>
`},

      // 30 - NEW
      {
        id: "tag-colgroup", title: 'The <colgroup> & <col> Tags', badge: "TABLE", emoji: "📊", content: `
<h3>📌 What are they?</h3>
<p><code>&lt;colgroup&gt;</code> groups one or more <strong>table columns</strong> for styling. <code>&lt;col&gt;</code> defines a single column within the group. These tags let you <strong>style entire columns at once</strong> without adding classes to every <code>&lt;td&gt;</code> in that column.</p>

<h3>⚙️ How it Works</h3>
<ul>
<li><code>&lt;colgroup&gt;</code> goes <strong>after <code>&lt;caption&gt;</code> and before <code>&lt;thead&gt;</code></strong></li>
<li>Each <code>&lt;col&gt;</code> inside represents one column (left to right)</li>
<li>Use <code>span</code> attribute to make one <code>&lt;col&gt;</code> cover multiple columns</li>
<li>Only a limited set of CSS properties work: <code>background</code>, <code>width</code>, <code>border</code>, <code>visibility</code></li>
</ul>

<h3>📋 Attributes</h3>
<table class="at"><tr><th>Element</th><th>Attribute</th><th>Description</th></tr>
<tr><td><code>&lt;colgroup&gt;</code></td><td><code>span</code></td><td>Number of columns this group covers (if no <code>&lt;col&gt;</code> children)</td></tr>
<tr><td><code>&lt;col&gt;</code></td><td><code>span</code></td><td>Number of columns this <code>&lt;col&gt;</code> covers</td></tr>
<tr><td><code>&lt;col&gt;</code></td><td><code>style</code></td><td>CSS styles applied to the entire column</td></tr>
<tr><td><code>&lt;col&gt;</code></td><td><code>class</code></td><td>CSS class for the column</td></tr></table>

`+ codeBlock("colgroup & col", "html", `<!-- 1. Basic column styling -->
<table>
  <colgroup>
    <col style="background:#6c63ff22; width:150px">
    <col style="background:#3ecfcf22">
    <col style="background:#ff7eb622">
  </colgroup>
  <thead>
    <tr><th>Name</th><th>Role</th><th>Score</th></tr>
  </thead>
  <tbody>
    <tr><td>Sanskar</td><td>Developer</td><td>95</td></tr>
    <tr><td>Rahul</td><td>Designer</td><td>88</td></tr>
  </tbody>
</table>

<!-- 2. Using span to cover multiple columns -->
<table>
  <colgroup>
    <col><!-- Column 1 -->
    <col span="2" style="background:#ffd70033">
    <!-- Columns 2 & 3 share same style -->
  </colgroup>
  <tr><td>A</td><td>B</td><td>C</td></tr>
</table>

<!-- 3. Highlight a specific column -->
<table>
  <colgroup>
    <col>
    <col class="highlight">
    <col>
  </colgroup>
  <!-- The 2nd column gets the 'highlight' class -->
</table>

<!-- 4. Set column widths -->
<table style="width:100%">
  <colgroup>
    <col style="width:20%">
    <col style="width:50%">
    <col style="width:30%">
  </colgroup>
  <tr><td>Small</td><td>Wide</td><td>Medium</td></tr>
</table>`) + `

<div class="demo"><h4>▶ Live Demo — Column Colors</h4>
<table style="width:100%;border-collapse:collapse;border-radius:8px;overflow:hidden">
<colgroup>
<col style="background:color-mix(in srgb,var(--accent),transparent 80%)">
<col style="background:color-mix(in srgb,var(--accent2),transparent 80%)">
<col style="background:color-mix(in srgb,var(--accent3),transparent 80%)">
</colgroup>
<thead><tr style="color:var(--text)"><th style="padding:8px;text-align:left">Name</th><th style="padding:8px;text-align:left">Tech</th><th style="padding:8px;text-align:left">Score</th></tr></thead>
<tbody style="color:var(--text2)"><tr><td style="padding:8px">Sanskar</td><td style="padding:8px">HTML/CSS</td><td style="padding:8px">95</td></tr><tr><td style="padding:8px">Rahul</td><td style="padding:8px">React</td><td style="padding:8px">88</td></tr><tr><td style="padding:8px">Ayush</td><td style="padding:8px">Node.js</td><td style="padding:8px">91</td></tr></tbody>
</table>
<p style="font-size:.8rem;color:var(--text3);margin-top:6px">↑ Each column has a different background color set via <code>&lt;col&gt;</code> — no classes on individual cells!</p>
</div>

<div class="tip"><strong>💡 Pro Tip:</strong> <code>&lt;col&gt;</code> is great for setting column widths in percentage-based layouts. Define <code>width</code> on each <code>&lt;col&gt;</code> to control how the table distributes space, without touching any <code>&lt;td&gt;</code> elements.</div>
`},

      // 31 - NEW
      {
        id: "tag-noscript", title: 'The <noscript> Tag', badge: "META", emoji: "🚫", content: `
<h3>📌 What is it?</h3>
<p>The <code>&lt;noscript&gt;</code> tag defines content that is <strong>only displayed when JavaScript is disabled</strong> or not supported. It's your fallback message or alternative content for users who can't run scripts — search engine crawlers, users with JS disabled for security, old browsers, or corporate networks that block JavaScript.</p>

<h3>⚙️ How it Works</h3>
<ul>
<li>Content inside <code>&lt;noscript&gt;</code> is <strong>completely hidden</strong> when JS is enabled</li>
<li>When JS is disabled, only then does the content <strong>appear</strong></li>
<li>Can be used in both <code>&lt;head&gt;</code> and <code>&lt;body&gt;</code></li>
<li>In <code>&lt;head&gt;</code>: can contain <code>&lt;link&gt;</code>, <code>&lt;style&gt;</code>, <code>&lt;meta&gt;</code></li>
<li>In <code>&lt;body&gt;</code>: can contain any flow content (p, div, img, etc.)</li>
</ul>

<h3>🎯 When to Use</h3>
<table class="at"><tr><th>Scenario</th><th>What to Show</th></tr>
<tr><td>JS-dependent web app (React, Vue, Angular)</td><td>"This app requires JavaScript" message</td></tr>
<tr><td>Analytics tracking</td><td>Fallback pixel image for tracking</td></tr>
<tr><td>Enhanced navigation</td><td>Simple HTML links as fallback</td></tr>
<tr><td>Interactive forms</td><td>Static version or "enable JS" warning</td></tr>
<tr><td>SEO</td><td>Content for search engines that don't run JS</td></tr></table>

`+ codeBlock("noscript", "html", `<!-- 1. Basic warning message -->
<noscript>
  <div style="background:#ff4444; color:white;
    padding:16px; text-align:center;">
    ⚠️ This website requires JavaScript to work.
    Please enable it in your browser settings.
  </div>
</noscript>

<!-- 2. In the <head> for redirect -->
<head>
  <noscript>
    <meta http-equiv="refresh"
      content="0; url=/no-js-version.html">
  </noscript>
</head>

<!-- 3. Fallback content -->
<div id="app">
  <!-- React/Vue app renders here -->
</div>
<noscript>
  <h1>Welcome to My Website</h1>
  <p>For the best experience, please enable
    JavaScript. Here's a basic version:</p>
  <nav>
    <a href="/about">About</a> |
    <a href="/contact">Contact</a>
  </nav>
</noscript>

<!-- 4. Analytics fallback (no-JS tracking) -->
<noscript>
  <img src="https://analytics.example.com/pixel.gif"
    width="1" height="1" alt="">
</noscript>

<!-- 5. Alternative styles for no-JS -->
<noscript>
  <style>
    .js-only { display: none !important; }
    .no-js-msg { display: block !important; }
  </style>
</noscript>`) + `

<div class="demo"><h4>▶ Live Demo</h4>
<p style="color:var(--text2)">Since you're viewing this page with JavaScript enabled, the <code>&lt;noscript&gt;</code> content below is <strong>hidden</strong>:</p>
<noscript><div style="background:#ff444433;color:var(--text);padding:12px;border-radius:8px;border:2px solid #ff4444">🚫 JavaScript is disabled! You're seeing this fallback message.</div></noscript>
<div style="background:color-mix(in srgb,var(--accent2),transparent 85%);padding:12px;border-radius:8px;margin-top:8px"><p style="color:var(--text2);margin:0">✅ JavaScript is <strong>enabled</strong> — the noscript content above is invisible. Disable JS in DevTools to see it appear!</p></div>
</div>

<div class="info"><strong>📝 Who disables JavaScript?</strong> About 1-2% of web users have JS disabled. But more importantly, <strong>search engine crawlers</strong>, <strong>screen readers</strong>, and <strong>RSS feed parsers</strong> may not run JavaScript. Always provide meaningful noscript fallbacks for critical content.</div>
`},

      // 32 - NEW
      {
        id: "tag-textarea", title: 'The <textarea> Tag', badge: "FORM", emoji: "📝", content: `
<h3>📌 What is it?</h3>
<p>The <code>&lt;textarea&gt;</code> tag creates a <strong>multi-line text input field</strong>. Unlike <code>&lt;input type="text"&gt;</code> which is single-line, textarea can hold <strong>paragraphs, code, messages, comments, and any long-form text</strong>. It's a replaced element with its own scrollbar when content overflows.</p>

<h3>📋 All Attributes</h3>
<table class="at"><tr><th>Attribute</th><th>Description</th><th>Example</th></tr>
<tr><td><code>name</code></td><td>Name for form submission</td><td><code>"message"</code></td></tr>
<tr><td><code>rows</code></td><td>Visible height in text lines</td><td><code>5</code></td></tr>
<tr><td><code>cols</code></td><td>Visible width in characters</td><td><code>40</code></td></tr>
<tr><td><code>placeholder</code></td><td>Hint text shown when empty</td><td><code>"Type here..."</code></td></tr>
<tr><td><code>maxlength</code></td><td>Maximum number of characters</td><td><code>280</code></td></tr>
<tr><td><code>minlength</code></td><td>Minimum characters required</td><td><code>10</code></td></tr>
<tr><td><code>required</code></td><td>Must be filled before submit</td><td>(boolean)</td></tr>
<tr><td><code>readonly</code></td><td>Content visible but not editable</td><td>(boolean)</td></tr>
<tr><td><code>disabled</code></td><td>Grayed out and not submitted</td><td>(boolean)</td></tr>
<tr><td><code>wrap</code></td><td><code>"soft"</code> (default) or <code>"hard"</code> (adds newlines at cols width)</td><td><code>"hard"</code></td></tr>
<tr><td><code>autofocus</code></td><td>Focus on page load</td><td>(boolean)</td></tr>
<tr><td><code>spellcheck</code></td><td>Enable/disable spell checking</td><td><code>"true"</code></td></tr>
<tr><td><code>autocomplete</code></td><td>Browser autocomplete</td><td><code>"off"</code></td></tr>
<tr><td><code>form</code></td><td>Associate with a form by ID</td><td><code>"myForm"</code></td></tr></table>

<h3>🆚 textarea vs input[type=text]</h3>
<table class="at"><tr><th>Feature</th><th>&lt;textarea&gt;</th><th>&lt;input type="text"&gt;</th></tr>
<tr><td>Lines</td><td>Multiple lines</td><td>Single line only</td></tr>
<tr><td>Resize</td><td>✅ User can resize (CSS controllable)</td><td>❌ No</td></tr>
<tr><td>Default value</td><td>Text between tags</td><td><code>value</code> attribute</td></tr>
<tr><td>Scrollbar</td><td>✅ Auto when overflows</td><td>❌ No</td></tr>
<tr><td>HTML content</td><td>Plain text only (no formatting)</td><td>Plain text only</td></tr>
<tr><td>Use for</td><td>Comments, messages, code, essays</td><td>Name, email, search</td></tr></table>

<h3>🎨 CSS Resize Control</h3>
`+ codeBlock("textarea — resize CSS", "css", `/* Allow both directions (default) */
textarea { resize: both; }

/* Only vertical resize */
textarea { resize: vertical; }

/* Only horizontal resize */
textarea { resize: horizontal; }

/* No resize at all */
textarea { resize: none; }

/* Auto-growing textarea (modern CSS) */
textarea {
  field-sizing: content; /* NEW! Auto-grows */
  min-height: 3lh;
  max-height: 10lh;
}`) + `

`+ codeBlock("textarea — All Uses", "html", `<!-- 1. Basic textarea -->
<label>Your message:
  <textarea name="message" rows="5" cols="40"
    placeholder="Type your message here..."
    required></textarea>
</label>

<!-- 2. With character limit -->
<textarea maxlength="280" minlength="10"
  placeholder="What's happening? (max 280 chars)"
  id="tweet"></textarea>
<p id="counter">0 / 280</p>
<script>
  tweet.oninput = () =>
    counter.textContent =
      tweet.value.length + " / 280";
<${'/'}script>

<!-- 3. Pre-filled content -->
<textarea name="bio" rows="3">
Hi! I'm Sanskar, a web developer
who loves HTML, CSS, and JavaScript.
</textarea>

<!-- 4. Read-only (display code/logs) -->
<textarea readonly rows="4" style="font-family:monospace">
console.log("Hello World");
document.title = "My Page";
alert("Done!");
</textarea>

<!-- 5. Styled modern textarea -->
<textarea rows="4" style="
  width: 100%; padding: 12px;
  border: 2px solid #6c63ff;
  border-radius: 10px;
  font-family: Inter, sans-serif;
  resize: vertical;
  background: #6c63ff08;
" placeholder="Write something beautiful..."></textarea>`) + `

<div class="demo"><h4>▶ Live Demo</h4>
<textarea rows="4" placeholder="Type anything here... this is a real textarea!" style="width:100%;padding:12px;background:var(--bg3);border:2px solid var(--border);border-radius:10px;color:var(--text);font-family:Inter,sans-serif;font-size:.9rem;resize:vertical"></textarea>
<p style="font-size:.8rem;color:var(--text3);margin-top:4px">↑ Try typing, resizing the handle at the bottom-right, and scrolling with lots of text!</p>
</div>

<div class="warn"><strong>⚠️ Default Value Gotcha:</strong> The textarea's default value goes <strong>between the tags</strong>, NOT in a <code>value</code> attribute. Also, any whitespace/newlines between the tags IS preserved — including indentation in your HTML! Start the content immediately after the opening tag to avoid unwanted spaces.</div>

<div class="tip"><strong>💡 Auto-Growing Textarea:</strong> The new CSS <code>field-sizing: content</code> property makes textareas grow automatically as the user types. It's supported in Chrome 123+ and is the cleanest solution for auto-growing inputs without JavaScript!</div>
`},

      // 33 - NEW
      {
        id: "tag-figure", title: 'The <figure> & <figcaption> Tags', badge: "SEMANTIC", emoji: "🖼️", content: `
<h3>📌 What are they?</h3>
<p>The <code>&lt;figure&gt;</code> tag encapsulates <strong>self-contained content</strong>, such as an image, diagram, code snippet, or illustration, which is referenced from the main text but can be moved without affecting the document's flow. The <code>&lt;figcaption&gt;</code> provides an optional <strong>caption</strong> or legend for the figure.</p>

<h3>🆚 figure vs img/div</h3>
<table class="at"><tr><th>Feature</th><th>&lt;figure&gt;</th><th>&lt;img&gt; or &lt;div&gt;</th></tr>
<tr><td>Semantics</td><td>✅ Self-contained referential content</td><td>❌ Generic container or just media</td></tr>
<tr><td>Native Captioning</td><td>✅ Linked explicitly to <code>&lt;figcaption&gt;</code></td><td>❌ Requires ARIA or manual linking</td></tr>
<tr><td>Screen Readers</td><td>✅ Associates caption with image automatically</td><td>❌ Silent or disconnected context</td></tr>
<tr><td>Browser Default Styling</td><td>Has default left/right margins (40px)</td><td>No special margins</td></tr></table>

<h3>🎯 When to Use</h3>
<ul>
<li><strong>Images with captions:</strong> Photos in a news article.</li>
<li><strong>Code Blocks:</strong> Grouping a <code>&lt;pre&gt;</code> block with a description over it.</li>
<li><strong>Quotations:</strong> Grouping a <code>&lt;blockquote&gt;</code> with the author's citation.</li>
<li><strong>Charts/Diagrams:</strong> Complex SVGs or canvas elements that require explanation.</li>
</ul>

`+ codeBlock("figure & figcaption", "html", `<!-- 1. Traditional Image with Caption -->
<figure>
  <img src="photo.jpg" alt="A beautiful sunset">
  <figcaption>Fig 1. Sunset over the ocean.</figcaption>
</figure>

<!-- 2. Figure containing a Code Block -->
<figure>
  <figcaption>Example CSS for an auto-growing textarea:</figcaption>
  <pre><code>
    textarea { field-sizing: content; }
  </code></pre>
</figure>

<!-- 3. Figure containing a Blockquote -->
<figure>
  <blockquote>
    "Talk is cheap. Show me the code."
  </blockquote>
  <figcaption>— Linus Torvalds</figcaption>
</figure>

<!-- 4. Multiple Images in one Figure -->
<figure>
  <img src="before.png" alt="Before redesign">
  <img src="after.png" alt="After redesign">
  <figcaption>Comparison of our website redesign.</figcaption>
</figure>

<!-- 5. Styled Figure -->
<figure style="margin:0; padding:16px; background:#f0f0f0; border-left:4px solid #6c63ff;">
  <img src="chart.svg" alt="Growth chart" style="width:100%">
  <figcaption style="font-size:0.85em; color:#666; margin-top:8px; text-align:center;">
    Q3 Financial Growth Chart
  </figcaption>
</figure>`) + `

<div class="demo"><h4>▶ Live Demo — Semantic Figure</h4>
<figure style="margin:16px 0;padding:12px;background:var(--bg3);border:1px solid var(--border);border-radius:12px;display:flex;flex-direction:column;align-items:center;">
  <div style="font-size:3rem;margin-bottom:8px;">🚀</div>
  <figcaption style="font-size:.9rem;color:var(--text2);font-weight:600;text-align:center;">Fig 1. A rocket representing modern web dev speed.</figcaption>
</figure>
<p style="font-size:.8rem;color:var(--text3);margin-top:6px">↑ The caption is semantically tied to the content. Screen readers know they belong together!</p>
</div>

<div class="warn"><strong>⚠️ Placement Rules:</strong> A <code>&lt;figcaption&gt;</code> must be the <strong>first</strong> or <strong>last</strong> child of the <code>&lt;figure&gt;</code>. You can only have ONE figcaption per figure.</div>
`},

      // 34 - NEW
      {
        id: "tag-button", title: 'The <button> Tag', badge: "FORM", emoji: "🔘", content: `
<h3>📌 What is it?</h3>
<p>The <code>&lt;button&gt;</code> element is a clickable interactive control used for submitting forms, resetting forms, or triggering custom JavaScript actions. It is highly versatile and can contain HTML content (unlike <code>&lt;input type="button"&gt;</code>).</p>

<h3>📋 Key Attributes</h3>
<table class="at"><tr><th>Attribute</th><th>Description</th><th>Example</th></tr>
<tr><td><code>type</code></td><td><code>"submit"</code> (default), <code>"reset"</code>, or <code>"button"</code></td><td><code>type="button"</code></td></tr>
<tr><td><code>disabled</code></td><td>Makes the button unclickable and grayed out</td><td>(boolean)</td></tr>
<tr><td><code>form</code></td><td>Associates the button with a form by ID (if outside it)</td><td><code>form="main-form"</code></td></tr>
<tr><td><code>formaction</code></td><td>Overrides the form's <code>action</code> URL</td><td><code>"/save-draft"</code></td></tr>
<tr><td><code>formmethod</code></td><td>Overrides the form's <code>method</code> (GET/POST)</td><td><code>"POST"</code></td></tr>
<tr><td><code>formnovalidate</code></td><td>Skips HTML validation on submit</td><td>(boolean)</td></tr></table>

<h3>🆚 button vs input[type="submit"] vs a</h3>
<table class="at"><tr><th>Feature</th><th>&lt;button&gt;</th><th>&lt;input type="button"&gt;</th><th>&lt;a&gt; (Links)</th></tr>
<tr><td>Usage</td><td>Actions &amp; Form Submission</td><td>Form submission (legacy)</td><td>Navigation (going to URLs)</td></tr>
<tr><td>Content</td><td>✅ Can contain icons, spans, images</td><td>❌ Text only (value attr)</td><td>✅ Can contain HTML</td></tr>
<tr><td>JavaScript</td><td><code>onclick</code> actions</td><td><code>onclick</code> actions</td><td>Bad practice for actions</td></tr>
<tr><td>Spacebar trigger</td><td>✅ Triggers click</td><td>✅ Triggers click</td><td>❌ Scrolls page down</td></tr></table>

`+ codeBlock("button — All Uses", "html", `<!-- 1. The 3 Standard Types -->
<form>
  <!-- Triggers JS without submitting -->
  <button type="button" onclick="alert('Hi!')">Just a Button</button>
  
  <!-- Resets all inputs in the form -->
  <button type="reset">Clear Form</button>

  <!-- Submits the form (Default behavior) -->
  <button type="submit">Submit Data</button>
</form>

<!-- 2. Rich Content inside Buttons (Why button > input) -->
<button type="button">
  <img src="icon.svg" alt="">
  <span>Save Profile</span>
  <strong>(Pro)</strong>
</button>

<!-- 3. Form Overrides (Advanced) -->
<form action="/publish" method="POST">
  <input type="text" name="title" required>
  
  <!-- Normal submit (/publish) -->
  <button type="submit">Publish</button>
  
  <!-- Overrides action URL & skips required validation validation -->
  <button type="submit" formaction="/draft" formnovalidate>
    Save Draft
  </button>
</form>

<!-- 4. Disabled State -->
<button disabled>Processing...</button>`) + `

<div class="demo"><h4>▶ Live Demo — Buttons</h4>
<div style="display:flex;gap:12px;flex-wrap:wrap;">
  <button type="button" onclick="alert('Custom Action!')" style="padding:10px 16px;background:var(--accent);color:#fff;border:none;border-radius:8px;cursor:pointer;font-family:Inter;font-weight:600;">✨ JS Action</button>
  <button type="button" disabled style="padding:10px 16px;background:var(--bg3);color:var(--text3);border:1px solid var(--border);border-radius:8px;cursor:not-allowed;font-family:Inter;font-weight:600;">Processing ⏳</button>
  <button type="button" style="padding:10px 16px;background:transparent;color:var(--accent2);border:2px solid var(--accent2);border-radius:8px;cursor:pointer;font-family:Inter;font-weight:600;display:flex;align-items:center;gap:6px;"><span>Icon Inside</span> 🚀</button>
</div>
</div>

<div class="warn"><strong>⚠️ The "type" Gotcha:</strong> If you use a <code>&lt;button&gt;</code> inside a form AND DON'T specify a <code>type</code>, it defaults to <code>type="submit"</code>! This causes pages to refresh unexpectedly when you just wanted a JS trigger. ALWAYS explicitly add <code>type="button"</code> if it's not meant to submit a form!</div>
`},

      // 35 - NEW
      {
        id: "tag-label", title: 'The <label> Tag', badge: "FORM", emoji: "🏷️", content: `
<h3>📌 What is it?</h3>
<p>The <code>&lt;label&gt;</code> tag defines a caption for a user interface item. It is <strong>critical for accessibility</strong> and usability. Clicking on a label automatically focuses (or toggles) the input it is associated with.</p>

<h3>⚙️ Two Ways to Link a Label</h3>
<table class="at"><tr><th>Method</th><th>How it works</th><th>Pros/Cons</th></tr>
<tr><td><strong>Explicit (for=id)</strong></td><td><code>&lt;label for="x"&gt;</code> links to <code>&lt;input id="x"&gt;</code></td><td>✅ Better for complex layouts, inputs can be anywhere</td></tr>
<tr><td><strong>Implicit (Wrapped)</strong></td><td><code>&lt;label&gt;Name: &lt;input&gt;&lt;/label&gt;</code></td><td>✅ No IDs needed. ❌ Harder to style separately</td></tr></table>

<h3>🌍 Why This Matters (The "Hit Area")</h3>
<ul>
<li><strong>Checkboxes & Radios:</strong> Small inputs are hard to tap on mobile. A label increases the clickable "hit area" to include the text!</li>
<li><strong>Screen Readers:</strong> When a user tabs to an input, the screen reader reads the associated label. Without it, the user has no idea what the input is for.</li>
<li><strong>Placeholder is NOT a label:</strong> Placeholders disappear when you type. Users forget what the field was for. Always use real labels.</li>
</ul>

`+ codeBlock("label", "html", `<!-- 1. Explicit Linking (Best Practice) -->
<label for="username">Enter Username:</label>
<input type="text" id="username" name="user">

<!-- 2. Implicit Linking (Wrapping) -->
<label>
  Enter Email:
  <input type="email" name="email">
</label>

<!-- 3. The Checkbox Hit Area Trick -->
<!-- Clicking the text "Subscribe to newsletter" checks the box! -->
<label for="news" style="cursor:pointer">
  <input type="checkbox" id="news" value="yes">
  Subscribe to newsletter
</label>

<!-- 4. Hidden Labels for Screen Readers -->
<!-- Sometimes design doesn't want a visual label (like a search bar),
     but accessibility still requires one! -->
<label for="search" class="sr-only">Search the site:</label>
<input type="search" id="search" placeholder="Search...">
<style>
  /* Screen Reader Only CSS class */
  .sr-only {
    position: absolute; width: 1px; height: 1px;
    padding: 0; overflow: hidden; clip: rect(0,0,0,0);
    white-space: nowrap; border: 0;
  }
</style>

<!-- 5. Custom Checkbox Hacks -->
<!-- You can hide the input and style the label instead! -->
<input type="checkbox" id="toggle" hidden>
<label for="toggle" class="custom-btn">Toggle Me</label>`) + `

<div class="demo"><h4>▶ Live Demo — The Power of Labels</h4>
<div style="background:var(--bg3);padding:16px;border-radius:8px;border:1px solid var(--border);">
  <p style="margin:0 0 10px 0;color:var(--text2);">Try clicking the TEXT to toggle the checkboxes:</p>
  
  <div style="margin-bottom:8px">
    <input type="checkbox" id="demoBad">
    <span style="color:var(--text3);">No Label (Hard to click text)</span>
  </div>
  
  <div>
    <input type="checkbox" id="demoGood">
    <label for="demoGood" style="color:var(--accent);font-weight:600;cursor:pointer;user-select:none;">With Label ✅ (Click my text!)</label>
  </div>
</div>
</div>

<div class="tip"><strong>💡 Custom Styled Switches:</strong> Because clicking a label checks its input, developers build custom "toggle switches" by hiding the real <code>&lt;input type="checkbox"&gt;</code> and applying CSS to the <code>&lt;label&gt;</code>!</div>
`},

      // 36 - NEW
      {
        id: "tag-track", title: 'The <track> Tag', badge: "MEDIA", emoji: "🔤", content: `
<h3>📌 What is it?</h3>
<p>The <code>&lt;track&gt;</code> tag is used as a child of the <code>&lt;audio&gt;</code> and <code>&lt;video&gt;</code> elements. It specifies timed text tracks (like <strong>subtitles, captions, translation tracks, and chapter markers</strong>). The subtitle data is usually stored in a <strong>WebVTT</strong> (.vtt) file.</p>

<h3>📋 Attributes</h3>
<table class="at"><tr><th>Attribute</th><th>Description</th><th>Example</th></tr>
<tr><td><code>src</code></td><td>URL of the track file (.vtt)</td><td><code>"subs_en.vtt"</code></td></tr>
<tr><td><code>kind</code></td><td><code>subtitles</code>, <code>captions</code>, <code>descriptions</code>, <code>chapters</code>, <code>metadata</code></td><td><code>"subtitles"</code></td></tr>
<tr><td><code>srclang</code></td><td>Language code of the track</td><td><code>"en"</code>, <code>"es"</code></td></tr>
<tr><td><code>label</code></td><td>User-readable title (shows in video player menu)</td><td><code>"English CC"</code></td></tr>
<tr><td><code>default</code></td><td>Enables this track by default</td><td>(boolean)</td></tr></table>

<h3>🆚 Subtitles vs Captions</h3>
<table class="at"><tr><th>Type</th><th>Purpose</th><th>What it includes</th></tr>
<tr><td><code>subtitles</code></td><td>For users who can hear, but don't understand the language</td><td>Dialogue translation</td></tr>
<tr><td><code>captions</code></td><td>For deaf/hard of hearing users (Accessibility)</td><td>Dialogue + [Door slams] + [Music plays]</td></tr>
<tr><td><code>chapters</code></td><td>Helps navigation (like YouTube timestamps)</td><td>Titles for segments of the media</td></tr></table>

`+ codeBlock("track & WebVTT", "html", `<!-- 1. Video with Multi-Language Subtitles -->
<video controls src="movie.mp4" width="100%">
  <!-- Default English Captions -->
  <track default
         kind="captions"
         srclang="en"
         label="English (CC)"
         src="captions_en.vtt">
         
  <!-- Spanish Subtitles -->
  <track kind="subtitles"
         srclang="es"
         label="Español"
         src="subs_es.vtt">
         
  <!-- French Subtitles -->
  <track kind="subtitles"
         srclang="fr"
         label="Français"
         src="subs_fr.vtt">
</video>

<!-- 2. What does a .vtt file look like? -->
<!-- Save this as "captions_en.vtt" -->
<pre>
WEBVTT

00:00:01.000 --> 00:00:04.000
Welcome to the HTML Deep Dive!

00:00:05.500 --> 00:00:08.000
<i>[Upbeat music playing]</i>
Today, we learn the track tag.
</pre>`) + `

<div class="demo"><h4>▶ WebVTT Concept</h4>
<p style="color:var(--text2);margin-bottom:8px">The video player extracts timestamps from the VTT file and overlays text. The browser provides a native "CC" button to select tracks!</p>
<div style="background:#000;color:#fff;border-radius:8px;padding:40px 10px 10px;text-align:center;position:relative;height:120px;display:flex;align-items:flex-end;justify-content:center;box-shadow:inset 0 0 20px rgba(0,0,0,0.8);">
  <div style="position:absolute;top:10px;right:10px;background:#333;padding:4px 8px;border-radius:4px;font-size:.7rem;">⚙️ CC</div>
  <div style="background:rgba(0,0,0,0.75);padding:4px 12px;border-radius:4px;font-size:1.1rem;font-weight:600;"><i>[Music]</i> Welcome to the HTML Deep Dive!</div>
</div>
</div>

<div class="warn"><strong>⚠️ Cross-Origin Restrictions (CORS):</strong> If your video is hosted on <code>example.com</code> and your <code>.vtt</code> track is on <code>cdn.com</code>, the browser blocks the track for security. You must configure CORS headers or use <code>crossorigin="anonymous"</code> on the video tag!</div>
`},

      // 37 - NEW
      {
        id: "tag-search", title: 'The <search> Tag', badge: "SEMANTIC", emoji: "🔍", content: `
<h3>📌 What is it?</h3>
<p>The <code>&lt;search&gt;</code> tag is a brand new semantic element (introduced in HTML5.2 / 2023) representing a section of the document used to <strong>search or filter</strong> content. It replaces the old pattern of doing <code>&lt;div role="search"&gt;</code>.</p>

<h3>⚙️ How it Works</h3>
<ul>
<li>It is purely <strong>semantic</strong>. It doesn't look or act different from a <code>&lt;div&gt;</code>.</li>
<li>It tells screen readers and search engines: <em>"Everything inside me is part of a search interface."</em></li>
<li>It should contain the form, the input, the submit button, and potentially advanced filtering options (checkboxes, dropdowns).</li>
</ul>

<h3>🆚 search vs form vs input[type="search"]</h3>
<table class="at"><tr><th>Element</th><th>Purpose</th></tr>
<tr><td><code>&lt;search&gt;</code></td><td>The <strong>container/wrapper</strong> for the entire search area (semantics).</td></tr>
<tr><td><code>&lt;form&gt;</code></td><td>Handles the actual HTTP submission mechanics (action/method).</td></tr>
<tr><td><code>&lt;input type="search"&gt;</code></td><td>The specific text box the user types into.</td></tr></table>

`+ codeBlock("search container", "html", `<!-- 1. The Modern Search Pattern (2024+) -->
<search>
  <form action="/results">
    <label for="q">Search articles:</label>
    <input type="search" id="q" name="query" placeholder="Type to search...">
    <button type="submit">Go</button>
  </form>
</search>

<!-- 2. Search with advanced filters -->
<search>
  <h2>Find a Product</h2>
  <form action="/shop">
    <input type="search" name="keyword" placeholder="Laptop, Keyboard...">
    
    <fieldset>
      <legend>Filters</legend>
      <label><input type="checkbox" name="sale"> On Sale</label>
      <label><input type="checkbox" name="stock"> In Stock</label>
      <select name="sort">
        <option value="price_asc">Price: Low to High</option>
        <option value="price_desc">Price: High to Low</option>
      </select>
    </fieldset>
    
    <button type="submit">Filter Results</button>
  </form>
</search>

<!-- 3. Client-side filtering (No Form) -->
<!-- search doesn't STRICTLY need a form if JS handles it -->
<search>
  <label for="table-filter">Filter table rows:</label>
  <input type="search" id="table-filter" oninput="filterRows(this.value)">
</search>

<!-- The Old Way (For historical context, don't use this anymore!) -->
<!-- <div role="search"> ... </div> -->`) + `

<div class="demo"><h4>▶ Live Demo — Modern Search Component</h4>
<search style="display:block;background:var(--bg3);padding:16px;border-radius:12px;border:1px solid var(--border);">
  <form onsubmit="event.preventDefault(); alert('Searching for: ' + document.getElementById('demoQ').value)" style="display:flex;gap:8px;">
    <input type="search" id="demoQ" placeholder="Search the guide..." style="flex:1;padding:10px 14px;border-radius:8px;border:1px solid var(--border);background:var(--bg);color:var(--text);font-family:Inter;">
    <button type="submit" style="padding:10px 20px;border-radius:8px;border:none;background:var(--accent);color:white;font-family:Inter;font-weight:600;cursor:pointer;">Search</button>
  </form>
</search>
<p style="font-size:.8rem;color:var(--text3);margin-top:6px">↑ The entire container is wrapped in a <code>&lt;search&gt;</code> tag for modern accessibility!</p>
</div>

<div class="tip"><strong>💡 ARIA Fallback:</strong> Since <code>&lt;search&gt;</code> is relatively new (supported in all browsers since late 2023), it's highly recommended right now to use it, but no longer necessary to add <code>role="search"</code> fallback. Screen readers fully support it natively now!</div>
`},

      // 38 - NEW
      {
        id: "tag-svg", title: 'The <svg> Tag', badge: "MEDIA", emoji: "📐", content: `
<h3>📌 What is it?</h3>
<p>The <code>&lt;svg&gt;</code> (Scalable Vector Graphics) tag defines vector-based graphics in XML format. Unlike JPEGs or PNGs (which are grids of pixels), SVGs are made of mathematical paths, circles, and polygons, so they <strong>never lose quality</strong> no matter how much you zoom in.</p>

<h3>⚙️ Key Elements inside SVG</h3>
<table class="at"><tr><th>Element</th><th>Description</th></tr>
<tr><td><code>&lt;path&gt;</code></td><td>Defines a complex shape using a string of commands (M, L, C, Z).</td></tr>
<tr><td><code>&lt;circle&gt;</code> / <code>&lt;rect&gt;</code> / <code>&lt;polygon&gt;</code></td><td>Basic geometric primitives.</td></tr>
<tr><td><code>&lt;g&gt;</code></td><td>Groups elements together to apply shared styles or transformations.</td></tr>
<tr><td><code>&lt;defs&gt;</code></td><td>Defines reusable assets (like gradients or filters) that aren't rendered directly until referenced.</td></tr></table>

<h3>🎯 Why inline SVG in HTML?</h3>
<p>By putting <code>&lt;svg&gt;</code> code directly in your HTML instead of <code>&lt;img src="image.svg"&gt;</code>, you can <strong>target the inner shapes with CSS and JavaScript!</strong> You can change the fill color on hover, animate paths, and even morph shapes.</p>

`+ codeBlock("SVG drawing primitives", "html", `<!-- 1. A Basic SVG ViewBox with primitives -->
<!-- viewBox="x y width height" defines the coordinate system -->
<svg viewBox="0 0 100 100" width="150" height="150" xmlns="http://www.w3.org/2000/svg">
  <!-- A red circle in the center -->
  <circle cx="50" cy="50" r="40" fill="tomato" />
  
  <!-- A blue outline rectangle -->
  <rect x="20" y="20" width="60" height="60" fill="none" stroke="royalblue" stroke-width="4" />
</svg>

<!-- 2. Complex Paths & Gradients -->
<svg viewBox="0 0 200 100" width="100%" height="150">
  <defs>
    <!-- Define a linear gradient -->
    <linearGradient id="myGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#6c63ff" />
      <stop offset="100%" stop-color="#3ecfcf" />
    </linearGradient>
  </defs>
  
  <!-- "d" means definition. M=Move to, Q=Quadratic curve, T=Smooth curve -->
  <path d="M 10 50 Q 50 10 100 50 T 190 50" fill="none" stroke="url(#myGrad)" stroke-width="8" stroke-linecap="round" />
</svg>`) + `

<div class="demo"><h4>▶ Live Demo — Interactive SVG</h4>
<div style="background:var(--bg3);padding:20px;border-radius:12px;border:1px solid var(--border);text-align:center;">
  <svg viewBox="0 0 100 100" width="120" style="overflow:visible;cursor:pointer;">
    <style>
      .heart { fill: var(--text3); transition: fill 0.3s, transform 0.3s; transform-origin: center; }
      .heart:hover { fill: #ff4a8b; transform: scale(1.2); }
    </style>
    <!-- SVG Heart Path -->
    <path class="heart" d="M50,88 C50,88 20,60 10,40 C0,20 20,5 35,15 C50,30 50,30 50,30 C50,30 50,30 65,15 C80,5 100,20 90,40 C80,60 50,88 50,88 Z" />
  </svg>
  <p style="font-size:0.85rem;color:var(--text2);margin-top:10px;">Hover over the SVG heart!<br>Because it is inline HTML, CSS handles the color transition perfectly.</p>
</div>
</div>
`},

      // 39 - NEW
      {
        id: "tag-details-deep", title: 'The <details> & <summary> Tags', badge: "CONTENT", emoji: "🔽", content: `
<h3>📌 What are they?</h3>
<p>The <code>&lt;details&gt;</code> element creates a disclosure widget. The <code>&lt;summary&gt;</code> element serves as the clickable heading/button. When you click the summary, the details "open" and reveal the hidden content.</p>

<h3>⚡ The Magic of it</h3>
<p>You can create fully functional, accessible Accordions and Dropdowns <strong>without a single line of JavaScript!</strong> The browser natively handles the open/close state, the click events, and even adding the little triangle arrow marker.</p>

<h3>📋 Attributes</h3>
<table class="at"><tr><th>Attribute</th><th>Description</th></tr>
<tr><td><code>open</code></td><td>A boolean attribute acting on <code>&lt;details&gt;</code>. If present, the content is shown by default.</td></tr>
<tr><td><code>name</code></td><td><strong>(New 2024 Feature!)</strong> Grouping attribute. If multiple <code>&lt;details&gt;</code> share the same <code>name</code>, they act as an exclusive accordion (opening one closes the others).</td></tr></table>

`+ codeBlock("Native Accordions", "html", `<!-- 1. Basic Toggle (Closed by default) -->
<details>
  <summary>Click to read terms and conditions</summary>
  <p>Here are all the extensive terms you never read anyway.</p>
</details>

<!-- 2. Open by Default -->
<details open>
  <summary>Advanced Settings</summary>
  <label><input type="checkbox"> Enable dark mode</label>
</details>

<!-- 3. Exclusive Accordion (New 'name' attribute!) -->
<!-- Works in Chrome 120+, Safari 17.4+ -->
<div class="faq-group">
  <details name="faq">
    <summary>How much does it cost?</summary>
    <p>It's completely free.</p>
  </details>
  
  <details name="faq">
    <summary>Is there a refund policy?</summary>
    <p>Yes, 30 days money back guaranteed.</p>
  </details>
</div>

<!-- 4. Styling the Marker -->
<style>
  /* Remove the default black triangle marker */
  details > summary { list-style: none; }
  details > summary::-webkit-details-marker { display: none; }
  
  /* Add custom marker via CSS pseudo-elements */
  summary::before { content: "👉 "; }
  details[open] summary::before { content: "👇 "; }
</style>`) + `

<div class="demo"><h4>▶ Live Demo — CSS Styled Details</h4>
<div style="display:flex;flex-direction:column;gap:10px;">
  <details style="background:var(--bg3);border:1px solid var(--border);border-radius:8px;overflow:hidden;">
    <summary style="padding:14px;background:var(--bg4);font-weight:600;cursor:pointer;color:var(--accent);">Question 1: Do I need JavaScript for this?</summary>
    <div style="padding:14px;border-top:1px solid var(--border);">No! The open and close tracking is handled natively by the HTML specifications.</div>
  </details>
  <details style="background:var(--bg3);border:1px solid var(--border);border-radius:8px;overflow:hidden;">
    <summary style="padding:14px;background:var(--bg4);font-weight:600;cursor:pointer;color:var(--accent);">Question 2: Is it accessible?</summary>
    <div style="padding:14px;border-top:1px solid var(--border);">Yes, screen readers natively announce the expanded/collapsed state to users.</div>
  </details>
</div>
</div>
`},

      // 40 - NEW
      {
        id: "tag-form", title: 'The <form> Tag', badge: "FORM", emoji: "📝", content: `
<h3>📌 What is it?</h3>
<p>The <code>&lt;form&gt;</code> element is the foundational container for collecting and submitting user data. It bundles all inputs together and defines <em>where</em> the data is sent and <em>how</em> it is sent to the server.</p>

<h3>⚙️ Critical Attributes</h3>
<table class="at"><tr><th>Attribute</th><th>Description</th></tr>
<tr><td><code>action</code></td><td>The URL where the form data is sent. Example: <code>"/api/login"</code></td></tr>
<tr><td><code>method</code></td><td><code>GET</code> (appends data to URL limit 2KB) or <code>POST</code> (sends data secretly within HTTP body).</td></tr>
<tr><td><code>enctype</code></td><td>How data is encoded. Crucial for file uploads. Defaults to <code>application/x-www-form-urlencoded</code>.</td></tr>
<tr><td><code>novalidate</code></td><td>Disables the browser's native HTML5 popups ("Please fill in this field"). Useful when you want to write custom JS validation.</td></tr>
<tr><td><code>target</code></td><td>Where to open the response (e.g. <code>_blank</code> opens form result in new tab).</td></tr></table>

<h3>📁 the enctype Attribute (Important!)</h3>
<p>If your form has an <code>&lt;input type="file"&gt;</code>, the form <strong>MUST</strong> have <code>method="POST"</code> and <code>enctype="multipart/form-data"</code>. If you forget this, the server will only receive the file's name as a string, not the actual file bytes!</p>

`+ codeBlock("Form Architectures", "html", `<!-- 1. Standard Login Form (POST) -->
<!-- Sends credentials securely in the request body -->
<form action="/login" method="POST">
  <label>Email: <input type="email" name="email" required></label>
  <label>Password: <input type="password" name="pwd" required></label>
  <button type="submit">Login</button>
</form>

<!-- 2. Search Form (GET) -->
<!-- Sends query in URL: /search?q=cats -->
<form action="/search" method="GET">
  <input type="search" name="q" placeholder="Search...">
  <button type="submit">Go</button>
</form>

<!-- 3. File Upload Form (Requires multipart/form-data) -->
<form action="/upload-avatar" method="POST" enctype="multipart/form-data">
  <label>Profile Pic: <input type="file" name="avatar" accept="image/*"></label>
  <button type="submit">Upload</button>
</form>

<!-- 4. JS-Only Form (Prevent Default) -->
<form id="js-form">
  <input type="text" id="demoField" required>
  <button type="submit">Submit via Fetch</button>
</form>

<${''}script>
  document.getElementById("js-form").onsubmit = function(event) {
    event.preventDefault(); // STOPS the page from reloading!
    const val = document.getElementById("demoField").value;
    alert("Captured via JS: " + val);
    // You would use fetch() here to send data
  };
<${'/'}script>`) + `

<div class="warn"><strong>⚠️ The "name" identifier:</strong> Elements inside a form <strong>must</strong> have a <code>name</code> attribute to be submitted. If an input only has an <code>id</code>, the server will never receive its data! The browser uses the <code>name</code> attribute as the "key" in the data payload.</div>
`},

      // 41 - NEW
      {
        id: "tag-text-semantics", title: 'Text Semantics: sup, sub, small, mark', badge: "TEXT", emoji: "🔠", content: `
<h3>📌 What are they?</h3>
<p>HTML provides highly specific inline tags to give semantic meaning and default styling to small portions of text without having to rely on generic <code>&lt;span&gt;</code> tags and CSS classes.</p>

<h3>🏷️ The Tags Explained</h3>
<table class="at"><tr><th>Tag</th><th>Meaning</th><th>Use Case</th></tr>
<tr><td><code>&lt;sup&gt;</code></td><td>Superscript (raised, smaller)</td><td>Math exponents (E=mc²), ordinal numbers (1st, 2nd), copyright references.</td></tr>
<tr><td><code>&lt;sub&gt;</code></td><td>Subscript (lowered, smaller)</td><td>Chemical formulas (H₂O), math indices (x₁).</td></tr>
<tr><td><code>&lt;small&gt;</code></td><td>Side comments / Fine print</td><td>Legal disclaimers, copyright text, secondary context. Not just "small text", but "less important text".</td></tr>
<tr><td><code>&lt;mark&gt;</code></td><td>Highlighted / Marked text</td><td>Search results highlighting, indicating relevance, literal highlighting of a key sentence.</td></tr></table>

`+ codeBlock("Text Semantics Usage", "html", `<!-- 1. Typography and Math -->
<p>Albert Einstein's famous equation is E = mc<sup>2</sup>.</p>

<p>The chemical formula for water is H<sub>2</sub>O.</p>

<p>Today is the 10<sup>th</sup> of November.</p>

<!-- 2. Legal / Secondary content -->
<div class="product-price">
  $99.00
  <br>
  <small>*Plus applicable taxes and fees.</small>
</div>

<!-- 3. Search Highlighting -->
<p>
  Search results for "HTML": <br>
  Learning <mark>HTML</mark> tags is the best way to understand <mark>HTML</mark> architecture.
</p>

<!-- 4. CSS Customization -->
<!-- You can easily style <mark> to fit your theme! -->
<style>
  mark {
    background-color: var(--accent);
    color: white;
    padding: 0 4px;
    border-radius: 4px;
  }
</style>`) + `

<div class="demo"><h4>▶ Live Demo</h4>
<div style="background:var(--bg3);padding:16px;border-radius:8px;border:1px solid var(--border);color:var(--text);font-size:1.1rem;line-height:2;">
  O<sub>2</sub> + 2H<sub>2</sub> → 2H<sub>2</sub>O 🧪<br>
  My computer ranks 1<sup>st</sup> in speed! 🏆<br>
  Did you read the <mark style="background:var(--accent2);color:#000;padding:2px 6px;border-radius:4px;font-weight:bold;">highlighted</mark> section? 🔦<br>
  <small style="color:var(--text3);font-size:0.75rem;">(Terms and conditions apply. Batteries not included.)</small>
</div>
</div>
`},

      // 42 - NEW
      {
        id: "tag-document-semantics", title: 'Document Structure: header, main, footer & more', badge: "SEMANTIC", emoji: "🏗️", content: `
<h3>📌 What are they?</h3>
<p>Introduced in HTML5, these are the architectural landmark tags. Before these existed, developers built entire wireframes out of <code>&lt;div id="header"&gt;</code>. Using layout semantics tells screen readers, search engines, and reading modes exactly <strong>what part of the page is the core content, and what is chrome/fluff</strong>.</p>

<h3>🏗️ The Landmark Tags</h3>
<table class="at"><tr><th>Tag</th><th>Purpose</th></tr>
<tr><td><code>&lt;header&gt;</code></td><td>Introductory content. Logos, titles, global navigation. Can be used at document level, or inside an article.</td></tr>
<tr><td><code>&lt;main&gt;</code></td><td>The primary content of the document. You should only have <strong>one non-hidden</strong> <code>&lt;main&gt;</code> per page!</td></tr>
<tr><td><code>&lt;footer&gt;</code></td><td>Copyrights, legal links, author info.</td></tr>
<tr><td><code>&lt;article&gt;</code></td><td>An independent, self-contained piece of content (like a blog post, a forum comment, a news story). It makes sense on its own.</td></tr>
<tr><td><code>&lt;section&gt;</code></td><td>A thematic grouping of content. Unlike article, it usually needs the surrounding context. It should almost always contain a heading tag (h2-h6).</td></tr>
<tr><td><code>&lt;aside&gt;</code></td><td>Sidebars! Content tangentially related to the main content (callout boxes, ads, author bios).</td></tr>
<tr><td><code>&lt;nav&gt;</code></td><td>A major block of navigation links. (Don't wrap every single link in nav, only menus).</td></tr></table>

`+ codeBlock("Semantic Page Skeleton", "html", `<body>
  
  <header>
    <h1>My Awesome Blog</h1>
    <nav>
      <a href="/">Home</a>
      <a href="/about">About</a>
    </nav>
  </header>
  
  <main>
    <article>
      <header>
        <h2>Getting Started with HTML</h2>
        <p><i>Posted on Nov 10</i></p>
      </header>
      
      <section id="introduction">
        <h3>Introduction</h3>
        <p>In this post we will learn about semantics...</p>
      </section>
      
      <section id="conclusion">
        <h3>Conclusion</h3>
        <p>Semantics are important.</p>
      </section>
      
      <footer>
        <p>Written by Sanskar</p>
      </footer>
    </article>
    
    <aside>
      <h3>Related Posts</h3>
      <ul>
        <li><a href="/css">Learn CSS next</a></li>
      </ul>
    </aside>
  </main>
  
  <footer>
    <p>&copy; 2026 Developer Space</p>
  </footer>
  
</body>`) + `

<div class="tip"><strong>💡 Reading Mode:</strong> Ever used "Reader View" in Safari or Firefox? It strips away sidebars, ads, and footers, leaving only the text. How does it know what the text is? It explicitly strips <code>&lt;header&gt;</code>, <code>&lt;footer&gt;</code>, and <code>&lt;aside&gt;</code>, and extracts the text inside <code>&lt;main&gt;</code> and <code>&lt;article&gt;</code>! Without semantic tags, Reader View fails.</div>
`},

      // 43 - NEW
      {
        id: "tag-template-2", title: 'The <template> Tag', badge: "META", emoji: "📋", content: `
<h3>📌 What is it?</h3>
<p>The <code>&lt;template&gt;</code> tag holds <strong>HTML content that is NOT rendered when the page loads</strong>. It acts as a reusable blueprint that JavaScript can clone and insert into the page dynamically. Think of it as a cookie cutter — you define the shape once and stamp out copies whenever needed.</p>

<h3>⚙️ How it Works Internally</h3>
<ul>
<li>When the browser parses <code>&lt;template&gt;</code>, it reads and validates the HTML inside, but does <strong>NOT</strong> add it to the DOM or render it on screen</li>
<li>The content lives in a special <code>DocumentFragment</code> — a lightweight container that exists outside the main DOM tree</li>
<li>Images inside a template are <strong>NOT</strong> downloaded. Scripts inside are <strong>NOT</strong> executed. CSS inside does <strong>NOT</strong> apply. Nothing activates until you clone it.</li>
<li>When you call <code>template.content.cloneNode(true)</code>, you get a fresh deep copy of the fragment that you can modify and append to the live DOM</li>
<li>This is the foundation of <strong>Web Components</strong> — custom elements like <code>&lt;my-card&gt;</code> use templates internally</li>
</ul>

<h3>📋 Key Properties (JavaScript)</h3>
<table class="at"><tr><th>Property/Method</th><th>Description</th></tr>
<tr><td><code>.content</code></td><td>Returns the <code>DocumentFragment</code> containing the template's DOM tree. This is NOT a regular element — it's a lightweight container.</td></tr>
<tr><td><code>.content.cloneNode(true)</code></td><td>Creates a deep copy of the template content that you can modify and insert. Always use <code>true</code> for deep clone.</td></tr>
<tr><td><code>.content.querySelector()</code></td><td>Find elements inside the template before cloning. Useful for checking structure.</td></tr></table>

<h3>🆚 Template vs Hidden div vs innerHTML string</h3>
<table class="at"><tr><th>Approach</th><th>Pros</th><th>Cons</th></tr>
<tr><td><code>&lt;template&gt;</code></td><td>✅ No renders, no downloads, type-safe, clonable</td><td>Requires JS to use</td></tr>
<tr><td><code>&lt;div hidden&gt;</code></td><td>Simple to understand</td><td>❌ Images STILL download! Scripts may run. Wastes resources.</td></tr>
<tr><td>JS string (<code>innerHTML</code>)</td><td>Flexible, dynamic</td><td>❌ XSS risk, no syntax highlighting in editor, hard to maintain</td></tr></table>

<div class="warn"><strong>⚠️ Common Mistake:</strong> Using <code>&lt;div style="display:none"&gt;</code> instead of <code>&lt;template&gt;</code>. Hidden divs still load images, execute scripts, and apply CSS — wasting bandwidth and potentially causing bugs. Always prefer <code>&lt;template&gt;</code> for content meant to be cloned later.</div>
`+ codeBlock("Template Usage", "html", `<!-- 1. Define a reusable card template -->
<template id="user-card-template">
  <div class="user-card" style="border:1px solid #ccc;padding:16px;border-radius:8px;margin:8px 0;">
    <img class="avatar" src="" alt="" width="50" style="border-radius:50%;">
    <h3 class="name">Name Here</h3>
    <p class="email">email@here.com</p>
    <span class="role">Role</span>
  </div>
</template>

<div id="user-list"></div>

<script>
const template = document.getElementById('user-card-template');
const container = document.getElementById('user-list');

// Sample data (could come from an API)
const users = [
  { name: 'Sanskar Yadav', email: 'sanskar@dev.com', role: 'Admin' },
  { name: 'Ayush Singh', email: 'ayush@dev.com', role: 'Editor' },
  { name: 'Rahul Kumar', email: 'rahul@dev.com', role: 'Viewer' }
];

// Clone template for each user and fill in data
users.forEach(user => {
  // Clone the template's content
  const clone = template.content.cloneNode(true);
  
  // Fill in the blanks
  clone.querySelector('.name').textContent = user.name;
  clone.querySelector('.email').textContent = user.email;
  clone.querySelector('.role').textContent = user.role;
  
  // Add to the live DOM (NOW it renders!)
  container.appendChild(clone);
});
<\/script>`) + `
<div class="demo"><h4>▶ Live Demo — Dynamic Card Generation</h4>
<template id="demoTplCard"><div style="background:var(--bg3);border:1px solid var(--border);border-radius:10px;padding:14px;margin:6px 0;display:flex;align-items:center;gap:12px;"><div class="tpl-icon" style="width:40px;height:40px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:1.2rem;"></div><div><strong class="tpl-name" style="color:var(--text)"></strong><br><small class="tpl-desc" style="color:var(--text3)"></small></div></div></template>
<div id="demoTplList"></div>
<button onclick="addDemoCard()" style="margin-top:10px;padding:8px 20px;border-radius:8px;border:none;background:var(--accent);color:white;cursor:pointer;font-weight:600;">+ Add Card from Template</button>
<script>
let cardCount=0;
const demoItems=[{icon:'🎨',name:'Design',desc:'UI/UX Design',bg:'#6c63ff33'},{icon:'💻',name:'Code',desc:'Frontend Dev',bg:'#3ecfcf33'},{icon:'🚀',name:'Deploy',desc:'CI/CD Pipeline',bg:'#ffa36b33'},{icon:'📊',name:'Analytics',desc:'Data Insights',bg:'#ff7eb633'},{icon:'🔒',name:'Security',desc:'Auth & Encryption',bg:'#4ade8033'}];
function addDemoCard(){
const t=document.getElementById('demoTplCard');
const c=t.content.cloneNode(true);
const item=demoItems[cardCount%demoItems.length];
c.querySelector('.tpl-icon').textContent=item.icon;
c.querySelector('.tpl-icon').style.background=item.bg;
c.querySelector('.tpl-name').textContent=item.name;
c.querySelector('.tpl-desc').textContent=item.desc;
document.getElementById('demoTplList').appendChild(c);
cardCount++;
}
<\/script>
</div>

<div class="tip"><strong>💡 Web Components:</strong> The <code>&lt;template&gt;</code> tag is one of the pillars of the <strong>Web Components</strong> standard (along with Custom Elements and Shadow DOM). Frameworks like Lit and Stencil use templates heavily under the hood to define reusable component blueprints!</div>`},

      // 44 - NEW
      {
        id: "tag-dialog-2", title: 'The <dialog> Tag', badge: "INTERACTIVE", emoji: "💬", content: `
<h3>📌 What is it?</h3>
<p>The <code>&lt;dialog&gt;</code> tag creates a <strong>native modal or non-modal dialog box</strong> built right into HTML. Before this tag existed, developers had to build modals from scratch using divs, overlays, JavaScript focus trapping, and z-index stacking — all error-prone. Now the browser handles all of this natively!</p>

<h3>⚙️ How it Works Internally</h3>
<ul>
<li>A <code>&lt;dialog&gt;</code> is <strong>hidden by default</strong> (display: none). You must open it via JavaScript.</li>
<li><code>.show()</code> opens it as a <strong>non-modal</strong> dialog (user can still interact with the page behind it)</li>
<li><code>.showModal()</code> opens it as a <strong>modal</strong> dialog (page behind is inert, darkened backdrop appears, Escape key closes it)</li>
<li>When opened as modal, the browser automatically creates a <strong>top layer</strong> — a special rendering layer that sits above ALL other content regardless of z-index</li>
<li>The browser automatically <strong>traps focus</strong> inside the modal — Tab key cycles only through elements inside the dialog</li>
<li>The <code>::backdrop</code> pseudo-element lets you style the overlay behind the modal</li>
<li>The <code>close</code> event fires when the dialog is closed. You can read the return value via <code>dialog.returnValue</code></li>
</ul>

<h3>📋 Methods & Properties</h3>
<table class="at"><tr><th>API</th><th>Description</th></tr>
<tr><td><code>.show()</code></td><td>Opens non-modal. User can interact with page behind it.</td></tr>
<tr><td><code>.showModal()</code></td><td>Opens modal. Page becomes inert. Backdrop appears. Focus trapped.</td></tr>
<tr><td><code>.close(returnValue)</code></td><td>Closes the dialog. Optional return value accessible via <code>dialog.returnValue</code>.</td></tr>
<tr><td><code>open</code> attribute</td><td>Boolean. Present when dialog is open. Can be set in HTML for initial state (but prefer JS).</td></tr>
<tr><td><code>.returnValue</code></td><td>Stores a string value set by <code>.close("value")</code> or by a submit button with <code>value</code> attribute inside a <code>method="dialog"</code> form.</td></tr></table>

<h3>📋 The <code>method="dialog"</code> Form Trick</h3>
<p>If you put a <code>&lt;form method="dialog"&gt;</code> inside a dialog, the submit button automatically closes the dialog. The button's <code>value</code> becomes the dialog's <code>returnValue</code>. No JavaScript needed for simple confirm/cancel patterns!</p>

<div class="warn"><strong>⚠️ Don't use the <code>open</code> attribute directly!</strong> Setting <code>&lt;dialog open&gt;</code> in HTML opens it as non-modal and bypasses the top layer. Always use <code>.showModal()</code> in JavaScript for proper modal behavior with backdrop, focus trapping, and Escape key support.</div>
`+ codeBlock("Dialog Usage", "html", `<!-- 1. Basic Modal Dialog -->
<dialog id="myDialog">
  <h2>Hello Sanskar! 👋</h2>
  <p>This is a native HTML modal dialog.</p>
  <button onclick="document.getElementById('myDialog').close()">
    Close
  </button>
</dialog>
<button onclick="document.getElementById('myDialog').showModal()">
  Open Modal
</button>

<!-- 2. Confirm/Cancel Pattern (No JS needed for closing!) -->
<dialog id="confirmDialog">
  <h3>Are you sure?</h3>
  <p>This action cannot be undone.</p>
  <form method="dialog">
    <!-- value becomes dialog.returnValue -->
    <button value="cancel">Cancel</button>
    <button value="confirm">Confirm</button>
  </form>
</dialog>

<script>
  const d = document.getElementById('confirmDialog');
  d.addEventListener('close', () => {
    console.log('User chose:', d.returnValue);
    // "cancel" or "confirm"
  });
<\/script>

<!-- 3. Styling the Backdrop -->
<style>
  dialog::backdrop {
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(4px);
  }
  dialog {
    border: 1px solid #6c63ff;
    border-radius: 16px;
    padding: 24px;
    max-width: 400px;
  }
</style>`) + `
<div class="demo"><h4>▶ Live Demo — Native Modal Dialog</h4>
<dialog id="liveDialog" style="border:1px solid var(--accent);border-radius:16px;padding:24px;background:var(--bg2);color:var(--text);max-width:400px;box-shadow:0 20px 60px rgba(0,0,0,0.5);">
  <h3 style="color:var(--accent);margin-bottom:12px;">🎉 Native Dialog!</h3>
  <p style="color:var(--text2);margin-bottom:16px;">This modal was created using only the <code>&lt;dialog&gt;</code> tag. The backdrop, focus trapping, and Escape key are all handled by the browser!</p>
  <form method="dialog" style="display:flex;gap:8px;justify-content:flex-end;">
    <button value="cancel" style="padding:8px 16px;border-radius:8px;border:1px solid var(--border);background:var(--bg3);color:var(--text);cursor:pointer;font-weight:600;">Cancel</button>
    <button value="ok" style="padding:8px 16px;border-radius:8px;border:none;background:var(--accent);color:white;cursor:pointer;font-weight:600;">Got it!</button>
  </form>
</dialog>
<button onclick="document.getElementById('liveDialog').showModal()" style="padding:10px 22px;border-radius:8px;border:none;background:var(--accent);color:white;cursor:pointer;font-weight:600;">Open Modal Dialog</button>
<span id="dialogResult" style="margin-left:12px;color:var(--text3);font-size:0.9rem;"></span>
<script>
document.getElementById('liveDialog').addEventListener('close',function(){document.getElementById('dialogResult').textContent='You clicked: '+this.returnValue;});
<\/script>
</div>

<div class="tip"><strong>💡 Top Layer:</strong> When you use <code>.showModal()</code>, the dialog enters the browser's <strong>top layer</strong>. This is a special stacking context that sits above everything — even elements with <code>z-index: 999999</code>. This solves the classic "modal appears behind another element" bug that plagued JavaScript-based modals for decades!</div>`},

      // 45 - NEW
      {
        id: "tag-progress-meter-2", title: 'The <progress> & <meter> Tags', badge: "WIDGET", emoji: "📊", content: `
<h3>📌 What are they?</h3>
<p>These two tags create <strong>native visual indicators</strong> — progress bars and gauges — without any CSS or JavaScript tricks. They look different on each operating system because they use native OS styling.</p>

<h3>🆚 Progress vs Meter — Key Difference</h3>
<table class="at"><tr><th>Feature</th><th>&lt;progress&gt;</th><th>&lt;meter&gt;</th></tr>
<tr><td><strong>Purpose</strong></td><td>Shows <strong>completion</strong> of a task (0% → 100%)</td><td>Shows a <strong>measurement</strong> within a known range</td></tr>
<tr><td><strong>Examples</strong></td><td>File upload %, download progress, quiz completion</td><td>Disk usage, battery level, exam score, temperature</td></tr>
<tr><td><strong>Direction</strong></td><td>Always moves forward (0 to max)</td><td>Can be any value in range (and can be "good" or "bad")</td></tr>
<tr><td><strong>Indeterminate</strong></td><td>✅ Yes — omit <code>value</code> for animated "loading" bar</td><td>❌ No — always needs a value</td></tr>
<tr><td><strong>Color Zones</strong></td><td>❌ No — single color</td><td>✅ Yes — green/yellow/red based on low/high/optimum</td></tr></table>

<h3>📋 &lt;progress&gt; Attributes</h3>
<table class="at"><tr><th>Attribute</th><th>Description</th><th>Default</th></tr>
<tr><td><code>value</code></td><td>Current completion. If omitted, shows indeterminate (animated loading bar).</td><td>indeterminate</td></tr>
<tr><td><code>max</code></td><td>Maximum value (the "100%" point)</td><td>1.0</td></tr></table>

<h3>📋 &lt;meter&gt; Attributes (Many!)</h3>
<table class="at"><tr><th>Attribute</th><th>Description</th></tr>
<tr><td><code>value</code></td><td>Current measured value (required)</td></tr>
<tr><td><code>min</code></td><td>Minimum of the range (default 0)</td></tr>
<tr><td><code>max</code></td><td>Maximum of the range (default 1)</td></tr>
<tr><td><code>low</code></td><td>Upper boundary of the "low" range. Values below this are considered low.</td></tr>
<tr><td><code>high</code></td><td>Lower boundary of the "high" range. Values above this are considered high.</td></tr>
<tr><td><code>optimum</code></td><td>The ideal value. Browser uses this to determine if current value is "good" (green), "okay" (yellow), or "bad" (red).</td></tr></table>

<h3>🎨 How Meter Color Zones Work</h3>
<p>The browser uses <code>low</code>, <code>high</code>, and <code>optimum</code> to decide the meter color:</p>
<ul>
<li>If <code>optimum</code> is in the "high" zone and <code>value</code> is also high → <strong style="color:#4ade80;">GREEN</strong> (good!)</li>
<li>If <code>value</code> is in the opposite zone from <code>optimum</code> → <strong style="color:#ff4a4a;">RED</strong> (bad!)</li>
<li>If <code>value</code> is in the middle → <strong style="color:#fbbf24;">YELLOW</strong> (okay)</li>
</ul>
`+ codeBlock("Progress & Meter", "html", `<!-- 1. Determinate Progress (known completion) -->
<label>File Upload: 75%</label>
<progress value="75" max="100">75%</progress>

<!-- 2. Indeterminate Progress (unknown duration) -->
<label>Loading, please wait...</label>
<progress>Loading...</progress>
<!-- No value attribute = indeterminate animated bar! -->

<!-- 3. Meter — Disk Usage (high is bad) -->
<label>Disk Space Used: 85 GB / 100 GB</label>
<meter value="85" min="0" max="100"
       low="30" high="80" optimum="20">
  85 out of 100 GB
</meter>
<!-- optimum=20 means LOW values are good.
     value=85 is above high=80, so it shows RED! -->

<!-- 4. Meter — Exam Score (high is good) -->
<label>Exam Score: 92 / 100</label>
<meter value="92" min="0" max="100"
       low="40" high="75" optimum="100">
  92 out of 100
</meter>
<!-- optimum=100 means HIGH values are good.
     value=92 is above high=75, so it shows GREEN! -->

<!-- 5. Meter — Battery (high is good) -->
<label>Battery: 25%</label>
<meter value="0.25" min="0" max="1"
       low="0.2" high="0.6" optimum="1">
  25%
</meter>
<!-- value=0.25 is between low and high = YELLOW -->`) + `
<div class="demo"><h4>▶ Live Demo — Progress & Meter</h4>
<div style="background:var(--bg3);padding:20px;border-radius:12px;border:1px solid var(--border);">
  <p style="color:var(--accent);font-weight:700;margin-bottom:4px;">📥 File Download</p>
  <progress id="demoProgress" value="0" max="100" style="width:100%;height:22px;border-radius:8px;">0%</progress>
  <p style="font-size:0.85rem;color:var(--text3);" id="progText">0% — Click Start</p>
  <button onclick="startProgress()" style="margin-top:8px;padding:6px 16px;border-radius:6px;border:none;background:var(--accent);color:white;cursor:pointer;font-weight:600;">▶ Start Download</button>
  <button onclick="resetProgress()" style="margin-top:8px;padding:6px 16px;border-radius:6px;border:none;background:var(--bg4);color:var(--text);border:1px solid var(--border);cursor:pointer;font-weight:600;margin-left:6px;">🔄 Reset</button>

  <hr style="border:none;border-top:1px solid var(--border);margin:20px 0;">

  <p style="color:var(--accent);font-weight:700;margin-bottom:4px;">💾 Disk Usage</p>
  <meter value="85" min="0" max="100" low="30" high="80" optimum="20" style="width:100%;height:22px;">85/100</meter>
  <p style="font-size:0.85rem;color:var(--text3);">85 GB / 100 GB — <span style="color:#ff4a4a;">Critical! (RED)</span></p>

  <p style="color:var(--accent);font-weight:700;margin-bottom:4px;margin-top:14px;">📝 Exam Score</p>
  <meter value="92" min="0" max="100" low="40" high="75" optimum="100" style="width:100%;height:22px;">92/100</meter>
  <p style="font-size:0.85rem;color:var(--text3);">92 / 100 — <span style="color:#4ade80;">Excellent! (GREEN)</span></p>

  <p style="color:var(--accent);font-weight:700;margin-bottom:4px;margin-top:14px;">⏳ Loading (Indeterminate)</p>
  <progress style="width:100%;height:22px;">Loading...</progress>
  <p style="font-size:0.85rem;color:var(--text3);">No value set → animated loading bar!</p>
</div>
<script>
let progInterval;
function startProgress(){
  const p=document.getElementById('demoProgress');
  const t=document.getElementById('progText');
  clearInterval(progInterval);
  p.value=0;
  progInterval=setInterval(()=>{
    p.value=Math.min(100,p.value+Math.random()*5);
    t.textContent=Math.round(p.value)+'% — '+(p.value>=100?'✅ Complete!':'Downloading...');
    if(p.value>=100)clearInterval(progInterval);
  },150);
}
function resetProgress(){
  clearInterval(progInterval);
  document.getElementById('demoProgress').value=0;
  document.getElementById('progText').textContent='0% — Click Start';
}
<\/script>
</div>

<div class="info"><strong>ℹ️ Accessibility:</strong> Both <code>&lt;progress&gt;</code> and <code>&lt;meter&gt;</code> automatically announce their values to screen readers. The fallback text between the tags (e.g., <code>&lt;progress&gt;75%&lt;/progress&gt;</code>) displays in browsers that don't support these elements.</div>`},

      // 46 - NEW
      {
        id: "tag-quotation", title: 'Quotation & Citation Tags: blockquote, q, cite, abbr', badge: "TEXT", emoji: "💬", content: `
<h3>📌 What are they?</h3>
<p>HTML provides specific tags for quoting text, citing sources, and abbreviating terms. These are <strong>semantic</strong> — they tell the browser, search engines, and screen readers the <em>meaning</em> of the content, not just how it looks.</p>

<h3>🏷️ The Tags Explained</h3>
<table class="at"><tr><th>Tag</th><th>Type</th><th>Purpose</th><th>Default Styling</th></tr>
<tr><td><code>&lt;blockquote&gt;</code></td><td>Block</td><td>Long quotation from another source. Contains paragraphs or other block elements.</td><td>Indented from both sides</td></tr>
<tr><td><code>&lt;q&gt;</code></td><td>Inline</td><td>Short inline quotation within a sentence.</td><td>Browser adds "quotation marks" automatically</td></tr>
<tr><td><code>&lt;cite&gt;</code></td><td>Inline</td><td>References the <strong>title</strong> of a creative work (book, movie, article, song).</td><td>Italic text</td></tr>
<tr><td><code>&lt;abbr&gt;</code></td><td>Inline</td><td>Abbreviation or acronym. The <code>title</code> attribute provides the full expansion.</td><td>Dotted underline (browsers vary)</td></tr></table>

<h3>📋 Attributes</h3>
<table class="at"><tr><th>Tag</th><th>Attribute</th><th>Description</th></tr>
<tr><td><code>&lt;blockquote&gt;</code></td><td><code>cite</code></td><td>URL of the original source (not visible to users, but used by search engines and screen readers)</td></tr>
<tr><td><code>&lt;q&gt;</code></td><td><code>cite</code></td><td>Same — URL of the source</td></tr>
<tr><td><code>&lt;abbr&gt;</code></td><td><code>title</code></td><td>The full expanded form shown as tooltip on hover</td></tr></table>

<h3>🔍 Deep Dive — When to Use What</h3>
<ul>
<li><strong>&lt;blockquote&gt;</strong> — For quoting multiple sentences or paragraphs. If someone says something important and you want to display it as a standalone block.</li>
<li><strong>&lt;q&gt;</strong> — For short inline quotes within your own sentence. The browser adds quotation marks for you (different quotes for different languages!).</li>
<li><strong>&lt;cite&gt;</strong> — <strong>Only for titles of works!</strong> NOT for attributing a person. «A book title», «An article name», «A movie». People names should be in <code>&lt;span&gt;</code> or plain text.</li>
<li><strong>&lt;abbr&gt;</strong> — First occurrence of an abbreviation. The tooltip helps users who don't know what it means.</li>
</ul>

<div class="warn"><strong>⚠️ Common Mistake:</strong> Using <code>&lt;cite&gt;</code> for a person's name. The HTML spec says <code>&lt;cite&gt;</code> is for <strong>titles of works</strong> (books, films, articles), not for people. Use plain text or <code>&lt;span&gt;</code> for attribution to a person.</div>
`+ codeBlock("Quotation & Citation", "html", `<!-- 1. Blockquote — Long Quote -->
<blockquote cite="https://en.wikipedia.org/wiki/Albert_Einstein">
  <p>Imagination is more important than knowledge.
  Knowledge is limited. Imagination encircles the world.</p>
</blockquote>
<p>— Albert Einstein, from <cite>What Life Means to Einstein</cite></p>

<!-- 2. Inline Quote with <q> -->
<p>As Steve Jobs once said,
  <q cite="https://example.com/jobs-speech">
    Stay hungry, stay foolish.
  </q>
  This inspired millions of developers.
</p>
<!-- Browser output: As Steve Jobs once said, "Stay hungry, stay foolish." -->

<!-- 3. Abbreviation with tooltip -->
<p>The <abbr title="World Wide Web Consortium">W3C</abbr> defines
  the standards for <abbr title="HyperText Markup Language">HTML</abbr>,
  <abbr title="Cascading Style Sheets">CSS</abbr>, and other technologies.
</p>
<!-- Hovering over W3C shows "World Wide Web Consortium" -->

<!-- 4. Cite — Title of a Work -->
<p>My favorite book is <cite>The Pragmatic Programmer</cite>
  by Andrew Hunt and David Thomas.</p>

<p>The movie <cite>Interstellar</cite> has amazing visuals.</p>

<!-- 5. Styling Blockquote -->
<style>
  blockquote {
    border-left: 4px solid #6c63ff;
    padding: 16px 24px;
    margin: 20px 0;
    background: #f5f5ff;
    font-style: italic;
    border-radius: 0 8px 8px 0;
  }
</style>`) + `
<div class="demo"><h4>▶ Live Demo</h4>
<div style="background:var(--bg3);padding:20px;border-radius:12px;border:1px solid var(--border);">
  <blockquote style="border-left:4px solid var(--accent);padding:16px 20px;margin:0 0 12px;background:var(--bg4);border-radius:0 8px 8px 0;font-style:italic;color:var(--text2);">
    <p style="margin:0">The only way to do great work is to love what you do.</p>
  </blockquote>
  <p style="color:var(--text3);font-size:0.9rem;">— Steve Jobs, from <cite style="color:var(--accent);font-style:italic;">Stanford Commencement Speech</cite></p>
  <hr style="border:none;border-top:1px solid var(--border);margin:16px 0;">
  <p>As Mahatma Gandhi said, <q style="color:var(--accent2);">Be the change you wish to see in the world.</q></p>
  <hr style="border:none;border-top:1px solid var(--border);margin:16px 0;">
  <p>Hover these: <abbr title="HyperText Markup Language" style="text-decoration:underline dotted var(--accent);cursor:help;font-weight:600;">HTML</abbr> · <abbr title="Cascading Style Sheets" style="text-decoration:underline dotted var(--accent2);cursor:help;font-weight:600;">CSS</abbr> · <abbr title="JavaScript" style="text-decoration:underline dotted var(--accent3);cursor:help;font-weight:600;">JS</abbr></p>
</div>
</div>

<div class="tip"><strong>💡 SEO Benefit:</strong> Google recognizes <code>&lt;blockquote&gt;</code> content as quoted material and may display it as a <strong>featured snippet</strong> in search results. Properly citing sources with the <code>cite</code> attribute helps search engines understand content relationships!</div>`},

      // 47 - NEW
      {
        id: "tag-map-area-2", title: 'The <map> & <area> Tags — Image Maps', badge: "MEDIA", emoji: "🗺️", content: `
<h3>📌 What are they?</h3>
<p>The <code>&lt;map&gt;</code> and <code>&lt;area&gt;</code> tags create <strong>clickable regions on an image</strong> — also called an "image map". Different parts of a single image can link to different URLs. Think of a map of India where clicking each state goes to a different page!</p>

<h3>⚙️ How it Works</h3>
<ul>
<li>The <code>&lt;img&gt;</code> tag connects to a <code>&lt;map&gt;</code> via the <code>usemap</code> attribute (e.g., <code>usemap="#mymap"</code>)</li>
<li>Inside <code>&lt;map&gt;</code>, each <code>&lt;area&gt;</code> defines a clickable hotspot with coordinates</li>
<li>You specify the <strong>shape</strong> (rect, circle, poly) and the <strong>coordinates</strong> in pixels</li>
<li>Each area can have its own <code>href</code>, <code>alt</code>, <code>target</code>, etc.</li>
<li>The browser does NOT visually indicate the clickable regions — the cursor changes to pointer when hovering over a defined area</li>
</ul>

<h3>📋 &lt;area&gt; Attributes</h3>
<table class="at"><tr><th>Attribute</th><th>Description</th><th>Example</th></tr>
<tr><td><code>shape</code></td><td>Shape of the clickable area</td><td><code>"rect"</code>, <code>"circle"</code>, <code>"poly"</code>, <code>"default"</code></td></tr>
<tr><td><code>coords</code></td><td>Coordinates (depend on shape, see table below)</td><td><code>"0,0,100,100"</code></td></tr>
<tr><td><code>href</code></td><td>URL the area links to</td><td><code>"/page.html"</code></td></tr>
<tr><td><code>alt</code></td><td>Alt text for accessibility (required if href is set)</td><td><code>"Click for details"</code></td></tr>
<tr><td><code>target</code></td><td>Where to open link</td><td><code>"_blank"</code></td></tr>
<tr><td><code>download</code></td><td>Download target instead of navigating</td><td><code>"file.pdf"</code></td></tr></table>

<h3>📐 Shape Coordinate Systems</h3>
<table class="at"><tr><th>Shape</th><th>Coords Format</th><th>Meaning</th></tr>
<tr><td><code>rect</code></td><td><code>x1, y1, x2, y2</code></td><td>Top-left corner (x1,y1) to bottom-right corner (x2,y2)</td></tr>
<tr><td><code>circle</code></td><td><code>x, y, radius</code></td><td>Center point (x,y) and radius in pixels</td></tr>
<tr><td><code>poly</code></td><td><code>x1,y1, x2,y2, x3,y3, ...</code></td><td>List of vertex points forming a polygon</td></tr>
<tr><td><code>default</code></td><td>(none needed)</td><td>Covers the entire remaining image area</td></tr></table>

<div class="info"><strong>ℹ️ Modern Alternative:</strong> For responsive sites, SVG-based image maps are often preferred since <code>&lt;area&gt;</code> coordinates are in fixed pixels and don't scale with the image. You can use inline SVG with clickable <code>&lt;a&gt;</code>-wrapped shapes instead.</div>
`+ codeBlock("Image Map", "html", `<!-- 1. Basic Image Map -->
<img src="office-floor.png" alt="Office Floor Plan"
     usemap="#officemap" width="500" height="300">

<map name="officemap">
  <!-- Rectangle: Meeting Room -->
  <area shape="rect" coords="0,0,150,150"
        href="/meeting-room" alt="Meeting Room"
        title="Meeting Room A">
  
  <!-- Circle: Coffee Station -->
  <area shape="circle" coords="400,80,50"
        href="/coffee" alt="Coffee Station"
        title="Coffee & Snacks">
  
  <!-- Polygon: Reception Area (triangle) -->
  <area shape="poly" coords="200,200,300,200,250,100"
        href="/reception" alt="Reception"
        title="Reception Desk">
  
  <!-- Default: Everything else -->
  <area shape="default"
        href="/floor-plan" alt="General Area">
</map>

<!-- 2. Navigation Map (like a site map image) -->
<img src="site-banner.jpg" alt="Site sections"
     usemap="#sitemap" width="600" height="100">

<map name="sitemap">
  <area shape="rect" coords="0,0,200,100"
        href="/about" alt="About Us">
  <area shape="rect" coords="200,0,400,100"
        href="/services" alt="Our Services">
  <area shape="rect" coords="400,0,600,100"
        href="/contact" alt="Contact Us">
</map>`) + `
<div class="demo"><h4>▶ Live Demo — Clickable Image Map</h4>
<div style="background:var(--bg3);padding:20px;border-radius:12px;border:1px solid var(--border);text-align:center;">
  <p style="color:var(--text2);margin-bottom:12px;">Click different colored regions below:</p>
  <svg width="350" height="180" viewBox="0 0 350 180" style="max-width:100%;border-radius:8px;border:1px solid var(--border);background:var(--bg4);">
    <a href="javascript:void(0)" onclick="alert('📦 You clicked the Rectangle zone!')">
      <rect x="10" y="10" width="120" height="70" rx="8" fill="#6c63ff44" stroke="#6c63ff" stroke-width="2" style="cursor:pointer;"/>
      <text x="70" y="50" fill="var(--accent)" text-anchor="middle" font-size="12" font-weight="600">Rectangle</text>
    </a>
    <a href="javascript:void(0)" onclick="alert('⭕ You clicked the Circle zone!')">
      <circle cx="250" cy="50" r="40" fill="#3ecfcf44" stroke="#3ecfcf" stroke-width="2" style="cursor:pointer;"/>
      <text x="250" y="55" fill="var(--accent2)" text-anchor="middle" font-size="12" font-weight="600">Circle</text>
    </a>
    <a href="javascript:void(0)" onclick="alert('🔺 You clicked the Polygon zone!')">
      <polygon points="175,100 120,170 230,170" fill="#ffa36b44" stroke="#ffa36b" stroke-width="2" style="cursor:pointer;"/>
      <text x="175" y="155" fill="var(--accent3)" text-anchor="middle" font-size="12" font-weight="600">Polygon</text>
    </a>
  </svg>
  <p style="font-size:0.8rem;color:var(--text3);margin-top:8px;">This demo uses inline SVG (the modern approach). Classic image maps use <code>&lt;map&gt;</code> + <code>&lt;area&gt;</code> with pixel coordinates over an <code>&lt;img&gt;</code>.</p>
</div>
</div>

<div class="warn"><strong>⚠️ Responsive Issues:</strong> Classic image map coordinates are in fixed pixels. If the image scales (responsive design), the clickable areas do NOT scale with it — they stay at the original pixel positions. For responsive sites, use CSS/SVG-based solutions or a JavaScript library like <code>image-map-resizer</code>.</div>
<div class="tip"><strong>💡 Free Tools:</strong> You don't need to calculate coordinates manually! Use free online tools like <strong>image-map.net</strong> — just upload your image, draw shapes with your mouse, and it generates the HTML code for you.</div>`},

      // 48 - NEW
      {
        id: "tag-picture-2", title: 'The <picture> Tag (Responsive Media)', badge: "MEDIA", emoji: "🖼️", content: `
<h3>📌 What is it?</h3>
<p>The <code>&lt;picture&gt;</code> element is a container for multiple <code>&lt;source&gt;</code> tags and one <code>&lt;img&gt;</code> tag. It enables <strong>Art Direction</strong> and <strong>Format Switching</strong>, letting the browser decide exactly which image to load based on screen size or supported formats.</p>

<h3>⚙️ How it Works</h3>
<ul>
<li>The browser evaluates each <code>&lt;source&gt;</code> tag from top to bottom.</li>
<li>As soon as it finds the first match (e.g. matching a <code>media</code> query), it uses its <code>srcset</code> URL and ignores the rest.</li>
<li>If no <code>&lt;source&gt;</code> matches (or the browser doesn't support them), it falls back to the <code>&lt;img&gt;</code> tag.</li>
<li>The <code>&lt;img&gt;</code> tag is <strong>mandatory</strong> — without it, the <code>&lt;picture&gt;</code> tag won't display anything!</li>
</ul>

<h3>📋 Key Attributes of &lt;source&gt;</h3>
<table class="at"><tr><th>Attribute</th><th>Description</th></tr>
<tr><td><code>media</code></td><td>A CSS media query (e.g., <code>(min-width: 800px)</code>). If true, this source is used.</td></tr>
<tr><td><code>type</code></td><td>MIME type of the image (e.g., <code>image/webp</code> or <code>image/avif</code>).</td></tr>
<tr><td><code>srcset</code></td><td>URL(s) of the image to display. (Required)</td></tr></table>

`+ codeBlock("Picture Tag Usage", "html", `<!-- 1. Art Direction (Different crop for mobile vs desktop) -->
<picture>
  <!-- If screen is wide, use landscape crop -->
  <source media="(min-width: 800px)" srcset="banner-wide.jpg">
  <!-- If screen is medium, use square crop -->
  <source media="(min-width: 400px)" srcset="banner-square.jpg">
  <!-- Fallback (Mobile): use portrait crop -->
  <img src="banner-portrait.jpg" alt="Hero banner">
</picture>

<!-- 2. Format Switching (Serve modern formats to supporting browsers) -->
<picture>
  <!-- Browsers supporting AVIF will use this -->
  <source type="image/avif" srcset="photo.avif">
  <!-- Browsers supporting WebP will use this -->
  <source type="image/webp" srcset="photo.webp">
  <!-- Older browsers fallback to JPEG -->
  <img src="photo.jpg" alt="A cute cat" loading="lazy">
</picture>`) + `
<div class="demo"><h4>▶ Live Concept Demo</h4>
<div style="background:var(--bg3);padding:16px;border-radius:12px;border:1px solid var(--border);text-align:center;">
  <p style="font-size:0.9rem;color:var(--text2);margin-bottom:12px;">Resize your browser window! The text below will switch depending on viewport width.</p>
  <style>
    .art-dir-demo::after { content: "📱 Mobile View (< 600px)"; color: #ff6b6b; font-weight: bold; }
    @media(min-width: 600px) { .art-dir-demo::after { content: "💻 Desktop View (>= 600px)"; color: #4ade80; } }
  </style>
  <div class="art-dir-demo" style="background:var(--bg4);padding:20px;border-radius:8px;border:1px dashed var(--accent);"></div>
</div>
</div>
<div class="tip"><strong>💡 Performance Boost:</strong> Using <code>&lt;picture&gt;</code> for format switching (WebP/AVIF) can shrink your image payloads by 50-70% while keeping full compatibility with older browsers like IE11/Safari that fall back to the JPG.</div>`},

      // 49 - NEW
      {
        id: "tag-edits", title: 'Document Edits: <ins> & <del>', badge: "SEMANTIC", emoji: "📝", content: `
<h3>📌 What are they?</h3>
<p>The <code>&lt;ins&gt;</code> and <code>&lt;del&gt;</code> tags are used to semantically mark changes in a document. They represent <strong>insertions</strong> and <strong>deletions</strong> respectively. This is highly useful for tracking modifications in legal documents, blog posts, wikis, or to-do lists.</p>

<h3>🏷️ Default Styling</h3>
<ul>
<li><code>&lt;del&gt;</code> (deleted text) displays with a <del>strikethrough</del> line.</li>
<li><code>&lt;ins&gt;</code> (inserted text) displays with an <ins>underline</ins>.</li>
</ul>

<h3>📋 Important Attributes</h3>
<table class="at"><tr><th>Attribute</th><th>Description</th></tr>
<tr><td><code>cite</code></td><td>A URL to a document that explains the reason for the change. (Invisible to users, visible to crawlers/accessibility).</td></tr>
<tr><td><code>datetime</code></td><td>The date and time when the change was made (e.g., <code>"2026-04-10T14:30:00Z"</code>).</td></tr></table>

`+ codeBlock("Edit Semantics", "html", `<!-- 1. Updating a price on an ecommerce site -->
<p>
  Price:
  <del>₹1,200</del>
  <ins style="color: green; font-weight: bold;">₹899</ins>
  (Special Discount!)
</p>

<!-- 2. Updating a blog post fact with context -->
<p>
  The population of the city is 
  <del cite="/corrections" datetime="2026-04-10">4.5 million</del>
  <ins cite="/corrections" datetime="2026-04-10">4.8 million</ins> 
  according to the new census data.
</p>

<!-- 3. A To-Do List application -->
<ul>
  <li><del>Buy groceries</del></li>
  <li><del>Call Mom</del></li>
  <li><ins>Finish web dev project</ins></li>
</ul>`) + `
<div class="demo"><h4>▶ Live Demo</h4>
<div style="background:var(--bg3);padding:16px;border-radius:12px;border:1px solid var(--border);color:var(--text);font-size:1.1rem;line-height:2;">
  Today's Meeting: <del>3:00 PM</del> <ins style="color:var(--accent2);font-weight:bold;">4:30 PM</ins> (Rescheduled)<br>
  Total Cost: <del style="color:var(--accent3);">₹1,500</del> <ins style="color:#4ade80;">₹1,200</ins>
</div>
</div>
<div class="info"><strong>ℹ️ Screen Reader Support:</strong> Most screen readers will announce these tags! For example, NVDA will read "deleted 3:00 PM, inserted 4:30 PM", giving visually impaired users full context of the document's history.</div>`},

      // 50 - NEW
      {
        id: "tag-computer", title: 'Computer Semantics: <kbd>, <code>, <samp>, <var>', badge: "TEXT", emoji: "⌨️", content: `
<h3>📌 What are they?</h3>
<p>HTML has hyper-specific semantic tags for documenting computer interactions, terminal commands, coding tutorials, and mathematical variables. By default, browsers style these tags using a monospace font.</p>

<h3>🏷️ The Tags Explained</h3>
<table class="at"><tr><th>Tag</th><th>Meaning</th><th>Example Use Case</th></tr>
<tr><td><code>&lt;kbd&gt;</code></td><td><strong>Keyboard Input:</strong> Represents user input (usually keyboard shortcuts or typed commands).</td><td>Press <kbd>Ctrl</kbd> + <kbd>C</kbd></td></tr>
<tr><td><code>&lt;code&gt;</code></td><td><strong>Code Fragment:</strong> A short snippet of computer code.</td><td>Use the <code>fetch()</code> API.</td></tr>
<tr><td><code>&lt;samp&gt;</code></td><td><strong>Sample Output:</strong> Output generated by a computer program or terminal.</td><td>Terminal says: <samp>Error 404</samp></td></tr>
<tr><td><code>&lt;var&gt;</code></td><td><strong>Variable:</strong> A variable in coding or mathematics. usually styled in <i>italics</i>.</td><td>Solve for <var>x</var> and <var>y</var>.</td></tr></table>

`+ codeBlock("Computer Code Semantics", "html", `<!-- 1. Keyboard Shortcuts -->
<p>
  To open the developer tools, press 
  <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>I</kbd>.
</p>

<!-- 2. Terminal Commands and Output -->
<p>
  Run the command: <kbd>npm start</kbd><br>
  The server will respond with: <samp>Listening on port 3000...</samp>
</p>

<!-- 3. Math and Variables -->
<p>
  The area of a circle matches the formula: 
  <var>A</var> = <var>π</var><var>r</var><sup>2</sup>, 
  where <var>r</var> is the radius.
</p>

<!-- 4. Advanced: Combining them! -->
<p>
  To exit the <kbd>nano</kbd> editor, press <kbd><kbd>Ctrl</kbd> + <kbd>X</kbd></kbd>.
  (Yes, you can nest kbd for key combinations!)
</p>

<!-- 5. Creating a "Mac Key" CSS Style -->
<style>
  kbd {
    background: #f4f4f4;
    color: #333;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 2px 6px;
    box-shadow: 0 2px 0 rgba(0,0,0,0.2);
    font-size: 0.9em;
  }
</style>`) + `
<div class="demo"><h4>▶ Live Demo</h4>
<div style="background:var(--bg3);padding:20px;border-radius:12px;border:1px solid var(--border);color:var(--text);font-size:1.05rem;line-height:2.2;">
  <p style="margin:0">Save your work by pressing <kbd style="background:var(--bg4);border:1px solid var(--border);border-radius:6px;padding:2px 8px;box-shadow:0 3px 0 var(--border), 0 3px 2px rgba(0,0,0,0.2);">Ctrl</kbd> + <kbd style="background:var(--bg4);border:1px solid var(--border);border-radius:6px;padding:2px 8px;box-shadow:0 3px 0 var(--border), 0 3px 2px rgba(0,0,0,0.2);">S</kbd></p>
  <p style="margin:0">If <var style="color:var(--accent2);font-weight:bold;font-style:italic;">x</var> = 5, then <code style="background:color-mix(in srgb,var(--accent) 15%,transparent);color:var(--accent2);padding:2px 6px;border-radius:4px;">return x * 2</code> will output <samp style="background:#000;color:#0f0;padding:2px 6px;border-radius:4px;font-family:monospace;">10</samp></p>
</div>
</div>
</div>
`},

      // 51 - NEW
      {
        id: "tag-figure-2", title: 'The <figure> & <figcaption> Tags', badge: "SEMANTIC", emoji: "🖼️", content: `
<h3>📌 What are they?</h3>
<p>The <code>&lt;figure&gt;</code> element represents self-contained content, optionally with a caption provided by <code>&lt;figcaption&gt;</code>. While often used for images, it's actually perfect for <strong>illustrations, diagrams, code snippets, or quotes</strong>.</p>

<h3>⚙️ How it Works</h3>
<ul>
<li>A <code>&lt;figure&gt;</code> is semantically independent. If you moved it to an appendix or a different page, the main document's flow wouldn't break.</li>
<li>The <code>&lt;figcaption&gt;</code> acts as the label or legend for the figure. Screen readers brilliantly tie the caption to the figure's content.</li>
<li>You can put <strong>anything</strong> inside a figure: a table, an image, a block of code, an audio player, a blockquote, etc.</li>
</ul>

`+ codeBlock("Figure Implementation", "html", `<!-- 1. The Classic: Image with Caption -->
<figure>
  <img src="mountain-view.jpg" alt="A snowy mountain peak at sunrise">
  <figcaption>Fig. 1: Mount Everest viewed from base camp.</figcaption>
</figure>

<!-- 2. A Code Snippet with Caption -->
<figure>
  <pre><code>
function greet(name) {
  return "Hello " + name;
}
  </code></pre>
  <figcaption>Listing 1: A basic greeting function in JavaScript.</figcaption>
</figure>

<!-- 3. A Data Table in a Figure -->
<figure>
  <table>
    <tr><th>Year</th><th>Revenue</th></tr>
    <tr><td>2025</td><td>$2.4M</td></tr>
    <tr><td>2026</td><td>$3.8M</td></tr>
  </table>
  <figcaption>Table 1: Company revenue growth over two years.</figcaption>
</figure>`) + `
<div class="demo"><h4>▶ Live Demo</h4>
<div style="background:var(--bg3);padding:24px;border-radius:12px;border:1px solid var(--border);display:flex;justify-content:center;">
  <figure style="margin:0;background:var(--bg4);border:1px solid var(--border);border-radius:8px;padding:8px;box-shadow:0 4px 12px rgba(0,0,0,0.1);max-width:300px;text-align:center;">
    <div style="width:100%;height:150px;background:linear-gradient(135deg,var(--accent),var(--accent2));border-radius:4px;display:flex;align-items:center;justify-content:center;font-size:3rem;margin-bottom:8px;">🎨</div>
    <figcaption style="font-size:0.85rem;color:var(--text2);font-family:monospace;">Figure A: A CSS Gradient Artpiece.</figcaption>
  </figure>
</div>
</div>
<div class="tip"><strong>💡 Default Margins:</strong> Browsers apply default left and right margins (usually 40px) to <code>&lt;figure&gt;</code> elements. You will almost always want to reset this in your CSS with <code>figure { margin: 0; }</code>!</div>`},

      // 52 - NEW
      {
        id: "tag-wbr", title: 'Word Breaks: <wbr> & <nobr>', badge: "TEXT", emoji: "✂️", content: `
<h3>📌 What are they?</h3>
<p>These tags give you surgical control over how text wraps (or doesn't wrap) onto new lines. <code>&lt;wbr&gt;</code> stands for <strong>Word Break Opportunity</strong>. <code>&lt;nobr&gt;</code> stands for <strong>No Break</strong>.</p>

<h3>🏷️ The Tags Explained</h3>
<table class="at"><tr><th>Tag</th><th>Purpose</th><th>Status</th></tr>
<tr><td><code>&lt;wbr&gt;</code></td><td>Tells the browser: <em>"If you run out of space, it's safe to break the word exactly here."</em> Ideal for extremely long URLs, file paths, or compound words.</td><td>Standard (HTML5)</td></tr>
<tr><td><code>&lt;nobr&gt;</code></td><td>Forces the browser to keep all enclosed text on a single line, causing horizontal scrolling if necessary.</td><td>Deprecated (Use CSS <code>white-space: nowrap</code> instead)</td></tr></table>

<h3>⚙️ The Problem &lt;wbr&gt; Solves</h3>
<p>By default, browsers only wrap text at spaces or hyphens. If you have a massive string of text without spaces (like a URL), it will stretch past the container and break your UI layout! By placing <code>&lt;wbr&gt;</code> tags, the browser knows where it can safely "snap" the text to the next line <strong>only if necessary</strong>.</p>

`+ codeBlock("Word Breaking", "html", `<!-- 1. Handling Long URLs -->
<p>
  My super long API endpoint is:
  https://api.myawesomeapp.com<wbr>/v1<wbr>/users<wbr>/profiles<wbr>/images<wbr>/avatar.png
</p>

<!-- 2. Handling Long Compound Words (German, etc) -->
<p>
  The longest German word is:
  Rindfleisch<wbr>etikettierungs<wbr>überwachungs<wbr>aufgaben<wbr>übertragungs<wbr>gesetz.
</p>

<!-- 3. The Modern Alternative to <nobr> -->
<!-- Instead of <nobr>Don't wrap this</nobr>, use CSS: -->
<p>
  You can contact us at our 
  <span style="white-space: nowrap;">1-800-WEB-DEV</span> hot-line.
</p>`) + `
<div class="demo"><h4>▶ Live Demo</h4>
<div style="background:var(--bg3);padding:20px;border-radius:12px;border:1px solid var(--border);color:var(--text);font-size:1rem;line-height:1.6;display:flex;gap:20px;">
  <div style="flex:1;background:var(--bg4);border:1px dashed #ff4a4a;padding:12px;overflow:hidden;">
    <strong style="color:#ff4a4a;font-size:0.8rem;">Without &lt;wbr&gt; (Overflows visually)</strong>
    <p style="word-break:keep-all;">https://en.wikipedia.org/wiki/Pneumonoultramicroscopicsilicovolcanoconiosis</p>
  </div>
  <div style="flex:1;background:var(--bg4);border:1px dashed #4ade80;padding:12px;">
    <strong style="color:#4ade80;font-size:0.8rem;">With &lt;wbr&gt; (Breaks cleanly)</strong>
    <p>https://en.wikipedia.org/wiki/<wbr>Pneumono<wbr>ultra<wbr>microscopic<wbr>silico<wbr>volcano<wbr>coniosis</p>
  </div>
</div>
</div>
`},

      // 53 - NEW
      {
        id: "tag-quote", title: 'The <blockquote>, <q> & <cite> Tags', badge: "SEMANTIC", emoji: "💬", content: `
<h3>📌 What are they?</h3>
<p>HTML has three dedicated tags for <strong>quotations and citations</strong>. Using them correctly improves SEO, provides semantic meaning for screen readers, and unlocks beautiful typographic styles.</p>

<h3>🏷️ The Tags Explained</h3>
<table class="at"><tr><th>Tag</th><th>Purpose</th><th>Display</th></tr>
<tr><td><code>&lt;blockquote&gt;</code></td><td>A large, standalone quote from another source.</td><td>Block-level (indented by default)</td></tr>
<tr><td><code>&lt;q&gt;</code></td><td>A short, inline quotation.</td><td>Inline (browser auto-adds quote marks!)</td></tr>
<tr><td><code>&lt;cite&gt;</code></td><td>The title of a work (book, song, movie) or the author being quoted.</td><td>Inline (italicized by default)</td></tr></table>

<h3>📋 The 'cite' Attribute</h3>
<p>Both <code>&lt;blockquote&gt;</code> and <code>&lt;q&gt;</code> support the <code>cite</code> attribute. This is an invisible URL pointing to the source of the quote. It is purely for search engines and context.</p>

<div class="cb"><div class="cb-h"><span>📄 Quotes & Citations</span><button class="cp-btn" onclick="copyCode(this)">📋 Copy</button></div><pre class="cb-b">&lt;!-- 1. Blockquote with Citation inside --&gt;
&lt;blockquote cite="https://en.wikipedia.org/wiki/Tim_Berners-Lee"&gt;
  &lt;p&gt;The Web does not just connect machines, it connects people.&lt;/p&gt;
  &lt;footer&gt;— &lt;cite&gt;Tim Berners-Lee&lt;/cite&gt;&lt;/footer&gt;
&lt;/blockquote&gt;

&lt;!-- 2. Inline quote --&gt;
&lt;p&gt;
  When my code didn't work, my mentor said: 
  &lt;q&gt;Have you tried turning it off and on again?&lt;/q&gt;
&lt;/p&gt;

&lt;!-- 3. Citing a work --&gt;
&lt;p&gt;
  My favorite movie is &lt;cite&gt;Interstellar&lt;/cite&gt;, 
  directed by Christopher Nolan.
&lt;/p&gt;</pre></div>

<div class="demo"><h4>▶ Live Demo</h4>
<div style="background:var(--bg3);padding:24px;border-radius:12px;border:1px solid var(--border);">
  <blockquote style="margin:0;padding-left:16px;border-left:4px solid var(--accent);font-style:italic;color:var(--text2);font-size:1.1rem;">
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand."
    <footer style="margin-top:8px;font-size:0.9rem;font-style:normal;color:var(--text3);">— <cite style="color:var(--accent2);font-weight:600;">Martin Fowler</cite></footer>
  </blockquote>
  <p style="margin-top:20px;font-size:0.95rem;color:var(--text);">Inline example: As a famous developer once said, <q style="quotes:'“' '”';color:var(--accent3);font-family:monospace;">if it compiles, ship it!</q></p>
</div>
</div>
`},

      // 54 - NEW
      {
        id: "tag-time", title: 'The <time> Tag', badge: "SEMANTIC", emoji: "⏱️", content: `
<h3>📌 What is it?</h3>
<p>The <code>&lt;time&gt;</code> tag represents a specific period in time. Its superpower is the <code>datetime</code> attribute, which lets you display a <strong>human-readable</strong> date to the user while providing a strict <strong>machine-readable</strong> timestamp for search engines, calendars, and screen readers.</p>

<h3>⚙️ Why use it?</h3>
<ul>
<li><strong>SEO Boost:</strong> Search engines can exactly determine when an article was published, helping with rich snippets.</li>
<li><strong>Localizable:</strong> Scripts can read the <code>datetime</code> attribute, convert the time to the user's local timezone, and update the text dynamically!</li>
<li><strong>Accessibility:</strong> Screen readers know exactly how to pronounce "4/5/26" if the datetime guarantees it means May 4th.</li>
</ul>

<h3>📋 The 'datetime' Formats</h3>
<table class="at"><tr><th>Format</th><th>Example</th><th>Meaning</th></tr>
<tr><td>YYYY-MM-DD</td><td><code>2026-04-10</code></td><td>A specific calendar date</td></tr>
<tr><td>YYYY-MM-DDThh:mm:ss</td><td><code>2026-04-10T14:30:00</code></td><td>Date and precise time</td></tr>
<tr><td>PT...</td><td><code>PT2H30M</code></td><td>A duration (2 hours, 30 minutes)</td></tr></table>

<div class="cb"><div class="cb-h"><span>📄 Time Element Implementation</span><button class="cp-btn" onclick="copyCode(this)">📋 Copy</button></div><pre class="cb-b">&lt;!-- 1. Basic Date --&gt;
&lt;p&gt;I started learning HTML on &lt;time datetime="2024-01-15"&gt;Jan 15, 2024&lt;/time&gt;.&lt;/p&gt;

&lt;!-- 2. Precise Time (for blog posts) --&gt;
&lt;article&gt;
  &lt;h1&gt;The Magic of Web Dev&lt;/h1&gt;
  &lt;p&gt;Published: &lt;time datetime="2026-04-10T14:00:00Z"&gt;April 10, 2026&lt;/time&gt;&lt;/p&gt;
&lt;/article&gt;

&lt;!-- 3. Duration Feature (PT = Period Time) --&gt;
&lt;p&gt;
  This recipe takes &lt;time datetime="PT1H30M"&gt;one and a half hours&lt;/time&gt; to cook.
&lt;/p&gt;</pre></div>

<div class="demo"><h4>▶ Live JavaScript Demo</h4>
<div style="background:var(--bg3);padding:20px;border-radius:12px;border:1px solid var(--border);text-align:center;">
  <p style="margin:0;color:var(--text2);">The timestamp is secretly embedded!</p>
  <time id="liveTimeTag" datetime="2026-04-10T00:00:00Z" style="display:inline-block;margin-top:12px;padding:8px 16px;background:var(--accent);color:#fff;border-radius:20px;font-weight:bold;font-family:monospace;"></time>
  <button onclick="document.getElementById('liveTimeTag').textContent = 'ISO Date: ' + new Date(document.getElementById('liveTimeTag').getAttribute('datetime')).toISOString().split('T')[0]; this.style.display='none';" style="margin-top:12px; display:block; margin-left:auto; margin-right:auto; padding:8px 16px; background:var(--accent2); color:#000; border:none; border-radius:8px; cursor:pointer; font-weight:bold;">🕒 Reveal Native JS Time</button>
</div>
</div>
`},

      // 55 - NEW
      {
        id: "tag-ruby-2", title: 'Ruby Annotations: <ruby>, <rt>, <rp>', badge: "TEXT", emoji: "🇯🇵", content: `
<h3>📌 What are they?</h3>
<p>The <code>&lt;ruby&gt;</code> element is used to display annotations (short pronunciation guides) above or beside base text. It is overwhelmingly used for East Asian languages (like Japanese Furigana or Chinese Pinyin) to teach readers how to pronounce complex characters.</p>

<h3>🏷️ The Components</h3>
<ul>
<li><code>&lt;ruby&gt;</code>: The main container.</li>
<li><code>&lt;rt&gt;</code> (Ruby Text): The pronunciation annotation that appears tiny and above the main text.</li>
<li><code>&lt;rp&gt;</code> (Ruby Parenthesis): Fallback parentheses for very old browsers that don't support Ruby. Modern browsers hide this completely.</li>
</ul>

`+ codeBlock("Ruby Usage", "html", `<!-- 1. Basic Japanese Furigana (Kanji with Hiragana reading) -->
<p>
  I am learning to speak 
  <ruby>
    日本<rt>にほん</rt>
  </ruby>
  (Japanese).
</p>

<!-- 2. Bulletproof Fallback (with <rp>) -->
<!-- If the browser doesn't support <ruby>, it will display: 漢字 (かんじ) -->
<p>
  <ruby>
    漢字
    <rp>(</rp><rt>かんじ</rt><rp>)</rp>
  </ruby>
</p>

<!-- 3. Chinese Pinyin example -->
<p>
  <ruby>
    汉<rp>(</rp><rt>hàn</rt><rp>)</rp>
    字<rp>(</rp><rt>zì</rt><rp>)</rp>
  </ruby>
</p>`) + `
<div class="demo"><h4>▶ Live Demo</h4>
<div style="background:var(--bg3);padding:24px;border-radius:12px;border:1px solid var(--border);font-size:2rem;text-align:center;">
  <p style="margin:0;">
    <ruby>東<rt>とう</rt></ruby>
    <ruby>京<rt>きょう</rt></ruby>
    <span style="font-size:1rem;color:var(--text2);margin-left:12px;">(Tokyo)</span>
  </p>
</div>
</div>
`},

      // 56 - NEW
      {
        id: "tag-bdi-bdo", title: 'Bi-Directional Text: <bdi> & <bdo>', badge: "TEXT", emoji: "🔀", content: `
<h3>📌 What are they?</h3>
<p>These tags handle texts that read right-to-left (RTL) like Arabic or Hebrew, mixed with texts that read left-to-right (LTR) like English. Mixing them is notoriously difficult without semantic structural help!</p>

<h3>🏷️ &lt;bdi&gt; vs &lt;bdo&gt;</h3>
<table class="at"><tr><th>Tag</th><th>Meaning</th><th>When to use</th></tr>
<tr><td><code>&lt;bdi&gt;</code></td><td><strong>Bi-Directional Isolation:</strong> Isolates a piece of text from its surroundings so its directionality doesn't corrupt the surrounding text.</td><td><strong>Best Practice!</strong> Use when inserting user-generated text (like a username) when you don't know what language they typed it in.</td></tr>
<tr><td><code>&lt;bdo&gt;</code></td><td><strong>Bi-Directional Override:</strong> Strictly overrides the text direction, forcing it backwards or forwards regardless of the language's native rule.</td><td>Rarely used unless doing strict formatting overrides. Requires <code>dir="rtl"</code> or <code>dir="ltr"</code>.</td></tr></table>

`+ codeBlock("BDI and BDO in action", "html", `<!-- 1. The problem without <bdi> -->
<!-- If the username is Arabic (RTL), it will completely flip the number and text surrounding it! -->
<ul>
  <li>User إيان has 90 points.</li> <!-- Could render wrong! -->
</ul>

<!-- 2. The solution with <bdi> -->
<ul>
  <li>User <bdi>إيان</bdi> has 90 points.</li> <!-- Guaranteed to render correctly! -->
</ul>

<!-- 3. Using <bdo> to force visual text flipping -->
<p>
  You can read this backwards: 
  <bdo dir="rtl">This text will be completely mirrored.</bdo>
</p>`) + `
<div class="demo"><h4>▶ Live Demo</h4>
<div style="background:var(--bg3);padding:20px;border-radius:12px;border:1px solid var(--border);color:var(--text);font-size:1.1rem;line-height:2;">
  <p><strong>Winner 1:</strong> User <bdi style="color:var(--accent);">إيان</bdi> placed 1st.</p>
  <p><strong>Winner 2:</strong> User <bdi style="color:var(--accent2);">Sanskar</bdi> placed 2nd.</p>
  <hr style="border-top:1px solid var(--border);margin:12px 0;">
  <p>Force Override: <bdo dir="rtl" style="color:#ff6b6b;">?siht daer uoy naC</bdo></p>
</div>
</div>
`},

      // 57 - NEW
      {
        id: "tag-dfn", title: 'The <dfn> Tag', badge: "SEMANTIC", emoji: "📖", content: `
<h3>📌 What is it?</h3>
<p>The <code>&lt;dfn&gt;</code> (Definition) element is used to indicate the <strong>defining instance</strong> of a term. If you are writing an article and you introduce a new vocabulary word or jargon, you wrap it in <code>&lt;dfn&gt;</code> the very first time you explain it.</p>

<h3>⚙️ How it works</h3>
<ul>
<li>It is usually paired with <code>&lt;p&gt;</code> or <code>&lt;dl&gt;</code> blocks that contain the actual explanation.</li>
<li>By default, browsers style the term in <i>italics</i>.</li>
<li>You can use the <code>title</code> attribute to provide the exact definition string on hover, or wrap an <code>&lt;abbr&gt;</code> inside it!</li>
</ul>

`+ codeBlock("Definition Examples", "html", `<!-- 1. Basic inline definition -->
<p>
  A <dfn>Client-Side Framework</dfn> is a web architecture 
  where UI rendering happens in the browser rather than on the server.
</p>

<!-- 2. Defining an abbreviation -->
<p>
  The <dfn><abbr title="Document Object Model">DOM</abbr></dfn> 
  is a programming interface for HTML and XML documents.
</p>

<!-- 3. Using the title attribute -->
<p>
  To measure layout shifts, we use 
  <dfn title="Cumulative Layout Shift">CLS</dfn>, which tracks 
  visual stability on the page.
</p>

<!-- Custom Styling -->
<style>
  dfn {
    font-weight: bold;
    font-style: italic;
    color: #6c63ff;
    border-bottom: 1px dashed #6c63ff;
    cursor: help;
  }
</style>`) + `
<div class="demo"><h4>▶ Live Demo</h4>
<div style="background:var(--bg3);padding:20px;border-radius:12px;border:1px solid var(--border);color:var(--text);font-size:1.05rem;">
  <p>An <dfn title="Application Programming Interface" style="color:var(--accent);font-weight:bold;border-bottom:1px dashed var(--accent);cursor:help;">API</dfn> is a set of rules that lets different software entities communicate with each other. (Hover over the term!)</p>
</div>
</div>
<div class="tip"><strong>💡 Rule of Thumb:</strong> Only use <code>&lt;dfn&gt;</code> <strong>once</strong> per term per document! It marks the exact place the term is defined, not every time it is used.</div>`},

      // 58 - NEW
      {
        id: "tag-address", title: 'The <address> Tag', badge: "SEMANTIC", emoji: "🏢", content: `
<h3>📌 What is it?</h3>
<p>The <code>&lt;address&gt;</code> tag indicates that the enclosed HTML provides <strong>contact information</strong> for a person, people, or organization. Search engines heavily rely on this block to power local search results and business directories.</p>

<h3>⚙️ Critical Rules</h3>
<ul>
<li>If it sits inside an <code>&lt;article&gt;</code>, it applies only to the author of that article.</li>
<li>If it sits in the <code>&lt;body&gt;</code> or <code>&lt;footer&gt;</code>, it applies to the owner of the entire website.</li>
<li>It shouldn't be used for <em>arbitrary</em> physical addresses (like describing a random building in a story). Only for contact info related to the document!</li>
<li>It can contain physical addresses, phone numbers, email links, social media handles, and coordinates.</li>
</ul>

`+ codeBlock("Address Implementation", "html", `<!-- 1. Standard Footer Contact Block -->
<footer>
  <address>
    <strong>Sanskar Web Studio</strong><br>
    123 Developer Lane<br>
    Tech City, TX 75001<br>
    <a href="mailto:contact@sanskar.dev">contact@sanskar.dev</a><br>
    <a href="tel:+15551234567">+1 (555) 123-4567</a>
  </address>
</footer>

<!-- 2. Author Contact Info in an Article -->
<article>
  <h1>Mastering HTML5</h1>
  <p>HTML5 brought so many semantic tags...</p>
  
  <address>
    Written by <a href="/author/sanskar">Sanskar</a>.<br>
    Find me on <a href="https://twitter.com/sanskar">Twitter</a>.
  </address>
</article>`) + `
<div class="demo"><h4>▶ Live Demo</h4>
<div style="background:var(--bg3);padding:24px;border-radius:12px;border:1px solid var(--border);">
  <address style="font-style:normal;line-height:1.8;border-left:4px solid var(--accent);padding-left:16px;">
    <strong style="color:var(--text);font-size:1.1rem;">Digital Headquarters</strong><br>
    <span style="color:var(--text2);">Internet Space, Planet Earth</span><br>
    📧 <a href="mailto:hello@example.com" style="color:var(--accent2);text-decoration:none;">hello@example.com</a><br>
    🐦 <a href="#" style="color:var(--accent2);text-decoration:none;">@SanskarDev</a>
  </address>
</div>
</div>`},

      // 59 - NEW
      {
        id: "tag-data", title: 'The <data> Tag', badge: "META", emoji: "🔢", content: `
<h3>📌 What is it?</h3>
<p>The <code>&lt;data&gt;</code> element links a given piece of content to a <strong>machine-readable translation</strong>. If you are displaying a product name, a custom measurement, or an item ID to a human, the <code>&lt;data&gt;</code> tag uses a <code>value</code> attribute to give the computer the exact numerical ID behind it.</p>

<h3>⚙️ How it differs from &lt;time&gt;</h3>
<p>While <code>&lt;time&gt;</code> is strictly for dates and durations, <code>&lt;data&gt;</code> is for literally <strong>anything else</strong> (Product IDs, ISBNs, weight algorithms, currency values).</p>

`+ codeBlock("Data Semantics", "html", `<!-- 1. Ecommerce Product IDs -->
<ul>
  <li>
    <data value="PROD-3921">Wireless Headphones</data> 
    - $99
  </li>
  <li>
    <data value="PROD-7489">Mechanical Keyboard</data> 
    - $120
  </li>
</ul>

<!-- 2. Providing exact measurements -->
<p>
  The package weighs exactly
  <data value="2.54">2.54 kilograms</data>.
</p>

<!-- 3. Using it with JavaScript! -->
<!-- This is cleaner than using data-* attributes on generic spans -->
<script>
  // Get all data tags and read their machine values!
  const items = document.querySelectorAll('data');
  items.forEach(item => {
    console.log("Human read:", item.textContent);
    console.log("Database ID:", item.value);
  });
<\/script>`) + `
<div class="demo"><h4>▶ Live JavaScript Demo</h4>
<div style="background:var(--bg3);padding:20px;border-radius:12px;border:1px solid var(--border);">
  <ul style="list-style:none;padding:0;margin:0 0 16px;">
    <li style="margin-bottom:8px;padding:8px;background:var(--bg4);border-radius:8px;">🛒 <data value="SKU-8991" class="demo-data">Gaming Mouse</data></li>
    <li style="margin-bottom:8px;padding:8px;background:var(--bg4);border-radius:8px;">🛒 <data value="SKU-2045" class="demo-data">4K Monitor</data></li>
  </ul>
  <button onclick="window.readDataDemo()" style="padding:10px 20px;background:var(--accent);color:#fff;border:none;border-radius:8px;cursor:pointer;font-weight:bold;">⚙️ Read Database IDs</button>
</div>
</div>
</div>
`},

      // 60 - NEW
      {
        id: "tag-template-3", title: 'The <template> Tag', badge: "ADVANCED", emoji: "🧩", content: `
<h3>📌 What is it?</h3>
<p>The <code>&lt;template&gt;</code> element is a mechanism for holding HTML that is not to be rendered immediately when a page is loaded but may be instantiated subsequently during runtime using JavaScript. It's essentially a blueprint for Web Components!</p>

<h3>⚙️ Superpowers of &lt;template&gt;</h3>
<ul>
<li><strong>Hidden until needed:</strong> Content inside a template is completely invisible and strictly ignored by the browser's visual renderer.</li>
<li><strong>Lazy resources:</strong> Images, scripts, and video inside a template <strong>do not load</strong> or execute until you explicitly clone and attach the template to the active DOM! (Massive performance boost).</li>
<li><strong>Inertness:</strong> It doesn't query-select or affect anything else on the page until used.</li>
<li><strong>Reusable:</strong> You can clone the template infinite times to render lists, dynamic cards, or Shadow DOM elements!</li>
</ul>

`+ codeBlock("Template Blueprint", "html", `<!-- 1. Define the Template -->
<!-- Note: The image won't load and the script won't run yet! -->
<template id="user-card-template">
  <div class="user-card">
    <img src="avatar.jpg" alt="User" class="avatar">
    <h2 class="name"></h2>
    <p class="role"></p>
  </div>
</template>

<!-- 2. Container to inject into -->
<div id="users-container"></div>

<!-- 3. Instantiate with JavaScript -->
<script>
  // Get the template and container
  const temp = document.getElementById("user-card-template");
  const container = document.getElementById("users-container");

  // Create a new instance (clone everything inside)
  const clone = temp.content.cloneNode(true);
  
  // Populate the cloned elements with real data
  clone.querySelector(".name").textContent = "Sanskar Developer";
  clone.querySelector(".role").textContent = "Full-Stack Engineer";

  // Attach to the active DOM!
  container.appendChild(clone);
<\\/script>`) + `
<div class="demo"><h4>▶ Live JavaScript Clone Demo</h4>
<div style="background:var(--bg3);padding:24px;border-radius:12px;border:1px solid var(--border);text-align:center;">
  <!-- HIDDEN TEMPLATE -->
  <template id="demo-badge-template">
    <div style="display:inline-flex;align-items:center;gap:8px;padding:8px 16px;background:var(--accent);color:#fff;border-radius:20px;margin:8px;font-weight:bold;transform:scale(0);animation:popInDemo 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;box-shadow:0 10px 20px rgba(0,0,0,0.2);">
      <span class="ico">🚀</span>
      <span class="text">Instantiated!</span>
    </div>
  </template>
  <style>@keyframes popInDemo { to { transform: scale(1); } }</style>

  <p style="margin-top:0;color:var(--text2);margin-bottom:16px;">The template component is secretly waiting inside the DOM...</p>
  
  <div id="demo-injection-zone" style="min-height:70px;margin-bottom:16px;padding:12px;border:2px dashed var(--border);border-radius:12px;display:flex;flex-wrap:wrap;justify-content:center;align-items:center;">
    <span style="color:var(--text3);font-size:0.9rem;" id="demo-iz-txt">Injection Zone Empty</span>
  </div>
  
  <button onclick="window.instantiateTemplateDemo()" style="padding:10px 24px;background:var(--accent2);color:#000;border:none;border-radius:8px;cursor:pointer;font-weight:bold;font-size:1.05rem;box-shadow:0 4px 12px rgba(62, 207, 207, 0.4); transition:transform 0.2s;">
    🧬 Clone & Inject Component
  </button>
  <button onclick="document.getElementById('demo-injection-zone').innerHTML='<span style=\\'color:var(--text3);font-size:0.9rem;\\' id=\\'demo-iz-txt\\'>Injection Zone Empty</span>';" style="padding:10px 24px;background:var(--bg4);color:var(--text);border:1px solid var(--border);border-radius:8px;cursor:pointer;font-weight:bold;font-size:1.05rem;margin-left:8px;">
    🧹 Clear
  </button>
</div>
</div>
`},
      // 61
      {
        id: "tag-math", title: 'The <math> (MathML) Tag', badge: "ADVANCED", emoji: "🔢", content: `
<h3>📌 What is it?</h3>
<p>The <code>&lt;math&gt;</code> element is the root for <strong>MathML (Mathematical Markup Language)</strong>. It allows you to natively render complex mathematical equations, fractions, square roots, and matrices in the browser without needing heavy JavaScript libraries like LaTeX or MathJax.</p>
<h3>📋 Key Sub-Tags</h3>
<table class="at"><tr><th>Tag</th><th>Purpose</th></tr><tr><td><code>&lt;mfrac&gt;</code></td><td>Fractions</td></tr><tr><td><code>&lt;msqrt&gt;</code></td><td>Square root</td></tr><tr><td><code>&lt;msup&gt;</code></td><td>Superscript (powers)</td></tr><tr><td><code>&lt;msub&gt;</code></td><td>Subscript</td></tr><tr><td><code>&lt;mrow&gt;</code></td><td>Groups elements horizontally</td></tr></table>
<div class="tip"><strong>💡 Pro Tip:</strong> MathML is now supported in all major browsers (Chrome 109+, Firefox, Safari). It provides far better accessibility for screen readers than using images of equations!</div>
`+ codeBlock("MathML Quadratic Formula", "html", `<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <mrow>
    <mi>x</mi>
    <mo>=</mo>
    <mfrac>
      <mrow>
        <mo>&#x2212;</mo>
        <mi>b</mi>
        <mo>&#xB1;</mo>
        <msqrt>
          <msup>
            <mi>b</mi>
            <mn>2</mn>
          </msup>
          <mo>&#x2212;</mo>
          <mn>4</mn>
          <mi>a</mi>
          <mi>c</mi>
        </msqrt>
      </mrow>
      <mrow>
        <mn>2</mn>
        <mi>a</mi>
      </mrow>
    </mfrac>
  </mrow>
</math>`)
      },
      // 62
      {
        id: "tag-slot", title: 'The <slot> (Web Components) Tag', badge: "ARCHITECTURAL", emoji: "🔌", content: `
<h3>📌 What is it?</h3>
<p>The <code>&lt;slot&gt;</code> tag is a placeholder inside a <strong>Web Component's Shadow DOM</strong>. It allows developers to create reusable custom elements that can accept custom user content, similar to how React uses "props.children".</p>
<h3>📋 How it Works</h3>
<p>When you define a custom element, you can put a <code>&lt;slot&gt;</code> inside its internal template. Any HTML the user places inside the custom element tags will be "slotted" into that placeholder.</p>
<ul>
  <li><strong>Default Slot:</strong> <code>&lt;slot&gt;&lt;/slot&gt;</code> catches any unnamed content.</li>
  <li><strong>Named Slots:</strong> <code>&lt;slot name="header"&gt;&lt;/slot&gt;</code> catches content with the attribute <code>slot="header"</code>.</li>
</ul>
<div class="warn"><strong>⚠️ Note:</strong> <code>&lt;slot&gt;</code> only works inside a Shadow Root. If used in a normal HTML page outside a Web Component, it acts like a normal <code>span</code>.</div>
`+ codeBlock("Web Component Slots", "html", `<!-- 1. The Component Template (Hidden in Shadow DOM) -->
<template id="card-template">
  <style>
    .card { border: 1px solid #ccc; border-radius: 8px; padding: 16px; }
    .card-header { font-weight: bold; font-size: 1.2em; margin-bottom: 8px; }
  </style>
  <div class="card">
    <div class="card-header">
      <!-- Named Slot for the Title -->
      <slot name="title">Default Title</slot>
    </div>
    <div class="card-body">
      <!-- Default Slot for the Content -->
      <slot>Default Content</slot>
    </div>
  </div>
</template>

<!-- 2. Using the Custom Component in HTML -->
<my-custom-card>
  <!-- This goes into the 'title' slot -->
  <span slot="title">Premium User Profile</span>
  
  <!-- This goes into the default slot -->
  <p>Welcome to your customized dashboard experience.</p>
</my-custom-card>`)
      },
      // 63
      {
        id: "tag-base", title: 'The <base> Tag', badge: "DOCUMENT", emoji: "🎯", content: `
<h3>📌 What is it?</h3>
<p>The <code>&lt;base&gt;</code> tag specifies a <strong>base URL</strong> and a <strong>default target</strong> for all relative links and URLs in a document. This means you don't have to write out the full domain path for every single link or image on your page.</p>
<h3>📋 Attributes</h3>
<table class="at"><tr><th>Attribute</th><th>Description</th></tr><tr><td><code>href</code></td><td>The base URL to be used throughout the page.</td></tr><tr><td><code>target</code></td><td>Default target for all links (e.g., <code>_blank</code>).</td></tr></table>
<div class="info"><strong>📝 Rules:</strong> There can be only ONE <code>&lt;base&gt;</code> tag per document, it MUST be inside the <code>&lt;head&gt;</code>, and it MUST appear before any elements that use URLs (like <code>&lt;link&gt;</code> or <code>&lt;script&gt;</code>).</div>
`+ codeBlock("Base URL Routing", "html", `<!-- Inside your <head> section -->
<head>
  <!-- Set the base URL for the entire page -->
  <base href="https://www.example.com/images/" target="_blank">
</head>

<body>
  <!-- Because of the <base> tag, this image actually loads from:
       https://www.example.com/images/logo.png -->
  <img src="logo.png" alt="Logo">

  <!-- Because of the <base target="_blank">, this link will 
       automatically open in a new tab without needing the attribute! -->
  <a href="https://google.com">Search Google</a>
</body>`)
      },
      // 64
      {
        id: "tag-hr", title: 'The <hr> (Horizontal Rule) Tag', badge: "SEMANTIC", emoji: "➖", content: `
<h3>📌 What is it?</h3>
<p>In modern HTML5, the <code>&lt;hr&gt;</code> tag represents a <strong>thematic break</strong> in the content. While it draws a horizontal line by default, its semantic purpose is to signal a shift in topic, a scene change in a story, or a transition to a new section within an article.</p>
<h3>📋 Stylistic Control</h3>
<p>Historically, developers used attributes like <code>size</code>, <code>width</code>, or <code>noshade</code>. These are strictly <strong>deprecated</strong>! You should rely entirely on CSS to style your thematic breaks.</p>
`+ codeBlock("Thematic Breaks", "html", `<style>
  /* Modern CSS styling for <hr> */
  .gradient-break {
    border: 0;
    height: 2px;
    background: linear-gradient(to right, transparent, #6c63ff, transparent);
    margin: 40px 0;
  }
  
  .star-break {
    border: 0;
    text-align: center;
    margin: 40px 0;
  }
  .star-break::before {
    content: "✦ ✦ ✦";
    font-size: 24px;
    letter-spacing: 12px;
    color: #ffd700;
  }
</style>

<p>The hero finally defeated the dragon and returned to the village, collapsing in exhaustion.</p>

<!-- Thematic break indicating a passage of time / scene change -->
<hr class="star-break">

<p>Three weeks later, a mysterious letter arrived at the hero's doorstep...</p>

<!-- Standard styled line break -->
<hr class="gradient-break">

<p>End of chapter 1.</p>`)
      },
      // 65
      {
        id: "tag-legacy", title: 'Legacy: <marquee> & <blink>', badge: "HISTORICAL", emoji: "👻", content: `
<h3>📌 What are they?</h3>
<p>Welcome to the <strong>"Graveyard Tags"</strong> of the 1990s web!</p>
<ul>
  <li><code>&lt;marquee&gt;</code> made text slide horizontally or vertically across the screen.</li>
  <li><code>&lt;blink&gt;</code> made text flash on and off annoyingly.</li>
</ul>
<div class="warn"><strong>⚠️ DANGER:</strong> These tags are completely <strong>deprecated and obsolete</strong>. They cause massive accessibility issues (especially for users with photosensitive epilepsy or ADHD) and have been removed from official HTML standards. Modern browsers may still render them purely for backwards compatibility, but you should NEVER use them.</div>
<h3>✨ The Modern CSS Alternative</h3>
<p>If you genuinely need a scrolling ticker or pulsing text, use CSS animations. CSS allows users to respect the <code>prefers-reduced-motion</code> media query, ensuring your site remains accessible!</p>
`+ codeBlock("Modern CSS Tickers", "html", `<style>
  /* The accessible, modern alternative to <marquee> */
  .css-marquee {
    width: 100%;
    overflow: hidden;
    background: #1a1a2e;
    color: #4ade80;
    padding: 10px;
    border-radius: 8px;
    white-space: nowrap;
  }
  
  .css-marquee p {
    display: inline-block;
    padding-left: 100%;
    animation: scroll-left 10s linear infinite;
    margin: 0;
  }
  
  @keyframes scroll-left {
    0% { transform: translateX(0); }
    100% { transform: translateX(-100%); }
  }
  
  /* Respect user accessibility settings! */
  @media (prefers-reduced-motion: reduce) {
    .css-marquee p {
      animation: none;
      padding-left: 0;
    }
  }
</style>

<div class="css-marquee">
  <p>🚀 Breaking News: CSS Animations officially replace the marquee tag! 🚀</p>
</div>`)
      },
      // 66
      {
        id: "tag-input", title: 'The <input> Tag', badge: "FORM", emoji: "📝", content: `
<h3>📌 What is it?</h3>
<p>The <code>&lt;input&gt;</code> tag is the <strong>single most versatile element in HTML</strong>. It creates interactive controls inside forms — from simple text boxes and checkboxes to date pickers, color selectors, file uploaders, and sliders. Its behavior is entirely controlled by the <code>type</code> attribute, making it one element that can morph into over <strong>22 different input types</strong>.</p>

<h3>📋 All Important Attributes</h3>
<table class="at">
<tr><th>Attribute</th><th>Description</th><th>Example</th></tr>
<tr><td><code>type</code></td><td>Defines the kind of input control</td><td><code>"text"</code>, <code>"email"</code>, <code>"password"</code>, <code>"number"</code>, <code>"date"</code></td></tr>
<tr><td><code>name</code></td><td>Identifies the field when submitting the form</td><td><code>"username"</code></td></tr>
<tr><td><code>value</code></td><td>The initial/default value of the input</td><td><code>"Hello"</code></td></tr>
<tr><td><code>placeholder</code></td><td>Hint text displayed when the field is empty</td><td><code>"Enter your email..."</code></td></tr>
<tr><td><code>required</code></td><td>Makes the field mandatory before form submission</td><td>(boolean)</td></tr>
<tr><td><code>disabled</code></td><td>Prevents the user from interacting with the input</td><td>(boolean)</td></tr>
<tr><td><code>readonly</code></td><td>Displays the value but prevents editing</td><td>(boolean)</td></tr>
<tr><td><code>min / max</code></td><td>Sets numeric or date boundaries</td><td><code>min="0" max="100"</code></td></tr>
<tr><td><code>pattern</code></td><td>Regular expression for client-side validation</td><td><code>"[A-Za-z]{3,}"</code></td></tr>
<tr><td><code>autocomplete</code></td><td>Hints to the browser about auto-fill behavior</td><td><code>"email"</code>, <code>"off"</code></td></tr>
<tr><td><code>autofocus</code></td><td>Automatically focuses this input on page load</td><td>(boolean)</td></tr>
<tr><td><code>accept</code></td><td>For file inputs: specifies allowed MIME types</td><td><code>".jpg,.png,image/*"</code></td></tr>
<tr><td><code>multiple</code></td><td>Allows selecting multiple files or email addresses</td><td>(boolean)</td></tr>
</table>

<h3>🔍 Deep Dive — All 22+ Input Types</h3>
<table class="at">
<tr><th>Type</th><th>What it does</th></tr>
<tr><td><code>text</code></td><td>Single-line text input (default)</td></tr>
<tr><td><code>password</code></td><td>Obscures characters for sensitive data</td></tr>
<tr><td><code>email</code></td><td>Validates email format, shows mobile email keyboard</td></tr>
<tr><td><code>number</code></td><td>Accepts numeric input with stepper arrows</td></tr>
<tr><td><code>tel</code></td><td>Phone number input (shows phone keyboard on mobile)</td></tr>
<tr><td><code>url</code></td><td>Validates URL format</td></tr>
<tr><td><code>search</code></td><td>Search field with clearable "x" button</td></tr>
<tr><td><code>date</code></td><td>Native date picker (YYYY-MM-DD)</td></tr>
<tr><td><code>time</code></td><td>Time picker (HH:MM)</td></tr>
<tr><td><code>datetime-local</code></td><td>Combined date and time picker</td></tr>
<tr><td><code>month</code></td><td>Month and year picker</td></tr>
<tr><td><code>week</code></td><td>Week and year picker</td></tr>
<tr><td><code>color</code></td><td>Native color picker that returns hex values</td></tr>
<tr><td><code>range</code></td><td>Slider for selecting numeric range</td></tr>
<tr><td><code>file</code></td><td>File upload dialog</td></tr>
<tr><td><code>checkbox</code></td><td>Toggle on/off checkboxes</td></tr>
<tr><td><code>radio</code></td><td>Single selection from grouped options</td></tr>
<tr><td><code>hidden</code></td><td>Invisible field, used to pass data in forms</td></tr>
<tr><td><code>submit</code></td><td>Button that submits the form</td></tr>
<tr><td><code>reset</code></td><td>Button that resets all form fields</td></tr>
<tr><td><code>button</code></td><td>Generic clickable button (no form action)</td></tr>
<tr><td><code>image</code></td><td>Submit button using a custom image</td></tr>
</table>

<div class="tip"><strong>💡 Pro Tip:</strong> Always pair every <code>&lt;input&gt;</code> with a <code>&lt;label&gt;</code> for accessibility. Screen readers rely on the <code>for</code> attribute matching the input's <code>id</code>. Use <code>inputmode</code> to control mobile keyboard layout independently of <code>type</code>.</div>

<div class="info"><strong>📝 Validation Power:</strong> HTML5 inputs provide powerful built-in validation with <code>required</code>, <code>pattern</code>, <code>min</code>/<code>max</code>, and <code>minlength</code>/<code>maxlength</code>. You can style valid/invalid states with <code>:valid</code> and <code>:invalid</code> CSS pseudo-classes — no JavaScript needed!</div>
`+ codeBlock("Input Types Demo", "html", `<form>
  <!-- Text input with label -->
  <label for="username">Username:</label>
  <input type="text" id="username" name="username" 
         placeholder="Enter your name" required minlength="3">

  <!-- Email with validation -->
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" 
         placeholder="you@example.com" required>

  <!-- Password -->
  <label for="pass">Password:</label>
  <input type="password" id="pass" minlength="8">

  <!-- Range slider -->
  <label for="vol">Volume:</label>
  <input type="range" id="vol" min="0" max="100" value="50">

  <!-- Color picker -->
  <label for="color">Favorite Color:</label>
  <input type="color" id="color" value="#6c63ff">

  <!-- Date picker -->
  <label for="bday">Birthday:</label>
  <input type="date" id="bday">

  <!-- File upload -->
  <label for="avatar">Upload Photo:</label>
  <input type="file" id="avatar" accept="image/*">

  <input type="submit" value="Submit Form">
</form>`)
      },
      // 67
      {
        id: "tag-link", title: 'The <link> Tag', badge: "DOCUMENT", emoji: "🔗", content: `
<h3>📌 What is it?</h3>
<p>The <code>&lt;link&gt;</code> tag defines a <strong>relationship between the current document and an external resource</strong>. It lives inside the <code>&lt;head&gt;</code> and is most commonly used to load <strong>CSS stylesheets</strong>, but it's also essential for favicons, font preloading, canonical URLs, web app manifests, and preconnecting to CDNs.</p>

<p>Unlike <code>&lt;a&gt;</code> (which creates clickable hyperlinks), <code>&lt;link&gt;</code> is a <strong>void element</strong> — it has no closing tag and no visible content. It's purely a metadata instruction for the browser.</p>

<h3>📋 All Important Attributes</h3>
<table class="at">
<tr><th>Attribute</th><th>Description</th><th>Example</th></tr>
<tr><td><code>rel</code></td><td>Specifies the relationship type (required)</td><td><code>"stylesheet"</code>, <code>"icon"</code>, <code>"preconnect"</code></td></tr>
<tr><td><code>href</code></td><td>URL of the external resource</td><td><code>"styles.css"</code></td></tr>
<tr><td><code>type</code></td><td>MIME type of the linked resource</td><td><code>"text/css"</code>, <code>"image/svg+xml"</code></td></tr>
<tr><td><code>media</code></td><td>Media query — loads the resource conditionally</td><td><code>"(max-width: 768px)"</code></td></tr>
<tr><td><code>crossorigin</code></td><td>CORS policy for cross-origin resources</td><td><code>"anonymous"</code></td></tr>
<tr><td><code>as</code></td><td>For preloads: tells the browser what the resource type is</td><td><code>"font"</code>, <code>"image"</code>, <code>"script"</code></td></tr>
<tr><td><code>sizes</code></td><td>Icon dimensions for favicons/touch icons</td><td><code>"32x32"</code>, <code>"192x192"</code></td></tr>
<tr><td><code>hreflang</code></td><td>Language of the linked resource</td><td><code>"en"</code>, <code>"hi"</code></td></tr>
</table>

<h3>🔍 Deep Dive — Common <code>rel</code> Values</h3>
<table class="at">
<tr><th><code>rel</code> Value</th><th>Purpose</th></tr>
<tr><td><code>stylesheet</code></td><td>Loads an external CSS file</td></tr>
<tr><td><code>icon</code></td><td>Sets the favicon for the page tab</td></tr>
<tr><td><code>apple-touch-icon</code></td><td>Custom icon for iOS home screen</td></tr>
<tr><td><code>preconnect</code></td><td>Establishes early connections to external servers (performance boost)</td></tr>
<tr><td><code>preload</code></td><td>Tells the browser to download a resource ASAP (critical for fonts)</td></tr>
<tr><td><code>prefetch</code></td><td>Hints the browser to download a resource for future navigation</td></tr>
<tr><td><code>canonical</code></td><td>Tells search engines which URL is the "official" version of a page (SEO)</td></tr>
<tr><td><code>manifest</code></td><td>Points to a Web App Manifest (PWA)</td></tr>
<tr><td><code>alternate</code></td><td>Points to an alternative version (RSS feed, translated page, etc.)</td></tr>
</table>

<div class="tip"><strong>💡 Performance Pro Tip:</strong> Use <code>&lt;link rel="preconnect"&gt;</code> for Google Fonts and CDNs to shave 100-300ms off load times. Pair with <code>&lt;link rel="preload" as="font"&gt;</code> to load critical fonts before the browser discovers them in CSS.</div>

<div class="warn"><strong>⚠️ Common Mistake:</strong> Forgetting the <code>crossorigin</code> attribute when preloading fonts causes the browser to download the font TWICE. Always add <code>crossorigin="anonymous"</code> when preloading cross-origin resources!</div>
`+ codeBlock("Link Tag Examples", "html", ` < !--Load an external CSS stylesheet-- >
      <link rel="stylesheet" href="styles.css">

        <!-- Favicon -->
        <link rel="icon" type="image/svg+xml" href="favicon.svg">

          <!-- Preconnect to Google Fonts (performance boost) -->
          <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

              <!-- Preload a critical font file -->
              <link rel="preload" as="font" type="font/woff2"
                href="/fonts/Inter.woff2" crossorigin="anonymous">

                <!-- Canonical URL for SEO -->
                <link rel="canonical" href="https://example.com/page">

                  <!-- Responsive CSS: only load on mobile -->
                  <link rel="stylesheet" href="mobile.css"
                    media="(max-width: 768px)">`)
      },
      // 68
      {
        id: "tag-script", title: 'The <script> Tag', badge: "DOCUMENT", emoji: "⚡", content: `
                      <h3>📌 What is it?</h3>
                      <p>The <code>&lt;script&gt;</code> tag is the <strong>gateway to JavaScript</strong> in HTML. It either contains inline JavaScript code or points to an external <code>.js</code> file. It is arguably the most powerful tag in HTML because it can dynamically manipulate the entire DOM, handle user events, fetch data from servers, and transform a static page into a full web application.</p>

                      <h3>📋 All Important Attributes</h3>
                      <table class="at">
                        <tr><th>Attribute</th><th>Description</th><th>Example</th></tr>
                        <tr><td><code>src</code></td><td>URL of the external JavaScript file</td><td><code>"app.js"</code></td></tr>
                        <tr><td><code>defer</code></td><td>Downloads in parallel, executes AFTER the HTML is fully parsed</td><td>(boolean)</td></tr>
                        <tr><td><code>async</code></td><td>Downloads in parallel, executes AS SOON as it's ready</td><td>(boolean)</td></tr>
                        <tr><td><code>type</code></td><td>MIME type or module indicator</td><td><code>"module"</code>, <code>"application/ld+json"</code></td></tr>
                        <tr><td><code>nomodule</code></td><td>Fallback for browsers that don't support ES modules</td><td>(boolean)</td></tr>
                        <tr><td><code>crossorigin</code></td><td>CORS settings for cross-origin scripts</td><td><code>"anonymous"</code></td></tr>
                        <tr><td><code>integrity</code></td><td>Subresource Integrity hash to verify the file hasn't been tampered with</td><td><code>"sha384-..."</code></td></tr>
                        <tr><td><code>referrerpolicy</code></td><td>Controls how much referrer info is sent with the request</td><td><code>"no-referrer"</code></td></tr>
                      </table>

                      <h3>🔍 Deep Dive — <code>defer</code> vs <code>async</code> vs Default</h3>
                      <table class="at">
                        <tr><th>Mode</th><th>Download</th><th>Execution</th><th>Order Preserved?</th><th>Best For</th></tr>
                        <tr><td><strong>Default</strong> (no attribute)</td><td>Blocks HTML parsing</td><td>Immediately</td><td>Yes</td><td>Inline scripts that must run now</td></tr>
                        <tr><td><code>defer</code></td><td>Parallel</td><td>After DOM is ready</td><td>Yes</td><td>Your main app scripts</td></tr>
                        <tr><td><code>async</code></td><td>Parallel</td><td>As soon as downloaded</td><td>No</td><td>Analytics, ads, 3rd-party widgets</td></tr>
                        <tr><td><code>type="module"</code></td><td>Parallel (deferred by default)</td><td>After DOM is ready</td><td>Yes</td><td>Modern ES6+ modules</td></tr>
                      </table>

                      <h3>🛡️ Security: Subresource Integrity (SRI)</h3>
                      <p>When loading scripts from CDNs, always use the <code>integrity</code> attribute. This cryptographic hash ensures the file hasn't been tampered with by a malicious attacker:</p>

                      <div class="tip"><strong>💡 Pro Tip:</strong> Always place <code>&lt;script defer&gt;</code> in the <code>&lt;head&gt;</code> — not at the bottom of <code>&lt;body&gt;</code>. With <code>defer</code>, the browser starts downloading the script immediately while still parsing the HTML. Placing it at the end of body actually makes it slower because the download doesn't start until the parser reaches it!</div>

                      <div class="warn"><strong>⚠️ Critical Rule:</strong> Never use both <code>defer</code> and <code>async</code> on the same tag. If both are present, <code>async</code> wins and <code>defer</code> is ignored in modern browsers.</div>
                      `+ codeBlock("Script Loading Demo", "html", `<!-- Try this interactive script demo! -->
<p id="scriptDemo" style="padding:12px; background:#1a1a2e; border-radius:8px;">Click the button below</p>

<button onclick="document.getElementById('scriptDemo').innerHTML='<strong>Script ran at: '+new Date().toLocaleTimeString()+'</strong>'" style="padding:8px 16px; background:#6c63ff; color:white; border:none; border-radius:6px; cursor:pointer; margin-top:8px;">
  Run Script
</button>

<!-- SCRIPT LOADING STRATEGIES: -->
<!-- defer: Downloads in parallel, runs after DOM ready -->
<!-- async: Downloads in parallel, runs immediately -->
<!-- type=module: ES Modules, deferred by default -->
<!-- Best practice: Always use defer in the head -->`)
      },
      // 69
      {
        id: "tag-style", title: 'The <style> Tag', badge: "DOCUMENT", emoji: "🎨", content: `
                        <h3>📌 What is it?</h3>
                        <p>The <code>&lt;style&gt;</code> tag allows you to write <strong>CSS directly inside your HTML document</strong>. It's placed in the <code>&lt;head&gt;</code> (or sometimes in the <code>&lt;body&gt;</code> for scoped/component styles) and applies styling rules to the page without needing an external <code>.css</code> file.</p>

                        <p>While external stylesheets are preferred for large projects, the <code>&lt;style&gt;</code> tag is crucial for <strong>critical CSS</strong> (above-the-fold styles that must load instantly), <strong>single-file components</strong>, and <strong>email templates</strong> where external files aren't supported.</p>

                        <h3>📋 Attributes</h3>
                        <table class="at">
                          <tr><th>Attribute</th><th>Description</th><th>Example</th></tr>
                          <tr><td><code>media</code></td><td>Applies styles only when a media query matches</td><td><code>"(max-width: 768px)"</code>, <code>"print"</code></td></tr>
                          <tr><td><code>type</code></td><td>MIME type (optional in HTML5, defaults to <code>text/css</code>)</td><td><code>"text/css"</code></td></tr>
                          <tr><td><code>nonce</code></td><td>Cryptographic nonce for Content Security Policy (CSP)</td><td><code>"abc123..."</code></td></tr>
                        </table>

                        <h3>🔍 Deep Dive — When to Use <code>&lt;style&gt;</code> vs External CSS</h3>
                        <table class="at">
                          <tr><th>Use Case</th><th>Approach</th><th>Why</th></tr>
                          <tr><td>Large website with many pages</td><td>External <code>.css</code> file</td><td>Browser caches it across page loads</td></tr>
                          <tr><td>Critical "above the fold" styles</td><td>Inline <code>&lt;style&gt;</code> in <code>&lt;head&gt;</code></td><td>Eliminates render-blocking request, instant first paint</td></tr>
                          <tr><td>Single-page self-contained documents</td><td>Inline <code>&lt;style&gt;</code></td><td>Maximum portability — no external dependencies</td></tr>
                          <tr><td>HTML email templates</td><td>Inline styles + <code>&lt;style&gt;</code></td><td>Email clients strip external CSS links</td></tr>
                          <tr><td>Web Components (Shadow DOM)</td><td><code>&lt;style&gt;</code> inside shadow root</td><td>Styles are encapsulated and won't leak</td></tr>
                        </table>

                        <h3>🚀 Performance: Critical CSS Strategy</h3>
                        <p>For <strong>100/100 Lighthouse Performance</strong>, extract your above-the-fold CSS and inline it in a <code>&lt;style&gt;</code> tag in the <code>&lt;head&gt;</code>. Then load the rest of your CSS asynchronously:</p>

                        <div class="tip"><strong>💡 Pro Tip:</strong> Use the <code>media</code> attribute to conditionally load print styles: <code>&lt;style media="print"&gt;</code>. This tells the browser these styles only apply when printing, so it won't render-block the main page load.</div>

                        <div class="info"><strong>📝 CSP Note:</strong> If your site uses Content Security Policy headers, inline <code>&lt;style&gt;</code> tags will be blocked unless you provide a <code>nonce</code> attribute or add a hash to your CSP policy. This is a security measure to prevent CSS injection attacks.</div>
                        `+ codeBlock("Style Tag Examples", "html", `<!-- 1. Critical CSS inlined in head -->
                        <style>
                          body {
                            font - family: 'Inter', sans-serif;
                          margin: 0;
                          background: #0a0a1a;
                          color: #e0e0e0;
  }
                          .hero {padding: 4rem 2rem; text-align: center; }
                        </style>

                        <!-- 2. Print-only styles -->
                        <style media="print">
                          nav, footer, .sidebar {display: none; }
                          body {font - size: 12pt; color: #000; }
                        </style>

                        <!-- 3. Dark mode styles -->
                        <style>
                          @media (prefers-color-scheme: dark) {
    :root {--bg: #111; --text: #eee; }
  }
                          @media (prefers-color-scheme: light) {
    :root {--bg: #fff; --text: #111; }
  }
                        </style>`)
      },
      // 70
      {
        id: "tag-hgroup", title: 'The <hgroup> Tag', badge: "SEMANTIC", emoji: "📑", content: `
                          <h3>📌 What is it?</h3>
                          <p>The <code>&lt;hgroup&gt;</code> tag groups a <strong>heading with its related sub-headings or taglines</strong> into a single semantic unit. It tells the browser and assistive technologies that a subtitle, tagline, or alternative heading is <em>subordinate</em> to the primary heading and should not create its own entry in the document outline.</p>

                          <p>After being removed from the HTML5 spec in 2013, the <code>&lt;hgroup&gt;</code> tag was <strong>officially re-added to the HTML Living Standard</strong> in 2022 with updated semantics. It is now supported by all modern browsers.</p>

                          <h3>📋 Rules &amp; Behavior</h3>
                          <ul>
                            <li>An <code>&lt;hgroup&gt;</code> must contain at least one heading element (<code>h1</code>–<code>h6</code>).</li>
                            <li>It can also contain <code>&lt;p&gt;</code> elements (for subtitles/taglines) — this is the new 2022 spec behavior.</li>
                            <li>Only the <strong>highest-ranked heading</strong> inside the <code>&lt;hgroup&gt;</code> contributes to the document outline.</li>
                            <li>Any <code>&lt;p&gt;</code> elements inside are treated as metadata — they won't appear as separate headings in the outline.</li>
                          </ul>

                          <h3>🔍 Deep Dive — Why This Matters</h3>
                          <p><strong>Without <code>&lt;hgroup&gt;</code></strong>, if you write a subtitle as an <code>&lt;h2&gt;</code>, screen readers announce it as a separate section heading, polluting the document structure. For example:</p>
                          <ul>
                            <li><strong>Bad:</strong> <code>&lt;h1&gt;My Blog&lt;/h1&gt;&lt;h2&gt;A developer's journal&lt;/h2&gt;</code> — Screen readers see two separate headings.</li>
                            <li><strong>Good:</strong> Wrapping them in <code>&lt;hgroup&gt;</code> tells screen readers the <code>&lt;p&gt;</code> is a subtitle, not a section break.</li>
                          </ul>

                          <h3>✅ Correct Modern Usage (2022+ spec)</h3>
                          <p>The modern spec allows <code>&lt;p&gt;</code> inside <code>&lt;hgroup&gt;</code> for subtitles:</p>

                          <div class="tip"><strong>💡 Pro Tip:</strong> Use <code>&lt;hgroup&gt;</code> in blog post headers, product cards, and hero sections where a heading + tagline pattern appears. It dramatically improves your document outline and SEO by preventing subtitle pollution in heading hierarchy.</div>

                          <div class="info"><strong>📝 Accessibility Win:</strong> Screen readers like NVDA and VoiceOver now correctly interpret <code>&lt;hgroup&gt;</code> — they announce the primary heading and skip the subtitle in navigation mode, giving users a cleaner "table of contents" experience.</div>
                          `+ codeBlock("Hgroup Examples", "html", `<!-- Modern hgroup with subtitle -->
                          <hgroup>
                            <h1>Deep Dive into HTML Tags</h1>
                            <p>A comprehensive reference guide by Sanskar Developer</p>
                          </hgroup>

                          <!-- Blog post header -->
                          <article>
                            <hgroup>
                              <h2>Understanding Semantic HTML</h2>
                              <p>Published on April 25, 2026 — 8 min read</p>
                            </hgroup>
                            <p>Semantic HTML is the foundation of accessible web development...</p>
                          </article>

                          <!-- Product card -->
                          <hgroup>
                            <h3>Premium Plan</h3>
                            <p>Best for teams and professionals</p>
                          </hgroup>`)
      },
      // 71
      {
        id: "tag-headings", title: 'Heading Tags: <h1> through <h6>', badge: "SEMANTIC", emoji: "🏷️", content: `
                              <h3>📌 What are they?</h3>
                              <p>The <code>&lt;h1&gt;</code> through <code>&lt;h6&gt;</code> tags define <strong>section headings</strong> in a document. <code>&lt;h1&gt;</code> is the most important (highest level), and <code>&lt;h6&gt;</code> is the least. They create the <strong>document outline</strong> — the invisible "table of contents" used by search engines and screen readers to understand your page structure.</p>

                              <h3>📋 The Hierarchy</h3>
                              <table class="at">
                                <tr><th>Tag</th><th>Level</th><th>Typical Use</th><th>Font Size (default)</th></tr>
                                <tr><td><code>&lt;h1&gt;</code></td><td>1 (highest)</td><td>Page title / main topic</td><td>2em (32px)</td></tr>
                                <tr><td><code>&lt;h2&gt;</code></td><td>2</td><td>Major section headings</td><td>1.5em (24px)</td></tr>
                                <tr><td><code>&lt;h3&gt;</code></td><td>3</td><td>Sub-sections within h2</td><td>1.17em (18.7px)</td></tr>
                                <tr><td><code>&lt;h4&gt;</code></td><td>4</td><td>Sub-sub-sections</td><td>1em (16px)</td></tr>
                                <tr><td><code>&lt;h5&gt;</code></td><td>5</td><td>Fine detail sections</td><td>0.83em (13.3px)</td></tr>
                                <tr><td><code>&lt;h6&gt;</code></td><td>6 (lowest)</td><td>Rarely used</td><td>0.67em (10.7px)</td></tr>
                              </table>

                              <h3>🔍 Deep Dive — SEO & Accessibility Rules</h3>
                              <ul>
                                <li><strong>Only ONE <code>&lt;h1&gt;</code> per page</strong> — Google and screen readers treat it as the page's primary topic. Multiple h1s dilute your SEO.</li>
                                <li><strong>Never skip levels</strong> — Don't jump from <code>&lt;h2&gt;</code> to <code>&lt;h4&gt;</code>. Screen readers announce "heading level 4" and users expect a logical hierarchy.</li>
                                <li><strong>Don't use headings for styling</strong> — If you want big bold text, use CSS. Headings carry <em>semantic meaning</em>, not just visual weight.</li>
                                <li><strong>Each <code>&lt;section&gt;</code> can restart the hierarchy</strong> — Inside a <code>&lt;section&gt;</code> or <code>&lt;article&gt;</code>, you can use <code>&lt;h2&gt;</code> as the top-level heading.</li>
                              </ul>

                              <div class="warn"><strong>⚠️ Common Mistake:</strong> Using <code>&lt;h1&gt;</code> for your site logo, navigation title, AND page title. The <code>&lt;h1&gt;</code> should be reserved for the single most important heading on the page — usually the article title or main content heading.</div>

                              <div class="tip"><strong>💡 Pro Tip:</strong> Use browser DevTools → Accessibility tab → "Heading order" to audit your heading hierarchy. Tools like axe and Lighthouse will flag skipped heading levels as accessibility violations.</div>
                              `+ codeBlock("Heading Hierarchy", "html", `<h1>Page Title (only one per page)</h1>

                              <section>
                                <h2>Major Section</h2>
                                <p>Content for this section...</p>

                                <h3>Sub-section</h3>
                                <p>More specific content...</p>

                                <h4>Detail Section</h4>
                                <p>Even more specific...</p>
                              </section>

                              <section>
                                <h2>Another Major Section</h2>
                                <p>Each section can have its own heading hierarchy.</p>
                              </section>`)
      },
      // 72
      {
        id: "tag-emphasis", title: 'Semantic Text: <em>, <strong>, <i>, <b>', badge: "TEXT", emoji: "✍️", content: `
                                  <h3>📌 What are they?</h3>
                                  <p>These four tags all make text look different, but they carry <strong>very different semantic meanings</strong>. Understanding the distinction between <em>semantic</em> (meaning-based) and <em>presentational</em> (visual-only) tags is fundamental to writing professional HTML.</p>

                                  <h3>📋 The Critical Difference</h3>
                                  <table class="at">
                                    <tr><th>Tag</th><th>Visual Effect</th><th>Semantic Meaning</th><th>Screen Reader Behavior</th></tr>
                                    <tr><td><code>&lt;em&gt;</code></td><td><em>Italic</em></td><td><strong>Stress emphasis</strong> — changes the meaning of the sentence</td><td>Announces with vocal stress/emphasis</td></tr>
                                    <tr><td><code>&lt;strong&gt;</code></td><td><strong>Bold</strong></td><td><strong>Strong importance</strong> — critical information</td><td>Announces with strong emphasis</td></tr>
                                    <tr><td><code>&lt;i&gt;</code></td><td><i>Italic</i></td><td>Alternative voice — technical terms, foreign words, thoughts</td><td>No change in voice (purely visual)</td></tr>
                                    <tr><td><code>&lt;b&gt;</code></td><td><b>Bold</b></td><td>Attention — keywords, product names (no extra importance)</td><td>No change in voice (purely visual)</td></tr>
                                  </table>

                                  <h3>🔍 Deep Dive — When Emphasis Changes Meaning</h3>
                                  <p>Consider: "I <em>never</em> said she stole my money." vs "I never said <em>she</em> stole my money." — The <code>&lt;em&gt;</code> tag shifts the stress, completely changing which word is emphasized and therefore the sentence's meaning. This is why <code>&lt;em&gt;</code> exists — it carries linguistic meaning that <code>&lt;i&gt;</code> does not.</p>

                                  <h3>✅ When to Use Each</h3>
                                  <ul>
                                    <li><code>&lt;em&gt;</code> — "You <em>must</em> submit by Friday" (stressing urgency)</li>
                                    <li><code>&lt;strong&gt;</code> — "<strong>Warning:</strong> Do not delete this file" (critical importance)</li>
                                    <li><code>&lt;i&gt;</code> — "The word <i>sushi</i> comes from Japanese" (foreign term, no emphasis)</li>
                                    <li><code>&lt;b&gt;</code> — "Try our <b>Premium Plan</b> today" (visual attention, product name)</li>
                                  </ul>

                                  <div class="tip"><strong>💡 Pro Tip:</strong> You can nest <code>&lt;em&gt;</code> inside <code>&lt;strong&gt;</code> for maximum emphasis: <code>&lt;strong&gt;&lt;em&gt;CRITICAL&lt;/em&gt;&lt;/strong&gt;</code>. Screen readers will announce this with both strong and stressed emphasis.</div>

                                  <div class="info"><strong>📝 SEO Note:</strong> Google does give slightly more weight to text inside <code>&lt;strong&gt;</code> and <code>&lt;em&gt;</code> tags compared to <code>&lt;b&gt;</code> and <code>&lt;i&gt;</code>. Use semantic tags for keywords you want search engines to notice.</div>
                                  `+ codeBlock("Semantic Text Examples", "html", `<!-- em = stress emphasis (changes meaning) -->
                                  <p>I <em>never</em> said she stole my money.</p>
                                  <p>I never said <em>she</em> stole my money.</p>

                                  <!-- strong = important info -->
                                  <p><strong>Warning:</strong> Do not delete system files.</p>

                                  <!-- i = foreign terms, technical terms -->
                                  <p>The French word <i lang="fr">bonjour</i> means hello.</p>

                                  <!-- b = visual attention, no extra importance -->
                                  <p>Try our <b>Premium Plan</b> for unlimited access.</p>

                                  <!-- Nesting for maximum emphasis -->
                                  <p><strong><em>CRITICAL:</em></strong> Back up your data now!</p>`)
      },
      // 73
      {
        id: "tag-menu", title: 'The <menu> Tag', badge: "SEMANTIC", emoji: "📋", content: `
                                    <h3>📌 What is it?</h3>
                                    <p>The <code>&lt;menu&gt;</code> tag is a <strong>semantic alternative to <code>&lt;ul&gt;</code></strong> specifically designed for <strong>interactive toolbar commands and action lists</strong>. While <code>&lt;ul&gt;</code> represents a generic unordered list of items, <code>&lt;menu&gt;</code> explicitly signals to browsers and assistive technologies that its children are <em>actionable commands</em> — like toolbar buttons, context menu actions, or form controls.</p>

                                    <h3>📋 Key Differences from <code>&lt;ul&gt;</code></h3>
                                    <table class="at">
                                      <tr><th>Feature</th><th><code>&lt;ul&gt;</code></th><th><code>&lt;menu&gt;</code></th></tr>
                                      <tr><td>Purpose</td><td>Generic list of items</td><td>List of <strong>interactive commands/actions</strong></td></tr>
                                      <tr><td>Children</td><td><code>&lt;li&gt;</code> with any content</td><td><code>&lt;li&gt;</code> containing buttons, links, or controls</td></tr>
                                      <tr><td>ARIA Role</td><td><code>list</code></td><td><code>list</code> (same default, but semantic intent differs)</td></tr>
                                      <tr><td>Visual Default</td><td>Bulleted list</td><td>Same as <code>&lt;ul&gt;</code> (must be styled with CSS)</td></tr>
                                      <tr><td>Use Case</td><td>Navigation links, feature lists, content</td><td>Toolbars, action panels, edit controls</td></tr>
                                    </table>

                                    <h3>🔍 Deep Dive — History & Modern Spec</h3>
                                    <ul>
                                      <li>In HTML4, <code>&lt;menu&gt;</code> was deprecated and rarely used.</li>
                                      <li>HTML5 attempted to repurpose it for context menus (<code>type="context"</code>), but browsers never implemented it.</li>
                                      <li>The <strong>current HTML Living Standard</strong> defines <code>&lt;menu&gt;</code> as a semantic wrapper for toolbars — functionally identical to <code>&lt;ul&gt;</code> but with clearer intent.</li>
                                    </ul>

                                    <div class="tip"><strong>💡 Pro Tip:</strong> Use <code>&lt;menu&gt;</code> for action toolbars (edit, delete, share buttons), formatting bars (bold, italic, underline), and control panels. Use <code>&lt;ul&gt;</code> for content lists like features, ingredients, or navigation links.</div>

                                    <div class="warn"><strong>⚠️ Browser Support:</strong> All modern browsers support <code>&lt;menu&gt;</code>, but it renders identically to <code>&lt;ul&gt;</code>. The value is purely semantic — it helps developers and screen readers understand the <em>intent</em> of the list.</div>
                                    `+ codeBlock("Menu Tag - Toolbar", "html", `<!-- Toolbar using menu -->
                                    <menu style="display:flex; gap:8px; list-style:none; padding:8px; background:#1a1a2e; border-radius:8px;">
                                      <li><button onclick="document.execCommand('bold')">Bold</button></li>
                                      <li><button onclick="document.execCommand('italic')">Italic</button></li>
                                      <li><button onclick="document.execCommand('underline')">Underline</button></li>
                                      <li><button onclick="alert('Saved!')">Save</button></li>
                                    </menu>

                                    <!-- Editable area to test the toolbar -->
                                    <div contenteditable="true"
                                      style="border:1px solid #444; padding:12px; margin-top:8px; border-radius:8px; min-height:80px;">
                                      Click the toolbar buttons above, then type here!
                                    </div>`)
      },
      // 74
      {
        id: "tag-table-sections", title: 'Table Sections: <thead>, <tbody>, <tfoot>, <caption>', badge: "TABLE", emoji: "📊", content: `
                                        <h3>📌 What are they?</h3>
                                        <p>These four tags provide <strong>semantic structure inside a <code>&lt;table&gt;</code></strong>. While you can build a table with just <code>&lt;tr&gt;</code> and <code>&lt;td&gt;</code>, adding these section tags transforms a flat data grid into a <em>professionally structured</em> data table with a header, body, footer, and caption — which is critical for accessibility, printability, and styling.</p>

                                        <h3>📋 All Four Elements</h3>
                                        <table class="at">
                                          <tr><th>Tag</th><th>Purpose</th><th>Required?</th><th>Behavior</th></tr>
                                          <tr><td><code>&lt;caption&gt;</code></td><td>Table title/description</td><td>Recommended</td><td>Displayed above the table; announced by screen readers as the table's name</td></tr>
                                          <tr><td><code>&lt;thead&gt;</code></td><td>Header row group</td><td>Recommended</td><td>Contains column headers (<code>&lt;th&gt;</code>); repeats on every printed page</td></tr>
                                          <tr><td><code>&lt;tbody&gt;</code></td><td>Main data rows</td><td>Implicit</td><td>Contains the actual data rows; can have multiple <code>&lt;tbody&gt;</code> sections</td></tr>
                                          <tr><td><code>&lt;tfoot&gt;</code></td><td>Footer/summary rows</td><td>Optional</td><td>Totals, averages, or summary data; repeats on every printed page</td></tr>
                                        </table>

                                        <h3>🔍 Deep Dive — Why This Matters</h3>
                                        <ul>
                                          <li><strong>Print Layout:</strong> When a table spans multiple pages, browsers automatically repeat <code>&lt;thead&gt;</code> and <code>&lt;tfoot&gt;</code> on every printed page, so readers always see column headers.</li>
                                          <li><strong>Accessibility:</strong> Screen readers use <code>&lt;thead&gt;</code> to associate column headers with data cells. Without it, screen readers cannot announce "Column: Price, Value: $29.99".</li>
                                          <li><strong>CSS Styling:</strong> You can style each section differently — e.g., sticky headers with <code>thead {position: sticky; top: 0; }</code>.</li>
                                          <li><strong>JavaScript:</strong> <code>table.tBodies</code>, <code>table.tHead</code>, and <code>table.tFoot</code> give direct DOM access to each section.</li>
                                        </ul>

                                        <h3>📐 Correct Ordering</h3>
                                        <p>The order in your HTML should be: <code>&lt;caption&gt;</code> → <code>&lt;thead&gt;</code> → <code>&lt;tbody&gt;</code> → <code>&lt;tfoot&gt;</code>. Historically, <code>&lt;tfoot&gt;</code> could appear before <code>&lt;tbody&gt;</code> (HTML4), but the modern spec recommends placing it after.</p>

                                        <div class="tip"><strong>💡 Pro Tip:</strong> Use <code>scope="col"</code> on <code>&lt;th&gt;</code> inside <code>&lt;thead&gt;</code> and <code>scope="row"</code> on row headers. This explicitly links headers to their data cells for screen readers — a Lighthouse accessibility requirement.</div>

                                        <div class="warn"><strong>⚠️ Common Mistake:</strong> Using <code>&lt;td&gt;</code> instead of <code>&lt;th&gt;</code> for header cells. The <code>&lt;th&gt;</code> element has built-in semantics that <code>&lt;td&gt;</code> lacks — screen readers will not recognize <code>&lt;td&gt;</code> as a column header even if it's inside <code>&lt;thead&gt;</code>.</div>
                                        `+ codeBlock("Complete Table Structure", "html", `<table border="1" style="border-collapse:collapse; width:100%;">
                                          <caption>Q1 2026 Sales Report</caption>
                                          <thead style="background:#6c63ff; color:white;">
                                            <tr>
                                              <th scope="col">Product</th>
                                              <th scope="col">Units</th>
                                              <th scope="col">Revenue</th>
                                            </tr>
                                          </thead>
                                          <tbody>
                                            <tr><td>Widget A</td><td>1,200</td><td>$24,000</td></tr>
                                            <tr><td>Widget B</td><td>800</td><td>$16,000</td></tr>
                                            <tr><td>Widget C</td><td>450</td><td>$13,500</td></tr>
                                          </tbody>
                                          <tfoot style="background:#222; font-weight:bold;">
                                            <tr><td>Total</td><td>2,450</td><td>$53,500</td></tr>
                                          </tfoot>
                                        </table>`)
      },
      // 75
      {
        id: "tag-paragraph", title: 'The <p> (Paragraph) Tag', badge: "TEXT", emoji: "📄", content: `
                                          <h3>📌 What is it?</h3>
                                          <p>The <code>&lt;p&gt;</code> tag defines a <strong>paragraph of text</strong> — the most fundamental building block of written content on the web. While it seems simple, the <code>&lt;p&gt;</code> tag has important rules about what it can and cannot contain, and understanding its behavior is essential for writing valid, accessible HTML.</p>

                                          <h3>📋 Rules & Behavior</h3>
                                          <table class="at">
                                            <tr><th>Property</th><th>Value</th></tr>
                                            <tr><td>Display</td><td><code>block</code> (takes full width, adds vertical spacing)</td></tr>
                                            <tr><td>Default Margins</td><td><code>1em</code> top and bottom (creates spacing between paragraphs)</td></tr>
                                            <tr><td>Allowed Children</td><td><strong>Only phrasing (inline) content</strong> — text, <code>&lt;a&gt;</code>, <code>&lt;em&gt;</code>, <code>&lt;strong&gt;</code>, <code>&lt;span&gt;</code>, <code>&lt;img&gt;</code>, <code>&lt;br&gt;</code>, etc.</td></tr>
                                            <tr><td>Forbidden Children</td><td><strong>No block elements</strong> — no <code>&lt;div&gt;</code>, <code>&lt;h1&gt;</code>-<code>&lt;h6&gt;</code>, <code>&lt;ul&gt;</code>, <code>&lt;table&gt;</code>, <code>&lt;p&gt;</code>, <code>&lt;section&gt;</code></td></tr>
                                            <tr><td>Auto-Closing</td><td>The closing <code>&lt;/p&gt;</code> is optional — a new block element automatically closes the previous <code>&lt;p&gt;</code></td></tr>
                                          </table>

                                          <h3>🔍 Deep Dive — The Auto-Closing Trap</h3>
                                          <p>HTML has a surprising rule: if the parser encounters a block element inside a <code>&lt;p&gt;</code>, it <em>automatically closes</em> the paragraph before the block element. This means:</p>
                                          <ul>
                                            <li><code>&lt;p&gt;Text &lt;div&gt;box&lt;/div&gt;&lt;/p&gt;</code> actually becomes: <code>&lt;p&gt;Text&lt;/p&gt;&lt;div&gt;box&lt;/div&gt;&lt;/p&gt;</code> — creating an orphan <code>&lt;/p&gt;</code> that becomes an empty paragraph!</li>
                                            <li>This is a common source of mysterious extra whitespace in layouts.</li>
                                          </ul>

                                          <h3>🎨 CSS Typography Best Practices</h3>
                                          <ul>
                                            <li>Set <code>max-width: 65ch</code> for optimal reading comfort (65 characters per line).</li>
                                            <li>Use <code>line-height: 1.6</code> to <code>1.8</code> for body text readability.</li>
                                            <li>Use <code>margin-bottom</code> instead of <code>&lt;br&gt;&lt;br&gt;</code> for paragraph spacing.</li>
                                            <li>Use <code>::first-letter</code> and <code>::first-line</code> pseudo-elements for drop-cap and lead-in styling.</li>
                                          </ul>

                                          <div class="tip"><strong>💡 Pro Tip:</strong> Never use empty <code>&lt;p&gt;&lt;/p&gt;</code> or <code>&lt;p&gt;&amp;nbsp;&lt;/p&gt;</code> for spacing. Use CSS <code>margin</code> or <code>gap</code> instead. Empty paragraphs are announced by screen readers as "blank", confusing visually impaired users.</div>

                                          <div class="info"><strong>📝 Accessibility Note:</strong> Screen readers let users navigate by paragraph (NVDA: <kbd>Ctrl+Down Arrow</kbd>). Well-structured paragraphs with clear topic sentences dramatically improve the reading experience for visually impaired users.</div>
                                          `+ codeBlock("Paragraph Best Practices", "html", `<!-- Good: clean paragraphs -->
                                          <p>Semantic HTML gives your content <em>meaning</em>,
                                            not just appearance. Screen readers use paragraph
                                            structure to help users navigate long documents.</p>

                                          <p>Each paragraph should focus on a single idea.
                                            This makes your content scannable and accessible.</p>

                                          <!-- CSS typography for readability -->
                                          <style>
                                            .readable {
                                              max - width: 65ch;        /* optimal line length */
                                            line-height: 1.7;       /* comfortable spacing */
                                            font-size: 1.125rem;    /* slightly larger base */
  }
                                            .readable::first-letter {
                                              font - size: 2.5em;       /* drop cap effect */
                                            font-weight: bold;
                                            color: #6c63ff;
                                            float: left;
                                            margin-right: 8px;
  }
                                          </style>
                                          <p class="readable">This paragraph demonstrates a drop-cap
                                            effect using the ::first-letter pseudo-element. This classic
                                            typographic technique draws the reader's eye and adds a
                                            professional touch to long-form content.</p>`)
      },
      // 76
      {
        id: "tag-nav", title: 'The <nav> Tag', badge: "SEMANTIC", emoji: "🧭", content: `
                                            <h3>📌 What is it?</h3>
                                            <p>The <code>&lt;nav&gt;</code> element represents a <strong>section of navigation links</strong>. It tells browsers and screen readers "this block contains links for navigating the site or page." Not every group of links needs a <code>&lt;nav&gt;</code> — it's reserved for <em>major navigation blocks</em> like the primary menu, breadcrumbs, table of contents, or pagination.</p>

                                            <h3>📋 When to Use vs NOT Use</h3>
                                            <table class="at">
                                              <tr><th>Use <code>&lt;nav&gt;</code></th><th>Don't Use <code>&lt;nav&gt;</code></th></tr>
                                              <tr><td>Primary site navigation (header menu)</td><td>A list of links in a blog post body</td></tr>
                                              <tr><td>Breadcrumb trail</td><td>Social media icon links in the footer</td></tr>
                                              <tr><td>Table of contents / page index</td><td>A "related articles" sidebar widget</td></tr>
                                              <tr><td>Pagination (Previous / 1 / 2 / Next)</td><td>Footer quick links (use <code>&lt;footer&gt;</code> instead)</td></tr>
                                              <tr><td>Sidebar tag cloud for filtering</td><td>A single "Back to top" link</td></tr>
                                            </table>

                                            <h3>🔍 Deep Dive — Multiple <code>&lt;nav&gt;</code> Elements</h3>
                                            <p>A page can have <strong>multiple <code>&lt;nav&gt;</code> elements</strong>. When you do, use <code>aria-label</code> to distinguish them for screen readers:</p>
                                            <ul>
                                              <li><code>&lt;nav aria-label="Primary"&gt;</code> — Main site menu</li>
                                              <li><code>&lt;nav aria-label="Breadcrumb"&gt;</code> — Breadcrumb trail</li>
                                              <li><code>&lt;nav aria-label="Table of Contents"&gt;</code> — Page index</li>
                                            </ul>

                                            <div class="tip"><strong>💡 Pro Tip:</strong> Screen reader users can press a shortcut key to jump between <code>&lt;nav&gt;</code> landmarks (NVDA: <kbd>D</kbd>, VoiceOver: rotor). Using <code>&lt;nav&gt;</code> correctly lets them skip directly to navigation without tabbing through all content.</div>

                                            <div class="warn"><strong>⚠️ Common Mistake:</strong> Wrapping <em>every</em> group of links in <code>&lt;nav&gt;</code>. This creates "landmark pollution" — too many landmarks makes screen reader navigation harder, not easier. Reserve <code>&lt;nav&gt;</code> for truly important navigation sections.</div>
                                            `+ codeBlock("Nav Examples", "html", `<!-- Primary site navigation -->
                                            <nav aria-label="Primary">
                                              <ul style="display:flex; gap:16px; list-style:none; padding:12px; background:#1a1a2e; border-radius:8px;">
                                                <li><a href="#home" style="color:#6c63ff;">Home</a></li>
                                                <li><a href="#about" style="color:#6c63ff;">About</a></li>
                                                <li><a href="#blog" style="color:#6c63ff;">Blog</a></li>
                                                <li><a href="#contact" style="color:#6c63ff;">Contact</a></li>
                                              </ul>
                                            </nav>

                                            <!-- Breadcrumb navigation -->
                                            <nav aria-label="Breadcrumb">
                                              <ol style="display:flex; gap:8px; list-style:none; padding:0; font-size:0.9em;">
                                                <li><a href="#">Home</a> &raquo;</li>
                                                <li><a href="#">Blog</a> &raquo;</li>
                                                <li aria-current="page"><strong>This Article</strong></li>
                                              </ol>
                                            </nav>`)
      },
      // 77
      {
        id: "tag-article-section", title: '<article> vs <section> — When to Use Which', badge: "SEMANTIC", emoji: "📰", content: `
                                                <h3>📌 What are they?</h3>
                                                <p><code>&lt;article&gt;</code> and <code>&lt;section&gt;</code> are both semantic containers, but they serve <strong>fundamentally different purposes</strong>. Confusing them is one of the most common mistakes in modern HTML.</p>

                                                <h3>📋 The Key Difference</h3>
                                                <table class="at">
                                                  <tr><th>Feature</th><th><code>&lt;article&gt;</code></th><th><code>&lt;section&gt;</code></th></tr>
                                                  <tr><td><strong>Definition</strong></td><td>Self-contained, independently distributable content</td><td>A thematic grouping of content within a page</td></tr>
                                                  <tr><td><strong>Standalone Test</strong></td><td>Makes sense if extracted and placed on another site (RSS feed, syndication)</td><td>Only makes sense <em>within</em> the context of the current page</td></tr>
                                                  <tr><td><strong>Examples</strong></td><td>Blog post, news article, product card, user comment, forum post, tweet embed</td><td>"Features" section, "Pricing" section, chapter of a tutorial</td></tr>
                                                  <tr><td><strong>Heading Required?</strong></td><td>Should have a heading (article title)</td><td>Should have a heading (section title)</td></tr>
                                                  <tr><td><strong>Nesting</strong></td><td>Can contain <code>&lt;section&gt;</code> (article chapters) and other <code>&lt;article&gt;</code> (comments)</td><td>Can contain <code>&lt;article&gt;</code> (list of blog posts in a section)</td></tr>
                                                  <tr><td><strong>ARIA Role</strong></td><td><code>article</code></td><td><code>region</code> (only if it has an accessible name)</td></tr>
                                                </table>

                                                <h3>🔍 Deep Dive — The Syndication Test</h3>
                                                <p>Ask yourself: <em>"If I copy-paste this entire block into an RSS reader, an email newsletter, or another website, would it still make complete sense on its own?"</em></p>
                                                <ul>
                                                  <li><strong>Yes → Use <code>&lt;article&gt;</code></strong> (it's self-contained content)</li>
                                                  <li><strong>No → Use <code>&lt;section&gt;</code></strong> (it's a piece of the current page's structure)</li>
                                                </ul>

                                                <h3>🏗️ Nesting Patterns</h3>
                                                <ul>
                                                  <li><strong>Blog page:</strong> <code>&lt;main&gt;</code> → <code>&lt;section&gt;</code> "Latest Posts" → multiple <code>&lt;article&gt;</code> (each post)</li>
                                                  <li><strong>Single blog post:</strong> <code>&lt;article&gt;</code> → <code>&lt;section&gt;</code> "Introduction" / "Chapter 1" / "Conclusion"</li>
                                                  <li><strong>Comments:</strong> <code>&lt;article&gt;</code> (blog post) → <code>&lt;section&gt;</code> "Comments" → multiple <code>&lt;article&gt;</code> (each comment)</li>
                                                </ul>

                                                <div class="tip"><strong>💡 Pro Tip:</strong> When in doubt, use <code>&lt;section&gt;</code>. It's the safer choice. Only upgrade to <code>&lt;article&gt;</code> when the content truly passes the syndication test.</div>

                                                <div class="info"><strong>📝 SEO Note:</strong> Google uses <code>&lt;article&gt;</code> to identify the main content of a page for featured snippets and news results. Proper use of <code>&lt;article&gt;</code> can improve your chances of appearing in Google News and Discover.</div>
                                                `+ codeBlock("Article vs Section", "html", `<!-- Blog listing: section contains articles -->
                                                <main>
                                                  <section>
                                                    <h2>Latest Blog Posts</h2>

                                                    <article>
                                                      <h3>Understanding Semantic HTML</h3>
                                                      <p>Published: April 25, 2026</p>
                                                      <p>Semantic HTML is the foundation of accessible...</p>
                                                    </article>

                                                    <article>
                                                      <h3>CSS Grid vs Flexbox</h3>
                                                      <p>Published: April 20, 2026</p>
                                                      <p>When should you use Grid vs Flexbox?...</p>
                                                    </article>
                                                  </section>
                                                </main>`)
      },
      // 78
      {
        id: "tag-aside", title: 'The <aside> Tag', badge: "SEMANTIC", emoji: "📎", content: `
                                                  <h3>📌 What is it?</h3>
                                                  <p>The <code>&lt;aside&gt;</code> element represents content that is <strong>tangentially related</strong> to the main content — it could be removed without reducing the meaning of the main content. Think of it as a sidebar callout, a pull quote, a glossary, related links, or an advertisement.</p>

                                                  <h3>📋 Context-Dependent Behavior</h3>
                                                  <table class="at">
                                                    <tr><th>Context</th><th>Meaning</th><th>Example</th></tr>
                                                    <tr><td>Inside an <code>&lt;article&gt;</code></td><td>Content related to <strong>that specific article</strong> (like a pull quote or glossary term)</td><td>A highlighted quote from the article text</td></tr>
                                                    <tr><td>Outside an <code>&lt;article&gt;</code> (page-level)</td><td>Content related to <strong>the site as a whole</strong></td><td>Sidebar with recent posts, ads, author bio, newsletter signup</td></tr>
                                                  </table>

                                                  <h3>🔍 Deep Dive — What Belongs in <code>&lt;aside&gt;</code></h3>
                                                  <ul>
                                                    <li>✅ <strong>Sidebars</strong> — Author bio, related articles, tag clouds</li>
                                                    <li>✅ <strong>Pull quotes</strong> — Highlighted excerpts from the article</li>
                                                    <li>✅ <strong>Glossary definitions</strong> — Term explanations alongside technical content</li>
                                                    <li>✅ <strong>Advertisements</strong> — Banner ads, sponsored content</li>
                                                    <li>✅ <strong>Navigation widgets</strong> — "Most Popular", "Trending" links</li>
                                                    <li>❌ <strong>NOT for main navigation</strong> — Use <code>&lt;nav&gt;</code> instead</li>
                                                    <li>❌ <strong>NOT for footnotes</strong> — Footnotes are part of the main content flow</li>
                                                  </ul>

                                                  <h3>♿ Accessibility</h3>
                                                  <p><code>&lt;aside&gt;</code> automatically maps to the ARIA <code>complementary</code> landmark role. Screen reader users can jump to it with a shortcut key. Use <code>aria-label</code> if you have multiple asides:</p>

                                                  <div class="tip"><strong>💡 Pro Tip:</strong> On mobile, <code>&lt;aside&gt;</code> content typically moves below the main content (using CSS <code>order</code> or flexbox). Design your aside to be meaningful even when it appears at the bottom of a long page.</div>

                                                  <div class="warn"><strong>⚠️ Common Mistake:</strong> Using <code>&lt;aside&gt;</code> as a generic layout sidebar container. If your "sidebar" contains the primary navigation or the main search, it's not an <code>&lt;aside&gt;</code> — it's a <code>&lt;nav&gt;</code> or part of <code>&lt;header&gt;</code>.</div>
                                                  `+ codeBlock("Aside Examples", "html", `<article>
                                                    <h2>Understanding CSS Grid</h2>
                                                    <p>CSS Grid is a powerful layout system...</p>

                                                    <!-- Pull quote inside article -->
                                                    <aside style="border-left:4px solid #6c63ff; padding:12px 16px; margin:16px 0; background:#1a1a2e; border-radius:0 8px 8px 0;">
                                                      <p><em>"CSS Grid changed how I think about layouts entirely."</em></p>
                                                    </aside>

                                                    <p>More article content continues here...</p>
                                                  </article>

                                                  <!-- Page-level sidebar -->
                                                  <aside aria-label="Related articles" style="background:#1a1a2e; padding:16px; border-radius:8px; margin-top:16px;">
                                                    <h3>Related Articles</h3>
                                                    <ul>
                                                      <li><a href="#">Flexbox Guide</a></li>
                                                      <li><a href="#">Responsive Design Tips</a></li>
                                                    </ul>
                                                  </aside>`)
      },
      // 79
      {
        id: "tag-s-u", title: 'The <s> & <u> Tags — Strikethrough & Underline', badge: "TEXT", emoji: "✏️", content: `
                                                      <h3>📌 What are they?</h3>
                                                      <p>The <code>&lt;s&gt;</code> and <code>&lt;u&gt;</code> tags are <strong>semantic text-level elements</strong> that look like simple formatting (strikethrough and underline), but in modern HTML they carry specific meanings that go beyond visual decoration.</p>

                                                      <h3>📋 Semantic Meanings</h3>
                                                      <table class="at">
                                                        <tr><th>Tag</th><th>Visual</th><th>Semantic Meaning</th><th>Use Case</th></tr>
                                                        <tr><td><code>&lt;s&gt;</code></td><td><s>Strikethrough</s></td><td>Content that is <strong>no longer accurate or relevant</strong> (but kept visible for context)</td><td>Old prices, outdated info, retracted statements</td></tr>
                                                        <tr><td><code>&lt;u&gt;</code></td><td><u>Underline</u></td><td><strong>Unarticulated annotation</strong> — text with a non-textual annotation (misspellings, proper nouns in Chinese)</td><td>Spell-check highlights, Chinese proper names, labeling</td></tr>
                                                        <tr><td><code>&lt;del&gt;</code></td><td><del>Strikethrough</del></td><td>Content that was <strong>removed from the document</strong> (editorial deletion)</td><td>Track-changes, document revision history</td></tr>
                                                        <tr><td><code>&lt;ins&gt;</code></td><td><ins>Underline</ins></td><td>Content that was <strong>added to the document</strong> (editorial insertion)</td><td>Track-changes, added corrections</td></tr>
                                                      </table>

                                                      <h3>🔍 Deep Dive — <code>&lt;s&gt;</code> vs <code>&lt;del&gt;</code></h3>
                                                      <p>Both look the same (strikethrough), but they mean different things:</p>
                                                      <ul>
                                                        <li><code>&lt;s&gt;</code> = "This info exists but is no longer accurate" — <strong>e.g., an old price</strong></li>
                                                        <li><code>&lt;del&gt;</code> = "This text was removed from the document" — <strong>e.g., a tracked change in a legal contract</strong></li>
                                                      </ul>
                                                      <p>Screen readers handle them differently: <code>&lt;del&gt;</code> is announced as "deletion" while <code>&lt;s&gt;</code> may be read as "strikethrough" or simply ignored depending on the reader.</p>

                                                      <h3>⚠️ The <code>&lt;u&gt;</code> Confusion</h3>
                                                      <p>In HTML4, <code>&lt;u&gt;</code> meant "underline this text" (purely visual). In HTML5, it was redefined to mean <strong>"this text has a non-textual annotation"</strong>. However, since underlined text looks exactly like hyperlinks, using <code>&lt;u&gt;</code> can confuse users who try to click it.</p>

                                                      <div class="warn"><strong>⚠️ Avoid <code>&lt;u&gt;</code> for visual styling.</strong> If you just want underlined text, use CSS: <code>text-decoration: underline</code>. Reserve <code>&lt;u&gt;</code> for its semantic purpose (Chinese proper nouns, spell-check highlights).</div>

                                                      <div class="tip"><strong>💡 E-Commerce Pro Tip:</strong> For sale prices, use <code>&lt;s&gt;</code> for the old price and pair it with screen-reader-only text: <code>&lt;s&gt;&lt;span class="sr-only"&gt;Was &lt;/span&gt;$49.99&lt;/s&gt; &lt;strong&gt;$29.99&lt;/strong&gt;</code>. This ensures blind users understand it's a discount.</div>
                                                      `+ codeBlock("Strikethrough & Underline", "html", `<!-- Sale price using s tag -->
                                                      <p style="font-size:1.2em;">
                                                        <s style="color:#888;">$49.99</s>
                                                        <strong style="color:#4ade80; margin-left:8px;">$29.99</strong>
                                                        <span style="background:#f92672; color:white; padding:2px 8px; border-radius:4px; font-size:0.8em; margin-left:8px;">40% OFF</span>
                                                      </p>

                                                      <!-- Retracted statement -->
                                                      <p><s>The event is scheduled for March 15.</s></p>
                                                      <p><strong>UPDATE:</strong> The event has been moved to April 1.</p>

                                                      <!-- u tag for Chinese proper nouns -->
                                                      <p lang="zh">The novel was written by <u>\u8001\u820D</u> (Lao She).</p>

                                                      <!-- Don't confuse with del/ins -->
                                                      <p>Contract clause: <del>30 days</del> <ins>60 days</ins> notice required.</p>`)
      },
      // 80
      {
        id: "tag-main", title: 'The <main> Tag', badge: "SEMANTIC", emoji: "🎯", content: `
                                                        <h3>📌 What is it?</h3>
                                                        <p>The <code>&lt;main&gt;</code> element represents the <strong>dominant, unique content</strong> of the <code>&lt;body&gt;</code> — the content that is specific to this page and not repeated across other pages on the site. It excludes site-wide elements like headers, footers, navigation, and sidebars.</p>

                                                        <h3>📋 Strict Rules</h3>
                                                        <table class="at">
                                                          <tr><th>Rule</th><th>Details</th></tr>
                                                          <tr><td><strong>Only ONE per page</strong></td><td>There must be only one visible <code>&lt;main&gt;</code> element at any time. Multiple <code>&lt;main&gt;</code> elements are allowed only if all but one have the <code>hidden</code> attribute.</td></tr>
                                                          <tr><td><strong>No ancestor restrictions</strong></td><td><code>&lt;main&gt;</code> must NOT be a descendant of <code>&lt;article&gt;</code>, <code>&lt;aside&gt;</code>, <code>&lt;footer&gt;</code>, <code>&lt;header&gt;</code>, or <code>&lt;nav&gt;</code>.</td></tr>
                                                          <tr><td><strong>Landmark role</strong></td><td>Automatically maps to ARIA <code>role="main"</code> — screen readers can jump directly to it.</td></tr>
                                                          <tr><td><strong>Skip navigation target</strong></td><td>"Skip to main content" links should point to <code>&lt;main&gt;</code> via its <code>id</code>.</td></tr>
                                                        </table>

                                                        <h3>🔍 Deep Dive — What Goes INSIDE vs OUTSIDE</h3>
                                                        <table class="at">
                                                          <tr><th>Inside <code>&lt;main&gt;</code></th><th>Outside <code>&lt;main&gt;</code></th></tr>
                                                          <tr><td>Article content, blog post body</td><td>Site header with logo and nav</td></tr>
                                                          <tr><td>Product details, search results</td><td>Global footer with copyright</td></tr>
                                                          <tr><td>Form content (login, checkout)</td><td>Sidebar navigation</td></tr>
                                                          <tr><td>Dashboard data, app interface</td><td>Cookie consent banners</td></tr>
                                                        </table>

                                                        <h3>♿ Accessibility — Why <code>&lt;main&gt;</code> is Critical</h3>
                                                        <p>The <code>&lt;main&gt;</code> landmark is one of the most important accessibility features in HTML:</p>
                                                        <ul>
                                                          <li><strong>Screen readers:</strong> Users press a single key to jump straight to <code>&lt;main&gt;</code>, skipping the entire header and navigation (NVDA: <kbd>Q</kbd>, VoiceOver: rotor → "Main").</li>
                                                          <li><strong>Skip links:</strong> The common "Skip to main content" pattern targets <code>&lt;main id="content"&gt;</code>.</li>
                                                          <li><strong>Reader mode:</strong> Browsers like Firefox and Safari use <code>&lt;main&gt;</code> to identify what to show in Reader View.</li>
                                                        </ul>

                                                        <div class="tip"><strong>💡 Pro Tip:</strong> Add <code>id="content"</code> to your <code>&lt;main&gt;</code> element and create a skip link: <code>&lt;a href="#content" class="skip-link"&gt;Skip to main content&lt;/a&gt;</code>. This is a Lighthouse accessibility requirement and a WCAG 2.1 Level A success criterion.</div>

                                                        <div class="info"><strong>📝 SPA Tip:</strong> In single-page apps (React, Vue), content changes dynamically but the <code>&lt;main&gt;</code> element stays. Use <code>aria-live="polite"</code> on <code>&lt;main&gt;</code> or manage focus programmatically on route changes so screen readers announce the new content.</div>
                                                        `+ codeBlock("Main Tag Structure", "html", `<!DOCTYPE html>
                                                        <html lang="en">
                                                          <head>
                                                            <title>My Website</title>
                                                          </head>
                                                          <body>
                                                            <!-- Skip link for accessibility -->
                                                            <a href="#content" class="skip-link">Skip to main content</a>

                                                            <header>
                                                              <nav aria-label="Primary">
                                                                <a href="/">Home</a>
                                                                <a href="/about">About</a>
                                                              </nav>
                                                            </header>

                                                            <!-- Main content: unique to this page -->
                                                            <main id="content">
                                                              <h1>Welcome to My Website</h1>
                                                              <p>This is the main content area.</p>
                                                            </main>

                                                            <footer>
                                                              <p>&copy; 2026 My Website</p>
                                                            </footer>
                                                          </body>
                                                        </html>`)
      },
      // 81
      {
        id: "tag-html", title: 'The <html> (Root) Tag', badge: "DOCUMENT", emoji: "🌍", content: `
      < h3 >📌 What is it ?</h3 >
<p>The <code>&lt;html&gt;</code> element is the <strong>root element</strong> of every HTML document. It wraps all the content on the page and is the absolute top-level container. It also serves as the foundation for global accessibility and styling.</p>

<h3>📋 Why is it so important?</h3>
<table class="at">
  <tr><th>Feature</th><th>Explanation</th></tr>
  <tr><td><strong>Accessibility</strong></td><td>The <code>lang</code> attribute tells screen readers which pronunciation engine to use. E.g., <code>lang="en"</code> vs <code>lang="fr"</code>. Without this, text-to-speech sounds like gibberish!</td></tr>
  <tr><td><strong>CSS Global Variables</strong></td><td>In CSS, the <code>:root</code> selector targets the <code>&lt;html&gt;</code> tag. It is the best place to define global CSS custom properties (variables) like colors and fonts.</td></tr>
  <tr><td><strong>Dark Mode</strong></td><td>Setting <code>data-theme="dark"</code> on the <code>&lt;html&gt;</code> tag is the industry standard for toggling light/dark modes across an entire site.</td></tr>
</table>

<div class="warn"><strong>⚠️ Common Mistake:</strong> Omitting the <code>lang</code> attribute. It causes severe accessibility issues and SEO penalties. Always declare the language!</div>
    `+ codeBlock("The HTML Root Element", "html", ` < !--1. The minimal required structure-- >
< !DOCTYPE html >
<html lang="en" data-theme="dark">
  <head>
    <title>My App</title>
  </head>
  <body>
    <!-- Content goes here -->
    <!-- BOTTOM NAV (Mobile Only) -->
  <nav class="mobile-nav" id="mobileNav">
    <a href="javascript:void(0)" onclick="window.scrollTo({top:0, behavior:'smooth'})" class="nav-item">🏠<span>Home</span></a>
    <a href="javascript:void(0)" onclick="openCmdK()" class="nav-item">🔍<span>Search</span></a>
    <a href="javascript:void(0)" onclick="openQuiz()" class="nav-item">🎯<span>Quiz</span></a>
    <a href="javascript:void(0)" onclick="openTranslateModal()" class="nav-item">🌍<span>Translate</span></a>
    <a href="javascript:void(0)" onclick="document.getElementById('sbOpen').click()" class="nav-item">☰<span>Menu</span></a>
  </nav>
</body>
</html>

<!--2. Using the HTML tag in CSS-- >
      <style>
  /* :root is exactly the same as selecting 'html', but with higher specificity */
        :root {
          --primary - color: #6c63ff;
        --bg-color: #ffffff;
  }

        html[data-theme="dark"] {
          --bg - color: #1a1a2e;
  }

        /* Smooth scrolling applied to the root */
        html {
          scroll - behavior: smooth;
        font-size: 16px;
  }
      </style>`)
      },
      // 82
      {
        id: "tag-title", title: 'The <title> Tag', badge: "DOCUMENT", emoji: "🏷️", content: `
        < h3 >📌 What is it ?</h3 >
<p>The <code>&lt;title&gt;</code> tag defines the document's title. It is strictly metadata and does NOT appear in the webpage body. However, it is arguably the <strong>most important SEO tag</strong> on your entire site.</p>

<h3>📋 Where does it appear?</h3>
<ul>
  <li><strong>Browser Tabs:</strong> It is the text displayed on the tab in Chrome, Safari, etc.</li>
  <li><strong>Search Engines:</strong> It is the large, clickable blue link in Google search results.</li>
  <li><strong>Bookmarks:</strong> It is the default name saved when a user bookmarks your page.</li>
</ul>

<div class="tip"><strong>💡 SEO Pro Tip:</strong> Keep your title between <strong>50 and 60 characters</strong>. If it's longer, Google will truncate it with an ellipsis (...). Always put primary keywords at the beginning, and brand names at the end!</div>
    `+ codeBlock("SEO-Optimized Title", "html", ` < !DOCTYPE html >
      <html lang="en">
        <head>
          <!-- ❌ BAD: Too vague, no keywords, poor SEO -->
          <!-- <title>Home</title> -->

          <!-- ❌ BAD: Too long, will be truncated in Google -->
          <!-- <title>Buy The Best Cheap Running Shoes For Men And Women Online Fast Shipping</title> -->

          <!-- ✅ GOOD: Concise, keyword-rich, branded -->
          <title>Men's Running Shoes | Free Shipping | ShoeBrand</title>

          <!-- Title should always be paired with a description -->
          <meta name="description" content="Shop the latest men's running shoes. Free shipping on orders over $50.">
        </head>
        <body>
          ...
        </body>
      </html>`)
      },
      // 83
      {
        id: "tag-body", title: 'The <body> Tag', badge: "DOCUMENT", emoji: "📄", content: `
        < h3 >📌 What is it ?</h3 >
<p>The <code>&lt;body&gt;</code> tag contains all the <strong>rendered, visible content</strong> of an HTML document. Text, images, links, buttons, and videos — if the user can see it, it belongs inside the body.</p>

<h3>📋 Rules and Behaviors</h3>
<ul>
  <li><strong>Only ONE per page:</strong> A document can only have a single <code>&lt;body&gt;</code> element.</li>
  <li><strong>Default Margins:</strong> Browsers apply an annoying default margin (usually 8px) to the body. You almost always need to reset this in CSS!</li>
  <li><strong>Event Listener Hub:</strong> The body is often used in JavaScript to listen for global events, like <code>onkeydown</code> (listening for hotkeys) or <code>onload</code>.</li>
</ul>

<div class="info"><strong>📝 Modern JS Tip:</strong> In the old days, developers put <code>&lt;script&gt;</code> tags at the very bottom of the <code>&lt;body&gt;</code> to prevent them from blocking the UI. Today, we put scripts in the <code>&lt;head&gt;</code> and use the <code>defer</code> attribute instead!</div>
    `+ codeBlock("Body Setup and Reset", "html", ` < !--HTML Structure-- >
<body onload="console.log('Page loaded!')">
  <h1>Welcome to the Page</h1>
  <p>All visible content lives here.</p>
</body>

<!--Standard Body CSS Reset-- >
      <style>
        body {
          /* 1. Remove the browser's default 8px margin */
          margin: 0;

        /* 2. Set the global font family */
        font-family: system-ui, -apple-system, sans-serif;

        /* 3. Improve text rendering on macOS/iOS */
        -webkit-font-smoothing: antialiased;

        /* 4. Ensure body fills the screen vertically */
        min-height: 100vh;

        /* 5. Set default text color and background */
        color: #333;
        background-color: #f9f9f9;
  }
      </style>`)
      },
      // 84
      {
        id: "tag-fencedframe", title: 'The <fencedframe> Tag', badge: "ADVANCED", emoji: "🛡️", content: `
        < h3 >📌 What is it ?</h3 >
<p>The <code>&lt;fencedframe&gt;</code> is a cutting-edge HTML proposal (currently championed by Google Chrome's Privacy Sandbox). It is designed as a <strong>privacy-preserving alternative to the <code>&lt;iframe&gt;</code></strong>.</p>

<h3>📋 Why not just use iframe?</h3>
<p>Standard <code>&lt;iframe&gt;</code>s can communicate with the top-level page using <code>postMessage</code>, and they can track users across sites (third-party cookies). A <code>&lt;fencedframe&gt;</code> strictly enforces isolation:</p>
<ul>
  <li><strong>Zero Communication:</strong> The embedded frame and the parent page cannot talk to each other. No <code>postMessage</code>.</li>
  <li><strong>Opaque URLs:</strong> It is designed to render ads or sensitive data via "opaque URLs" (URNs) that prevent the top-level site from knowing what exactly is being rendered inside the frame!</li>
</ul>

<div class="warn"><strong>⚠️ Bleeding Edge:</strong> This tag is still highly experimental and primarily used by AdTech companies building cookie-less tracking alternatives. Do not use it in standard production web apps yet!</div>
    `+ codeBlock("Fenced Frame Implementation", "html", ` < !--Standard iframe(allows tracking and communication)-- >
<iframe src="https://ads.example.com/ad123"></iframe>

<!--Fenced frame(strict privacy boundary)-- >
<fencedframe src="urn:uuid:12345678-9abc-def0-1234-56789abcdef0"></fencedframe>

<!--JavaScript integration with Privacy Sandbox APIs-- >
      <script>
  // Fenced frames use special Opaque URLs generated by browser APIs
  // like FLEDGE (Protected Audience API)
  
  navigator.runAdAuction(auctionConfig).then((opaqueUrl) => {
    // The top-level page gets a URL, but cannot read its actual contents!
    const frame = document.createElement('fencedframe');
        frame.src = opaqueUrl;
        document.body.appendChild(frame);
  });
        <\/script>`)
      },
      // 85
      {
        id: "tag-portal", title: 'The <portal> Tag', badge: "EXPERIMENTAL", emoji: "🚪", content: `
          <h3>📌 What is it?</h3>
          <p>The <code>&lt;portal&gt;</code> tag is an experimental HTML element designed to enable <strong>seamless page transitions</strong>. It allows a web page to embed another page (like an iframe) and then instantly "activate" it, replacing the current page entirely without a white flash or network delay!</p>

          <h3>📋 How it creates "App-like" experiences</h3>
          <p>Traditionally, clicking a link causes the browser to dump the current DOM, request the new page, and render it from scratch (causing a flash). A <code>&lt;portal&gt;</code> pre-renders the next page in the background. When the user clicks the link, the portal expands with an animation, creating a native mobile-app-like transition.</p>

          <div class="tip"><strong>💡 Current Status:</strong> While <code>&lt;portal&gt;</code> was heavily tested in Chrome, the web standards community is currently favoring the new <strong>View Transitions API</strong> for seamless navigation instead. Still, portals remain a fascinating architectural concept!</div>
          `+ codeBlock("Portal Navigation Demo", "html", `<!-- 1. The Portal Element -->
          <style>
  /* Portals can be styled and animated just like iframes */
            portal {
              width: 300px;
            height: 200px;
            border-radius: 12px;
            box-shadow: 0 10px 20px rgba(0,0,0,0.2);
            transition: all 0.4s ease;
  }

            /* When activated, it expands to fill the screen */
            portal.expanding {
              width: 100vw;
            height: 100vh;
            border-radius: 0;
  }
          </style>

          <!-- Embed the next article so it pre-renders in the background -->
          <portal id="nextArticle" src="/article-2"></portal>

          <!-- 2. The JavaScript Activation -->
          <script>
            const portal = document.getElementById('nextArticle');
  
  portal.addEventListener('click', () => {
              // Play a CSS animation first
              portal.classList.add('expanding');

    // Listen for animation end
    portal.addEventListener('transitionend', () => {
              // Instantly swap the entire browser context to the new page!
              // No network request needed, no blank white screen.
              portal.activate();
    });
  });
            <\/script>`)
      },
      // 86
      {
        id: "tag-entity-basics", title: 'Entities: Escaping Syntax', badge: "ENTITIES", emoji: "🔤", content: `
<h3>📌 What are HTML Entities?</h3>
<p>An <strong>HTML Entity</strong> is a piece of text (a string) that begins with an ampersand (<code>&amp;</code>) and ends with a semicolon (<code>;</code>). Entities are used to display reserved characters (which would otherwise be interpreted as HTML code), or invisible characters (like non-breaking spaces).</p>

<h3>📋 The Reserved Characters</h3>
<p>If you try to type <code>&lt;div&gt;</code> in your paragraph text, the browser will try to render an actual div! To show the literal text, you must "escape" the characters using entities:</p>
<table class="at">
  <tr><th>Character</th><th>Entity Name</th><th>Description</th></tr>
  <tr><td><code>&lt;</code></td><td><code>&amp;lt;</code></td><td>Less than (opens a tag)</td></tr>
  <tr><td><code>&gt;</code></td><td><code>&amp;gt;</code></td><td>Greater than (closes a tag)</td></tr>
  <tr><td><code>&amp;</code></td><td><code>&amp;amp;</code></td><td>Ampersand (starts an entity)</td></tr>
  <tr><td><code>"</code></td><td><code>&amp;quot;</code></td><td>Double quotation mark</td></tr>
  <tr><td><code>'</code></td><td><code>&amp;apos;</code></td><td>Single quotation mark (apostrophe)</td></tr>
</table>

<div class="tip"><strong>💡 Pro Tip:</strong> Whenever you are writing a blog post about code (like this one!), you must run all your HTML snippets through a function that replaces the reserved characters with their respective entities!</div>
`+ codeBlock("Escaping HTML Output", "html", `<!-- ❌ BAD: The browser thinks you are opening a bold tag! -->
<p>To make text bold, use the <b> tag.</p>

<!-- ✅ GOOD: The browser will literally print out "<b>" -->
<p>To make text bold, use the &lt;b&gt; tag.</p>

<!-- Escaping quotes inside an attribute (though HTML5 allows mix & match) -->
<input type="text" value="She said &quot;Hello!&quot; to me.">`)
      },
      // 87
      {
        id: "tag-entity-spacing", title: 'Entities: Whitespace', badge: "ENTITIES", emoji: "📏", content: `
<h3>📌 The Whitespace Collapse Problem</h3>
<p>In HTML, if you type 10 spaces between two words, the browser will "collapse" them and only display <strong>one single space</strong>. To force the browser to render multiple spaces, or to prevent two words from wrapping onto different lines, you must use <strong>Whitespace Entities</strong>.</p>

<h3>📋 Types of Spaces</h3>
<table class="at">
  <tr><th>Entity</th><th>Name</th><th>Effect</th></tr>
  <tr><td><code>&amp;nbsp;</code></td><td>Non-Breaking Space</td><td>A standard space. Prevents the text from breaking into a new line at this point.</td></tr>
  <tr><td><code>&amp;ensp;</code></td><td>En Space</td><td>A space that is roughly the width of two normal spaces (the width of an "n").</td></tr>
  <tr><td><code>&amp;emsp;</code></td><td>Em Space</td><td>A space that is roughly the width of four normal spaces (the width of an "m").</td></tr>
  <tr><td><code>&amp;thinsp;</code></td><td>Thin Space</td><td>A very narrow space, often used in typography between punctuation or numbers.</td></tr>
</table>
`+ codeBlock("Controlling Typography with Spaces", "html", `<!-- 1. Preventing Line Breaks (Orphan control) -->
<!-- "10" and "km" will NEVER be separated onto different lines -->
<p>The marathon distance is exactly 10&nbsp;km.</p>

<!-- 2. Forcing multiple spaces (Legacy indenting) -->
<p>First Place: John</p>
<p>Second Place:&ensp;&ensp;Jane</p>
<p>Third Place:&emsp;&emsp;&emsp;Bob</p>`)
      },
      // 88
      {
        id: "tag-entity-symbols", title: 'Entities: Copyright & Symbols', badge: "ENTITIES", emoji: "©️", content: `
<h3>📌 Legal and Typographical Symbols</h3>
<p>There are hundreds of special symbols that are difficult or impossible to type on a standard keyboard. HTML entities provide an easy, memorable text-alias for these symbols.</p>

<h3>📋 Common Symbols</h3>
<table class="at">
  <tr><th>Symbol</th><th>Entity Name</th><th>Use Case</th></tr>
  <tr><td>©</td><td><code>&amp;copy;</code></td><td>Copyright notices in footers.</td></tr>
  <tr><td>®</td><td><code>&amp;reg;</code></td><td>Registered trademark (legally registered).</td></tr>
  <tr><td>™</td><td><code>&amp;trade;</code></td><td>Trademark (unregistered).</td></tr>
  <tr><td>×</td><td><code>&amp;times;</code></td><td>Multiplication sign (often used for 'Close' buttons!).</td></tr>
  <tr><td>÷</td><td><code>&amp;divide;</code></td><td>Division sign.</td></tr>
</table>

<div class="tip"><strong>💡 UI Pro Tip:</strong> If you are building a custom modal or popup, don't use the letter "X" for the close button. Use <code>&amp;times;</code> (×) — it is perfectly symmetrical and looks much more professional!</div>
`+ codeBlock("Professional Footers & Buttons", "html", `<!-- Standard Footer -->
<footer>
  <p>&copy; 2026 Sanskar Developer. All rights reserved.</p>
  <p>Our Product&trade; is the best on the market.</p>
</footer>

<!-- A Premium Close Button -->
<style>
  .close-btn {
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
    color: #666;
  }
  .close-btn:hover { color: red; }
</style>

<!-- Looks much better than a capital X! -->
<button class="close-btn" aria-label="Close modal">&times;</button>`)
      },
      // 89
      {
        id: "tag-entity-math", title: 'Entities: Math & Currency', badge: "ENTITIES", emoji: "💱", content: `
<h3>📌 Financial & Scientific Entities</h3>
<p>When building eCommerce stores or scientific dashboards, you need accurate representations of currency and mathematical operators. While you can copy-paste unicode characters, entities ensure the character is encoded perfectly regardless of the server's database encoding.</p>

<h3>📋 Common Currencies and Math</h3>
<table class="at">
  <tr><th>Symbol</th><th>Entity Name</th><th>Description</th></tr>
  <tr><td>€</td><td><code>&amp;euro;</code></td><td>Euro sign</td></tr>
  <tr><td>£</td><td><code>&amp;pound;</code></td><td>Pound Sterling</td></tr>
  <tr><td>¥</td><td><code>&amp;yen;</code></td><td>Japanese Yen</td></tr>
  <tr><td>¢</td><td><code>&amp;cent;</code></td><td>Cent sign</td></tr>
  <tr><td>∑</td><td><code>&amp;sum;</code></td><td>N-ary summation</td></tr>
  <tr><td>∞</td><td><code>&amp;infin;</code></td><td>Infinity</td></tr>
  <tr><td>±</td><td><code>&amp;plusmn;</code></td><td>Plus-minus sign</td></tr>
  <tr><td>√</td><td><code>&amp;radic;</code></td><td>Square root</td></tr>
</table>
`+ codeBlock("eCommerce and Data Displays", "html", `<!-- Currency Display -->
<div class="product-card">
  <h2>Premium Headphones</h2>
  <p class="price">Price: &euro;149.99</p>
  <p class="shipping">Shipping to UK: &pound;12.00</p>
</div>

<!-- Scientific Notation -->
<div class="equation">
  <p>The margin of error is &plusmn; 5&percnt;.</p>
  <p>To infinity and beyond: &infin;</p>
</div>`)
      },
      // 90
      {
        id: "tag-entity-hex", title: 'Entities: Hexadecimal Emojis', badge: "ENTITIES", emoji: "🧑‍💻", content: `
<h3>📌 Numeric Character References (NCRs)</h3>
<p>What if there is NO named entity for a character? HTML allows you to render <strong>any Unicode character</strong> in existence (including every single Emoji!) using its Decimal or Hexadecimal code.</p>

<h3>📋 Syntax</h3>
<ul>
  <li><strong>Decimal:</strong> Starts with <code>&amp;#</code> followed by the number. (e.g., <code>&amp;#128512;</code>)</li>
  <li><strong>Hexadecimal:</strong> Starts with <code>&amp;#x</code> followed by the hex code. (e.g., <code>&amp;#x1F600;</code>)</li>
</ul>

<div class="info"><strong>📝 Fun Fact:</strong> You don't need to load external image libraries to show emojis. Emojis are just standard text characters defined by the Unicode Consortium! By using Hex entities, you guarantee the emoji loads instantly and scales perfectly with font-size.</div>
`+ codeBlock("Rendering Native Emojis via Hex", "html", `<!-- Standard Grinning Face 😀 -->
<p>Decimal: &#128512;</p>
<p>Hexadecimal: &#x1F600;</p>

<!-- Rocket Ship 🚀 -->
<p>Houston, we have liftoff! &#x1F680;</p>

<!-- Checkmark ✔️ (Great for To-Do lists!) -->
<ul>
  <li>&#x2714; Build the Website</li>
  <li>&#x2714; Learn HTML Entities</li>
  <li>&#x2714; Profit!</li>
</ul>`)
      },
      // 91
      {
        id: "tag-doctype", title: '<!DOCTYPE html> (The Declaration)', badge: "DOCUMENT", emoji: "📜", content: `
<h3>📌 What is it?</h3>
<p>While it looks like a tag, <code>&lt;!DOCTYPE html&gt;</code> is actually an <strong>information declaration</strong> for the browser. It must be the very first thing in your HTML file, appearing even before the <code>&lt;html&gt;</code> tag.</p>

<h3>📋 Why is it required?</h3>
<p>Back in the late 90s, the web was a mess. Internet Explorer and Netscape navigated HTML entirely differently. When web standards were finally created, browsers needed a way to know if a website was "modern" or "legacy".</p>
<ul>
  <li><strong>Standards Mode:</strong> By including <code>&lt;!DOCTYPE html&gt;</code>, you tell the browser to use the strict, modern HTML5 rendering engine.</li>
  <li><strong>Quirks Mode:</strong> If you omit the Doctype, the browser panics and falls back to "Quirks Mode" — intentionally rendering the page with 1999-era bugs to prevent old websites from breaking!</li>
</ul>

<div class="warn"><strong>⚠️ CSS Nightmares:</strong> If you ever notice that your CSS flexbox or grid layouts are inexplicably failing, check the very top of your file. Missing the Doctype puts you in Quirks Mode, completely breaking modern CSS!</div>
`+ codeBlock("The Doctype Evolution", "html", `<!-- HTML5 (Modern, Beautiful, Simple) -->
<!DOCTYPE html>
<html>...

<!-- HTML 4.01 Strict (The dark ages of 1999) -->
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>...

<!-- XHTML 1.0 (When we tried to make HTML strictly XML) -->
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html>...`)
      },
      // 92
      {
        id: "tag-popover", title: 'The popover API (Modern HTML)', badge: "ADVANCED", emoji: "🪄", content: `
<h3>📌 What is it?</h3>
<p>While not a new standalone tag, <code>popover</code> is a groundbreaking <strong>Global HTML Attribute</strong> introduced in 2024. It allows you to create native tooltips, dropdowns, and popup menus using purely HTML — <strong>zero JavaScript required!</strong></p>

<h3>📋 How it destroys complex JavaScript</h3>
<p>Previously, building a dropdown menu required JavaScript event listeners for clicks, calculating absolute positioning, and manually tracking focus and "click outside" events. The <code>popover</code> attribute handles all of this natively at the browser level, directly integrating into the Top Layer (above the <code>z-index</code> stack).</p>

<div class="tip"><strong>💡 Pro Tip:</strong> Use <code>popovertarget="my-popup"</code> on a button, and <code>id="my-popup" popover</code> on a div. The browser instantly wires them together!</div>
`+ codeBlock("Native HTML Popover (No JS!)", "html", `<!-- 1. The Trigger Button -->
<button popovertarget="user-menu">Open User Settings</button>

<!-- 2. The Popover Content -->
<div id="user-menu" popover>
  <style>
    /* Styling the native popover */
    [popover] {
      border: 1px solid #ccc;
      border-radius: 8px;
      padding: 16px;
      box-shadow: 0 10px 25px rgba(0,0,0,0.2);
    }
    
    /* Animating the backdrop */
    [popover]::backdrop {
      background: rgba(0,0,0,0.5);
      backdrop-filter: blur(4px);
    }
  </style>

  <h3>⚙️ Settings</h3>
  <ul>
    <li>Profile</li>
    <li>Billing</li>
    <li>Logout</li>
  </ul>
</div>`)
      },
      // 93
      {
        id: "tag-param", title: 'The <param> Tag', badge: "HISTORICAL", emoji: "⚙️", content: `
<h3>📌 What is it?</h3>
<p>The <code>&lt;param&gt;</code> tag is a self-closing element used to pass parameters (data and configuration) to plugins embedded via the <code>&lt;object&gt;</code> tag. It defines a "name/value" pair that the external plugin reads upon initialization.</p>

<h3>📋 Historical Significance</h3>
<p>In the 2000s, the web relied heavily on Adobe Flash and Microsoft Silverlight. If you embedded a Flash game or a custom video player, you used <code>&lt;param&gt;</code> to tell the plugin whether it should auto-play, loop, or load a specific file.</p>

<div class="info"><strong>📝 Modern Web:</strong> Today, Flash is dead, and modern <code>&lt;video&gt;</code> and <code>&lt;audio&gt;</code> tags use standard HTML attributes (like <code>autoplay</code> and <code>loop</code>). The <code>&lt;param&gt;</code> tag is extremely rare but still technically valid HTML5!</div>
`+ codeBlock("Configuring a Plugin", "html", `<!-- Embedding a legacy Flash video player -->
<object data="videoplayer.swf" type="application/x-shockwave-flash" width="640" height="480">
  <!-- Passing configuration parameters to the Flash SWF -->
  <param name="movie" value="videoplayer.swf">
  <param name="autoplay" value="true">
  <param name="loop" value="false">
  <param name="quality" value="high">
  
  <!-- Fallback content if the plugin fails -->
  <p>Please install Adobe Flash Player to view this content.</p>
</object>`)
      },
      // 94
      {
        id: "tag-applet", title: 'The <applet> Tag (Java)', badge: "GRAVEYARD", emoji: "☕", content: `
<h3>📌 What was it?</h3>
<p>The <code>&lt;applet&gt;</code> tag is an entirely <strong>obsolete and deprecated</strong> element used in the late 1990s and 2000s to embed <strong>Java Applets</strong> directly into a webpage.</p>

<h3>📋 The Era of Java on the Web</h3>
<p>Before JavaScript became the incredibly powerful language it is today, early web browsers couldn't do much more than render text. If a developer wanted to build a complex interactive game, a chat room, or a complex financial calculator on a website, they wrote it in Java, compiled it to a <code>.class</code> file, and embedded it via <code>&lt;applet&gt;</code>.</p>

<div class="warn"><strong>⚠️ The Death of Applets:</strong> Applets required users to install the massive, notoriously insecure Java Runtime Environment (JRE) plugin. Due to severe security flaws and the rise of HTML5 and modern JS, browsers completely removed support for Java Applets.</div>
`+ codeBlock("The Java Applet Era", "html", `<!-- ❌ Completely Obsolete: Will not work in modern browsers -->

<applet code="InteractiveChessGame.class" width="400" height="400">
  <!-- Passing initial parameters to the Java application -->
  <param name="difficulty" value="hard">
  <param name="theme" value="wood">
  
  <!-- What renders if Java is missing -->
  <strong>Your browser does not support Java.</strong>
</applet>

<!-- ✅ Modern Equivalent -->
<canvas id="chessBoard" width="400" height="400"></canvas>
<script src="chessGame.js"><\/script>`)
      },
      // 95
      {
        id: "tag-frameset", title: 'The <frameset> & <frame> Tags', badge: "GRAVEYARD", emoji: "🖼️", content: `
<h3>📌 What were they?</h3>
<p>Before CSS existed, web developers had absolutely no way to create sidebars or grid layouts. The solution was the <code>&lt;frameset&gt;</code> tag, which allowed you to literally <strong>chop the browser window into multiple pieces</strong>, loading a completely different HTML file into each "frame".</p>

<h3>📋 The Ultimate UX Nightmare</h3>
<p>Framesets replaced the <code>&lt;body&gt;</code> tag entirely. A typical 90s website would use one frame for a sidebar menu, and one frame for the content. However, this caused massive problems:</p>
<ul>
  <li><strong>Broken URLs:</strong> Since the URL in the address bar belonged to the frameset, you couldn't bookmark a specific article!</li>
  <li><strong>SEO Death:</strong> Search engines couldn't understand how the separated files linked together.</li>
</ul>

<div class="info"><strong>📝 The Successor:</strong> The <code>&lt;iframe&gt;</code> (Inline Frame) was invented to fix this by allowing a frame to exist <em>inside</em> a normal <code>&lt;body&gt;</code>. Today, CSS Flexbox and Grid have completely replaced layout frames!</div>
`+ codeBlock("1990s Frameset Layout", "html", `<!-- ❌ Completely Obsolete: Do not use! -->
<!-- Notice there is NO <body> tag! -->

<frameset cols="25%, 75%">
  <!-- The left 25% of the screen loads the menu -->
  <frame src="menu.html" name="sidebar">
  
  <!-- The right 75% of the screen loads the main content -->
  <frame src="welcome.html" name="main_content">
  
  <!-- Fallback for browsers that don't support frames -->
  <noframes>
    <body>
      <p>Please upgrade your browser to view this site.</p>
    </body>
  </noframes>
</frameset>`)
      },
      // 96
      {
        id: "tag-bgsound", title: 'The <bgsound> Tag (Legacy Audio)', badge: "GRAVEYARD", emoji: "📻", content: `
<h3>📌 What was it?</h3>
<p>The <code>&lt;bgsound&gt;</code> tag was a proprietary HTML element introduced by Microsoft Internet Explorer in the 1990s. Its sole purpose was to invisibly play background music (usually MIDI or WAV files) the moment a user landed on a webpage.</p>

<h3>📋 The Autoplay Wars</h3>
<p>In the early days of the web, almost every personal GeoCities website had a <code>&lt;bgsound&gt;</code> looping infinitely. This created a terrible User Experience (UX), as users couldn't easily find a way to pause the loud, sudden music.</p>

<div class="info"><strong>📝 The Modern Era:</strong> The <code>&lt;bgsound&gt;</code> tag is entirely obsolete. Today, we use the standard <code>&lt;audio&gt;</code> tag. However, modern browsers (Chrome, Safari, Firefox) now enforce strict "Autoplay Policies" — blocking any audio from playing until the user intentionally clicks or interacts with the page!</div>
`+ codeBlock("The Evolution of Web Audio", "html", `<!-- ❌ 1990s: The Internet Explorer Way (Obsolete) -->
<bgsound src="super-mario-theme.mid" loop="infinite">

<!-- ✅ Modern HTML5 Way -->
<!-- Note: 'autoplay' will be blocked by browsers unless 'muted' is also present, 
     or the user has interacted with the document! -->
<audio controls>
  <source src="background-music.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>`)
      },
      // 97
      {
        id: "tag-keygen", title: 'The <keygen> Tag', badge: "GRAVEYARD", emoji: "🔐", content: `
<h3>📌 What was it?</h3>
<p>The <code>&lt;keygen&gt;</code> element was a highly specialized form control used to facilitate web-based certificate authentication. When placed inside a <code>&lt;form&gt;</code>, it generated a cryptographic key-pair (public and private) directly in the browser!</p>

<h3>📋 How it worked</h3>
<p>When the form was submitted, the browser would securely store the private key on the user's local machine, and transmit the public key to the server. The server could then generate a Client Certificate, effectively turning the browser into a hardware security key.</p>

<div class="warn"><strong>⚠️ Why was it killed?</strong> The tag was notoriously difficult to implement consistently across browsers, and it heavily relied on outdated cryptographic standards. It was officially removed from the HTML5.1 specification. Today, we use the powerful JavaScript <strong>Web Authentication API (WebAuthn)</strong> for biometric and hardware security!</div>
`+ codeBlock("Browser-Native Cryptography", "html", `<!-- ❌ The HTML5 Keygen Tag (Removed) -->
<form action="/generate-cert" method="POST">
  <label for="username">Username:</label>
  <input type="text" id="username" name="user">
  
  <!-- This generated a dropdown letting the user pick encryption strength (e.g., 2048 RSA) -->
  <keygen name="public_key" challenge="random_string">
  
  <input type="submit" value="Register Certificate">
</form>

<!-- ✅ Modern Alternative: WebAuthn (Via JavaScript) -->
<button onclick="registerPasskey()">Register via FaceID/TouchID</button>
<script>
  // Uses navigator.credentials.create() internally
<\/script>`)
      },
      // 98
      {
        id: "tag-isindex", title: 'The <isindex> Tag', badge: "GRAVEYARD", emoji: "🔍", content: `
<h3>📌 The First Search Bar</h3>
<p>Before standard <code>&lt;form&gt;</code> tags, <code>&lt;input type="text"&gt;</code>, or submit buttons even existed on the web, there was <code>&lt;isindex&gt;</code>. Introduced in HTML 2.0 (1995), it was the original, primitive way to create a searchable webpage.</p>

<h3>📋 How primitive was it?</h3>
<p>You couldn't customize it! Placing <code>&lt;isindex prompt="Search here:"&gt;</code> anywhere in the document automatically rendered a gray box with a single text input field and a submit button. When the user hit Enter, the browser simply appended the search query to the current URL (e.g., <code>page.html?query=apples</code>) and reloaded the page.</p>

<div class="tip"><strong>💡 Fun Fact:</strong> It was completely removed in HTML5 because standard HTML forms are infinitely more flexible and powerful.</div>
`+ codeBlock("Search in 1995 vs Today", "html", `<!-- ❌ HTML 2.0 Search (Completely Obsolete) -->
<head>
  <isindex prompt="Search this document:">
</head>

<!-- ✅ HTML5 Modern Search Form -->
<form action="/search" method="GET" role="search">
  <label for="site-search">Search the site:</label>
  <input type="search" id="site-search" name="q" placeholder="Enter keywords..." required>
  <button type="submit">🔍 Search</button>
</form>`)
      },
      // 99
      {
        id: "tag-tt", title: 'The <tt> Tag (Teletype)', badge: "GRAVEYARD", emoji: "📠", content: `
<h3>📌 What was it?</h3>
<p>The <code>&lt;tt&gt;</code> tag stood for <strong>Teletype Text</strong>. It was a presentational tag used to render text in a fixed-width, monospaced font (like a typewriter or terminal window).</p>

<h3>📋 Why presentational tags died</h3>
<p>In the early days of HTML, there was no CSS! If you wanted text to be bold, you used <code>&lt;b&gt;</code>. If you wanted it centered, you used <code>&lt;center&gt;</code>. If you wanted it monospaced, you used <code>&lt;tt&gt;</code>. The W3C realized that mixing content structure with visual styling was a terrible idea, so HTML5 deprecated almost all presentational tags.</p>

<div class="info"><strong>📝 The Semantic Shift:</strong> Today, you should only use tags that describe <em>what</em> the text is, not <em>how</em> it looks. If it's computer code, use <code>&lt;code&gt;</code>. If it's keyboard input, use <code>&lt;kbd&gt;</code>. Let CSS handle the monospaced font!</div>
`+ codeBlock("Presentational vs Semantic HTML", "html", `<!-- ❌ Presentational (Tells the browser HOW it should look) -->
<p>The variable <tt>x</tt> is undefined.</p>
<center>
  <font color="red" size="5">Error occurred!</font>
</center>

<!-- ✅ Semantic (Tells the browser WHAT it means) -->
<p>The variable <code>x</code> is undefined.</p>
<div class="error-box">
  <h2>Error occurred!</h2>
</div>

<style>
  /* Let CSS handle the visual design! */
  code { font-family: 'Courier New', monospace; background: #eee; }
  .error-box { text-align: center; color: red; font-size: 24px; }
</style>`)
      },
      // 100
      {
        id: "tag-contenteditable", title: 'The contenteditable Attribute', badge: "ADVANCED", emoji: "✍️", content: `
<h3>📌 The Grand Finale: Magic HTML</h3>
<p>To conclude our 100-tag journey, we look at <code>contenteditable</code>! While technically a Global Attribute and not a standalone tag, it is so incredibly powerful it deserves the final spot. Adding this single attribute to <strong>any HTML element</strong> instantly transforms it into a rich-text word processor!</p>

<h3>📋 Building Text Editors</h3>
<p>Did you know that Google Docs, Notion, Microsoft Word Online, and almost every rich-text editor on the web rely on <code>contenteditable</code>? It tells the browser engine to allow the user's cursor to step inside the tag and modify the DOM tree directly using their keyboard!</p>

<div class="tip"><strong>💡 Pro Tip:</strong> You can pair it with the JavaScript <code>document.execCommand()</code> (or modern Selection APIs) to build custom Bold, Italic, and Underline formatting toolbars!</div>
`+ codeBlock("Creating a Mini Word Processor", "html", `<!-- 1. Turn a standard DIV into a Rich Text Editor! -->
<div 
  contenteditable="true" 
  class="editor-box"
  spellcheck="true">
  <h2>My Document</h2>
  <p>Try clicking right here and typing!</p>
  <p>You can even <b>copy-paste images</b> directly into this box!</p>
</div>

<!-- 2. Styling the editor so it looks like a piece of paper -->
<style>
  .editor-box {
    width: 100%;
    min-height: 300px;
    padding: 30px;
    background: white;
    color: black;
    border: 1px solid #ccc;
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    outline: none; /* Hide the glowing blue focus ring */
  }
  
  /* Show placeholder text if empty */
  .editor-box:empty:before {
    content: "Start typing your masterpiece...";
    color: #888;
  }
</style>`)
      }
    ];

    // ===== HELPER: code block HTML =====
    function codeBlock(label, lang, code) {
      const escaped = code.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
      return `<div class="cb"><div class="cb-h"><span>📄 ${label}</span><div style="display:flex;gap:8px;"><button class="cp-btn" style="background:color-mix(in srgb,var(--accent2) 15%,transparent);color:var(--accent2);border:1px solid color-mix(in srgb,var(--accent2) 30%,transparent);" onclick="openPlayground(this)">🛠️ Try It</button><button class="cp-btn" onclick="copyCode(this)">📋 Copy</button></div></div><pre class="cb-b">${escaped}</pre></div>`;
    }

    // ===== PRO EDITOR ENGINE =====
    let pgEditorInstance = null;
    let pgAutosaveTimer = null;
    let pgIsVertical = localStorage.getItem('pgLayout') === 'vertical';
    let pgCurrentFileName = 'untitled.html';

    // Templates
    const PG_TEMPLATES = {
      landing: `<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    * { margin:0; box-sizing:border-box; }\n    body { font-family:'Segoe UI',sans-serif; }\n    header { background:linear-gradient(135deg,#667eea,#764ba2); color:#fff; padding:80px 20px; text-align:center; }\n    header h1 { font-size:3rem; margin-bottom:12px; }\n    header p { font-size:1.2rem; opacity:0.9; }\n    .btn { display:inline-block; margin-top:24px; background:#fff; color:#764ba2; padding:14px 32px; border-radius:30px; text-decoration:none; font-weight:bold; transition:0.3s; }\n    .btn:hover { transform:translateY(-3px); box-shadow:0 10px 25px rgba(0,0,0,0.2); }\n    .features { display:grid; grid-template-columns:repeat(3,1fr); gap:24px; max-width:900px; margin:50px auto; padding:0 20px; }\n    .card { padding:30px; border-radius:16px; background:#f8f9fa; text-align:center; box-shadow:0 4px 15px rgba(0,0,0,0.08); }\n    .card h3 { margin:12px 0 8px; }\n  </style>\n</head>\n<body>\n  <header>\n    <h1>Welcome to My Website</h1>\n    <p>Build beautiful things with HTML5</p>\n    <a href="#" class="btn">Get Started →</a>\n  </header>\n  <div class="features">\n    <div class="card"><div style="font-size:2.5rem;">🚀</div><h3>Fast</h3><p>Lightning quick performance</p></div>\n    <div class="card"><div style="font-size:2.5rem;">🎨</div><h3>Beautiful</h3><p>Modern and clean design</p></div>\n    <div class="card"><div style="font-size:2.5rem;">📱</div><h3>Responsive</h3><p>Works on all devices</p></div>\n  </div>\n</body>\n</html>`,
      form: `<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    body { font-family:'Segoe UI',sans-serif; background:#f0f2f5; display:flex; justify-content:center; align-items:center; min-height:100vh; margin:0; }\n    form { background:#fff; padding:40px; border-radius:16px; box-shadow:0 10px 40px rgba(0,0,0,0.1); width:400px; }\n    h2 { margin:0 0 24px; color:#333; }\n    label { display:block; margin-bottom:6px; font-weight:600; color:#555; font-size:0.9rem; }\n    input, textarea { width:100%; padding:12px; border:2px solid #e0e0e0; border-radius:10px; font-size:1rem; margin-bottom:16px; box-sizing:border-box; outline:none; transition:0.2s; font-family:inherit; }\n    input:focus, textarea:focus { border-color:#667eea; }\n    button { width:100%; padding:14px; background:linear-gradient(135deg,#667eea,#764ba2); color:#fff; border:none; border-radius:10px; font-size:1rem; font-weight:bold; cursor:pointer; transition:0.3s; }\n    button:hover { transform:translateY(-2px); box-shadow:0 6px 20px rgba(102,126,234,0.4); }\n  </style>\n</head>\n<body>\n  <form onsubmit="event.preventDefault();alert('Submitted!')">\n    <h2>📬 Contact Us</h2>\n    <label>Full Name</label>\n    <input type="text" placeholder="John Doe" required>\n    <label>Email Address</label>\n    <input type="email" placeholder="john@example.com" required>\n    <label>Message</label>\n    <textarea rows="4" placeholder="Write your message..."></textarea>\n    <button type="submit">Send Message →</button>\n  </form>\n</body>\n</html>`,
      article: `<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    body { font-family:Georgia,serif; max-width:700px; margin:50px auto; padding:0 20px; line-height:1.8; color:#222; }\n    h1 { font-size:2.5rem; margin-bottom:8px; }\n    .meta { color:#888; font-style:italic; margin-bottom:24px; }\n    hr { border:none; border-top:1px solid #eee; margin:24px 0; }\n    blockquote { border-left:4px solid #667eea; margin:20px 0; padding:12px 20px; background:#f8f9ff; font-style:italic; border-radius:0 8px 8px 0; }\n    mark { background:linear-gradient(120deg,#ffeaa7 0%,#fdcb6e 100%); padding:2px 4px; border-radius:3px; }\n    code { background:#f0f0f0; padding:2px 6px; border-radius:4px; font-size:0.9em; }\n  </style>\n</head>\n<body>\n  <article>\n    <h1>The Future of Web Development</h1>\n    <p class="meta">Published on May 15, 2026 by Sanskar Yadav</p>\n    <hr>\n    <p><mark>Web development</mark> is evolving faster than ever. With new standards like the Popover API and native CSS nesting, we are entering a new era.</p>\n    <blockquote>"The web is for everyone, and it starts with clean markup."</blockquote>\n    <p>Don't forget to use tags like <code>&lt;main&gt;</code> and <code>&lt;article&gt;</code> for accessibility.</p>\n    <h2>Key Takeaways</h2>\n    <ul>\n      <li>Semantic HTML improves SEO</li>\n      <li>CSS Grid replaces old float layouts</li>\n      <li>Web Components are the future</li>\n    </ul>\n  </article>\n</body>\n</html>`,
      dashboard: `<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    * { margin:0; box-sizing:border-box; }\n    body { font-family:'Segoe UI',sans-serif; display:grid; grid-template-columns:220px 1fr; height:100vh; }\n    aside { background:#1e293b; color:#94a3b8; padding:24px; }\n    aside h2 { color:#fff; font-size:1.2rem; margin-bottom:24px; }\n    aside a { display:block; color:#94a3b8; text-decoration:none; padding:10px 12px; border-radius:8px; margin-bottom:4px; transition:0.2s; }\n    aside a:hover { background:#334155; color:#fff; }\n    main { background:#f1f5f9; padding:32px; overflow-y:auto; }\n    .cards { display:grid; grid-template-columns:repeat(3,1fr); gap:20px; margin-top:24px; }\n    .card { background:#fff; padding:24px; border-radius:12px; box-shadow:0 2px 8px rgba(0,0,0,0.06); }\n    .card h3 { color:#64748b; font-size:0.85rem; margin-bottom:8px; }\n    .card .value { font-size:2rem; font-weight:800; }\n    .green { color:#10b981; } .blue { color:#3b82f6; } .orange { color:#f59e0b; }\n  </style>\n</head>\n<body>\n  <aside>\n    <h2>🎛️ Admin</h2>\n    <a href="#">📊 Analytics</a>\n    <a href="#">👥 Users</a>\n    <a href="#">📦 Products</a>\n    <a href="#">⚙️ Settings</a>\n  </aside>\n  <main>\n    <h1>Dashboard</h1>\n    <div class="cards">\n      <div class="card"><h3>Revenue</h3><div class="value green">$12,450</div></div>\n      <div class="card"><h3>Active Users</h3><div class="value blue">1,284</div></div>\n      <div class="card"><h3>Uptime</h3><div class="value orange">99.9%</div></div>\n    </div>\n  </main>\n</body>\n</html>`,
      portfolio: `<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    * { margin:0; box-sizing:border-box; }\n    body { font-family:'Segoe UI',sans-serif; background:#0f172a; color:#e2e8f0; }\n    header { text-align:center; padding:80px 20px 40px; }\n    header h1 { font-size:3rem; background:linear-gradient(135deg,#667eea,#f093fb); -webkit-background-clip:text; -webkit-text-fill-color:transparent; }\n    header p { margin-top:12px; color:#94a3b8; font-size:1.1rem; }\n    .grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(280px,1fr)); gap:20px; max-width:1000px; margin:30px auto; padding:0 20px; }\n    .project { background:#1e293b; border-radius:16px; overflow:hidden; transition:0.3s; border:1px solid #334155; }\n    .project:hover { transform:translateY(-6px); box-shadow:0 20px 40px rgba(0,0,0,0.3); border-color:#667eea; }\n    .project .thumb { height:160px; background:linear-gradient(135deg,#667eea,#764ba2); display:flex; align-items:center; justify-content:center; font-size:3rem; }\n    .project .info { padding:20px; }\n    .project h3 { margin-bottom:6px; }\n    .project p { color:#94a3b8; font-size:0.9rem; }\n    .tag { display:inline-block; background:#334155; padding:4px 10px; border-radius:20px; font-size:0.75rem; margin-top:8px; margin-right:4px; }\n  </style>\n</head>\n<body>\n  <header>\n    <h1>My Portfolio</h1>\n    <p>A showcase of my best work</p>\n  </header>\n  <div class="grid">\n    <div class="project"><div class="thumb">🎨</div><div class="info"><h3>Design System</h3><p>A complete UI component library</p><span class="tag">CSS</span><span class="tag">HTML</span></div></div>\n    <div class="project"><div class="thumb">🚀</div><div class="info"><h3>Startup Landing</h3><p>Modern SaaS landing page</p><span class="tag">JS</span><span class="tag">HTML</span></div></div>\n    <div class="project"><div class="thumb">📊</div><div class="info"><h3>Analytics Dashboard</h3><p>Real-time data visualization</p><span class="tag">Chart.js</span><span class="tag">CSS Grid</span></div></div>\n  </div>\n</body>\n</html>`
    };

    function openPlayground(btn) {
      const pre = btn.closest('.cb').querySelector('.cb-b');
      const code = pre.innerText;
      const modal = document.getElementById('playgroundModal');
      modal.showModal();
      initPgEditor();
      pgEditorInstance.setValue(code);
      pgEditorInstance.refresh();
      setTimeout(() => { pgEditorInstance.refresh(); updatePgPreview(); }, 100);
    }

    function initPgEditor() {
      if (pgEditorInstance) return;
      const ta = document.getElementById('pgEditor');
      pgEditorInstance = CodeMirror.fromTextArea(ta, {
        mode: 'htmlmixed',
        theme: 'monokai',
        lineNumbers: true,
        lineWrapping: true,
        autoCloseTags: true,
        autoCloseBrackets: true,
        matchBrackets: true,
        matchTags: { bothTags: true },
        styleActiveLine: true,
        foldGutter: true,
        gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
        indentUnit: 2,
        tabSize: 2,
        indentWithTabs: false,
        extraKeys: {
          'Ctrl-/': 'toggleComment',
          'Cmd-/': 'toggleComment',
          'Ctrl-S': function (cm) { pgManualSave(); },
          'Cmd-S': function (cm) { pgManualSave(); },
          'Ctrl-Enter': function (cm) { pgRunPreview(); },
          'Cmd-Enter': function (cm) { pgRunPreview(); },
          'Ctrl-Shift-F': function (cm) { pgFormat(); },
          'Cmd-Shift-F': function (cm) { pgFormat(); },
          'Tab': function (cm) {
            if (cm.somethingSelected()) cm.indentSelection('add');
            else cm.replaceSelection('  ', 'end');
          }
        }
      });
      pgEditorInstance.on('change', function () {
        pgMarkUnsaved();
        clearTimeout(pgAutosaveTimer);
        pgAutosaveTimer = setTimeout(pgAutosave, 2000);
        updatePgPreview();
      });
      pgEditorInstance.on('cursorActivity', pgUpdateStatusBar);
      if (pgIsVertical) document.getElementById('pgBody').classList.add('vertical');

      // Try restore autosave
      const saved = localStorage.getItem('pgAutoSave');
      if (saved) {
        pgEditorInstance.setValue(saved);
        setTimeout(updatePgPreview, 100);
      }

      // Console message listener
      window.addEventListener('message', function (e) {
        if (e.data && e.data.type === 'pg-console') {
          appendPgConsole(e.data.level, e.data.args);
        }
      });
    }

    function updatePgPreview() {
      if (!pgEditorInstance) return;
      const code = pgEditorInstance.getValue();
      const frame = document.getElementById('pgFrame');
      // Inject console capture script
      const consoleScript = `<script>
        ['log','warn','error','info'].forEach(function(m){
          var orig = console[m];
          console[m] = function(){
            var args = Array.prototype.slice.call(arguments).map(function(a){
              try { return typeof a==='object'?JSON.stringify(a):String(a); } catch(e){ return String(a); }
            });
            parent.postMessage({type:'pg-console',level:m,args:args},'*');
            orig.apply(console,arguments);
          };
        });
        window.onerror=function(m,s,l){parent.postMessage({type:'pg-console',level:'error',args:[m+' (line '+l+')']},'*');};
      <\/script>`;
      const injected = code.replace(/<head>/i, '<head>' + consoleScript);
      frame.srcdoc = injected.includes('<head>') ? injected : consoleScript + code;
    }

    function pgRunPreview() { updatePgPreview(); }

    function loadPgTemplate() {
      const val = document.getElementById('pgTemplate').value;
      if (val && PG_TEMPLATES[val]) {
        initPgEditor();
        pgEditorInstance.setValue(PG_TEMPLATES[val]);
        pgEditorInstance.refresh();
        pgCurrentFileName = val + '.html';
        document.getElementById('pgFileName').textContent = pgCurrentFileName;
        setTimeout(updatePgPreview, 50);
      }
      document.getElementById('pgTemplate').value = '';
    }

    function copyPgCode() {
      const code = pgEditorInstance ? pgEditorInstance.getValue() : '';
      navigator.clipboard.writeText(code).then(() => {
        const btn = event.target;
        const orig = btn.textContent;
        btn.textContent = '✅ Copied!';
        setTimeout(() => btn.textContent = orig, 1500);
      });
    }

    // File operations
    function pgNewFile() {
      if (pgEditorInstance && pgEditorInstance.getValue().trim()) {
        if (!confirm('Create new file? Unsaved changes will be lost.')) return;
      }
      if (pgEditorInstance) pgEditorInstance.setValue('<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    body { font-family: sans-serif; padding: 20px; }\n  </style>\n</head>\n<body>\n  <h1>Hello World!</h1>\n  <p>Start coding here...</p>\n</body>\n</html>');
      pgCurrentFileName = 'untitled.html';
      document.getElementById('pgFileName').textContent = pgCurrentFileName;
      setTimeout(updatePgPreview, 50);
    }

    function pgOpenFile(event) {
      const file = event.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = function (e) {
        initPgEditor();
        pgEditorInstance.setValue(e.target.result);
        pgEditorInstance.refresh();
        pgCurrentFileName = file.name;
        document.getElementById('pgFileName').textContent = pgCurrentFileName;
        setTimeout(updatePgPreview, 50);
      };
      reader.readAsText(file);
      event.target.value = '';
    }

    function pgDownloadFile() {
      const code = pgEditorInstance ? pgEditorInstance.getValue() : '';
      const blob = new Blob([code], { type: 'text/html' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = pgCurrentFileName;
      a.click();
      URL.revokeObjectURL(url);
      pgMarkSaved();
    }

    // Undo / Redo
    function pgUndo() { if (pgEditorInstance) pgEditorInstance.undo(); }
    function pgRedo() { if (pgEditorInstance) pgEditorInstance.redo(); }

    // Format (basic HTML beautifier)
    function pgFormat() {
      if (!pgEditorInstance) return;
      let code = pgEditorInstance.getValue();
      // Simple indent-based formatter
      let formatted = '';
      let indent = 0;
      const lines = code.replace(/>\s*</g, '>\n<').split('\n');
      const selfClosing = /^<(area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)/i;
      const closing = /^<\//;
      const opening = /^<[a-zA-Z]/;
      lines.forEach(line => {
        line = line.trim();
        if (!line) return;
        if (closing.test(line)) indent = Math.max(0, indent - 1);
        formatted += '  '.repeat(indent) + line + '\n';
        if (opening.test(line) && !selfClosing.test(line) && !closing.test(line) && !line.endsWith('/>') && !line.includes('</')) indent++;
      });
      pgEditorInstance.setValue(formatted.trim());
      setTimeout(updatePgPreview, 50);
    }

    // Autosave
    function pgAutosave() {
      if (!pgEditorInstance) return;
      localStorage.setItem('pgAutoSave', pgEditorInstance.getValue());
      pgMarkSaved();
    }

    function pgManualSave() {
      pgAutosave();
    }

    function pgMarkUnsaved() {
      const el = document.getElementById('pgAutosaveStatus');
      if (el) { el.textContent = '● Unsaved'; el.classList.add('unsaved'); }
    }

    function pgMarkSaved() {
      const el = document.getElementById('pgAutosaveStatus');
      if (el) { el.textContent = '💾 Saved'; el.classList.remove('unsaved'); }
    }

    // Status bar
    function pgUpdateStatusBar() {
      if (!pgEditorInstance) return;
      const cur = pgEditorInstance.getCursor();
      document.getElementById('pgLine').textContent = cur.line + 1;
      document.getElementById('pgCol').textContent = cur.ch + 1;
      document.getElementById('pgChars').textContent = pgEditorInstance.getValue().length;
    }

    // Layout toggle
    function togglePgLayout() {
      pgIsVertical = !pgIsVertical;
      const body = document.getElementById('pgBody');
      body.classList.toggle('vertical', pgIsVertical);
      localStorage.setItem('pgLayout', pgIsVertical ? 'vertical' : 'horizontal');
      if (pgEditorInstance) setTimeout(() => pgEditorInstance.refresh(), 100);
    }

    // Fullscreen
    function togglePgFullscreen() {
      const dialog = document.getElementById('playgroundModal');
      dialog.classList.toggle('pg-fullscreen');
      if (pgEditorInstance) setTimeout(() => pgEditorInstance.refresh(), 100);
    }

    // Console
    function appendPgConsole(level, args) {
      const log = document.getElementById('pgConsoleLog');
      if (!log) return;
      const cls = level === 'error' ? 'log-error' : level === 'warn' ? 'log-warn' : 'log-info';
      const div = document.createElement('div');
      div.className = 'log-line ' + cls;
      div.textContent = (level === 'error' ? '❌ ' : level === 'warn' ? '⚠️ ' : '→ ') + args.join(' ');
      log.appendChild(div);
      log.scrollTop = log.scrollHeight;
    }

    function togglePgConsole() {
      const c = document.getElementById('pgConsole');
      c.style.display = c.style.display === 'none' ? 'flex' : 'none';
    }

    function clearPgConsole() {
      document.getElementById('pgConsoleLog').innerHTML = '';
    }

    function closePgModal() {
      pgAutosave();
      document.getElementById('playgroundModal').close();
    }

    function copyAnchor(e, id) {
      e.preventDefault();
      const url = window.location.href.split('#')[0] + '#' + id;
      navigator.clipboard.writeText(url).then(() => {
        const btn = e.target;
        btn.textContent = '✓';
        btn.style.color = 'var(--accent2)';
        setTimeout(() => { btn.textContent = '#'; btn.style.color = ''; }, 1500);
      });
    }

    window.readDataDemo = function () {
      let v = '';
      document.querySelectorAll('.demo-data').forEach(d => {
        v += d.textContent.trim() + ' is Database ID: ' + d.getAttribute('value') + '\\n';
      });
      alert(v);
    };

    window.instantiateTemplateDemo = function () {
      const temp = document.getElementById('demo-badge-template');
      const zone = document.getElementById('demo-injection-zone');
      const txt = document.getElementById('demo-iz-txt');
      if (!temp || !zone) return;

      if (txt) txt.remove(); // Remove placeholder

      const clone = temp.content.cloneNode(true);
      const labels = ["Frontend", "Backend", "Full-Stack", "Web3 Architect", "UI/UX", "Creator", "HTML Master", "Innovator"];
      const icos = ["🎨", "⚙️", "🚀", "💎", "✨", "🔥", "👑", "💡"];
      const rand = Math.floor(Math.random() * labels.length);

      clone.querySelector(".text").textContent = labels[rand];
      clone.querySelector(".ico").textContent = icos[rand];

      // Custom random background colors for fun
      const colors = ["#6c63ff", "#3ecfcf", "#ff7eb6", "#f92672", "#4ade80", "#ff952b"];
      clone.querySelector("div").style.background = colors[Math.floor(Math.random() * colors.length)];

      zone.appendChild(clone);
    };

    let currentSpeakingId = null;

    function speakText(id) {
      if (!('speechSynthesis' in window)) {
        alert("Sorry, your browser doesn't support text to speech!");
        return;
      }

      const btn = document.getElementById('listen-btn-' + id);

      // If already speaking this section, STOP.
      if (currentSpeakingId === id) {
        window.speechSynthesis.cancel();
        currentSpeakingId = null;
        if (btn) btn.innerHTML = '🔊 Listen';
        return;
      }

      // Stop whatever is playing and reset its button
      window.speechSynthesis.cancel();
      if (currentSpeakingId) {
        const oldBtn = document.getElementById('listen-btn-' + currentSpeakingId);
        if (oldBtn) oldBtn.innerHTML = '🔊 Listen';
      }

      const section = document.getElementById(id);
      if (!section) return;

      let textToRead = "";
      section.querySelectorAll('h3, p, li, .tip, .warn, .info').forEach(el => {
        textToRead += el.innerText + ". ";
      });

      const utterance = new SpeechSynthesisUtterance(textToRead);
      utterance.rate = 0.95;
      utterance.pitch = 1.05;

      utterance.onend = function () {
        if (currentSpeakingId === id) {
          currentSpeakingId = null;
          if (btn) btn.innerHTML = '🔊 Listen';
        }
      };

      currentSpeakingId = id;
      if (btn) btn.innerHTML = '⏹️ Stop';

      window.speechSynthesis.speak(utterance);
    }


    const INTERVIEW_QUESTIONS = [
      { q: "What is the difference between HTML and XHTML?", a: "HTML is more forgiving with syntax (can omit closing tags), whereas XHTML is a strict XML-based language that requires perfect syntax and all tags must be closed." },
      { q: "What is the purpose of the 'alt' attribute on images?", a: "It provides alternative text for screen readers (accessibility) and displays if the image fails to load, also helping with SEO." },
      { q: "What are semantic elements?", a: "Elements like <header>, <footer>, and <article> that clearly describe their meaning to both the browser and the developer, improving SEO and accessibility." },
      { q: "Explain the 'viewport' meta tag.", a: "It gives instructions to the browser on how to control the page's dimensions and scaling, essential for responsive mobile design." },
      { q: "What is the difference between local storage and session storage?", a: "Local storage persists even after the browser is closed, while session storage is cleared when the tab/window is closed." }
    ];

    const BEST_PRACTICES = [
      { t: "Use Semantic HTML", d: "Always prefer <nav> or <header> over <div> for structure. It helps search engines and screen readers understand your page." },
      { t: "Keep it Accessible", d: "Use 'alt' for images, 'label' for inputs, and ensure high color contrast for readability." },
      { t: "Optimize for Speed", d: "Use 'loading=lazy' for images and minimize external script calls to keep your page fast." },
      { t: "Validate Your Code", d: "Use the W3C Validator to ensure your HTML follows standard rules and prevents rendering bugs." }
    ];

    const FLASHCARDS = [
      { f: "Which tag is used for the largest heading?", b: "<h1>" },
      { f: "How do you create a line break?", b: "<br>" },
      { f: "Which attribute opens a link in a new tab?", b: 'target="_blank"' },
      { f: "What tag is used for a numbered list?", b: "<ol>" },
      { f: "Which tag embeds a video?", b: "<video>" }
    ];

    // ===== MASTERY LOGIC =====
    let masteredTags = JSON.parse(localStorage.getItem('htmlMasteredTags') || '[]');
    let xp = parseInt(localStorage.getItem('htmlUserXP') || '0');

    function toggleMastery(id, btn) {
      if (masteredTags.includes(id)) {
        masteredTags = masteredTags.filter(t => t !== id);
        xp -= 50;
        btn.classList.remove('mastered');
        btn.innerHTML = '🎓 Mark Mastered';
      } else {
        masteredTags.push(id);
        xp += 50;
        btn.classList.add('mastered');
        btn.innerHTML = '✅ Mastered (+50 XP)';
        triggerConfetti(btn);
      }
      localStorage.setItem('htmlMasteredTags', JSON.stringify(masteredTags));
      localStorage.setItem('htmlUserXP', xp.toString());
      updateMasteryUI();
    }

    function updateMasteryUI() {
      const count = masteredTags.length;
      const level = Math.floor(xp / 500) + 1;
      let rank = "Novice";
      if (count >= 100) rank = "HTML Grandmaster";
      else if (count >= 75) rank = "Wizard";
      else if (count >= 50) rank = "Expert";
      else if (count >= 25) rank = "Intermediate";
      else if (count >= 10) rank = "Apprentice";

      if (document.getElementById('sbMasteryCount')) document.getElementById('sbMasteryCount').innerText = count;
      if (document.getElementById('masteryCountStat')) document.getElementById('masteryCountStat').innerText = count;
      if (document.getElementById('masteryLevel')) document.getElementById('masteryLevel').innerText = level;
      if (document.getElementById('masteryRank')) document.getElementById('masteryRank').innerText = rank;
      if (document.getElementById('mcRank')) document.getElementById('mcRank').innerText = rank;

      const bar = document.getElementById('masteryProgressBar');
      if (bar) bar.style.width = count + '%';

      document.querySelectorAll('#sbNav a').forEach(a => {
        const tid = a.getAttribute('href').substring(1);
        if (masteredTags.includes(tid)) {
          a.style.borderLeft = '4px solid #22c55e';
        } else {
          a.style.borderLeft = '';
        }
      });
    }

    function openCheatSheet() {
      renderCheatSheet();
      document.getElementById('cheatSheetModal').showModal();
    }

    function renderCheatSheet() {
      const q = document.getElementById('csSearch').value.toLowerCase();
      const grid = document.getElementById('csGrid');
      const filtered = TAGS.filter(t => t.title.toLowerCase().includes(q) || t.id.toLowerCase().includes(q));
      grid.innerHTML = filtered.map(t => `<div class="cs-item"><a href="#${t.id}" onclick="document.getElementById('cheatSheetModal').close();"><span style="font-size:1.2rem;margin-right:8px;">${t.emoji}</span><strong>${t.title.replace(/<|>/g, '')}</strong><div style="font-size:0.7rem;opacity:0.6;margin-top:4px;">${t.badge}</div></a></div>`).join('');
    }

    function openMasteryCenter() {
      showMasteryTab('interview');
      document.getElementById('masteryCenterModal').showModal();
    }

    function showMasteryTab(tab) {
      const content = document.getElementById('mcContent');
      const btns = document.querySelectorAll('.extra-tab-btn');
      btns.forEach(b => b.classList.remove('active'));
      if (tab === 'interview') {
        btns[0].classList.add('active');
        content.innerHTML = `<h3>💬 Interview Questions</h3><div style="display:flex;flex-direction:column;gap:20px;">` + INTERVIEW_QUESTIONS.map(i => `<div style="background:var(--bg3);padding:20px;border-radius:16px;border:1px solid var(--border);"><strong style="color:var(--accent);display:block;margin-bottom:8px;">Q: ${i.q}</strong><p style="margin:0;font-size:0.95rem;line-height:1.6;">${i.a}</p></div>`).join('') + `</div>`;
      } else if (tab === 'best-practices') {
        btns[1].classList.add('active');
        content.innerHTML = `<h3>🛡️ Best Practices</h3><div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;">` + BEST_PRACTICES.map(b => `<div style="background:var(--bg3);padding:20px;border-radius:16px;border-bottom:4px solid var(--accent2);"><strong style="display:block;margin-bottom:8px;">${b.t}</strong><p style="margin:0;font-size:0.85rem;opacity:0.8;">${b.d}</p></div>`).join('') + `</div>`;
      } else if (tab === 'flashcards') {
        btns[2].classList.add('active');
        content.innerHTML = `<h3>🃏 Flashcards</h3><p style="opacity:0.6;margin-bottom:20px;">Click to flip the card and reveal the answer!</p><div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;">` + FLASHCARDS.map(f => `<div class="flash-card-container" onclick="this.classList.toggle('flipped')"><div class="flash-inner"><div class="flash-front"><span>${f.f}</span></div><div class="flash-back"><strong>${f.b}</strong></div></div></div>`).join('') + `</div>`;
      }
    }



    function exportProgress() {
      const data = { favorites, masteredTags, xp, userName: localStorage.getItem('userNameData'), theme: localStorage.getItem('themeMode'), date: new Date().toISOString() };
      const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `HTML_Mastery_Progress_${new Date().toLocaleDateString()}.json`;
      a.click();
    }

    function importProgress(event) {
      const file = event.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = function (e) {
        try {
          const data = JSON.parse(e.target.result);
          if (data.favorites) favorites = data.favorites;
          if (data.masteredTags) masteredTags = data.masteredTags;
          if (data.xp) xp = data.xp;
          if (data.userName) localStorage.setItem('userNameData', data.userName);
          if (data.theme) applyTheme(data.theme);
          localStorage.setItem('htmlTagsFavorites', JSON.stringify(favorites));
          localStorage.setItem('htmlMasteredTags', JSON.stringify(masteredTags));
          localStorage.setItem('htmlUserXP', xp.toString());
          alert('Progress imported successfully!');
          location.reload();
        } catch (err) {
          alert('Error importing file. Please ensure it is a valid JSON file.');
        }
      };
      reader.readAsText(file);
    }

    let favorites = JSON.parse(localStorage.getItem('htmlTagsFavorites') || '[]');

    window.toggleFavorite = function (id, btn) {
      if (favorites.includes(id)) {
        favorites = favorites.filter(f => f !== id);
        btn.innerHTML = '♡';
        btn.classList.remove('active');
        btn.title = 'Add to Favorites';
      } else {
        favorites.push(id);
        btn.innerHTML = '❤️';
        btn.classList.add('active');
        btn.title = 'Remove from Favorites';
        triggerConfetti(btn);
      }
      localStorage.setItem('htmlTagsFavorites', JSON.stringify(favorites));
      updateFavCount();
    };

    function updateFavCount() {
      const count = favorites.length;
      if (document.getElementById('favCountStat')) document.getElementById('favCountStat').innerText = count;
    }

    function renderAll() {
      const nav = document.getElementById("sbNav");
      const content = document.getElementById("content");
      let navHTML = "";

      // Tag of the Day Logic
      const today = new Date();
      const seed = today.getFullYear() * 1000 + today.getMonth() * 100 + today.getDate();
      const tagIndex = seed % TAGS.length;
      const totDay = TAGS[tagIndex];
      const totDayText = totDay.content.match(/<p>(.*?)<\/p>/)?.[1]?.replace(/<[^>]+>/g, '') || "Discover something new today!";

      // Update Header Card
      if (document.getElementById('totDayCard')) {
        document.getElementById('totDayCard').style.display = 'block';
        document.getElementById('totDayText').innerText = `Did you know? ${totDay.emoji} ${totDay.title.replace(/<|>/g, '')} - ${totDayText.substring(0, 120)}...`;
        document.getElementById('totDayBtn').onclick = () => document.getElementById(totDay.id).scrollIntoView({ behavior: 'smooth' });
      }

      let contentHTML = "";
      const badges = new Set();
      TAGS.forEach((t, i) => {
        badges.add(t.badge);
        navHTML += `<a href="#${t.id}" data-idx="${i}" data-badge="${t.badge}">${t.emoji} ${i + 1}. ${t.title.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</a>`;
        const safeTitle = t.title.replace(/</g, "&lt;").replace(/>/g, "&gt;");

        const isFav = favorites.includes(t.id);
        const favIcon = isFav ? '❤️' : '♡';
        const favClass = isFav ? 'fav-btn active' : 'fav-btn';
        const favTitle = isFav ? 'Remove from Favorites' : 'Add to Favorites';

        const isMastered = masteredTags.includes(t.id);
        const masteryClass = isMastered ? 'mastery-btn mastered' : 'mastery-btn';
        const masteryText = isMastered ? '✅ Mastered' : '🎓 Mark Mastered';

        contentHTML += `<section id="${t.id}">
          <h2>
            <a href="#${t.id}" class="anchor-link" title="Copy link to tag" onclick="copyAnchor(event, '${t.id}')">#</a> 
            ${i + 1}. ${safeTitle} 
            <span class="tag-badge">${t.badge}</span> 
            <button class="${favClass}" onclick="toggleFavorite('${t.id}', this)" title="${favTitle}">${favIcon}</button> 
            <button class="${masteryClass}" onclick="toggleMastery('${t.id}', this)">${masteryText}</button>
            <button class="listen-btn" id="listen-btn-${t.id}" onclick="speakText('${t.id}')" title="Listen to explanation (Text-to-Speech)" aria-label="Listen to explanation">🔊 Listen</button>
          </h2>
          ${t.content}
        </section>`;

        // Add a motivational divider every 10 tags
        if ((i + 1) % 10 === 0 && i !== TAGS.length - 1) {
          const quotes = [
            "Consistency is what transforms average into excellence.",
            "Every expert was once a beginner. Keep going!",
            "Code is like humor. When you have to explain it, it's bad.",
            "First, solve the problem. Then, write the code.",
            "Knowledge is power, but practice is the key.",
            "The only way to learn a new programming language is by writing programs in it.",
            "Don't practice until you get it right. Practice until you can't get it wrong.",
            "Small daily improvements over time lead to stunning results.",
            "The best error message is the one that never shows up."
          ];
          const quote = quotes[Math.floor((i + 1) / 10) % quotes.length];
          contentHTML += `<div style="margin: 60px 0; text-align: center; border-top: 1px dashed var(--border); border-bottom: 1px dashed var(--border); padding: 30px 20px; border-radius: 16px; background: linear-gradient(135deg, color-mix(in srgb, var(--accent) 5%, transparent), color-mix(in srgb, var(--accent2) 5%, transparent));">
            <span style="font-size: 2rem; display: block; margin-bottom: 10px;">🌟</span>
            <p style="font-size: 1.2rem; font-style: italic; color: var(--text); margin-bottom: 16px;">"${quote}"</p>
            <span style="font-weight: 700; color: var(--accent); font-size: 0.9rem; text-transform: uppercase; letter-spacing: 1px;">Milestone: ${i + 1} Tags Mastered</span>
            <button onclick="window.scrollTo({top:0, behavior:'smooth'})" style="display: block; margin: 20px auto 0; background: var(--bg2); color: var(--text); border: 1px solid var(--border); padding: 8px 16px; border-radius: 20px; font-size: 0.85rem; cursor: pointer; transition: 0.3s;" onmouseover="this.style.borderColor='var(--accent)'" onmouseout="this.style.borderColor='var(--border)'">⬆️ Back to Top</button>
          </div>`;
        }
      });
      nav.innerHTML = navHTML;
      content.innerHTML = contentHTML;

      // Update dynamic totals
      if (document.getElementById('totalTagsDesc')) document.getElementById('totalTagsDesc').innerText = TAGS.length;
      if (document.getElementById('totalTagsStat')) document.getElementById('totalTagsStat').innerText = TAGS.length;

      // Render Filter Categories
      const filter = document.getElementById("sbFilter");
      if (filter && filter.options.length === 1) {
        filter.innerHTML += `<option value="FAVORITES">⭐ Favorites Only</option>`;
        [...badges].sort().forEach(b => {
          filter.innerHTML += `<option value="${b}">${b}</option>`;
        });
      }

      // Render Themes Grid
      const themeGrid = document.getElementById("themeGrid");
      if (themeGrid && themeGrid.innerHTML.trim() === "") {
        let tHTML = "";
        PRESET_THEMES.forEach(th => {
          tHTML += `<div class="theme-card" onclick="applyTheme('${th.id}')">
        <div class="tc-colors">
          <span style="background:${th.bg}"></span>
          <span style="background:${th.card}"></span>
          <span style="background:${th.accent}"></span>
          <span style="background:${th.accent2}"></span>
        </div>
        <span class="tc-name">${th.name}</span>
      </div>`;
        });
        themeGrid.innerHTML = tHTML;
      }
      // sidebar nav click
      nav.querySelectorAll("a").forEach(a => a.addEventListener("click", e => {
        e.preventDefault();
        document.querySelector(a.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
        if (window.innerWidth < 900) toggleSidebar();
      }));

      const dc = document.getElementById("demoCanvas");
      if (dc) {
        const cx = dc.getContext("2d"), g = cx.createLinearGradient(0, 0, 400, 0);
        g.addColorStop(0, "#6c63ff"); g.addColorStop(1, "#3ecfcf");
        cx.fillStyle = g; cx.fillRect(0, 0, 400, 120);
        cx.fillStyle = "#fff"; cx.font = "20px Inter"; cx.fillText("Hello Sanskar! 🎨", 110, 50);
        cx.beginPath(); cx.arc(60, 70, 25, 0, Math.PI * 2); cx.fillStyle = "#ff7eb6"; cx.fill();
        cx.beginPath(); cx.arc(340, 70, 25, 0, Math.PI * 2); cx.fillStyle = "#ffd700"; cx.fill();
      }

      // Calculate Reading Time
      const words = document.getElementById("content").innerText.split(/\s+/).length;
      const readTimeEl = document.getElementById("readTime");
      if (readTimeEl) readTimeEl.textContent = Math.ceil(words / 200);

      updateMasteryUI();
    }

    // ===== COPY =====
    function triggerConfetti(btn) {
      for (let i = 0; i < 15; i++) {
        const c = document.createElement('div');
        c.style.cssText = `position: absolute; width: 6px; height: 6px; background:${['#6c63ff', '#3ecfcf', '#ff7eb6', '#ffd700'][Math.floor(Math.random() * 4)]}; left:${btn.getBoundingClientRect().left + 30}px; top:${btn.getBoundingClientRect().top + window.scrollY}px; border-radius: 50%; pointer-events: none; z-index: 9999; `;
        document.body.appendChild(c);
        const angle = Math.random() * Math.PI * 2;
        const velocity = 20 + Math.random() * 40;
        const tx = Math.cos(angle) * velocity;
        const ty = Math.sin(angle) * velocity - 20;
        c.animate([{ transform: 'translate(0,0) scale(1)', opacity: 1 }, { transform: `translate(${tx}px, ${ty}px) scale(0)`, opacity: 0 }], { duration: 600 + Math.random() * 400, easing: 'ease-out' }).onfinish = () => c.remove();
      }
    }

    function copyCode(btn) {
      const pre = btn.closest('.cb').querySelector('.cb-b');
      triggerConfetti(btn);
      navigator.clipboard.writeText(pre.innerText).then(() => {
        btn.textContent = '✅ Copied!'; btn.classList.add('ok');
        setTimeout(() => { btn.textContent = '📋 Copy'; btn.classList.remove('ok'); }, 2000);
      }).catch(() => {
        const ta = document.createElement('textarea'); ta.value = pre.innerText;
        ta.style.cssText = 'position:fixed;opacity:0'; document.body.appendChild(ta);
        ta.select(); document.execCommand('copy'); document.body.removeChild(ta);
        btn.textContent = '✅ Copied!'; btn.classList.add('ok');
        setTimeout(() => { btn.textContent = '📋 Copy'; btn.classList.remove('ok'); }, 2000);
      });
    }

    // ===== SIDEBAR =====
    function toggleSidebar() {
      const sidebar = document.getElementById("sidebar");
      const overlay = document.getElementById("overlay");
      const btn = document.getElementById("sbOpen");
      sidebar.classList.toggle("open");
      overlay.classList.toggle("show");
      const isOpen = sidebar.classList.contains("open");
      btn.setAttribute("aria-expanded", isOpen);
      // Prevent body scroll when sidebar is open on mobile
      document.body.style.overflow = isOpen ? "hidden" : "";
    }

    // ===== THEME ENGINE =====
    function applyThemeObj(th) {
      const root = document.documentElement;
      Object.keys(th).forEach(k => {
        if (k !== "id" && k !== "name") root.style.setProperty('--' + k, th[k]);
      });
    }
    function applyTheme(id) {
      const isCustom = id === "custom";
      const th = isCustom ? JSON.parse(localStorage.getItem("customThemeObj")) : PRESET_THEMES.find(t => t.id === id);
      if (!th) return;
      applyThemeObj(th);
      localStorage.setItem("themeMode", id);
      // Highlight active card
      document.querySelectorAll(".theme-card").forEach(c => c.classList.remove("active"));
      if (!isCustom) {
        const idx = PRESET_THEMES.findIndex(t => t.id === id);
        if (idx !== -1) document.querySelectorAll(".theme-card")[idx]?.classList.add("active");
      }
    }
    function saveCustomTheme() {
      const th = {
        id: "custom", name: "Custom Builder",
        bg: document.getElementById("ct-bg").value,
        bg2: document.getElementById("ct-bg2").value,
        bg3: document.getElementById("ct-bg").value,
        bg4: document.getElementById("ct-bg2").value,
        text: document.getElementById("ct-text").value,
        text2: document.getElementById("ct-text").value,
        text3: document.getElementById("ct-text").value,
        accent: document.getElementById("ct-accent").value,
        accent2: document.getElementById("ct-accent2").value,
        accent3: document.getElementById("ct-accent").value,
        border: document.getElementById("ct-accent").value + "33",
        card: document.getElementById("ct-bg2").value,
        codeBg: document.getElementById("ct-bg").value,
        sbBg: document.getElementById("ct-bg2").value,
        hdrBg: "linear-gradient(135deg, " + document.getElementById("ct-bg2").value + ", " + document.getElementById("ct-accent").value + ")"
      };
      localStorage.setItem("customThemeObj", JSON.stringify(th));
      applyTheme("custom");
      document.getElementById("themeModal").close();
    }

    // Restore Theme
    const savedMode = localStorage.getItem("themeMode");
    if (savedMode) applyTheme(savedMode);
    else applyTheme("dark");

    // Make pickers live preview when dragging
    ["bg", "bg2", "text", "accent", "accent2"].forEach(p => {
      document.getElementById("ct-" + p).addEventListener("input", (e) => {
        document.documentElement.style.setProperty("--" + p, e.target.value);
      });
    });

    // ===== FONT SIZE =====
    let fontSize = 100;
    function changeFontSize(d) {
      fontSize = Math.max(70, Math.min(130, fontSize + d * 10));
      document.body.style.fontSize = fontSize + "%";
    }

    // ===== PROGRESS BAR =====
    window.addEventListener("scroll", () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      if (h > 0) {
        const pct = Math.min(100, Math.max(0, window.scrollY / h * 100));
        document.getElementById("progress-bar").style.width = pct + "%";
      }
    }, { passive: true });

    // ===== SEARCH & FILTER =====
    function applyFilters() {
      const q = document.getElementById("sbSearch").value.toLowerCase();
      const cat = document.getElementById("sbFilter") ? document.getElementById("sbFilter").value : "ALL";

      let visibleCount = 0;

      document.querySelectorAll("#sbNav a").forEach(a => {
        const id = a.getAttribute("href").substring(1);
        const matchesQ = a.textContent.toLowerCase().includes(q);
        let matchesCat = false;

        if (cat === "ALL") {
          matchesCat = true;
        } else if (cat === "FAVORITES") {
          matchesCat = favorites.includes(id);
        } else {
          matchesCat = a.getAttribute("data-badge") === cat;
        }

        const isVisible = matchesQ && matchesCat;
        a.style.display = isVisible ? "" : "none";

        // Hide/show the actual content section as well
        const section = document.getElementById(id);
        if (section) {
          section.style.display = isVisible ? "" : "none";
        }

        if (isVisible) visibleCount++;
      });

      // Update dynamic totals
      const totalStat = document.getElementById('totalTagsStat');
      const totalDesc = document.getElementById('totalTagsDesc');
      if (totalStat) totalStat.innerText = visibleCount;
      if (totalDesc) totalDesc.innerText = visibleCount;
    }
    document.getElementById("sbSearch").addEventListener("input", applyFilters);
    if (document.getElementById("sbFilter")) {
      document.getElementById("sbFilter").addEventListener("change", applyFilters);
    }


    // ===== ACTIVE NAV HIGHLIGHT =====
    window.addEventListener("scroll", () => {
      const sections = document.querySelectorAll("section[id]");
      let current = "";
      sections.forEach(s => { if (window.scrollY >= s.offsetTop - 120) current = s.id; });
      document.querySelectorAll("#sbNav a").forEach(a => {
        a.classList.toggle("active", a.getAttribute("href") === "#" + current);
      });
    });

    // ===== SIDEBAR CLOSE BUTTON =====
    document.getElementById("sbClose").addEventListener("click", toggleSidebar);

    // ===== GREETING SYSTEM =====
    function getGreetingTime() {
      const hr = new Date().getHours();
      if (hr < 12) return "Good morning";
      if (hr < 17) return "Good afternoon";
      return "Good evening";
    }

    function updateGreetingDisplay() {
      const wrap = document.getElementById("greetingWrap");
      if (!wrap) return;
      const name = localStorage.getItem("userNameData") || "";
      const timeStr = getGreetingTime();
      if (name.trim() !== "") {
        wrap.innerHTML = `<span style="color:var(--text2);">${timeStr},</span> <span style="color:var(--accent2);">${name}</span>! ☀️`;
      } else {
        wrap.innerHTML = `<span style="color:var(--text2);">${timeStr}</span>! ☀️`;
      }
    }

    function saveUsername() {
      const name = document.getElementById("wmUsername").value.trim();
      localStorage.setItem("userNameData", name);
      localStorage.setItem("hasVisitedGuide", "true");
      document.getElementById("welcomeModal").close();
      updateGreetingDisplay();
    }

    function skipUsername() {
      localStorage.setItem("hasVisitedGuide", "true");
      document.getElementById("welcomeModal").close();
      updateGreetingDisplay();
    }

    function initGreeting() {
      try {
        const hasVisited = localStorage.getItem("hasVisitedGuide");
        if (!hasVisited) {
          const modal = document.getElementById("welcomeModal");
          if (modal && typeof modal.showModal === "function") {
            modal.showModal();
          } else if (modal) {
            modal.style.display = "block"; // Polyfill fallback
          }
        }
        updateGreetingDisplay();
      } catch (e) {
        console.error("Greeting system error:", e);
      }
    }

    // ===== INIT =====
    try {
      renderAll();
      updateFavCount();
      initGreeting();
      // Apply saved theme on load
      const savedTheme = localStorage.getItem("themeMode");
      if (savedTheme) {
        applyTheme(savedTheme);
      } else {
        applyTheme("dark");
      }
    } catch (e) {
      console.error("Init error:", e);
      // Ensure at least the header loads
      document.querySelector("header").style.display = "block";
    }