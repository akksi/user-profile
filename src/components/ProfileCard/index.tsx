import React, {Dispatch, FunctionComponent, SetStateAction, useState} from 'react';
import './index.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart as fasFaHeart} from '@fortawesome/free-solid-svg-icons'
import {faHeart as faFaHeart} from '@fortawesome/free-regular-svg-icons'
import {IconDefinition} from "@fortawesome/fontawesome-common-types";

import Rating from "../Rating";

type Props = {
	type: string;
	profilePicture: string;
	name: string;
	title: string;
	address: string;
	profileViews: string;
	websiteViews: string;
	avgRating: number;
	favorite: boolean;
}

type StateHook = [
	boolean,
	Dispatch<SetStateAction<boolean>>
];

const ProfileCard : FunctionComponent<Props> = (props: Props): JSX.Element => {
	const [liked, setLiked] : StateHook = useState<boolean>(props.favorite);

	const likeIcon: IconDefinition = liked ? fasFaHeart : faFaHeart;
	const likeButtonClassName: string = liked ? 'filled' : 'empty';

	return (
		<div className="profile-card">
			<header>
				<div className="profile-card-type">{props.type} Profile</div>
				<button
					className="like-button"
					onClick={() => setLiked(!liked)}
				>
					<FontAwesomeIcon className={likeButtonClassName} icon={likeIcon} />
				</button>
			</header>
			<div className="personal-info">
				<figure>
					<img src={props.profilePicture}
					     alt={`${props.name}`} />
				</figure>
				<h2>{props.name}</h2>
				<div className="title">{props.title}</div>
				<address>{props.address}</address>
			</div>
			<footer>
				<div className="profile-views">
					<div className="metric-value">{props.profileViews}</div>
					<div className="metric-name">Profile Views</div>
				</div>
				<div className="website-views">
					<div className="metric-value">{props.websiteViews}</div>
					<div className="metric-name">Website Views</div>
				</div>
				<div className="avg-views">
					<div className="metric-value rating">
						<Rating value={props.avgRating} />
					</div>
					<div className="metric-name">Avg. Rating</div>
				</div>
			</footer>
		</div>
	);
};

export default ProfileCard;
