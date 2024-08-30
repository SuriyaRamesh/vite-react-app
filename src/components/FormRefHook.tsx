import React, { FormEvent, useRef } from 'react'

const FormRefHook = () => {

  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if(nameRef.current != null) console.log(nameRef.current.value);
    if(ageRef.current != null) console.log(ageRef.current.value);
  }  

  return (
    <form className='w-50 bg-secondary p-4 rounded-2' onSubmit={handleSubmit}>
        <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input ref={nameRef} id="name" type="text" className="form-control" />
        </div>
        <div className="mb-3">
            <label htmlFor="age" className="form-label">Age</label>
            <input ref={ageRef} id="age" type="number" className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
}

export default FormRefHook
