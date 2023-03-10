import ImageJohn from "../images/JohnPantonScreenshot.png";
import imageAli from "../images/AliS.png";
import imageElio from "../images/ElioJordanL.png";
import quizImage from "../images/kanyeQuizScreenshot.png"
import TopTrumpsImage from "../images/TopTrumpsMMAScreenshot.png"
import codeTravellerImage from "../images/CodeTravellerScreenshot.png"


const DevPage = ({dev}) => {

    const getImage = () => {
        if (dev.name === "John Panton") {return ImageJohn}
        else if (dev.name === "Ali Spittel") {return imageAli}
        else if (dev.name === "Elio Jordan Lopez") {return imageElio}
        else if (dev.name === "Kanye quiz") {return quizImage}
        else if (dev.name === "TopTrumpsMMA") {return TopTrumpsImage}
        else if (dev.name === "CodeTraveller") {return codeTravellerImage}
    }

    return (
        
        <div className="dev-card-container">
            <a className="cover-link" href={dev.url} alt={dev.alt}>
                <div className="dev-profile-pic-container">
                    <img className="dev-profile-pic" src={getImage()} alt="Profile picture of a developer"></img>
                </div>
                <div className="dev-profile-text-container">
                    <p className="dev-profile-name">
                        {dev.name}
                    </p>
                    <p>{dev.blog}</p>
                </div>
            </a>
        </div>
    )
}

export default DevPage