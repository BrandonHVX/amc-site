import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'
import redbenz from '../assets/images/redbenz.jpeg'
import brabusclassic from '../assets/images/brabus-classic.jpg'
import babybenz from '../assets/images/babybenz.jpg'
import racingbenz from '../assets/images/racingbenz.jpg'
import racebenz from '../assets/images/racebenz.jpg'
import whiterace from '../assets/images/whiterace.jpg'
import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'

const Landing = (props) => ( <
    Layout >
    <
    Helmet >
    <
    title > Landing - Forty by HTML5 UP < /title> <
    meta name = "description"
    content = "Landing Page" / >
    <
    /Helmet>

    <
    BannerLanding / >

    <
    div id = "main" >
    <
    section id = "one" >
    <
    div className = "inner" >
    <
    header className = "major" >
    <
    h2 > About < /h2> < /
    header > <
    p > Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem.In efficitur ligula tate urna.Maecenas massa vel lacinia pellentesque lorem ipsum dolor.Nullam et orci eu lorem consequat tincidunt.Vivamus et sagittis libero.Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem.In efficitur ligula tate urna. < /p> < /
    div > <
    /section> <
    section id = "two"
    className = "spotlights" >
    <
    section >
    <
    Link to = "/generic"
    className = "image" >
    <
    img src = { redbenz }
    alt = "" / >
    <
    /Link> <
    div className = "content" >
    <
    div className = "inner" >
    <
    header className = "major" >
    <
    h3 > Coin < /h3> < /
    header > <
    p > Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem.In efficitur ligula tate urna.Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor.Nullam et orci eu lorem consequat tincidunt.Vivamus et sagittis tempus. < /p> <
    ul className = "actions" >
    <
    li > < Link to = "/generic"
    className = "button" > Learn more < /Link></li >
    <
    /ul> < /
    div > <
    /div> < /
    section > <
    section >
    <
    Link to = "/generic"
    className = "image" >
    <
    img src = { racebenz }
    alt = "" / >
    <
    /Link> <
    div className = "content" >
    <
    div className = "inner" >
    <
    header className = "major" >
    <
    h3 > Blog < /h3> < /
    header > <
    p > Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem.In efficitur ligula tate urna.Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor.Nullam et orci eu lorem consequat tincidunt.Vivamus et sagittis tempus. < /p> <
    ul className = "actions" >
    <
    li > < Link to = "/generic"
    className = "button" > Learn more < /Link></li >
    <
    /ul> < /
    div > <
    /div> < /
    section > <
    section >
    <
    Link to = "/generic"
    className = "image" >
    <
    img src = { babybenz }
    alt = "" / >
    <
    /Link> <
    div className = "content" >
    <
    div className = "inner" >
    <
    header className = "major" >
    <
    h3 > Shop < /h3> < /
    header > <
    p > Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem.In efficitur ligula tate urna.Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor.Nullam et orci eu lorem consequat tincidunt.Vivamus et sagittis tempus. < /p> <
    ul className = "actions" >
    <
    li > < Link to = "/generic"
    className = "button" > Learn more < /Link></li >
    <
    /ul> < /
    div > <
    /div> < /
    section > <
    /section> < /
    div >

    <
    /Layout>
)

export default Landing