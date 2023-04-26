import React from 'react';
import type Product from '../types/product';
import selectCategories from './selectcategories';
import ProductsInCategory from './productsincategory';

type ProductTableProps = {
	products: Product[];
};

export default function ProductTable({products}: ProductTableProps) {
	const categories = selectCategories(products);

	return (
		<table className='product-table'>
			<thead>
				<tr>
					<th>Name</th>
					<th>Price</th>
				</tr>
			</thead>
			<tbody>
				{categories.map((category: string) => (
					<ProductsInCategory key={category} category={category} products={products} />
				))}
			</tbody>
		</table>
	);
}

