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

const IconComp = () => {

    return (
        <section className="icon-container float">
                <span className="icon"><InlineIcon icon={javascriptIcon} height={height} width={width}/></span>
                <span className="icon"><InlineIcon icon={nodejsIcon} height={height} width={width}/></span>
                <span className="icon"><InlineIcon icon={reactIcon} height={height} width={width}/></span>
                <span className="icon"><InlineIcon icon={pythonIcon} height={height} width={width}/></span>
                <span className="icon"><InlineIcon icon={flaskIcon} height={height} width={width}/></span>
                <span className="icon"><InlineIcon icon={postgresqlIcon} height={height} width={width}/></span>
                <span className="icon"><InlineIcon icon={html5} height={height} width={width}/></span>
                <span className="icon"><InlineIcon icon={css3} height={height} width={width}/></span>
                <span className="icon"><InlineIcon icon={gitIcon} height={height} width={width}/></span>
        </section>
    )
}

export default IconComp
