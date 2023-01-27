import imageElio from "../images/ElioJordanLopez.png";
import imageAli from "../images/AliSpittel.png";
import imageBen from "../images/BenRogers.png";
// TODO - avoid importing all art assets


const DevPage = ({dev}) => {


    const imageElio = require("../images/ElioJordanLopez.png")
    const imageAli = require("../images/AliSpittel.png")
    const imageBen = require("../images/BenRogers.png")
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
        <a href={dev.url} alt="Ben Rogers Profile">
            <div className="dev-page-container">
                <div className="dev-profile-pic-container">
                    <img className="dev-profile-pic" src={getImage()} alt="Profile picture of a developer"></img>
                </div>
                <p className="dev-profile-name">
                    {dev.name}
                </p>
            </div>
        </a>
    )
}

export default DevPage