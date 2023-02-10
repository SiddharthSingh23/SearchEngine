import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import ReactPlayer from 'react-player'

import { useResultContext } from '../context/ResultContextProvider'
import { Loading } from '../components/Loading'
import '../css/Results.css'

export const Results = () => {
	const { getResults, results, searchTerm, setSearchTerm, isLoading } = useResultContext();
	const location = useLocation();	// images, videos

	setSearchTerm("taylor")
	useEffect(() => {
		if(location.pathname === '/images'){
			getResults(`ImageSearchAPI?q=${searchTerm}`)
		}
		else if(location.pathname === '/news'){
			getResults(`NewsSearchAPI?q=${searchTerm}`)
		}
		else {
			getResults(`WebSearchAPI?q=${searchTerm}`)
		}


		// getResults('WebSearchAPI?q=taylor%20swift')
	}, [])


	if (isLoading) return <Loading />;

	switch (location.pathname) {
		case '/search':
			return (
				<div className='Results'>
					{results?.value?.map(({ url, title }, index) => (
						<div key={index} className="result">
							<a href={url} target='_blank' rel='noreferrer' >
								<p className='result_link'>
									{url.length > 30 ? url.substring(0, 30) : url}
								</p>

								<p className='result_title'>
									{title}
								</p>
							</a>
						</div>
					))}
				</div>
			);

		case '/images':
			return 'IMAGES';

		case '/videos':
			return 'VIDEOS';

		case '/news':
			return 'NEWS';

		default:
			return 'ERROR';
	}
}
