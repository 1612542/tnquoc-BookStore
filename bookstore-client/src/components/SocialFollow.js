import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';

const SocialFollow = () => {
	return (
		<BottomNavigation showLabels style={{ width: '300px' }}>
			<BottomNavigationAction label="Youtube" icon={<YouTubeIcon color="secondary" />} />
			<BottomNavigationAction label="Facebook" icon={<FacebookIcon color="primary" />} />
			<BottomNavigationAction label="Twitter" icon={<TwitterIcon color="primary" />} />
			<BottomNavigationAction label="Instagram" icon={<InstagramIcon />} />
		</BottomNavigation>
	);
};

export default SocialFollow;
