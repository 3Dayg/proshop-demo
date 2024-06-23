import React from 'react'
import { Alert } from 'react-bootstrap';

const Message = ({
  variant = 'info', // default value is 'info',
  children
}) => {
  return (
    <Alert
      variant={variant}
    >
      {children}
    </Alert>
  )
}

export default Message