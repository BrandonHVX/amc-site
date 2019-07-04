import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.jpg'
import redbenz from '../assets/images/redbenz.jpeg'
import brabusclassic from '../assets/images/brabus-classic.jpg'
import babybenz from '../assets/images/babybenz.jpg'
import racingbenz from '../assets/images/racingbenz.jpg'
import racebenz from '../assets/images/racebenz.jpg'
import whiterace from '../assets/images/whiterace.jpg'

class HomeIndex extends React.Component {
    render() {

        return ( <
            Layout >
            <
            Helmet title = "Gatsby Starter - Forty"
            meta = {
                [
                    { name: 'description', content: 'Sample' },
                    { name: 'keywords', content: 'sample, something' },
                ]
            } >
            <
            /Helmet>

            <
            Banner / >

            <
            div id = "main" >
            <
            section id = "one"
            className = "tiles" >
            <
            article style = {
                { backgroundImage: `url(${redbenz})` }
            } >
            <
            header className = "major" >
            <
            h3 > About < /h3> <
            p > Our Company < /p> < /
            header > <
            Link to = "/landing"
            className = "link primary" > < /Link> < /
            article > <
            article style = {
                { backgroundImage: `url(${babybenz})` }
            } >
            <
            header className = "major" >
            <
            h3 > Coin < /h3> <
            p > Amped Up Motor Coin < /p> < /
            header > <
            Link to = "/landing"
            className = "link primary" > < /Link> < /
            article > <
            article style = {
                { backgroundImage: `url(${racingbenz})` }
            } >
            <
            header className = "major" >
            <
            h3 > Blog < /h3> <
            p > Follow Us < /p> < /
            header > <
            Link to = "/landing"
            className = "link primary" > < /Link> < /
            article > <
            article style = {
                { backgroundImage: `url(${brabusclassic})` }
            } >
            <
            header className = "major" >
            <
            h3 > Shop < /h3> <
            p > apparal & merchandise < /p> < /
            header > <
            Link to = "/landing"
            className = "link primary" > < /Link> < /
            article > <
            article style = {
                { backgroundImage: `url(${racebenz})` }
            } >
            <
            header className = "major" >
            <
            h3 > Racing Team < /h3> <
            p > Check out our team < /p> < /
            header > <
            Link to = "/landing"
            className = "link primary" > < /Link> < /
            article > <
            article style = {
                { backgroundImage: `url(${whiterace})` }
            } >
            <
            header className = "major" >
            <
            h3 > Contact < /h3> <
            p > Contact Us < /p> < /
            header > <
            Link to = "/landing"
            className = "link primary" > < /Link> < /
            article > <
            /section> <
            section id = "two" >
            <
            div className = "inner" >
            <
            header className = "major" >
            <
            h2 > Sign Up < /h2> < /
            header > <
            p > Sign Up Today! < /p> <
            ul className = "actions" >
            <
            li > < Link to = "/landing"
            className = "button next" > Get Started < /Link></li >
            <
            /ul> < /
            div > <
            /section> < /
            div >

            <
            /Layout>
        )
    }
}

export default HomeIndex