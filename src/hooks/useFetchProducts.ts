import {useState, useEffect} from 'react';
import type Product from '../types/product';
import React from 'react';

export default function useFetchProducts() {
	const [products, setProducts] = useState<Product[]>([]);

	useEffect(() => {
		async function fetchProducts() {
			const response = await fetch('http://localhost:3000/products');
			const data = await response.json();
			const {products} = data;
			setProducts(products);
		}

		fetchProducts();
	}, []);

	return products;
}
