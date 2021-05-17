import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { SocialIconLink, SocialIcons } from './styles';

type Account = {
	type: 'facebook' | 'twitter' | 'youtube' | 'instagram';
	link: 'string';
};

interface Props {
	accounts: Account[];
	color: string;
}

const SocialMediaIcons = ({ accounts, color }: Props) => {
	const Facebook = ({ link }) => (
		<SocialIconLink color={color} href={link} target="_blank" aria-label="Facebook">
			<FaFacebook />
		</SocialIconLink>
	);
	const Twitter = ({ link }) => (
		<SocialIconLink color={color} href={link} target="_blank" aria-label="Twitter">
			<FaTwitter />
		</SocialIconLink>
	);
	const Youtube = ({ link }) => (
		<SocialIconLink color={color} href={link} target="_blank" aria-label="Youtube">
			<FaYoutube />
		</SocialIconLink>
	);
	const Instagram = ({ link }) => (
		<SocialIconLink color={color} href={link} target="_blank" aria-label="Instagram">
			<FaInstagram />
		</SocialIconLink>
	);

	const icons: any[] = [];
	accounts.map((account) => {
		switch (account.type) {
			case 'facebook':
				icons.push(<Facebook link={account.link} />);
				break;
			case 'twitter':
				icons.push(<Twitter link={account.link} />);
				break;
			case 'instagram':
				icons.push(<Instagram link={account.link} />);
				break;
			case 'youtube':
				icons.push(<Youtube link={account.link} />);
				break;
		}
	});

	return (
		<SocialIcons>
			{icons.map((icon) => {
				return icon;
			})}
		</SocialIcons>
	);
};

SocialMediaIcons.defaultProps = {
	accounts: [
		{ type: 'facebook', link: 'facebook.com' },
		{ type: 'twitter', link: 'facebook.com' },
		{ type: 'instagram', link: 'facebook.com' },
		{ type: 'youtube', link: 'facebook.com' }
	],
	color: 'black'
};
export default SocialMediaIcons;
