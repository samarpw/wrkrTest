import {helper_functions, homepage_html} from './helper-functions.js';


// Export a default object containing event handlers
export default {
	// The fetch handler is invoked when this worker receives a HTTP(S) request
	// and should return a Response (optionally wrapped in a Promise)
	async fetch(request, env, ctx) {
		// You'll find it helpful to parse the request.url string into a URL object. Learn more at https://developer.mozilla.org/en-US/docs/Web/API/URL
		const url = new URL(request.url);
		const country_code = request.cf.country; //US,UK
		env.oStore.put('user_country', country_code);
		
		
		// You can get pretty far with simple logic like if/switch-statements
		switch (url.pathname) {
			case '/sub':
			return new Response('subing');
		}
		
		
		if (url.pathname.startsWith('/api/')) {
			var headers = helper_functions.CORS_Headers();
			headers['Content-Type'] = 'text/plain';
			//You can also use more robust routing
			return new Response(
				'aping',
				{headers: headers}
			);
		}
		
		
		
		return new Response(
			homepage_html(),
			{headers:{"Content-Type":"text/html"}}
		);
	},
	
	
	
	/* async scheduled(event, env, ctx) {
		ctx.waitUntil(doSomeTaskOnASchedule());
	}, */
};
