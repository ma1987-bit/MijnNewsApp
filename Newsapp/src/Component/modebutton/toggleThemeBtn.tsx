import { useContext } from 'react';
import {ThemeContext} from '../context/themecontext';
import styles from './toggleThemeBtn.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon,faSun } from '@fortawesome/free-solid-svg-icons';


export const ThemeButton = () => {
  const {mode,setMode} = useContext(ThemeContext)  
    return (
        <div className={styles.modeToggle}>
            {mode === 'dark' ? <button onClick={()=>(setMode('light'))}><FontAwesomeIcon icon={faSun} className={styles.modeIcon}/></button>
             : <button onClick={()=>(setMode('dark'))}><FontAwesomeIcon icon={faMoon} className={styles.modeIcon}/></button>}
        </div>
    )
}
