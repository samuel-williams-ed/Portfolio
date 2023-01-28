import imageElio from "../images/ElioJordanL.png";
import imageAli from "../images/AliS.png";
import imageBen from "../images/BenR.png";
// TODO - avoid importing all art assets


const DevPage = ({dev}) => {


    const imageElio = require("../images/ElioJordanL.png")
    const imageAli = require("../images/AliS.png")
    const imageBen = require("../images/BenR.png")
    const getImage = () => {
        if (dev.name === "Ben Rogers") {return imageBen}
        else if (dev.name === "Ali Spittel") {return imageAli}
        else {
            return imageElio
        }
    }


    // const path = "/Users/user/codeclan_work/git_portfolio/src/images/ElioJordanLopez.png"
    // const relativePath = "src/images/ElioJordanLopez.png"

    return (
        
        <div className="dev-card-container">
            <a href={dev.url} alt="Ben Rogers Profile">
                <div className="dev-profile-pic-container">
                    <img className="dev-profile-pic" src={getImage()} alt="Profile picture of a developer"></img>
                </div>
                <p className="dev-profile-name">
                    {dev.name}
                </p>
            </a>
        </div>
    )
}

export default DevPage