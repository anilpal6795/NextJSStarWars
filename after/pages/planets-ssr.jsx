import SWDataProvider from '../SWDataProvider';
import PlanetTable from '../components/planetTable';

export default ({ data, error }) => {
    return error ? (<h1>Error occurred. Please retry!</h1>) : (<PlanetTable data={data} />);
}

export const getServerSideProps = async () => {
    const SWDataInstance = new SWDataProvider();

    const { data, errors } = await SWDataInstance.getAllPlanets(10);

    if(data) {
        return {
            props: {
                data: data['allPlanets']
            }
        }
    }

    if(errors) {
        return {
            props: {
                error: true
            }
        }
    }
}