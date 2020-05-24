import './styles/index.sass'
import React from 'react'
import ReactDOM from 'react-dom'
import { Container } from './components/Container'

window.onload = () => {
	ReactDOM.render(
		<Container />, document.querySelector('#root')
	)

	console.log(`...${process.env.NODE_ENV} env...`)
}