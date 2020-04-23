import React from 'react';
import './App.scss';
import profilePicture from './assets/images/profile.jpg';


import ProfileCard from "./components/ProfileCard";

const App = () => {
	return (
		<>
			<ProfileCard
				type="Developer"
				profilePicture={profilePicture}
				name="Szabolcs Markó"
				title="React Developer"
				address="Szeged, Hungary"
				profileViews="1,234"
				websiteViews="5,678"
				avgRating={4}
				favorite={false}
			/>
			<ProfileCard
				type="Developer"
				profilePicture={profilePicture}
				name="Szabolcs Markó"
				title="React Developer"
				address="Szeged, Hungary"
				profileViews="1,234"
				websiteViews="5,678"
				avgRating={5}
				favorite={true}
			/>
		</>
	);
};

export default App;
