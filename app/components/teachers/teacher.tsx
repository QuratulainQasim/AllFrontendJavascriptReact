// pages/teachers.js
import { useState } from 'react';

const Teachers = () => {
  const [teachers, setTeachers] = useState([
    { id: 1, name: 'John Doe', subject: 'Math' },
    { id: 2, name: 'Jane Doe', subject: 'English' },
  ]);

  const [newTeacher, setNewTeacher] = useState({ name: '', subject: '' });

  const handleInputChange = (e:any) => {
    setNewTeacher({ ...newTeacher, [e.target.name]: e.target.value });
  };

  const handleAddTeacher = () => {
    const newId = Math.max(...teachers.map((teacher) => teacher.id), 0) + 1;
    const newTeacherWithId = { id: newId, ...newTeacher };

    setTeachers([...teachers, newTeacherWithId]);

    setNewTeacher({ name: '', subject: '' });
  };

  const handleDeleteTeacher = (id:number) => {
    const updatedTeachers = teachers.filter((teacher) => teacher.id !== id);
    setTeachers(updatedTeachers);
  };

  return (
    <div>
      <h1>Teacher List</h1>

      <ul>
        {teachers.map((teacher) => (
          <li key={teacher.id}>
            {teacher.name} (Subject: {teacher.subject})
            <button onClick={() => handleDeleteTeacher(teacher.id)}>Delete</button>
          </li>
        ))}
      </ul>

      <h2>Add a New Teacher</h2>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={newTeacher.name}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Subject:</label>
        <input
          type="text"
          name="subject"
          value={newTeacher.subject}
          onChange={handleInputChange}
        />
      </div>
      <button onClick={handleAddTeacher}>Add Teacher</button>
    </div>
  );
};

export default Teachers;
