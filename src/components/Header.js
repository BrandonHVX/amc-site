import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import amclogo from '../assets/images/amclogo.png'

const Header = (props) => ( <
    header id = "header"
    className = "alt" >
    <
    Link to = "/"
    className = "logo" > < img src = { amclogo }
    width = { 300 }

    mode = 'fit'
    alt = "" / > < /Link> <
    nav >
    <
    a className = "menu-link"
    onClick = { props.onToggleMenu }
    href = "javascript:;" > Menu < /a> < /
    nav > <
    /header>
)

Header.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Header