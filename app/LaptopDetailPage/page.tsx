// pages/laptop-detail.js
"use client";
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

const LaptopDetailPage = () => {
    const searchParams = useSearchParams();
    const id = searchParams.get('id'); // Get the query parameter from the URL

    const [laptop, setLaptop] = useState(null);

    useEffect(() => {
        if (id) {
            const fetchLaptop = async () => {
                try {
                    const response = await fetch(`http://localhost:4500/api/get-laptop?id=${id}`);
                    if (!response.ok) {
                        throw new Error('Failed to fetch laptop details');
                    }
                    const data = await response.json();
                    setLaptop(data);
                } catch (error) {
                    console.error('Error fetching laptop details:', error);
                }
            };

            fetchLaptop();
        }
    }, [id]);

    if (!laptop) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h1>{laptop.brand} {laptop.model} Details</h1>
            <p><strong>ID:</strong> {id}</p>
            <p><strong>Year:</strong> {laptop.year}</p>
            <p><strong>Specifications:</strong> {laptop.specs}</p>
            <p><strong>Detail:</strong> {laptop.detail}</p>
        </div>
    );
};

export default LaptopDetailPage;
