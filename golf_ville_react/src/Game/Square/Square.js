import React, { Component } from 'react';
import logo from '../../logo.svg';
import './Square.css';

class Square extends React.Component {
	render() {
		return (
			<div>
				<img src={logo} className="App-logo" alt="logo" />
			</div>
		)
	}
};

export default Square;