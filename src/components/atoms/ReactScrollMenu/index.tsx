import React, { useState, useEffect } from 'react';
import NavbarContainer from '../../atoms/NavbarContainer';
import NavbarLogo from '../../atoms/DollaLogo';
import SimpleBurgerMenuIcon from '../../atoms/SimpleBurgerMenuIcon';
import ReactScrollMenu from '../../atoms/ReactScrollMenu';
import NavBtn from '../../atoms/DollaBtn';
import SidebarContainer from '../../atoms/SidebarContainer';
import { default as NextLink } from 'next/link';

const DollaNavbar = () => {
	const sections = [
		{ id: 'about', name: 'About', iconUrl: '' },
		{ id: 'discover', name: 'Discover', iconUrl: '' },
		{ id: 'services', name: 'Services', iconUrl: '' },
		{ id: 'signup', name: 'Sign Up', iconUrl: '' }
	];

	const closeSideBar = () => {
		setSidebarState(false);
	};
	const scrollSetting = {
		spy: true,
		smooth: true,
		offset: -60,
		duration: 500,
		onSetActive: closeSideBar
	};
	const [ sidebarState, setSidebarState ] = useState(false);
	const burgerClicked = () => {
		setSidebarState(true);
	};

	// const [ bg, setBg ] = useState('#0d0d0d');

	// const changeNav = () => {
	// 	if (window.scrollY >= 80) {
	// 		//setScrollNav(true);

	// 		setBg('#0d0d0d');
	// 	} else {
	// 		//setScrollNav(false);

	// 		setBg('transparent');
	// 	}
	// };

	// useEffect(() => {
	// 	window.addEventListener('scroll', changeNav);
	// }, []);

	return (
		<NavbarContainer bg={'#0d0d0d'}>
			<NextLink href="/">
				<NavbarLogo bg={'#0d0d0d'} color="#fff" />
			</NextLink>
			<SimpleBurgerMenuIcon color="#fff" onClick={burgerClicked} />
			<ReactScrollMenu
				sections={sections}
				bg={'#0d0d0d'}
				itemBg={'#0d0d0d'}
				direction="horizontal"
				DesktopOnly={true}
				scrollSetting={scrollSetting}
			/>

			<NavBtn label="Sign In" DesktopOnly={true} color="#fff" />

			<SidebarContainer isOpen={sidebarState} setIsOpen={setSidebarState}>
				<ReactScrollMenu
					scrollSetting={scrollSetting}
					sections={sections}
					bg="#0d0d0d"
					itemBg="#0d0d0d"
					direction="vertical"
				/>
				<div style={{ height: '50px', width: '50px' }}> </div>
				<NavBtn label="Sign In" color="#fff" />
			</SidebarContainer>
		</NavbarContainer>
	);
};

export default DollaNavbar;
