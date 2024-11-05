import React, { useState } from 'react';
import './SpecificProduct.css';

const ProductPage = () => {
  const [quantity, setQuantity] = useState(1);
  const [reviews] = useState([
    { id: 1, name: 'Daniel Forswell', date: 'July 17, 2023', text: 'This is an amazing product I love it.' },
    { id: 2, name: 'Huober Nickolson', date: 'July 17, 2023', text: 'This is an amazing product I love it.' },
    { id: 3, name: 'Kaitlyn Murphy', date: 'July 17, 2023', text: 'This is an amazing product I love it.' },
    { id: 4, name: 'Daniel Norback', date: 'July 17, 2023', text: 'This is an amazing product I love it.' },
  ]);
  const relatedProducts = [
    { id: 1, name: 'Sage Friendly T-Shirt', price: '$28' },
    { id: 2, name: 'Green Man Jacket', price: '$50' },
    { id: 3, name: 'Iphone 14 Pro Max', price: '$1200' },
    { id: 4, name: 'Oversized T-Shirt', price: '$48' },
  ];

  return (
    <div className="product-page">
      {/* Product Header */}
      <div className="product-header">
        <h1>G502 X Lightspeed Wireless Gaming Mouse</h1>
        <p className="price">$185.99</p>
      </div>

      {/* Image Gallery */}
      <div className="image-gallery">
        <img src="main-image.jpg" alt="Gaming Mouse" className="main-image" />
        <div className="thumbnail-gallery">
          <img src="thumb1.jpg" alt="Thumbnail 1" />
          <img src="thumb2.jpg" alt="Thumbnail 2" />
          <img src="thumb3.jpg" alt="Thumbnail 3" />
        </div>
      </div>

      {/* Product Selection */}
      <div className="product-selection">
        <label>Type: <select><option>Wireless</option><option>Wired</option></select></label>
        <label>Color: <select><option>Black</option><option>White</option></select></label>
        <label>Quantity: <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} /></label>
        <button className="buy-now">Buy Now</button>
        <button className="add-to-cart">Add to Cart</button>
      </div>

      {/* Product Information Tabs */}
      <div className="product-tabs">
        <button>Detail Product</button>
        <button>Seller Information</button>
        <button>Reviews</button>
        <button>Related Product</button>
      </div>

      {/* Reviews Section */}
      <div className="reviews">
        <h2>Product Comment</h2>
        {reviews.map((review) => (
          <div key={review.id} className="review">
            <p><strong>{review.name}</strong> - {review.date}</p>
            <p>{review.text}</p>
          </div>
        ))}
      </div>

      {/* Related Products */}
      <div className="related-products">
        <h2>Related Products</h2>
        <div className="product-list">
          {relatedProducts.map((product) => (
            <div key={product.id} className="related-product">
              <p>{product.name}</p>
              <p>{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
