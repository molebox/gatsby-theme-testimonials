/** @jsx jsx */
import { jsx } from "theme-ui";
import styles from './SidebarLayout.module.css';
import { FaNpm, FaGithub, FaBars } from 'react-icons/fa';
import styled from '@emotion/styled';

const TriggerIcon = styled.div`
    display: inline-block;
    margin: 1.5em 0 0 1.5em;
    color: #f07ab0;
`;

export default ({children}) => {

    return (
        <div className={styles.s_layout}>

            <div className={styles.s_layout__sidebar}>
            <a className={styles.s_sidebar__trigger} href="#0">
                <TriggerIcon><FaBars/></TriggerIcon>
            </a>

            <nav sx={{
                backgroundColor: '#E0E5EC'
            }} className={styles.s_sidebar__nav}>
                <ul>
                    <li>
                    <a className={styles.s_sidebar__nav_link} href="#0">
                        <FaNpm sx={{color: '#001f3f'}}/>
                        <em sx={{
                            fontFamily: 'Nunito',
                            color: '#001f3f'
                        }}>NPM</em>
                    </a>
                    </li>
                    <li>
                    <a className={styles.s_sidebar__nav_link} href="#0">
                        <FaGithub sx={{color: '#001f3f'}}/>
                        <em sx={{
                            fontFamily: 'Nunito',
                            color: '#001f3f'
                        }}>Github</em>
                    </a>
                    </li>
                </ul>
            </nav>
            </div>

            <main className={styles.s_layout__content}>
                {children}
            </main>
        </div>
    )
}