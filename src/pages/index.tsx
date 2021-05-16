import DollaNavbar from '../components/molecules/DollaNavbar';
import HeroSection from '../components/molecules/DollaHeroSection';
import DollaInfoSection from '../components/molecules/DollaInfoSection';
import DollaServicesSection from '../components/molecules/DollaServicesSection';
import { homeObjOne, homeObjTwo, homeObjThree, ServicesCardsContent } from '../assets/Data';

export default function Home() {
	return (
		<div>
			<DollaNavbar />
			<HeroSection /> <DollaInfoSection {...homeObjOne} />
			<DollaInfoSection {...homeObjTwo} />
			<DollaInfoSection {...homeObjThree} />
			<DollaServicesSection {...ServicesCardsContent} />
		</div>
	);
}
