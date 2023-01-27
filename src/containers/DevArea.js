import CoolLinks from "../components/CoolLinks"

const DevArea = ({devs}) => {


    const renderDevs = devs.map((dev) => {
        return (<CoolLinks dev={dev}/>)
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