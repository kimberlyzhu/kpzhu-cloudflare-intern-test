//website here: https://kpzhu-internshipapp.kpzhu.workers.dev/
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})
/**
 * Respond with hello worker text
 * @param {Request} request
 */
async function handleRequest(request) {
	console.log("HIII handle Request");
	var newURL = (await (await fetch(url)).json()).variants[Math.round(Math.random())];
	console.log(newURL);
	var webpage = await fetch(newURL)
	toReturn = new HTMLRewriter().on('*', new ElementHandler()).transform(webpage)
	return toReturn
  	//return Response.redirect(newURL);
  // return new Response('Hello worker!', {
  //   headers: { 'content-type': 'text/plain' },
  // })
}

class ElementHandler {
  element(element) {
    // An incoming element, such as `div`
    console.log(`Incoming element: ${element.tagName}`)
  }

  comments(comment) {
    // An incoming comment
  }

  text(text) {
    // An incoming piece of text
  }
}