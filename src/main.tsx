import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import App2 from './app2';

function main() {
	const element = document.getElementById('root');

	if (!element) {
		return;
	}

	const root = ReactDOM.createRoot(element);

	root.render(<App2 />);
}

main();
