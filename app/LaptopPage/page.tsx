
"use client";
import React, { useEffect, useState } from 'react';
import LaptopTable from '../LaptopTable/page';


const LaptopPage = () => {
    const apiUrl = 'http://localhost:4500/api/laptops';

    const [laptops, setLaptops] = useState([]);

    useEffect(() => {
        const fetchLaptops = async () => {
            try {
                const response = await fetch(apiUrl);
                if (!response.ok) {
                    throw new Error('Failed to fetch laptop data');
                }
                const data = await response.json();
                setLaptops(Object.entries(data).map(([id, laptop]) => ({ id, ...laptop })));
            } catch (error) {
                console.error('Error fetching laptop data:', error);
            }
        };

        fetchLaptops();
    }, [apiUrl]);

    return (
        <div>
            <LaptopTable laptops={laptops}/>
        </div>
    );
};

export default LaptopPage;
