import { useState } from "react";

function Values({ product, setEditProduct }) {
    const [name, setName] = useState(product.name)
    const [price, setPrice] = useState(product.price)

    function handleEdit() {
        fetch(`http://localhost:3001/products/${product.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ...product, name, price: parseFloat(price) })
        })
        .then(response => response.json())
        .then(() => {
            alert('Product updated successfully!')
            setEditProduct(null)
        })
        .catch(error => console.error('Error updating product:', error))
    }

    return (
        <div className="edit-form">
            <h3>Edit Product</h3>
            <input value={name} onChange={(e) => setName(e.target.value)} />
            <input value={price} onChange={(e) => setPrice(e.target.value)} />
            <button onClick={handleEdit}>Save Changes</button>
            <button onClick={() => setEditProduct(null)}>Cancel</button>
        </div>
    )
}

export default Values
