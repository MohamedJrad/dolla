import DollaNavbar from '../components/molecules/DollaNavbar';
import HeroSection from '../components/molecules/DollaHeroSection';
import DollaInfoSection from '../components/molecules/DollaInfoSection';
import DollaServicesSection from '../components/molecules/DollaServicesSection';
import DollaFooter from '../components/molecules/DollaFooter';
import { homeObjOne, homeObjTwo, homeObjThree, ServicesCardsContent } from '../assets/Data';
import DollaWebsiteRights from '../components/molecules/DollaWebsiteRights';

export default function Home() {
	return (
		<div>
			<DollaNavbar />
			<HeroSection />
			<DollaInfoSection {...homeObjOne} />
			<DollaInfoSection {...homeObjTwo} />
			<DollaInfoSection {...homeObjThree} />
			<DollaServicesSection {...ServicesCardsContent} />
			<DollaFooter />
			<DollaWebsiteRights />
		</div>
	);
}
