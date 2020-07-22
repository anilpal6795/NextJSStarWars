import React from 'react';
import Table from 'react-bootstrap/Table';

export default ({ data }) => (
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
                            <td>{climate.join(', ')}</td>
                            <td>{terrain.join(', ')}</td>
                        </tr>
                    )
                })
            }
        </tbody>
    </Table>
)
