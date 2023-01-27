import DevArea from "./DevArea"
import { useState } from "react"

const HomePage = () => {

    /* devs
    Object structure:
    {name:"Ben Rogers", url:"https://benrogers.dev"}
    */

    const [devs, setDevs] = useState([
        {name:"Ben Rogers", url:"https://benrogers.dev", img:"/assets/images/ElioJordanLopez.png"}, 
        {name:"Ali Spittel", url:"https://alispit.tel", img:"/assets/images/ElioJordanLopez.png"},
        {name:"Elio Jordan Lopez", url:"https://developer.vercel.app/work", img:"/assets/images/ElioJordanLopez.png"}])
    const [friends, setFriends] = useState([])

    return (
        <>


        <p>Dev Area:</p>
            <DevArea devs={devs}/>
        </>
    )
}

export default HomePage