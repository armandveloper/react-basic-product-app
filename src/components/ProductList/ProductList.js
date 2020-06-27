import React from 'react';
import styles from './ProductList.module.css';

function ProductList({ products }) {
	return products.length === 0 ? (
		<div className={styles.noItems}>
			<p>No hay productos aún. Comience agregando uno</p>
		</div>
	) : (
		<ul className={styles.productList}>
			{products.map((product) => (
				<li key={product.id}>{product.name}</li>
			))}
		</ul>
	);
}

export default ProductList;
