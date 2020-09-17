import React from 'react'
import { Tab } from 'semantic-ui-react'
import About from './About'
import Grid from './Grid'


const panes = [
    { menuItem: 'About', render: () => <Tab.Pane><About /></Tab.Pane> },
    { menuItem: 'Game of Life', render: () => <Tab.Pane><Grid /></Tab.Pane>}
]

const Nav = () => <Tab panes={panes}/>

export default Nav