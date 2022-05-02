function Table(props) {

  return (
    <table className='table table-striped'>
      <thead>
        <tr>
          <th scope='col'>Name</th>
          <th scope='col'>Phone</th>
          <th scope='col'>Email</th>
          <th scope='col'>Action</th>
        </tr>
      </thead>
      <tbody>
        {props.students.length > 0 &&
          props.students.map((student) => (
            <tr>
              <td>{student.name}</td>
              <td>{student.phone}</td>
              <td>{student.email}</td>
              <td className='btn-group' role='group' aria-label='Basic example'>
                <button type='button' className='btn btn-secondary'>
                  Edit
                </button>
                <button type='button' className='btn btn-secondary'>
                  Delete
                </button>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default Table;
