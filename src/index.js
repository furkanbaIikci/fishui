import React from 'react'
import styles from './styles.module.css'

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}


export const Button = ({type, text}) => {

  const onClickHandler = (type) => {
    alert(`You clicked on ${type} button`)
  }
  return(
    <button onClick={() => onClickHandler(type)} className={styles[type]}>{text}</button>
  )

}