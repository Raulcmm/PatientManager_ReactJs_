import React from 'react'

const Form = () => {
    return (
        <div className="mt-2">
            <h2>Add a new appointment</h2>
            <form action="" className="text-left">
                <div className="form-group">
                    <label>Pet's name</label>
                    <input type="text" className="form-control" placeholder="Pet's name" name="pet"/>
                </div>
                <div className="form-group">
                    <label>Owner's name</label>
                    <input type="text" className="form-control" placeholder="Owner's name" name="owner"/>
                </div>
                <div className="form-group">
                    <label>Date</label>{/**Cambiar */}
                    <input type="date" className="form-control" name="date" />
                </div>
                <div className="form-group">
                    <label>Hour</label>{/**Cambiar */}
                    <input type="time" className="form-control" name="hour"/>
                </div>
                <div className="form-group">
                    <label>Symptoms</label>{/**Cambiar */}
                    <textarea name="symptoms"  cols="30" rows="5" className="form-control"></textarea>
                </div>
            </form>
        </div>
    )
}

export default Form
