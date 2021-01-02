import React from 'react';
import { Link } from 'react-router-dom';

const products = [
  { id: '1', label: 'Macbook' },
  { id: '2', label: 'Iphone' },
  { id: '3', label: 'Book' },
  { id: '4', label: 'Microphone' }
];

export const CatalogView = () => {
  return (
    <div>
      <h3>Catalog</h3>
      {products.map(({ id, label }) => (
        <Link to={`/product/${id}`} key={id}>
          {label}
          <br />
        </Link>
      ))}
    </div>
  );
};

export const ProductView = ({ match }) => {
  console.log(match.params.id);
  const product = products.find(item => item.id === match.params.id);
  return (
    <div>
      <h3>Product ID: {match.params.id}</h3>
      <h3>
        {product.id} - {product.label}
      </h3>
      <Link to={`/catalog`}>Back to catalog</Link>
    </div>
  );
};
