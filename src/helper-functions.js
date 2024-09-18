const helper_functions = {
	CORS_Headers : function () {
		return {
				"Access-Control-Allow-Origin": "*", 
				"Access-Control-Allow-Methods": "OPTIONS, POST, GET, DELETE, PUT", 
				"Access-Control-Allow-Headers": "x-requested-with, Content-Type, origin, authorization, accept, credentials, client-security-token",
				"Access-Control-Max-Age": "600"
			}
	},
};




function homepage_html() {
	var html = `I Try making requests to:
	<ul>
	<li><code><a href="/redirect?redirectUrl=https://example.com/">/redirect?redirectUrl=https://example.com/</a></code>,</li>
	<li><code><a href="/proxy?modify&proxyUrl=https://example.com/">/proxy?modify&proxyUrl=https://example.com/</a></code>, or</li>
	<li><code><a href="/api/todos">/api/todos</a></code></li>`
	;
	return html;
}



//Export functions object and the standalone functions.
export {helper_functions, homepage_html};













