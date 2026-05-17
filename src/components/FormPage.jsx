import { useState } from "react"
import Values from "./Values"

function FormPage() {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [origin, setOrigin] = useState('')
    const [price, setPrice] = useState('')
    const [editProduct, setEditProduct] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault()

        const newProduct = { name, description, origin, price: parseFloat(price) }

        fetch('http://localhost:3001/products', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newProduct)
        })
        .then(response => response.json())
        .then(() => {
            alert('Product added successfully!')
            setName('')
            setDescription('')
            setOrigin('')
            setPrice('')
        })
        .catch(error => console.error('Error adding product:', error))
    }
    
    return (
               <div className="admin-page">
            <h2>Admin Portal</h2>

            <div className="admin-form">
                <h3>Add New Product</h3>
                <input type ="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                <input type ="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
                <input type ="text" placeholder="Origin" value={origin} onChange={(e) => setOrigin(e.target.value)} />
                <input type ="number" placeholder="Price (Ksh)" value={price} onChange={(e) => setPrice(e.target.value)} />
                <button onClick={handleSubmit}>Add Product</button>
            </div>

            {editProduct && <Values product={editProduct} setEditProduct={setEditProduct} />}

            </div>
    )
}
 

export default FormPage
                