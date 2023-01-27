import CoolLinks from "../components/CoolLinks"


const DevArea = ({devs}) => {


    const renderDevs = devs.map((dev, index) => {
        return (<CoolLinks key={index} dev={dev}/>)
        // TODO refactor with suitable key
    })

    return (
        <>
            <div className="dev-area">
                {renderDevs}
            </div>
        </>
    )
}

export default DevArea

