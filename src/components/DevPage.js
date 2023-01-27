// import image from "../../assets/images/ElioJordanLopez.png"

const DevPage = ({dev}) => {

    const imageLink = dev.img
    const image = "../../" + imageLink
    const test = "../../assets/images/ElioJordanLopez.png"
    const path = "/Users/user/codeclan_work/git_portfolio/assets/images/ElioJordanLopez.png"


    return (
        <div className="dev-page-container">
            <p>DevPage</p>
            <div className="dev-profile-pic-container">
                <img className="dev-profile-pic" src={path} alt="Profile picture of a developer"></img>
            </div>
            <p className="dev-profile-name">
                <a href={dev.url} alt="Ben Rogers Profile">{dev.name} Profile:</a>
            </p>
        </div>
    )
}

export default DevPage