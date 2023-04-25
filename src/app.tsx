import React from 'react';
import ReactDOM from 'react-dom/client';

type Product = {
	category: string;
	price: string;
	stocked: boolean;
	name: string;
};

const products: Product[] = [
	{category: 'Fruits', price: '$1', stocked: true, name: 'Apple'},
	{category: 'Fruits', price: '$1', stocked: true, name: 'Dragonfruit'},
	{category: 'Fruits', price: '$2', stocked: false, name: 'Passionfruit'},
	{category: 'Vegetables', price: '$2', stocked: true, name: 'Spinach'},
	{category: 'Vegetables', price: '$4', stocked: false, name: 'Pumpkin'},
	{category: 'Vegetables', price: '$1', stocked: true, name: 'Peas'},
];

export default function App() {
	return (
		<>
			<div>
				<SearchForm />
				<ProductsTable products={products}/>
			</div>
		</>
	);
}

// Comp1
export function SearchForm() {
	return (
		<>
			<div className='search-bar'>
				<input type='text' placeholder='검색어를 입력하세요' />
			</div>
			<div>
				<input type='checkbox' id='only-stock' />
				<label htmlFor='only-stock'>
          Only show Products in stock
				</label>
			</div>
		</>
	);
}

// Comp2
export function ProductsTable({products}) {
	const rows = [];
	const setcategories = [];

	products.forEach((a, i) => {
		if (!setcategories.includes(a.category)) {
			rows.push(<ProductCategoryRow products={a}/>);
			setcategories.push(a.category);
		}

		rows.push(<ProductRow products={a}/>);
	});

	return (
		<table className='product-table'>
			<thead>
				<tr>
					<th>Name</th>
					<th>Price</th>
				</tr>
			</thead>
			<tbody>{rows}</tbody>
		</table>
	);
}

export function ProductCategoryRow({product}) {
	return (
		<>
			<tr>
				<th colSpan={2}>
					{product.category}
				</th>
			</tr>
		</>
	);
}

export function ProductRow({products}) {
	const name = products.stocked ? products.name
		: <span style={{color: 'red'}}>
			{products.name}
		</span>;
	return (
		<>
			<tr>
				<td>{name}</td>
				<td>{products.price}</td>
			</tr>
		</>
	);
}
