import React, { useState } from 'react';

const Filter = ({ handleFilter }) => {
    const [selectedField, setSelectedField] = useState('');
    const [filterValue, setFilterValue] = useState('');

    const handleFieldChange = (event) => {
        setSelectedField(event.target.value);
    };

    const handleFilterValueChange = (event) => {
        setFilterValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        handleFilter(selectedField, filterValue);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="field">Seleccione el campo de filtro:</label>
                <select id="field" value={selectedField} onChange={handleFieldChange}>
                    <option value="">Seleccionar</option>
                    <option value="direccion">Dirección</option>
                    <option value="precio">Precio</option>
                    <option value="cantPiezas">Cantidad de Piezas</option>
                    {/* Agrega más opciones de campo según tus necesidades */}
                </select>
            </div>
            <div>
                <label htmlFor="filterValue">Ingrese el valor de filtro:</label>
                <input
                    type="text"
                    id="filterValue"
                    value={filterValue}
                    onChange={handleFilterValueChange}
                />
            </div>
            <button type="submit">Filtrar</button>
        </form>
    );
};

export default Filter;
