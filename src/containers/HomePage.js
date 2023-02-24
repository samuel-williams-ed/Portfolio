import DevArea from "./DevArea"
import { useState } from "react"
import IconComponent from "../components/IconComp"
import chevrons from "../images/chevrons_full_width.png"
import MenuBar from "./MenuBar"

const HomePage = () => {

    const [devs, setDevs] = useState([
        {name:"John Panton", url:"https://jp2429.github.io/pokemon-personal-project/", alt:"Screenshot of John Panton's website"}, 
        {name:"Ali Spittel", url:"https://alispit.tel", alt:"Screenshot of Ali Spittel's website"},
        {name:"Elio Jordan Lopez", url:"https://developer.vercel.app/work", alt:"Screenshot of Elio Jordan Lopez's website"}
    ])
    const [friends, setFriends] = useState([])

    const [projects, setProjects] = useState([
        {name: "Kanye quiz", url:"https://samuel-williams-ed.github.io/Quiz_React_Project/", img:"", blog:"Pulling multiple API's into a React based app to make a whimsical quiz. Can you guess which quote is from Kanye?", alt:"Screenshot of Kanye Quiz web app"},
        {name: "TopTrumpsMMA", url:"", img:"", alt:"Screenshot of TopTrumpsMMA website", blog:"The ultimate virtual fighting card game. Check out our team project from CodeClan e62! A browser-based game built using the React framework."},
        {name: "CodeTraveller", url:"https://samuel-williams-ed.github.io/Week_07_Traveller_Project/", img:"", alt:"Screenshot of CodeTraveller website", blog:"A fun exercise pulling in countries API to a React web-page. See details about your favourite countries with dynamically accessed data."}
    ])

    // ######################### //
    // ######### html ########## //
    // ######################### //

    let fullURL = "Portfolio/static/media/" + devs[0].img 

    return (
        <>
        <MenuBar/>
        <div className="background-thread">
            
            <div className="space-holder">
                <div className="empty-space"/>
                <div className="empty-space"/>
                <div className="empty-space"/>

                {/* lets sort this bit */}
                {/* projects in here */}
                {/* <p className="float">One day, there will be a beautiful array of portfolio pieces.</p> */}
                
                <DevArea devs={projects}></DevArea>

                <div className="empty-space"/>

                <IconComponent/>
                <div className="empty-space"/>
                <div className="empty-space"/>
                <div className="empty-space"/>
            </div>

            <h2 className="float"><i>Check out these great developers:</i></h2>
            
            <div className="space-holder">
                <div className="empty-space"/>
                <DevArea devs={devs}/>
                <div className="empty-space"/>
            </div>
        </div>
            
        </>
    )
}

export default HomePage