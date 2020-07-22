import 'bootstrap/dist/css/bootstrap.css';
import Header from '../components/header';
import { useRouter } from 'next/router';

const PageSection = ({ children }) => {
    return (
        <section style={{
            width: '80%',
            margin: 'auto',
            paddingTop: '2rem'
        }}>
            {children}
        </section>
    )
}

const PageTitle = ({ children }) => {
    return (
        <h1 style={{
            padding: '1rem 0'
        }}>
            {children.replace('/', '')}
        </h1>
    )
}

const MyApp = ({Component, pageProps}) => {
    const router = useRouter();
    
    return (
        <>
            <Header />
            <PageSection>
                <PageTitle>{router.pathname}</PageTitle>
                <Component {...pageProps} />
            </PageSection>
        </>
    );
}

export default MyApp;