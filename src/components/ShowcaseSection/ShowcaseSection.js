import './ShowcaseSection.css';
import img_showcase from '../../assets/images/showcase-image.svg';
import img_bclines from '../../assets/images/background-lines.svg'

function ShowcaseSection() {
  return (
    <div>
            {/* <!-- showcase start --> */}
        <div className="showcase">
            <div className="container">
                <img src={img_showcase} alt="" className="showcaseImage"/>
                <div className="showcaseItem">
                    <div className="title">We provide The Best business solution</div>
                    <div className="description">Establish your vision and value propostion and turn them into testable prototypes.</div>
                    <div className="buttons">
                        <button className="primaryBtn btn">Get Consulting<i className="fa-solid fa-arrow-up-right-from-square"></i></button>
                        <button className="secondaryBtn btn">Learn More<i className="fa-solid fa-arrow-up-right-from-square"></i></button>
                    </div>
                </div>
            </div>
            <img className="effekt" src={img_bclines} alt=""/>
        </div>
    {/* <!-- showcase end --> */}
    </div>
  )
}

export default ShowcaseSection