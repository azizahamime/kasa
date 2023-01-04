import React from 'react';
import starFull from '../../assets/starFull.svg';
import starEmpty from '../../assets/star.svg';

export default function Rating({ rating }) {
	const star = [];
	for (let i = 1; i <= 5; i++) {
		i <= rating ? star.push(<img src={starFull} alt='star-full' />) : star.push(<img src={starEmpty} alt='star-empty' />);
	}
	return <div className='star'>{star}</div>;
}