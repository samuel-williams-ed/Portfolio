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

    return (
        <>
        <h1>Welcome. This area in in progress...</h1>
        <p></p>

        <p><i>In the meantime, check out these awesome developers:</i></p>
            <DevArea devs={devs}/>
        </>
    )
}

export default HomePage