import DevArea from "./DevArea"
import { useState } from "react"
import IconComponent from "../components/IconComp"
import chevrons from "../images/chevrons_full_width.png"
import MenuBar from "./MenuBar"

const HomePage = () => {

    const [devs, setDevs] = useState([
        {name:"JohnPanton", url:"https://github.com/Jp2429/pokemon-personal-project"}, 
        {name:"Ali Spittel", url:"https://alispit.tel"},
        {name:"Elio Jordan Lopez", url:"https://developer.vercel.app/work"}
    ])
    const [friends, setFriends] = useState([])

    const [projects, setProjects] = useState([
        {name: "Kanye quiz", url:"https://samuel-williams-ed.github.io/Quiz_React_Project/", img:""},
        {name: "TopTrumpsMMA", url:"", img:""},
        {name: "CodeTraveller", url:"https://samuel-williams-ed.github.io/Week_07_Traveller_Project/", img:""}
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
                <p className="float">right here.</p>
                <div className="empty-space"/>
                <div className="empty-space"/>
            </div>

            <h2><i>In the meantime, check out these awesome developers:</i></h2>
            
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