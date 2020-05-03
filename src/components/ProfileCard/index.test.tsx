import Enzyme, {shallow, ShallowWrapper} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ProfileCard from ".";
import Rating from "../Rating";
import profilePicture from "../../assets/images/profile.jpg";
import React from "react";

Enzyme.configure({ adapter: new Adapter() });

describe('<ProfileCard />', () => {
	let wrapper: ShallowWrapper;

	beforeEach(() => {
		wrapper = shallow(<ProfileCard
			type="Type"
			profilePicture={profilePicture}
			name="Name"
			title="Title"
			address="Address"
			profileViews="1"
			websiteViews="1"
			avgRating={1}
			favorite={true}
		/>);
	});

	it('should render one <Rating /> component', () => {
		expect(wrapper.find(Rating)).toHaveLength(1);
	});
});