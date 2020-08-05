import PlanetTable from '../components/planetTable';
import { GET_ALL_PLANETS, DATA_UNITS_COUNT } from '../utils/queries';
import { useQuery } from '@apollo/client';
import { initializeApolloClient } from '../utils/apollo';

export default () => {
    const { data, errors, fetchMore } = useQuery(GET_ALL_PLANETS, {
        variables: {
            first: DATA_UNITS_COUNT,
            skip: 0
        },
        ssr: true
    })

    return errors ? (<h1>Error occurred. Please retry!</h1>) : (
        <PlanetTable data={data['planetsSet']} fetchMore={fetchMore} />
    );
}

export const getServerSideProps = async ({ params, req, res, query, preview, prwviewData }) => {
    const client = initializeApolloClient();

    await client.query({
        query: GET_ALL_PLANETS,
        variables: {
            first: DATA_UNITS_COUNT,
            skip: 0
        }
    })

    return {
        props: {
            apolloInitialState: client.cache.extract()
        }
    }
}