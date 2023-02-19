import React from 'react';
import ReactDOM from 'react-dom/client';
import Bootstrap from './bootstrap/Bootstrap';
import Front from './pages/front/Front';

ReactDOM.createRoot(document.querySelector('#root')!).render(
	<React.StrictMode>
		<Bootstrap>
			<Front />
		</Bootstrap>
	</React.StrictMode>,
);
