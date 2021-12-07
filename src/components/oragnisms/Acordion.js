import React,{useState} from 'react'
import { FaqData } from '../../Data/FaqContent';
import { AcordionSection, Container, Wrap, Dropdown } from './Acordion.styles';
import arrowdown from '../../assets/icons/arrowdown.svg';
import arrowup from '../../assets/icons/arrowup.svg';

const Acordion = () => {
    const [clicked, setClicked] = useState(false);

    const toggle = index => {
        if(clicked === index) {
            return setClicked(null)
        }
        setClicked(index)
    }

    return (
        <AcordionSection>
            <Container>
                {FaqData.map((item, index) => {
                    return(
                        <>
                        <Wrap onClick={() => toggle(index)} key={index} className={clicked === index ? "active" :  ""}>
                            <h1>{item.question}</h1>
                            <span>{clicked === index ? <img src={arrowup} alt="Logo" /> :  <img src={arrowdown} alt="Logo" />}</span>
                        </Wrap>
                        {clicked === index ? (
                            <Dropdown>
                             <p>{item.answer}</p>
                            </Dropdown>
                        ) : null}          
                        </>
                    )
                })}
            </Container>
        </AcordionSection>
    )
}

export default Acordion;
