import DevArea from "./DevArea"
import { useState } from "react"

const HomePage = () => {

    /* devs
    Object structure:
    {name:"Ben Rogers", url:"https://benrogers.dev"}
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
        <h1>Welcome. This area is in progress...</h1>

        <div className="space-holder">

            <div className="empty-space"/>
            <div className="empty-space"/>
            <div className="empty-space"/>
            <p>One day, there will be a beautiful array of porfolio pieces.</p>
            <div className="empty-space"/>
            <div className="empty-space"/>
            <div className="empty-space"/>
            <div className="empty-space"/>
            <p className="full-width">right here.</p>
            <div className="empty-space"/>
            <div className="empty-space"/>
            <div className="empty-space"/>
        </div>


        <p><i>In the meantime, check out these awesome developers:</i></p>
        
        <div className="space-holder">
            <div className="empty-space"/>
            <DevArea devs={devs}/>
            <div className="empty-space"/>
        </div>
            
        </>
    )
}

export default HomePage