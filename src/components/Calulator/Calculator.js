import React, { useState } from 'react';


function Select(props) {
	return (
		<select defaultValue={props.val} onChange={(event) => props.change(event.target.value)}>
			<option value="USD">USD</option>
			<option value="PLN">PLN</option>
			<option value="GBP">GBP</option>
			<option value="EUR">EUR</option>
		</select>
	);
}

function Calculator () {
	const [amount, setAmount] = useState(0);
	const [currencyFrom, setCurrencyFrom] = useState('PLN');
	const [currencyTo, setCurrencyTo] = useState('USD');

	return (
		<form>
			<div>
				<input type="number" placeholder="Amount" onChange={(event) => setAmount(event.target.value)} />
			</div>
			<div>
				<span>From:</span>
				<Select val={currencyFrom} change={setCurrencyFrom} handler="" />
			</div>
			<div>
				<span>To:</span>
				<Select val={currencyTo} change={setCurrencyTo} />
			</div>
			<div>Result: <span> {amount} </span></div>
		</form>
	);
}

export default Calculator;