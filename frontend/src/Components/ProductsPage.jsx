import React from 'react';
import './ProductGrid.css';

const products = [
  { id: 1, name: 'Spy x Family T-shirt', price: 25, category: 'Textbooks' },
  { id: 2, name: 'Green Man Jacket', price: 10, category: 'Textbooks' },
  { id: 3, name: 'iPhone 14 Pro Max', price: 1300, category: 'Textbooks' },
  { id: 4, name: 'Oversized T-shirt', price: 45, category: 'Textbooks' },
];

const ProductGrid = () => {
  return (
    <div className="container">
      <h2>Featured Category</h2>
      <nav className="breadcrumb">Home &gt; Featured Category</nav>
      <div className="categories">
        <button>All</button>
        <button>Textbooks</button>
        <button>Lab Kits</button>
        <button>ECE Lab Kits</button>
        <button>iClickers</button>
        <button>General Supplies</button>
        <button>Chargers</button>
      </div>

      <div className="filter-sort">
        <span>Filter</span>
        <span>Sort By: Relevant Products</span>
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <span>{product.category}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
