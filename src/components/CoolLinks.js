import DevPage from "./DevPage"


const CoolLinks = ({dev}) => {
    return (
        <section>
            <p>CoolLink:</p>
            <DevPage dev={dev}/>
        </section>
    )
}

export default CoolLinks