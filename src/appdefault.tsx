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
export default function AppDefaults() {
	return (
		<div className='filterable-products-container'>
			<div className='search-bar'>
				<input type='text' placeholder='검색어를 입력하세요' />
			</div>
			<div>
				<input type='checkbox' id='only-stock' />
				<label htmlFor='only-stock'>
            Only show Products in stock
				</label>
			</div>
			<table className='product-table'>
				<thead>
					<tr>
						<th>Name</th>
						<th>Price</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th colSpan={2}>
							{products[0].category}
						</th>
					</tr>
					{products.filter(product => product.category === products[0].category).map(product => (
						<tr key={product.name}>
							<td>{product.name}</td>
							<td>{product.price}</td>
						</tr>
					))}
					<tr>
						<th colSpan={2}>
							{products[3].category}
						</th>
					</tr>
					{products.filter(product => product.category === products[3].category).map(product => (
						<tr key={product.name}>
							<td>{product.name}</td>
							<td>{product.price}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
