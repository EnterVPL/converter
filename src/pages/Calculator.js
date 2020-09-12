import React, { useState, useEffect } from 'react';
import { Button } from '../components/Button';

const url = 'https://api.ratesapi.io/api/latest/';

function Select(props) {
	const [rates, setRates] = useState([]);

	useEffect(() => {
		fetch(`${url}?base=PLN`)
		.then(response => response.json())
		.then(data => {
			setRates(Object.keys(data.rates));
		});
		return () => {
			//clearInterval
			//removeEventListerner
		}
	}, []);

	return (
		<select value={props.val} onChange={(event) => props.change(event.target.value)}>
			{rates.map((elem, index) => <option key={`curr-${elem}`} value={elem}>{elem}</option>)}
		</select>
	);
}

function Calculator () {
	const [amount, setAmount] = useState(0);
	const [currencyFrom, setCurrencyFrom] = useState('PLN');
	const [currencyTo, setCurrencyTo] = useState('USD');
	const [result, setResult] = useState('---');

	const handlerSubmit = (event) => {
		event.preventDefault();
		console.log(event);
		fetch(`${url}?base=${currencyFrom}`)
		.then(response => response.json())
		.then(data => {
			setResult(data.rates[currencyTo] * amount);
		});
	}

	return (
		<form onSubmit={handlerSubmit}>
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
			<div>Result: <span> {result} </span></div>
			<Button>Send</Button>
		</form>
	);
}

export default Calculator;