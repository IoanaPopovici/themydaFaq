import './topic.css'
import Questions from "../../../components/questions/Questions";
import illustration from '../../../assets/illustration.png'
import {useContext} from "react";
import {ThemeContext} from "../../../context/ThemeContext";
const TopicNavigation = () =>{
    const {theme} = useContext(ThemeContext)
    return(
        <div className='container-topicNav'>
            <div className='first-box' style={{color: theme === 'dark' ? '#fff': ''}}>
                <div className='topic-navigation-container'>
                    <div className='topic-navigation-box'>
                        <p className='topic-navigation-title'>Topic Navigation</p>
                        <div className='topic-navigation-text'>
                            <p>Suspendisse eleifend nunc non.</p>
                            <p>Donec sit amet vinar ultricies commodo id ligula.</p>
                            <p>Quisque a a ante, at volutpat enim.</p>
                            <p>Suspendisse eleifend nunc non.</p>
                            <p>Donec sit amet vinar ultricies commodo id ligula.</p>
                        </div>
                    </div>
                    <div className='topic-navigation-box related-topic-box'>
                        <p className='topic-navigation-title'>Related Topic</p>
                        <div className='topic-navigation-text'>
                            <p>Suspendisse eleifend nunc non.</p>
                            <p>Donec sit amet vinar ultricies commodo id ligula.</p>
                            <p>Quisque a a ante, at volutpat enim.</p>
                            <p>Suspendisse eleifend nunc non.</p>
                            <p>Donec sit amet vinar ultricies commodo id ligula.</p>
                        </div>
                    </div>
                </div>
                <div className='submit-request-container'>
                    <div style={{position:'relative'}}>

                        <div className='illustration-img'>
                            <img src={illustration} alt="illustration"/>
                        </div>
                        <div className='submit-request-box'>
                          <p className='submit-title'>Still no luck? We can help!</p>
                          <p className='submit-text'>Contact us and we’ll get back to you as soon as possible.</p>
                            <button className='submit-request-btn'>SUBMIT A REQUEST</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='second-box'>
                <Questions />
                <Questions />
            </div>
        </div>
    )
}
export default TopicNavigation;