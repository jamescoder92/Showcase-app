import { useState, useEffect } from 'react';

function useCoffee() {
  const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/coffee')
        .then(response => response.json())
        .then(data => setProducts(data))
        .catch(error => console.error('Error fetching products:', error));
    }, []);

  return products;
}

export default useCoffee;