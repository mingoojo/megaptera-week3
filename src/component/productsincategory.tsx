import React from 'react';
import type Product from '../types/product';

type ProductsInCategoryProps = {
	category: string;
	products: Product[];
};

export default function ProductsInCategory({category, products}: ProductsInCategoryProps) {
	return (
		<>
			<tr>
				<th colSpan={2}>
					{category}
				</th>
			</tr>
			{products.filter(product => product.category === category).map(product => (
				<tr key={product.name}>
					<td>
						<span style={{color: product.stocked ? '#000' : '#F00'}}>
							{product.name}
						</span>
					</td>
					<td>{product.price}</td>
				</tr>
			))}
		</>
	);
}
