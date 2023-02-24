import styled from "styled-components"


const MenuBar = () => {
    return (
        <>
            <ol className="menu-bar float">
                <Li className="menu-button"><h2>About</h2></Li>
                <Li className="menu-button"><h2>Projects</h2></Li>
                <Li className="menu-button"><h2>Experience</h2></Li>
            </ol>
        </>
    )
}

const Li = styled.li`
    list-style: none;
`

export default MenuBar