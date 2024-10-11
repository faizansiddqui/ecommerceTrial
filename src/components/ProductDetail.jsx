import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProductDetail = () => {
  const { id } = useParams();
  const product = useSelector((state) => state.products.items.find(p => p.id === Number(id)));

  return (
    <div>
      {product ? (
        <>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
        </>
      ) : (
        <p>Product not found.</p>
      )}
    </div>
  );
};

export default ProductDetail;
