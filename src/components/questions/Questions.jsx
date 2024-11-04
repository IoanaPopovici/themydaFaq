import './questions.css'
import chevron from '../../assets/chevron.png'
import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'

const Questions = () =>{
    const {theme} = useContext(ThemeContext)
    return(
            <div className='container-questions'>
                <div className='common-questions'>
                    <p style={{color: theme === 'dark' ? '#fff' : ''}}>Common Questions</p>
                </div>
                <div className='container-accordion'>
                    <div className='accordion'>
                        <div className='accordion-title-container'>
                            <p className='accordion-title'>Pellentesque ac bibendum tortor?</p>
                            <div>
                                <img src={chevron} alt="arrow"/>
                            </div>
                        </div>
                            <p className='accordion-description'>Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor.</p>
                    </div>
                </div>
                <div className='closed-accordion'>
                    <p className='accordion-title'>Pellentesque ac bibendum tortor?</p>
                    <div className='rotate'>
                        <img src={chevron} alt="arrow"/>
                    </div>
                </div>
                <div className='closed-accordion'>
                    <p className='accordion-title'>Pellentesque ac bibendum tortor?</p>
                    <div className='rotate'>
                        <img src={chevron} alt="arrow"/>
                    </div>
                </div>
                <div className='closed-accordion'>
                    <p className='accordion-title'>Pellentesque ac bibendum tortor?</p>
                    <div className='rotate'>
                        <img src={chevron} alt="arrow"/>
                    </div>
                </div>
                <div className='closed-accordion'>
                    <p className='accordion-title'>Pellentesque ac bibendum tortor?</p>
                    <div className='rotate'>
                        <img src={chevron} alt="arrow"/>
                    </div>
                </div>
            </div>

    )
}
export default Questions;