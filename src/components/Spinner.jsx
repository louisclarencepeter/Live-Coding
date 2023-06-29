import React from 'react'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

function Spinner() {
  return (
    <div className='d-flex justify-content-center align-items-center display-1' style={{height: '100vh'}}>
    <FontAwesomeIcon icon={faSpinner} spin />
    </div>
  )
}

export default Spinner