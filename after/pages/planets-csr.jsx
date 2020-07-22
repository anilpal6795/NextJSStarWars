import SWDataProvider from '../SWDataProvider';
import PlanetTable from '../components/planetTable';
import { useState, useEffect } from 'react';

export default () => {
    const [planetsData, setPlanetsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const SWDataInstance = new SWDataProvider();

        SWDataInstance.getAllPlanets(10)
        .then(response => {
            const { data, errors, loading } = response;

            if(loading) setLoading(true);

            if(data){
                setLoading(false);
                setPlanetsData(data['allPlanets']);
            }

            if(errors){
                setLoading(false);
                setError(true);
            }
        })
        .catch(error => {
            setLoading(false);
            setError(true);
        })
    }, [])

    return loading ? (<h1>Loading...</h1>) : ( error ? (<h1>Error occurred. Please retry!</h1>) : (<PlanetTable data={planetsData} />) )
}