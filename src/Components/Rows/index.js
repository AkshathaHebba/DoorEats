import Styles from './Rows.module.css'
import cs from 'classnames'
const Rows = ({children,className}) =>{
    return(
        <div className={cs(Styles.RowContainer,className)}>
            {children}
        </div>
    )
}
export default Rows