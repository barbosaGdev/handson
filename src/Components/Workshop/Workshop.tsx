import React from 'react';
import { WorkshopData } from './WorkshopData';

interface IProps {
    title: string;
    img: string;
    name: string;
    company: string;
    resume: string;
    about: string;
};

const Workshop = (props: IProps) => {

        return(
            <div>
                <div>
                    <h2>{props.title}</h2>
                </div>
                <div>
                    <table>
                        <tr>
                            <td>
                                <img src='logo192.png'/>
                            </td>
                            <td>
                            <p>{props.name}</p>
                            <p>{props.company}</p>
                            <p>{props.resume}</p>
                            <p>Sobre o HandsOn</p>
                            <p>{props.about}</p>
                            </td>
                        </tr>
                            
                        
                    </table>
                    
                </div>
            
            </div>

        
        )
    }



export default Workshop;