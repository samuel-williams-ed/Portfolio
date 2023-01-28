import DevArea from "./DevArea"
import { useState } from "react"
import IconComp from "../components/IconComp"
import chevrons from "../images/chevrons_full_width.png"

const HomePage = () => {

    /* devs
    Object structure:
    {name:"Ben Rogers", url:"https://benrogers.dev"}
    https://gabrielthecode.com
    */

    const [devs, setDevs] = useState([
        {name:"Ben Rogers", url:"https://benrogers.dev", img:"images/ElioJordanLopez.png"}, 
        {name:"Ali Spittel", url:"https://alispit.tel", img:"images/ElioJordanLopez.png"},
        {name:"Elio Jordan Lopez", url:"https://developer.vercel.app/work", img:"images/ElioJordanLopez.png"}])
    const [friends, setFriends] = useState([])



    // ######################### //
    // ######### html ########## //
    // ######################### //

    return (
        <>
        <div className="background-thread">
            <h1>Welcome. This area is in progress...</h1>
            <div className="space-holder">
                
                <div className="empty-space"/>
                <div className="empty-space"/>
                <p className="float">One day, there will be a beautiful array of portfolio pieces.</p>
                <div className="empty-space"/>
                <IconComp/>
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