import { useEffect } from "react"
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
  
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown, true)
  }, [])

  const handleKeyDown = (e) => {
    if (e.key == 'Escape') {
      onClose()
    } 
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