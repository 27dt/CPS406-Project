import { createPortal } from "react-dom"
import dropDownIcon from '../assets/drop_down_arrow.svg'
import './DropDown.css'

function setOnClick() {
  let elements = document.getElementsByClassName('drop-down-content')
  console.log("onclicks added");
  console.log(elements);
  for (let i = 0; i < elements.length; i++) {
    elements[i].className = "func-added"};
  }



function DropDown({open, children, onClose, text}) {
  
  if (open) {
    setOnClick();
  }

  return (
    <>
      <div
      className={open ? "drop-down-field open" : "drop-down-field"}
      onClick={onClose}>
      
        <p>{text}</p>
        <img
          src={dropDownIcon} 
          alt='close icon' 
        />
      </div>
      {open &&
          <div className="drop-down">
            {children}
          </div>
          }
    </>
  )
}

export default DropDown