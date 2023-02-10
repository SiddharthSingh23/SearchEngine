import React from 'react';
import { Puff } from 'react-loader-spinner';

import '../css/Loading.css'

export const Loading = () => {
  return (
    <div className='Loading'>
        <Puff color="#00BFFF" height={550} width={80} />
    </div>
  )
}
