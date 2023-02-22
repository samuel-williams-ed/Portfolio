import { InlineIcon } from "@iconify/react"

import javascriptIcon from "@iconify/icons-logos/javascript"
import nodejsIcon from '@iconify/icons-logos/nodejs'
import reactIcon from '@iconify/icons-logos/react'
// import mongodbIcon from '@iconify/icons-logos/mongodb'

import pythonIcon from '@iconify/icons-logos/python'
import flaskIcon from '@iconify/icons-logos/flask'
import postgresqlIcon from '@iconify/icons-logos/postgresql'

import html5 from '@iconify/icons-logos/html-5'
import css3 from '@iconify/icons-logos/css-3'
import gitIcon from '@iconify/icons-logos/git'

// import javaIcon from '@iconify/icons-logos/java'

const height = 50;
const width = 50;

const IconComponent = () => {
    const listOfIcons = [javascriptIcon, nodejsIcon, reactIcon, pythonIcon, flaskIcon, postgresqlIcon, html5, css3, gitIcon]

    const renderIcons = listOfIcons.map((eachIcon) => {
        return (<span className="icon float"><InlineIcon icon={eachIcon} height={height} width={width}/></span>)
    })

    return (
        <>
        {renderIcons}
        </>
    )
}

export default IconComponent
