import 'bootstrap/dist/css/bootstrap.css';
import Header from '../components/header';
import { useRouter } from 'next/router';
import { useApollo } from '../utils/apollo';
import { ApolloProvider } from '@apollo/client';

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

    const apolloClient = useApollo(pageProps.apolloInitialState)
    
    return (
        <ApolloProvider client={apolloClient}>
            <Header />
            <PageSection>
                <PageTitle>{router.pathname}</PageTitle>
                <Component {...pageProps} />
            </PageSection>
        </ApolloProvider>
    );
}

export default MyApp;