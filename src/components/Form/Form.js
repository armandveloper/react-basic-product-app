import React, { useState } from 'react';
import styles from './Form.module.css';
import shortid from 'shortid';

function Form({ setProduct, products }) {
	const [productName, setProductName] = useState('');
	const handleSubmit = (e) => {
		e.preventDefault();
		if (productName === '') {
			return;
		}
		setProduct([
			...products,
			{ id: shortid.generate(), name: productName },
		]);
		setProductName('');
	};
	return (
		<form action="#" className={styles.form} onSubmit={handleSubmit}>
			<label htmlFor="product-name">Nombre producto</label>
			<input
				type="text"
				name="product-name"
				id="product-name"
				className={styles.input}
				value={productName}
				onChange={(e) => setProductName(e.target.value.trim())}
			/>
			<input type="submit" value="Agregar" className={styles.button} />
		</form>
	);
}

export default Form;
