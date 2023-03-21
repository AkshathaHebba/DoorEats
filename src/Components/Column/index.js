import Styles from './Column.module.css'
import cs from 'classnames'
const Column = ({children,className}) =>{
    return(
        <div className={cs(Styles.ColContainer,className)}>
            {children}
        </div>
    )
}
export default Column