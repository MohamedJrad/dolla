import React from 'react';
import { Link } from 'react-scroll';
import { Container, Item, Name } from './styles';

type Section = {
	id: string;
	name: string;
	iconUrl: string;
};
type ScrollSetting = {
	spy?: boolean;
	smooth?: boolean;
	hashSpy?: boolean;
	offset?: number;
	duration?: number;
	delay?: number;
	isDynamic?: boolean;
	onSetActive?: any;
	onSetInactive?: any;
	ignoreCancelEvents?: boolean;
};
interface Props {
	sections: Section[];
	itemBg: string;
	bg: string;
	size: string;
	itemColor: string;
	direction: 'horizontal' | 'vertical';
	MobileOnly?: boolean;
	DesktopOnly?: boolean;
	scrollSetting: ScrollSetting;
}
const ReactScrollMenu = ({
	scrollSetting,
	direction,
	sections,
	itemBg,
	bg,
	size,
	itemColor,
	MobileOnly,
	DesktopOnly
}: Props) => {
	return (
		<Container id="menuNavbar" bg={bg} direction={direction} MobileOnly={MobileOnly} DesktopOnly={DesktopOnly}>
			{sections.map((section) => {
				return (
					<div key={section.id}>
						<Link
							activeClass="active"
							to={section.id}
							spy={scrollSetting.spy}
							smooth={scrollSetting.smooth}
							offset={scrollSetting.offset}
							duration={scrollSetting.duration}
							onSetActive={() => {
								scrollSetting.onSetActive();
							}}
						>
							<Item bg={itemBg} size={size}>
								{/* <Icon className="h-6 w-6 mr-2" src={section.iconUrl} /> */}
								<Name itemColor={itemColor}>{section.name}</Name>
							</Item>
						</Link>
					</div>
				);
			})}
		</Container>
	);
};

ReactScrollMenu.defaultProps = {
	sections: [
		{ id: '1', name: 'section1', iconUrl: '' },
		{ id: '2', name: 'section2', iconUrl: '' },
		{ id: '3', name: 'section3', iconUrl: '' },
		{ id: '4', name: 'section4', iconUrl: '' }
		// { id: 5, name: 'section5', iconUrl: '' },
		// { id: 6, name: 'section6', iconUrl: '' },
		// { id: 7, name: 'section7', iconUrl: '' },
		// { id: 8, name: 'section8', iconUrl: '' },
	],
	size: '20px',
	itemBg: 'red',
	bg: 'yellow',
	itemColor: '#fff',
	direction: 'horizontal'
};
export default ReactScrollMenu;
