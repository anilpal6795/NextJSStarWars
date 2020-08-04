import { gql } from '@apollo/client';

export const DATA_UNITS_COUNT = 5;

export const GET_ALL_PLANETS = gql`
    query ($first: Int = ${DATA_UNITS_COUNT}, $skip: Int = 0) {
        allPlanets(first: $first, skip: $skip) {
            id,
            name,
            climate,
            gravity,
            population,
            terrain
        }
    }
`;

export const GET_PLANET_BY_NAME = gql`
    query ($name: String!) {
        allPlanets(
            filter: {
                name: $name
            }
        ) {
            id,
            name,
            climate,
            gravity,
            population,
            terrain
        }
    }
`;

export const GET_ALL_PLANETS_META = gql`
    query {
        _allPlanetsMeta {
            id,
            count
        }
    }
`;