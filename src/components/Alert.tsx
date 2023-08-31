import React, { ReactNode } from 'react'
//using children : string we can pass the prop inside thre element as a child
//using ReactNode we can pass an html element as a prop
interface Props {
    children: ReactNode;
    onClose : () => void
}
const Alert = ({ onClose,children }: Props) => {
    return (
        <div>
            <div className="alert alert-warning alert-dismissible fade show" role="alert">
                <strong>Holy guacamole!</strong> {children}
                <button
                    type="button" className="btn-close" data-bs-dismiss="alert"
                    aria-label="Close" onClick={onClose}>
                    
                </button>
            </div>
        </div>
    )
}

export default Alert
