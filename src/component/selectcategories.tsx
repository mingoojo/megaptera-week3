import React from 'react';
import type Product from '../types/product';

export default function selectCategories(products: Product[]) {
	return (
		products.reduce((acc: string[], product: Product) => {
			const {category} = product; // 디스트럭처링문법 : product에서 category에 맞는 값만 추출한다.
			return acc.includes(category) ? acc : [...acc, category];
		}, [])
	);
}
