import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';

import { Results } from './Results'
import '../css/Content.css'

export const Content = () => {
	return (
		<div className='Content'>
			<Routes>
				<Route exact path='/'
					element={<Navigate replace to="/home" />}
				/>

				<Route path='/search'
					element={<Results />}
				/>

				<Route path='/images'
					element={<Results />}
				/>

				<Route path='/news'
					element={<Results />}
				/>

				<Route path='/videos'
					element={<Results />}
				/>
			</Routes>
		</div>
	)
}
