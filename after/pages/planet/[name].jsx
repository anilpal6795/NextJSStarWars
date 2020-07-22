import SWDataProvider from '../../SWDataProvider';
import PlanetTable from '../../components/planetTable';

export default ({ data, error }) => {    
    return error ? (<h1>Error occurred. Please retry!</h1>) : (<PlanetTable data={data} />);
}

export const getServerSideProps = async ({ params }) => {
    //This is the dynamix route variable `name`
    const { name } = params;
    const SWDataInstance = new SWDataProvider(name);

    const { data, errors } = await SWDataInstance.getPlanetByName(name);

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
