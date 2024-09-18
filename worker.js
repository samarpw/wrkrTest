// Export a default object containing event handlers
export default {
  // The fetch handler is invoked when this worker receives a HTTP(S) request
  // and should return a Response (optionally wrapped in a Promise)
  async fetch(request, env, ctx) {
    // You'll find it helpful to parse the request.url string into a URL object. Learn more at https://developer.mozilla.org/en-US/docs/Web/API/URL
    const url = new URL(request.url);


    // You can get pretty far with simple logic like if/switch-statements
    switch (url.pathname) {
      case '/sub':
        return new Response('subing');
    }


    if (url.pathname.startsWith('/api/')) {
      // You can also use more robust routing
      return new Response('aping');
    }


		
		return new Response(
			`I Try making requests to:
      <ul>
      <li><code><a href="/redirect?redirectUrl=https://example.com/">/redirect?redirectUrl=https://example.com/</a></code>,</li>
      <li><code><a href="/proxy?modify&proxyUrl=https://example.com/">/proxy?modify&proxyUrl=https://example.com/</a></code>, or</li>
      <li><code><a href="/api/todos">/api/todos</a></code></li>`,
			{ headers: { "Content-Type": "text/plain" } }
		);
  },
};