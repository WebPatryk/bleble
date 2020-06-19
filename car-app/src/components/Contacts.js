import React, { useRef, useState, useEffect } from 'react';
import { ReactComponent as Poland } from '../image/poland.svg';
import styled, { ThemeProvider } from 'styled-components';
import { RiRoadMapLine } from "react-icons/ri";

export default function Contacts() {


    const [title, setTitle] = useState("City");
    const [cityInfo, setCityInfo] = useState("Select one region for more information about our company in this area.");
    const polandMap = useRef(null);


    const [questionOne, setQuestionOne] = useState(false);
    const [questionTwo, setQuestionTwo] = useState(false);
    const [questionThree, setQuestionThree] = useState(false);
    const [questionFourth, setQuestionFourth] = useState(false);



    function handlePolandMap() {
        const [element] = polandMap.current.children;
        const paths = element.querySelectorAll('path');
        paths.forEach(path => path.addEventListener('mouseup', SelectedPath));
    }

    function SelectedPath(e) {
        if (e.target.id === "PL-MA") {
            setTitle("Kraków");
            setCityInfo("One of the biggest disttribution in Poland.");

        }
        else if (e.target.id === "PL-DS") {
            setTitle("Wrocław");
            setCityInfo("Here our company started your first steps.");
        }
        else if (e.target.id === "PL-KP") {
            setTitle("Bydgoszcz");
            setCityInfo("Only last year we selt 56k new Mercedes cars.");
        }
        else if (e.target.id === "PL-LD") {
            setTitle("Łódź");
            setCityInfo("The capital of our business. Together with 'Encompy z.o.o we buit 250k cars last year.'");
        }
        else if (e.target.id === "PL-LU") {
            setTitle("Lublin");
            setCityInfo("Here we started selling Audi cars, which turned out to be a good decision.");

        }
        else if (e.target.id === "PL-LB") {
            setTitle("Zielona Góra");
            setCityInfo("We employ 2k people in this company and even now we need more employees.");
        }
        else if (e.target.id === "PL-MZ") {
            setTitle("Warszawa");
            setCityInfo("First bussiness contract with abroad partner has been writed just here.");
        }
        else if (e.target.id === "PL-OP") {
            setTitle("Opole");
            setCityInfo("The capital, which is known as the city of big shopping.");
        }
        else if (e.target.id === "PL-PK") {
            setTitle("Rzeszów");
            setCityInfo("The business partner decided to build a company here because he saw the market for these products in demand");
        }
        else if (e.target.id === "PL-PD") {
            setTitle("Białystok");
            setCityInfo("One of the biggest disttribution in Poland.");
        }
        else if (e.target.id === "PL-PM") {
            setTitle("Gdańsk");
            setCityInfo("One of the biggest disttribution in Poland.");
        }
        else if (e.target.id === "PL-SL") {
            setTitle("Katowice");
            setCityInfo("One of the biggest disttribution in Poland.");
        }
        else if (e.target.id === "PL-SK") {
            setTitle("Kielce");
            setCityInfo("One of the biggest disttribution in Poland.");
        }
        else if (e.target.id === "PL-WM") {
            setTitle("Poznań");
            setCityInfo("One of the biggest disttribution in Poland.");
        }
        else if (e.target.id === "PL-WN") {
            setTitle("Olsztyn");
            setCityInfo("One of the biggest disttribution in Poland.");
        }
        else if (e.target.id === "PL-WP") {
            setTitle("Poznań");
            setCityInfo("One of the biggest disttribution in Poland.");
        }
        else if (e.target.id === "PL-ZP") {
            setTitle("Szczecin");
            setCityInfo("One of the biggest disttribution in Poland.");
        }

    }


    const theme = {
        primaryColor: '#F8F8F8',
        background: '#fff',
    };


    const ContactPage = styled.div`
    width:100%;
    margin-bottom:10rem; 
    .poland-map{

    path:hover{
        stroke:var(--border-filter-color);
        stroke-width:1px;
        fill:gray;
        cursor:pointer;
    }
    
}
    .salons{
        &__info{
            margin-bottom:8rem;
        }
        &__title{
            text-align:center;
            font-size:3rem;
        }
        &__map{
            display:flex;
            justify-content:space-around;
            align-items:center;
            width:100%;
            padding:3rem 0;
        }
        &__city{
            display:flex;
            width:50%;
  
        }
        &__icon{
            font-size:5rem;
            margin-right:2rem;
        }
        &__cityName{
            font-size:3.5rem;
            
        }
        &__cityInfo{
            font-size:2rem;
            font-weight:500;
            margin-top:1.8rem;
            width:50rem;
        }
    }



        .questions{
 

            &__mainTitle{
            text-align:center;
            font-size:3rem;
            padding-top:2rem;
            }
            &__content{
                width:60%;
                margin: 5rem auto;
                background-color:${(props => props.theme.background)};
            }
            }
          
           
        
        .question{
            padding:2rem;
                &__title{
                font-size:1.7rem;
                color:gray;
                text-align:left;
                padding:2rem 0;
                position:relative;
                cursor:pointer;

                &::after{
                content:'v';
                position:absolute;
                top:30%;
                right:2%;
                font-size:1.3rem;
                color: gray;
            }
            &:hover{
                opacity:.7;
            }
            }
            &__text{
                font-size:1.4rem;
            }
        }
     
    `;


    return (
        <>
            <ThemeProvider theme={theme}>
                <ContactPage>
                    <div className="salons">
                        <h1 className="salons__title">Our Salons</h1>
                        <div className="salons__map">
                            <div className="salons__mapBackground" ref={polandMap}>
                                <Poland onMouseOut={handlePolandMap} className="poland-map" />

                            </div>

                            <div className="salons__info">
                                <div className="salons__city">
                                    <RiRoadMapLine className="salons__icon" />
                                    <h1 className="salons__cityName">{title}</h1>
                                </div>

                                <h3 className="salons__cityInfo">{cityInfo}</h3>
                            </div>
                        </div>
                    </div>

                    <div className="oftenAsk">
                        <div className="questions">

                            <div className="questions__content">
                                <h1 className="questions__mainTitle">Frequently asked questions</h1>

                                <div className="question">
                                    <h1 className="question__title" onClick={() => setQuestionOne(!questionOne)}>Blebleble</h1>
                                    {questionOne && <p className="question__text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem eaque sint obcaecati exercitationem. Expedita, dolorum. Impedit cum ipsum beatae deserunt porro, perspiciatis magnam facere est deleniti atque ut inventore iste!</p>}
                                </div>

                                <div className="question">
                                    <h1 className="question__title" onClick={() => setQuestionTwo(!questionTwo)}>Blebleble</h1>
                                    {questionTwo && <p className="question__text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem eaque sint obcaecati exercitationem. Expedita, dolorum. Impedit cum ipsum beatae deserunt porro, perspiciatis magnam facere est deleniti atque ut inventore iste!</p>}
                                </div>

                                <div className="question">
                                    <h1 className="question__title" onClick={() => setQuestionThree(!questionThree)}>Blebleble</h1>
                                    {questionThree && <p className="question__text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem eaque sint obcaecati exercitationem. Expedita, dolorum. Impedit cum ipsum beatae deserunt porro, perspiciatis magnam facere est deleniti atque ut inventore iste!</p>}
                                </div>

                                <div className="question">
                                    <h1 className="question__title" onClick={() => setQuestionFourth(!questionFourth)}>Blebleble</h1>
                                    {questionFourth && <p className="question__text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem eaque sint obcaecati exercitationem. Expedita, dolorum. Impedit cum ipsum beatae deserunt porro, perspiciatis magnam facere est deleniti atque ut inventore iste!</p>}
                                </div>
                            </div>
                        </div>
                    </div>
                </ContactPage>
            </ThemeProvider>
        </>
    );
}
