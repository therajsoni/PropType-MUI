import React from 'react'
import propTypes from "prop-types";

Login.prototype = {
    arr : propTypes.arrayOf(propTypes.oneOfType([
        propTypes.string ,
        propTypes.number,  
    ])),
    details : propTypes.arrayOf(propTypes.oneOfType([
        propTypes.string,
        propTypes.any,
    ])),

}


const Login = ({
    arr,
    func,
    bol,
    num,
    obj,
    under,
    nul,
    str,
    details
}) => {
  return (
    <div>
       
    </div>
  )
}

export default Login