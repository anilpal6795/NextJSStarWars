import PlanetTable from '../../components/planetTable';
import { initializeApolloClient } from '../../utils/apollo';
import { GET_PLANET_BY_NAME } from '../../utils/queries';
import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router'

export default () => {
    const router = useRouter();

    const { name } = router.query;

    const { data, errors } = useQuery(GET_PLANET_BY_NAME, {
        variables: {
            name
        },
        ssr: true
    });

    return errors ? (<h1>Error occurred. Please retry!</h1>) : (
        <PlanetTable data={data['planetByName']} />
    );
}

export const getServerSideProps = async ({ params }) => {
    const { name } = params;

    const client = initializeApolloClient();

    await client.query({
        query: GET_PLANET_BY_NAME,
        variables: {
            name
        }
    })

    return {
        props: {
            apolloInitialState: client.cache.extract()
        }
    }
}
