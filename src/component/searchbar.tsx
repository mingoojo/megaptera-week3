import React from 'react';
import CheckBoxField from './checkboxfield';
import TextField from './TextField';
type SearchBarProps = {
	filterText: string;
	setFilterText: (value: string) => void;
	inStockOnly: boolean;
	setInStockOnly: (value: boolean) => void;
};
export default function SearchBar({filterText, setFilterText, inStockOnly, setInStockOnly}: SearchBarProps) {
	return (
		<div className='search-bar'>
			<TextField placeholder = 'Search...' filterText ={filterText} setFilterText={setFilterText}/>
			<CheckBoxField label='Only show products in stock' inStockOnly={inStockOnly} setInStockOnly={setInStockOnly}/>
		</div>
	);
}

