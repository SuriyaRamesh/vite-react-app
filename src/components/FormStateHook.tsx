import React, { FormEvent, useState } from 'react'

const FormStateHook = () => {

  const [person, setPerson] = useState({name: '', age: ''});

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(person);
  }  

  return (
    <form className='w-50 bg-info p-4 rounded-2' onSubmit={handleSubmit}>
        <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input onChange={e => setPerson({...person, name: e.target.value})} value={person.name} id="name" type="text" className="form-control" />
        </div>
        <div className="mb-3">
            <label htmlFor="age" className="form-label">Age</label>
            <input onChange={e => setPerson({...person, age: e.target.value})} value={person.age} id="age" type="number" className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
}

export default FormStateHook;
