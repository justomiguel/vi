import React, { useState } from 'react';
import Filter from './components/Filter';
import Map from './components/Map';
import properties from './properties.json';

const App = () => {
    const [filteredProperties, setFilteredProperties] = useState(properties);

    const handleFilter = (field, value) => {
        const filtered = properties.filter((property) => {
            if (field === 'precio' || field === 'cantPiezas') {
                return property[field] === parseInt(value);
            } else {
                return property[field].toLowerCase().includes(value.toLowerCase());
            }
        });
        setFilteredProperties(filtered);
    };

    return (
        <div>
            <Filter handleFilter={handleFilter} />
            <Map properties={filteredProperties} />
        </div>
    );
};

export default App;
