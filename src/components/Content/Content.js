import React, { useState, useEffect } from 'react';
import styles from './Content.module.css';
import Form from '../Form/Form';
import ProductList from '../ProductList/ProductList';

function Content() {
	const [products, setProduct] = useState(
		localStorage.getItem('products')
			? JSON.parse(localStorage.getItem('products'))
			: []
	);
	useEffect(() => {
		localStorage.setItem('products', JSON.stringify(products));
	}, [products]);
	return (
		<div className={styles.content}>
			<h1 className={styles.title}>Aplicación de Productos</h1>
			<Form setProduct={setProduct} products={products} />
			<ProductList products={products} />
		</div>
	);
}

export default Content;
