import PlanetTable from '../../components/planetTable';
import { initializeApolloClient } from '../../utils/apollo';
import { GET_PLANET_BY_NAME } from '../../utils/queries';
import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router'
import fs from 'fs';

export default () => {
    const router = useRouter();

    const { name } = router.query;

    const { isFallback } = router;

    if(isFallback) {
        return <h1>Loading...</h1>
    }

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

export const getStaticProps = async ({ params, preview, previewData }) => {
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

export const getStaticPaths = async () => {
    const planetByName = JSON.parse(fs.readFileSync('./utils/planetByName.json', 'utf-8'));

    let paths = [];

    planetByName.map(planet => {
        paths.push({
            params: {
                name: planet.toLowerCase()
            }
        })
    })

    return {
        paths,

        /**
         * Fallback option for non-existent statically generated  pages
         */
        fallback: false
    }
}
