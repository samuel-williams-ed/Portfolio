import DevPage from "./DevPage"
import styled from "styled-components"


const CoolLinks = ({dev}) => {
    return (
        <Section>
            <DevPage dev={dev}/>
        </Section>
    )
}

export default CoolLinks

const Section = styled.section`

`