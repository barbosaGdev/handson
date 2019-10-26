import React from 'react';
import { MenuStyle } from '../Components/Menu.style';

interface IProps {
    title?: string;
}

const Menu = (props: IProps) => {

        return(
            <div className={MenuStyle().mainDiv}>
                <h1 className={MenuStyle().title}>{props.title}</h1>
                <div>
                    <div className={MenuStyle().imgLogo}>
                        <img src='logo192.png'/>
                    </div>
                </div>
                
            </div>
        
        )
    }



export default Menu;