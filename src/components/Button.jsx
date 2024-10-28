import React from 'react'
import propTypes from "prop-types"

Button.propTypes = {
    size : propTypes.oneOf(['small','medium','large']),
    children : propTypes.element                          
}

const Button = ({
    size,
    children
}) => {
  return (
    <div>
size of button {size} and {children}
    </div>
  )
}

export default Button