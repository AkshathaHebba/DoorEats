import cs from 'classnames'
import styles from './Card.module.css';

const Card = ({children, className, onClick }) => {
  return (
      <div className={cs(styles.Card__Container, className)} onClick={onClick}>
          {children}
      </div>
  )
}

Card.defaultProps = {
    onClick: () =>{},
}

export default Card;