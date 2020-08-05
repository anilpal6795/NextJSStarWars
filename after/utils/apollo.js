import { InMemoryCache, createHttpLink, ApolloClient } from '@apollo/client';
import { useMemo } from 'react';

let apolloClient;

const initApolloClient = () => {
    return new ApolloClient({
        link: createHttpLink({
            uri: 'https://swapi.graph.cool/'
        }),
        cache: new InMemoryCache({
            typePolicies: {
                Planet: {
                    fields: {
                        population: {
                            read: (population = "UNKNOWN POPULATION") => {
                                return population;
                            }
                        }
                    }
                }
            }
        }),
        ssrMode: typeof window === 'undefined',
        credentials: 'same-origin',
    })
}

export const initializeApolloClient = (initialState = null) => {
    const _apolloClient = apolloClient ?? initApolloClient();

    if(initialState){
        _apolloClient.cache.restore({
            ...(_apolloClient.cache.extract()),
            ...initialState
        });
    }

    if(typeof window === undefined){
        return _apolloClient;
    }

    if(!apolloClient){
        apolloClient = _apolloClient;
    }

    return _apolloClient;
}

export const useApollo = (initialState) => {
    const store = useMemo(() => initializeApolloClient(initialState), [initialState])
    return store
}