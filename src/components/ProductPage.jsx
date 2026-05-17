import { useState } from 'react';
import useCoffee from '../hooks/useCoffee';
import Search from './Search';

function ProductPage() {
  const products = useCoffee();
  const [searchTerm, setSearchTerm] = useState('');

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="shop-page">
            <h2>Shop Our Products</h2>
            <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <div className="product-list">
                {filteredProducts.map(product => (
                    <div key={product.id} className="product-card">
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p>Origin: {product.origin}</p>
                        <p className='price'>Ksh {product.price.toFixed(2)}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductPage;