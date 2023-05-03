import React from 'react';
import type Product from '../types/product';
import SearchBar from './searchbar';
import ProductTable from './producttable';
import {useState, useEffect} from 'react';

function useProductsFilter(products: Product[]) {
	const [filterText, setFilterText] = useState<string>('');
	const [inStockOnly, setInStockOnly] = useState<boolean>(false);
	const filteredProducts = products.filter(product => (product.name.toLowerCase().includes(filterText.trim().toLocaleLowerCase()))).filter(product => (product.stocked || !inStockOnly));

	return {
		filterText, setFilterText, inStockOnly, setInStockOnly, filteredProducts,
	};
}

type FilterableProductTableProps = {
	products: Product[];
};

export default function FilterableProductTable({products}: FilterableProductTableProps) {
	const {filterText, setFilterText, inStockOnly, setInStockOnly, filteredProducts} = useProductsFilter(products);

	return (
		<div className='filterable-products-container'>
			<SearchBar
				filterText={filterText}
				setFilterText={setFilterText}
				inStockOnly={inStockOnly}
				setInStockOnly={setInStockOnly}
			/>
			<ProductTable products={filteredProducts} />
		</div>
	);
}

