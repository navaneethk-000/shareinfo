import './FormFour.css'

export const FormFour = () => {
  return (
    <div className="f4-main">
      <div className="f4-container">
        <div className="planningTo-teach">
          <label htmlFor="">What's You Are Planning to Teach</label>
          <input type="text"placeholder='Enter Your Role Name here' />
        </div>
        <div className="planningTo-teach">
          <label htmlFor="">What's You Are Planning to Teach</label>
          <input type="text"placeholder='Enter Your Role Name here' />
        </div>
        <div className="qualification-proof">
          <label htmlFor="">Proof of Qualification</label>
          <input type="file" name="" id="" />
        </div>
        {/* <button>Confirm & Continue</button> */}
      </div>
    </div>
  )
}

