import { ApolloClient, createHttpLink, InMemoryCache, gql } from '@apollo/client';

export default class {
    client = null;

    GET_ALL_PLANETS = gql`
        query ($first: Int = 10) {
            allPlanets(first: $first) {
                name,
                climate,
                gravity,
                population,
                terrain
            }
        }
    `;

    GET_PLANET_BY_NAME = gql`
        query ($name: String!) {
            allPlanets(
                filter: {
                    name: $name
                }
            ) {
                name,
                climate,
                gravity,
                population,
                terrain
            }
        }
    `;

    GET_ALL_PLANETS_META = gql`
        query {
            _allPlanetsMeta {
                count
            }
        }
    `;

    constructor(){
        this.client = new ApolloClient({
            link: new createHttpLink({
                uri: 'https://swapi.graph.cool/'
            }),
            cache: new InMemoryCache(),
            
        })
    }

    getAllPlanets(first){
        return this.client.query({
            query: this.GET_ALL_PLANETS,
            variables: {
                first
            },
            
        })
    }

    getPlanetByName(name){
        return this.client.query({
            query: this.GET_PLANET_BY_NAME,
            variables: {
                name
            }
        })
    }

    getAllPlanetsMeta(){
        return this.client.query({
            query: this.GET_ALL_PLANETS_META
        })
    }
}