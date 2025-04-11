import "./Toggle.css"

function Toggle({state, handleChange}) {
  
  return (
    <label className="switch" htmlFor="slider-input">
      <input id="slider-input" type="checkbox" checked={state} onChange={handleChange}/>
      <label htmlFor="slider-input" className="slider"></label>
    </label>
  )
}

export default Toggle
