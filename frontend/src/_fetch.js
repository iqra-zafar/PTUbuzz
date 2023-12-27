export async function _fetch(url, obj = {}) {
	let headers = {};
	let { method = 'GET', body = undefined } = obj;

	if (body) {
		headers['Content-Type'] = 'application/json';
	}

	const options = {
		headers,
		body: JSON.stringify(body),
		method,
		credentials: 'include',
	};
    let finalUrl = process.env.REACT_APP_API_BASE_URL + url;
	let res = await fetch(finalUrl, options);
    res = await res.json();
	return res;
}