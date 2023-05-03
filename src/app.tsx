import React, {useEffect, useRef, useState} from 'react';

import type Product from './types/product';
import TimerControl from './TimerControl';
import FilterableProductTable from './component/filerableproducttable';
import useFetchProducts from './hooks/useFetchProducts';

export default function App() {
	const products = useFetchProducts();

	return (
		<div>
			<TimerControl/>
			<FilterableProductTable products={products} />
		</div>
	);
}

