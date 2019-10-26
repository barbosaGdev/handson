import React from 'react';
import Menu from "../../Components/Menu";
import { handOmPageStyle} from "../HandsOn/HandsOn.style";
import { WorkshopData } from '../../Components/Workshop/WorkshopData';
import Workshop from '../../Components/Workshop/Workshop';


const HandsOnPage: React.FC = () => (
    <div className={handOmPageStyle().mainDiv}>
        <div>
            <Menu title="Hands On"/>
        </div>


        <div>
            <h3 className={handOmPageStyle().textH3}>Um dia de experiências práticas na área de Tecnologia da Informação!</h3>
            <p>O Hands On da Fatec é um evento gratuito, destinado a estudantes da Fatec Mogi Mirim, com o objetivo de auxiliar na escolha de tecnologias emergentes no mercado de trabalho.</p>
            <p>Durante o evento os estudantes poderão participar de oficinas e conhecer de perto uma ou mais tecnologia apresentada em 04 laboratórios da unidade.</p>
            <p>De uma maneira divertida você conhecerá várias trilhas de atuação. Participe das oficinas e entre em contato com o seu futuro profissional!</p>
            <p>Veja as oficinas abaixo:</p>
        </div>

        <div>
        {
            WorkshopData.map((workshop) => {
                return(
                    <Workshop title={workshop.title} img={workshop.imgPath}
                    name={workshop.name} company={workshop.company}
                    resume={workshop.resume} about={workshop.about}
                    
                    />
                    
                )
            })
         }
        </div>
    </div>




);

export default HandsOnPage;
