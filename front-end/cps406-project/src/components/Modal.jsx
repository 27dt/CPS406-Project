import { createPortal } from "react-dom"
import closeIcon from '../assets/close.svg'
import './Modal.css'

function Modal({open, children, onClose}) {
  if (open) {
    document.body.style.overflowY = 'hidden'
  }
  else {
    document.body.style.overflowY = 'auto'
  }
  
  return createPortal( open &&
    <>
      <div 
      className="modal-overlay"
      onClick={onClose} />
      <div className="modal">
        <img 
        onClick={onClose}
        className="close-modal" 
        src={closeIcon} 
        alt='close icon' 
        />
        
        {children}
      </div>
    </>,
    document.getElementById('overlays')
  )

}

export default Modal