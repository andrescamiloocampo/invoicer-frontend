import { type ReactElement } from "react";
import { options } from "../../datasources/header";
import Link from "next/link";
import styles from './Header.module.css';

export const Header = ():ReactElement => {
    return(
       <nav className={styles.header}>
            <h1>Invoicer</h1>
            <div className={styles.options}>
                {options.map(({id,name,href}) => (
                    <Link href={href} key={id}>{name}</Link>
                ))}
            </div>            
        </nav>
    )
}