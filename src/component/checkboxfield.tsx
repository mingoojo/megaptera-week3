import React, {useState, useRef} from 'react';
type CheckBoxFieldProps = {
	label: string;
	inStockOnly: boolean;
	setInStockOnly: (value: boolean) => void;
};

export default function CheckBoxField({label, inStockOnly, setInStockOnly}: CheckBoxFieldProps) {
	const id = useRef(`${label}`.replace(/ /g, '-').toLowerCase());
	const handleChange = () => {
		setInStockOnly(!inStockOnly);
	};

	return (
		<>
			<input type='checkbox' id={id.current} checked={inStockOnly} onChange={handleChange}/>
			<label htmlFor={id.current}>
				{label}
			</label>
		</>
	);
}
