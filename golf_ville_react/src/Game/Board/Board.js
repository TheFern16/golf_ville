import React, { Component } from 'react';
import Square from '../Square/Square.js';
import logo from '../../logo.svg';
import './Board.css';


function GenerateList() {
	const nums = [1,2,3,4,5];
	const items = nums.map((number) => 
		<li><Square value={number} /></li>
	);
	return (
		<ul>
			{items}
		</ul>
	)
};

class Board extends React.Component {
	render() {
		return (
			<GenerateList />
		)
	}
};

export default Board;