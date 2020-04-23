import React from 'react';
import './App.scss';
import profilePicture from './assets/images/profile.jpg';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faHeart as fasFaHeart, faStar as fasFaStar } from '@fortawesome/free-solid-svg-icons'
import { faHeart as faFaHeart, faStar as faFaStar } from '@fortawesome/free-regular-svg-icons'

function App() {
	return (
		<div className="profile-card">
			<header>
				<div className="profile-card-type">Developer Profile</div>
				<button className="like-button"><FontAwesomeIcon icon={faFaHeart} /></button>
			</header>
			<div className="personal-info">
				<figure>
					<img src={profilePicture}
					     alt="Szabolcs Markó's profile picture" />
				</figure>
				<h2>Szabolcs Markó</h2>
				<div className="title">React Engineer</div>
				<address>Szeged, Hungary</address>
			</div>
      <footer>
	      <div className="profile-views">
		      <div className="metric-value">1,234</div>
		      <div className="metric-name">Profile Views</div>
	      </div>
	      <div className="website-views">
		      <div className="metric-value">5,678</div>
		      <div className="metric-name">Website Views</div>
	      </div>
	      <div className="avg-views">
		      <div className="metric-value rating">
			      <FontAwesomeIcon icon={fasFaStar} />
			      <FontAwesomeIcon icon={fasFaStar} />
			      <FontAwesomeIcon icon={fasFaStar} />
			      <FontAwesomeIcon icon={fasFaStar} />
			      <FontAwesomeIcon icon={faFaStar} />
		      </div>
		      <div className="metric-name">Avg. Rating</div>
	      </div>
      </footer>
		</div>
	);
}

export default App;
