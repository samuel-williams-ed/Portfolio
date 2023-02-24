import DevArea from "./DevArea"
import { useState } from "react"
import IconComponent from "../components/IconComp"
import MenuBar from "./MenuBar"

import LocalData from "../data/LocalData"
import { useEffect } from "react"

const HomePage = () => {

    const [devs, setDevs] = useState([])
    const [friends, setFriends] = useState([])
    const [projects, setProjects] = useState([])

    // set developers data from local file
    useEffect(() => {
        setDevs(LocalData("devs"))
        setProjects(LocalData("projects"))
    }, [])

    // ######################### //
    // ######### html ########## //
    // ######################### //

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
                
                {projects && <DevArea devs={projects}></DevArea>}

                <div className="empty-space"/>

                <IconComponent/>
                <div className="empty-space"/>
                <div className="empty-space"/>
                <div className="empty-space"/>
            </div>

            <h2 className="float"><i>Check out these great developers:</i></h2>
            
            <div className="space-holder">
                <div className="empty-space"/>
                {devs && <DevArea devs={devs}/>}
                <div className="empty-space"/>
            </div>
        </div>
        </>
    )
}

export default HomePage