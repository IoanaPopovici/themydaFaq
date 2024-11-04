import './hero.css'
import news from '../../../assets/news.png'
import rectanglePurple from '../../../assets/RectanglePurple.png'
import rectangleTeal from '../../../assets/RectangleTeal.png'
import rectangleRed from '../../../assets/RectangleRed.png'
import people from '../../../assets/people.png'
import equal from '../../../assets/equal.png'
const Hero = () =>{

    return(
        <div className='hero-container'>
                <div className='card-container'>
                    <div className='card-img'>
                        <img src={news} alt="rectangleBox"/>
                    </div>
                    <div className='rectangleBox1'>
                        <img src={rectanglePurple} alt="rectangleBox"/>
                    </div>
                    <div className="card">
                        <div className='container-text'>
                            <h1 className='card-title'>Visit Our Blog</h1>
                            <p className='card-text'>Nam sollicitudin dignissim nunc cursus ullamcorper </p>
                        </div>
                    </div>
                </div>
            <div className='card-container container-dev'>
                <div className='card-img img-dev'>
                    <img src={equal} alt="rectangleBox"/>
                </div>
                <div className='rectangleBox2'>
                    <img src={rectangleTeal} alt="rectangleBox"/>
                </div>
                <div className="card card-dev">
                    <div className='container-text'>
                        <h1 className='card-title'>Developer Guide</h1>
                        <p className='card-text'>Nam sollicitudin dignissim nunc cursus ullamcorper </p>
                    </div>
                </div>
            </div>
            <div className='card-container container-ask'>
                <div className='card-img img-ask'>
                    <img src={people} alt="rectangleBox"/>
                </div>
                <div className='rectangleBox3'>
                    <img src={rectangleRed} alt="rectangleBox"/>
                </div>
                <div className="card card-ask">
                    <div className='container-text'>
                        <h1 className='card-title'>Ask For Help</h1>
                        <p className='card-text'>Nam sollicitudin dignissim nunc cursus ullamcorper </p>
                    </div>
                </div>
            </div>


        </div>
    )
}
export default Hero