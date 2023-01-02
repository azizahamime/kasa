
import React from 'react';
import { useParams } from 'react-router-dom';
import Carrousel from '../../components/Carrousel/Carrousel';

export default function Logement(props) {
	const { logId } = useParams();
	const location = props.locationList.filter((el) => el.id === logId).shift();
	console.log(location.pictures);
	return (

		<Carrousel images={location.pictures} title={location.title} />
	);


}