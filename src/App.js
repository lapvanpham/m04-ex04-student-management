import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './components/Form/Form';
import Table from './components/Table/Table';
import { useState } from 'react';

function App() {
  const [students, setStudents] = useState([]);
  const handleSubmit = (input) => {
    setStudents([...students, input]);
  };
  return (
    <div className='App'>
      <h1>Student List</h1>
      <Form handleSubmit={handleSubmit} />
      <Table students={students} />
    </div>
  );
}

export default App;
