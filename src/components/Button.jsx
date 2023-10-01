import React from 'react'
import style from "./ButtonModule.css"

function Button({className,nome,type}) {
  return (
        <button className={className}  type={type}>{nome}</button>
  )
}

export default Button