import CoolLinks from "../components/CoolLinks"


const DevArea = ({devs}) => {


    const renderDevs = devs.map((dev, index) => {
        return (<CoolLinks key={index} dev={dev}/>)
    })

    return (
        <>
            <section className="dev-area">
                {renderDevs}
            </section>
        </>
    )
}

export default DevArea

