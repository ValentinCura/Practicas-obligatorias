import React from 'react'
import { Table } from 'react-bootstrap';
import PropTypes from "prop-types";

const Tables = ({ receivedNetIncomes }) => {
    const averageNetIncomes = receivedNetIncomes.reduce((total, individualNet) => total + individualNet.income, 0) / receivedNetIncomes.length;
    return (
        <>
            
            <Table striped bordered>
                <thead>
                    <tr>
                        <th>Marca</th>
                        <th>Ingreso Neto</th>
                    </tr>
                </thead>
                <tbody>
                    {receivedNetIncomes.map((individualNet, index) => (
                        <tr key={index}>
                            <td>{individualNet.brand}</td>
                            <td>{`$${individualNet.income}`}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>


            <p className='text-dark'>El ingreso promedio de entre las empresas es de:  ${averageNetIncomes.toFixed(2)} </p>
        </>
    );
}

export default Tables;

Tables.propTypes = {
    receivedNetIncomes: PropTypes.array,
};