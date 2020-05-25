import React from 'react'

export class Container extends React.Component {
	constructor() {
		super()
		this.state = { x: 1, dx: 1 }

		setInterval(() => {
			if (this.state.x > 9 || this.state.x < 1) {
				this.setState({dx: -this.state.dx})
			}
			this.setState({
				x: this.state.x += this.state.dx
			})
		},1000)
	}

	render() {
		let colors = [
			"green", "red", "blue", "black", 
			"white", "yellow", "purple", "grey", 
			"red", "blue", "black"
		]

		let dinamic = {
			color: colors[this.state.x],
			fontSize: `${this.state.x}rem`
		}

		return (
			<div>
				<h1>Container</h1>
				<hr/>
				<p style={dinamic}>{this.state.x}</p>
				<hr/>
				<h3>Dashboard</h3>
			</div>	
		)
	}
}