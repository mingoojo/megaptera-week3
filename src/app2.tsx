type Product =  {
  category: string,
  price: string,
  stocked: boolean,
  name: string,
}

const products:Product[] = [
	{ category: "Fruits", price: "$1", stocked: true, name: "Apple" },
	{ category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
	{ category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
	{ category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
	{ category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
	{ category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
  ]

export default function App2() {
  return (
    <FilterableProductTable products={products}/>
  );
}



export function FilterableProductTable({products}){
  return (
    <div className='filterable-products-container'>
      <SearchBar/>
      <ProductTable products={products} />
    </div>
  )
}

export function SearchBar(){
  return(
    <>
    <div className='search-bar'>
        <input type="text" placeholder='검색어를 입력하세요' />
      </div>
      <div>
        <input type="checkbox" id='only-stock' />
        <label htmlFor="only-stock">
          Only show Products in stock
        </label>
      </div>
    </>
  )
}

export function ProductTable({products}){
  let row = []
  let categories = []
  let sorting = []
  products.forEach((product) =>{
    if(!categories.includes(product.category)){
      categories.push(product.category)
      row.push(<ProductCategoryRow category = {product.category} products = {products}/>)
    }
    // row.push(<ProductRow products = {product}/>)
  })


  console.log(categories)
  return(
    <table className='product-table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {row}
        </tbody>
      </table>
  )
}

export function ProductCategoryRow({category, products}){
  return(
    <>
      <tr>
        <th colSpan={2}>
          {category}
        </th>
      </tr>
      {
        products.filter((a)=>{return(a.category == category)}).map((product)=>{
          return(
            <tr>
              {product.stocked? <td>{product.name}</td>: <td style={{ color: 'red' }}>{product.name}</td>}
              <td>{product.price}</td>
            </tr>
          )
        })

      }
    </>

  )
}