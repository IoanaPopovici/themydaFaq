import './title.css'
import support from '../../../assets/SUPPORT.png'
import object from '../../../assets/Object.png'
import objectPurple from '../../../assets/Object1purple.png'
import objectGreyPurple from '../../../assets/ObjectGreyPurple.png'
import objectBlue from '../../../assets/ObjectBlue.png'
import {useContext} from "react";
import {ThemeContext} from "../../../context/ThemeContext";

const Title = () =>{
    const {theme} = useContext(ThemeContext)
    return(
        <div className='container-title-images'>
            <div className='support-image'>
                <img src={support} alt="support" />
            </div>
            <div className='help-image'>
                <p className='help-text' style={{color: theme === 'dark' ? '#fff' : '#393939'}}>How can we help?</p>
            </div>
            <div className='search-bar'>
                <input type='text' placeholder='Ask a question' className='search-input'/>
            </div>
            <div className="object-img">
                <img  src={object} alt='object'/>
            </div>
            <div className='object-purple'>
                <img src={objectPurple} alt='objPurple' className='purple-img' width={'115px'} height={'90px'}/>
            </div>
            <div className='object-grey-purple'>
                <img src={objectGreyPurple} alt='objectGreyPurple' className='grey-purple-img' width={'135.44px'} height={'138.61px'}/>
            </div>
            <div className='object-blue'>
                <img src={objectBlue} alt='object-blue' className='object-blue-img'/>
            </div>
        </div>
    )
}
export default Title;