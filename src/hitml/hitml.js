window.addEventListener('DOMContentLoaded', () => {
	const hitml = document.querySelector('#hitml');
	hitml.style.fontSize = '0';

	let parseResult = [];

	function rec(element) {
		element.childNodes.forEach(node => {

			const result = {
				htag: node.nodeName,
				children: node.textContent
			}

			parseResult.push(result);

			rec(node);
		});
	} 

	rec(hitml);

	console.log(parseResult);
});
