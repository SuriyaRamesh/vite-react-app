import React from 'react'

const Form = () => {
  return (
    <form className='w-25 bg-secondary p-4 rounded-2'>
        <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input id="name" type="text" className="form-control" />
        </div>
        <div className="mb-3">
            <label htmlFor="age" className="form-label">Age</label>
            <input id="age" type="number" className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
}

export default Form
