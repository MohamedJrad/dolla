import { AppProps } from 'next/app';
import '../styles/globals.css';

const Layout = ({ children }) => <div>{children}</div>;

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}
