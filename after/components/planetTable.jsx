import React from 'react';
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import { DATA_UNITS_COUNT } from '../utils/queries';

export default ({ data, fetchMore }) => {
    const [currentPage, setCurrentPage] = useState(1);

    const [btnDisabled, setBtnDisabled] = useState(false);

    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Population</th>
                        <th>Gravity</th>
                        <th>Climate</th>
                        <th>Terrain</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((planet, index) => {
                            const { name, population, gravity, climate, terrain } = planet;
        
                            return (
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{name}</td>
                                    <td>{population}</td>
                                    <td>{gravity}</td>
                                    <td>{Array.isArray(climate) ? climate.join(', ') : ''}</td>
                                    <td>{Array.isArray(terrain) ? terrain.join(', ') : ''}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
            {fetchMore && (<Button 
                variant="primary" 
                disabled={btnDisabled}
                onClick={() => {
                    fetchMore({
                        variables: {
                            first: DATA_UNITS_COUNT,
                            skip: currentPage*DATA_UNITS_COUNT
                        },
                        updateQuery: (prev, { fetchMoreResult }) => {
                            if(fetchMoreResult['planetsSet'].length === 0){
                                setBtnDisabled(true);
                                return prev;
                            };

                            setCurrentPage(currentPage+1);

                            return Object.assign({}, prev, {
                                planetsSet: [...prev['planetsSet'], ...fetchMoreResult['planetsSet']]
                            });
                        }
                    })
            }}>Load more</Button>)}
        </>
    )
}
