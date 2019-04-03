import React, { Component } from 'react';
import Square from '../Square/Square.js';
import logo from '../../logo.svg';
import './Board.css';

class Board extends React.Component {
	render() {
		return (
			<Square></Square>
		)
	}
};

export default Board;