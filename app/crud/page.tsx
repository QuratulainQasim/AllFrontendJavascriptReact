"use client"
import React, { useEffect, useState } from 'react';
const HomePage: React.FC = () => {
    const apiUrl = 'http://localhost:4500/api/students';

    return (
        <div>
            <h1>Welcome to the Student Management System</h1>
            <StudentData apiUrl={apiUrl} />
        </div>
    );
};

export default HomePage;
type Props = {
    apiUrl: string;
};
export type Student = {
    name: string;
    age: number;
    major: string;
};

export type StudentsData = {
    [id: string]: Student;
};
const StudentData: React.FC<Props> = ({ apiUrl }) => {
    const [students, setStudents] = useState<StudentsData>({});
    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const response = await fetch(apiUrl);
                if (!response.ok) {
                    throw new Error('Failed to fetch student data');
                }
                const data = await response.json();
                setStudents(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchStudents();
    }, [apiUrl]);

    return (
        <div>
            <h1>Student Data</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Major</th>
                    </tr>
                </thead>
                <tbody>

                    {Object.entries(students).map(([id, data]) => (
                        <tr key={id}>
                            <td>{id}</td>
                            <td>{data.name}</td>
                            <td>{data.age}</td>
                            <td>{data.major}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

