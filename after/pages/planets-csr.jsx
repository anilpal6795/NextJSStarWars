import PlanetTable from '../components/planetTable';
import { useQuery } from '@apollo/client';
import { GET_ALL_PLANETS, DATA_UNITS_COUNT } from '../utils/queries';

export default () => {
    const { data, errors, loading, fetchMore } = useQuery(GET_ALL_PLANETS, {
        variables: {
            first: DATA_UNITS_COUNT,
            skip: 0
        },
        ssr: false
    });

    return loading ? (<h1>Loading...</h1>) : ( errors ? (<h1>Error occurred. Please retry!</h1>) : (
        <PlanetTable data={data['allPlanets']} fetchMore={fetchMore} />
    ))
}
