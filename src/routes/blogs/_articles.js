// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.

const posts = [
  {
    body: `
		  <p>外國某啲樂評會將「唱作人」(Singer/Songwriter) 當作一種音樂風格。呢類唱作人，通常係指包辦 詞／曲／唱，甚至 彈／編 嘅音樂人，而題材上較多寫自身經歷、感受，基本上就係「我手寫我心、我口唱我心」嘅人。</p>
			<p>我鍾意聽唱作人音樂，特別係一啲好似「切咗自己一忽肉」嚟唱俾你聽嘅音樂。明明素未謀面，但你可以通過音樂，認識到呢個人。好彩嘅話，你會喺他人音樂中，揾到自己嘅影子、自己心靈嘅一部份，揾到共鳴。記得五年前第一次聽魏如萱嘅歌，即刻有種感覺，OMG，點解呢個人諗嘢咁似我嘅？</p>
			<p>然後你不斷去留意、支持呢啲唱作人，見證佢地啲成長，並從中發掘自己嘅可能性。聽音樂變咗唔只係一種娛樂同消費，更加係支持一種理念，支持另一個自己。見到魏如萱攞金曲歌后，原來會好似見到自己嘅理念獲得肯定咁，原來呢種脆弱、呢種堅強，都會有人認同。</p>
			<p>講番James Blake，以男音樂人嚟講，佢嘅音樂誠實、脆弱得可怕，令電音變得不再膚淺，好抵讚，而呢首新歌更加係終極 eargasm 👍🏻</p>
			<iframe type="text/html" width="360" height="360" frameborder="0"
  						src="https://www.youtube.com/embed/PwR99W2r5JU"></iframe>
		`,
    createdAt: '2020-10-18',
    description: '我鍾意聽唱作人音樂，特別係一啲好似「切咗自己一忽肉」嚟唱俾你聽嘅音樂。',
    slug: '唱作人-james-blake',
    title: '唱作人 // James Blake',
  },
  // {
  // 	body: `
  // 		<p>First, you have to know what <a href='https://svelte.dev'>Svelte</a> is. Svelte is a UI framework with a bold new idea: rather than providing a library that you write code with (like React or Vue, for example), it's a compiler that turns your components into highly optimized vanilla JavaScript. If you haven't already read the <a href='https://svelte.dev/blog/frameworks-without-the-framework'>introductory blog post</a>, you should!</p>
  //
  // 		<p>Sapper is a Next.js-style framework (<a href='blog/how-is-sapper-different-from-next'>more on that here</a>) built around Svelte. It makes it embarrassingly easy to create extremely high performance web apps. Out of the box, you get:</p>
  //
  // 		<ul>
  // 			<li>Code-splitting, dynamic imports and hot module replacement, powered by webpack</li>
  // 			<li>Server-side rendering (SSR) with client-side hydration</li>
  // 			<li>Service worker for offline support, and all the PWA bells and whistles</li>
  // 			<li>The nicest development experience you've ever had, or your money back</li>
  // 		</ul>
  //
  // 		<p>It's implemented as Express middleware. Everything is set up and waiting for you to get started, but you keep complete control over the server, service worker, webpack config and everything else, so it's as flexible as you need it to be.</p>
  // 	`,
  // 	slug: 'what-is-sapper',
  // 	title: 'What is Sapper?',
  // },
  // {
  // 	body: `
  // 		<h2>Step one</h2>
  // 		<p>Create a new project, using <a href='https://github.com/Rich-Harris/degit'>degit</a>:</p>
  //
  // 		<pre><code>npx degit "sveltejs/sapper-template#rollup" my-app
  // 		cd my-app
  // 		npm install # or yarn!
  // 		npm run dev
  // 		</code></pre>
  //
  // 		<h2>Step two</h2>
  // 		<p>Go to <a href='http://localhost:3000'>localhost:3000</a>. Open <code>my-app</code> in your editor. Edit the files in the <code>src/routes</code> directory or add new ones.</p>
  //
  // 		<h2>Step three</h2>
  // 		<p>...</p>
  //
  // 		<h2>Step four</h2>
  // 		<p>Resist overdone joke formats.</p>
  // 	`,
  // 	slug: 'how-to-use-sapper',
  // 	title: 'How to use Sapper',
  // },
  // {
  // 	body: `
  // 		<p>In war, the soldiers who build bridges, repair roads, clear minefields and conduct demolitions — all under combat conditions — are known as <em>sappers</em>.</p>
  //
  // 		<p>For web developers, the stakes are generally lower than those for combat engineers. But we face our own hostile environment: underpowered devices, poor network connections, and the complexity inherent in front-end engineering. Sapper, which is short for <strong>S</strong>velte <strong>app</strong> mak<strong>er</strong>, is your courageous and dutiful ally.</p>
  // 	`,
  // 	slug: 'why-the-name',
  // 	title: 'Why the name?',
  // },
  // {
  // 	body: `
  // 		<p><a href='https://github.com/zeit/next.js'>Next.js</a> is a React framework from <a href='https://vercel.com/'>Vercel</a>, and is the inspiration for Sapper. There are a few notable differences, however:</p>
  //
  // 		<ul>
  // 			<li>It's powered by <a href='https://svelte.dev'>Svelte</a> instead of React, so it's faster and your apps are smaller</li>
  // 			<li>Instead of route masking, we encode route parameters in filenames. For example, the page you're looking at right now is <code>src/routes/blog/[slug].svelte</code></li>
  // 			<li>As well as pages (Svelte components, which render on server or client), you can create <em>server routes</em> in your <code>routes</code> directory. These are just <code>.js</code> files that export functions corresponding to HTTP methods, and receive Express <code>request</code> and <code>response</code> objects as arguments. This makes it very easy to, for example, add a JSON API such as the one <a href='blog/how-is-sapper-different-from-next.json'>powering this very page</a></li>
  // 			<li>Links are just <code>&lt;a&gt;</code> elements, rather than framework-specific <code>&lt;Link&gt;</code> components. That means, for example, that <a href='blog/how-can-i-get-involved'>this link right here</a>, despite being inside a blob of HTML, works with the router as you'd expect.</li>
  // 		</ul>
  // 	`,
  // 	slug: 'how-is-sapper-different-from-next',
  // 	title: 'How is Sapper different from Next.js?',
  // },
  // {
  // 	body: `
  // 		<p>We're so glad you asked! Come on over to the <a href='https://github.com/sveltejs/svelte'>Svelte</a> and <a href='https://github.com/sveltejs/sapper'>Sapper</a> repos, and join us in the <a href='https://svelte.dev/chat'>Discord chatroom</a>. Everyone is welcome, especially you!</p>
  // 	`,
  // 	slug: 'how-can-i-get-involved',
  // 	title: 'How can I get involved?',
  // },
];

// Format blog posts data
posts
  .filter(post => post && post.slug && post.title)
  .forEach((post) => {
    post.body = post.body.replace(/^\t{3}/gm, '')
  })

export default posts
