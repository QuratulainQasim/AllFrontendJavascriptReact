// components/LaptopTable.js
"use client";
import React from 'react';
import Link from 'next/link';

const LaptopTable = ({ laptops }) => {
    return (
        <div>
            <h1>Laptop Details Table</h1>
            {laptops.length > 0 ? (
                <table border="1">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Brand</th>
                            <th>Model</th>
                            <th>Year</th>
                            <th>Specifications</th>
                            <th>Detail</th>
                        </tr>
                    </thead>
                    <tbody>
                        {laptops.map((laptop, index) => (
                            <tr key={index}>
                                <td>{laptop.id}</td>
                                <td>{laptop.brand}</td>
                                <td>{laptop.model}</td>
                                <td>{laptop.year}</td>
                                <td>{laptop.specs}</td>
                                <td>
                                    <Link href={`/LaptopDetailPage?id=${laptop.id}`}>
                                        Detail
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No laptops found.</p>
            )}
        </div>
    );
};

export default LaptopTable;
