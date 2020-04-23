import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar as fasFaStar} from '@fortawesome/free-solid-svg-icons'
import {faStar as faFaStar} from '@fortawesome/free-regular-svg-icons'

interface Props {
	value: number
}

const Rating = ({value}: Props): JSX.Element => {
	let stars: JSX.Element[] = [];

	for (let i: number = 1; i <= 5; i++) {
		stars.push(<FontAwesomeIcon key={i} icon={i > value ? faFaStar : fasFaStar} />);
	}

	return (
		<>
			{stars}
		</>
	);
};

export default Rating;
