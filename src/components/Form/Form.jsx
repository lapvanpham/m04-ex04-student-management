import { useState } from 'react';

function Form(props) {
  const [input, setInput] = useState({
    name: '',
    phone: '',
    email: '',
  });

  const handleInputChange = (event) => {
    console.log(event);
    setInput((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
    console.log(input);
  };

  function resetInput() {
    setInput({
      name: '',
      phone: '',
      email: '',
    });
  }

  return (
    <form>
      <div className='form-group row'>
        <label htmlFor='inputName' className='col-sm-2 col-form-label'>
          Name
        </label>
        <div className='col-sm-10'>
          <input
            onChange={handleInputChange}
            type='text'
            className='form-control'
            id='inputName'
            placeholder='Name'
            name='name'
            value={input.name}
          />
        </div>
      </div>
      <div className='form-group row'>
        <label htmlFor='inputPhone' className='col-sm-2 col-form-label'>
          Phone
        </label>
        <div className='col-sm-10'>
          <input
            onChange={handleInputChange}
            type='number'
            className='form-control'
            id='inputPhone'
            placeholder='Phone'
            name='phone'
            value={input.phone}
          />
        </div>
      </div>
      <div className='form-group row'>
        <label htmlFor='inputEmail' className='col-sm-2 col-form-label'>
          Email
        </label>
        <div className='col-sm-10'>
          <input
            onChange={handleInputChange}
            type='email'
            className='form-control'
            id='inputEmail'
            placeholder='Email'
            name='email'
            value={input.email}
          />
        </div>
      </div>
      <button
        type='submit'
        className='btn btn-primary'
        onClick={(e) => {
          e.preventDefault();
          props.handleSubmit(input);
          resetInput()
        }}
      >
        Submit
      </button>
    </form>
  );
}

export default Form;
