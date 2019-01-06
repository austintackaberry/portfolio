import React, { Component } from 'react'
import GitHubCalendar from 'github-calendar'
import classNames from 'classnames'
import jobSortVidSrc from '../videos/jobsort.webm'
import stockItVidSrc from '../videos/stockit.webm'
import yeggleVidSrc from '../videos/yeggle.webm'
import jobSortImgSrc from '../images/jobsort.png'
import stockItImgSrc from '../images/stockit.png'
import yeggleImgSrc from '../images/yeggle.png'
import professionalPicSrc from '../images/pic-square.jpg'

import '../styles/reset.css'
import 'github-calendar/dist/github-calendar.css'
import '@fortawesome/fontawesome-free/css/all.css'
// import '@fortawesome/fontawesome-free/js/all.min.js'
import '../styles/styles.css'

/* eslint-disable jsx-a11y/anchor-has-content */

class IndexPage extends Component {
  constructor() {
    super()
    this.state = {
      showGithubCalendar: false,
    }
    this.recalculateGithubCalendar = this.recalculateGithubCalendar.bind(this)
  }
  recalculateGithubCalendar() {
    if (window.innerWidth > 860) {
      this.setState({ showGithubCalendar: true })
    } else {
      this.setState({ showGithubCalendar: false })
    }
  }
  componentDidMount() {
    this.recalculateGithubCalendar()
    GitHubCalendar('.calendar', 'austintackaberry')

    // Hide github calendar for small screen sizes on resize
    window.addEventListener('resize', this.recalculateGithubCalendar)

    // Use smaller icons for mobile
    let yeggleVideo = document.getElementById('yeggle')
    let stockitVideo = document.getElementById('stockit')
    let jobsortVideo = document.getElementById('jobsort')

    // Crop top of videos to only show window.innerHeight as a function of the video height
    let yeggleVideoFn = function() {
      yeggleVideo.style.marginTop = `${(yeggleVideo.offsetHeight * -37) /
        400}px`
      yeggleVideo.parentElement.style.height = `${yeggleVideo.offsetHeight +
        parseFloat(yeggleVideo.style.marginTop.replace('px', ''))}px`
    }
    let stockitVideoFn = function() {
      stockitVideo.style.marginTop = `${(stockitVideo.offsetHeight * -37) /
        400}px`
      stockitVideo.parentElement.style.height = `${stockitVideo.offsetHeight +
        parseFloat(stockitVideo.style.marginTop.replace('px', ''))}px`
    }
    let jobsortVideoFn = function() {
      jobsortVideo.style.marginTop = `${jobsortVideo.offsetHeight * -0.037}px`
      jobsortVideo.style.marginBottom = `${jobsortVideo.offsetHeight *
        -0.037}px`
      jobsortVideo.parentElement.style.height = `${jobsortVideo.offsetHeight +
        2 * parseFloat(jobsortVideo.style.marginTop.replace('px', ''))}px`
    }

    // Execute functions when video data is loaded and on resize
    yeggleVideo.onloadeddata = yeggleVideoFn()
    window.addEventListener('resize', yeggleVideoFn)
    stockitVideo.onloadeddata = stockitVideoFn()
    window.addEventListener('resize', stockitVideoFn)
    jobsortVideo.onloadeddata = jobsortVideoFn()
    window.addEventListener('resize', jobsortVideoFn)
  }
  render() {
    const { showGithubCalendar } = this.state
    return (
      <div>
        <div className="banner">
          <div className="banner-container">
            <div className="photo-container">
              <img
                className="profile-pic"
                align="top"
                src={professionalPicSrc}
                alt="Professional"
              />
            </div>
            <div className="banner-text">
              <h1>Austin Tackaberry</h1>
            </div>
          </div>
        </div>
        <div className="content">
          <div
            className={classNames({
              calendar: true,
              item: true,
              hide: !showGithubCalendar,
            })}
            id="my-calendar"
          />
          <div className="item">
            <h2 id="about">About</h2>
            <div className="subitem" style={{ paddingBottom: '0px' }}>
              <p>
                Software Engineer working at Human API{' '}
                <span role="img" aria-label="Human API emoji">
                  🙋‍
                </span>{' '}
                who graduated from Purdue University currently living in
                Berkeley, CA. I enjoy building software, contributing to the
                open source community, and continuously learning.
              </p>
              <div className="icons">
                <a
                  href="https://www.linkedin.com/in/austintackaberry/"
                  className="fab fa-linkedin fa-2x"
                />
                <a
                  href="https://twitter.com/AETackaberry"
                  className="fab fa-twitter fa-2x"
                />
                <a
                  href="https://github.com/austintackaberry/"
                  className="fab fa-github fa-2x"
                />
                <a
                  href="https://www.reddit.com/user/austintackaberry/"
                  className="fab fa-reddit fa-2x"
                />
                <a
                  href="https://www.medium.com/@austintackaberry"
                  className="fab fa-medium fa-2x"
                />
              </div>
            </div>
          </div>
          <div className="item">
            <h2>Languages</h2>
            <div className="subitem" style={{ paddingBottom: '0px' }}>
              <p>JavaScript, Python, Nodejs, TypeScript</p>
            </div>
          </div>
          <div className="item">
            <h2>Technologies</h2>
            <div className="subitem" style={{ paddingBottom: '0px' }}>
              <p>
                React, Redux, Express, Sass, CSS, HTML, Git, Jest, Mocha, Chai,
                Enzyme, Cypress, ESLint, Prettier, Linux/Unix, D3, Flask,
                MongoDB, MySQL, PostgreSQL
              </p>
            </div>
          </div>
          <div className="item">
            <h2>Work Experience</h2>
            <div className="subitem">
              <h3>Software Engineer - Human API</h3>
              <p>
                JavaScript, React, Nodejs, Sass, Hapijs, Mongo, Cypress, Scrum
              </p>
              <ul>
                <li>
                  Head maintainer for company's main consumer-facing web
                  application
                </li>
                <li>
                  Led the effort to improve web security (A+ on Mozilla
                  Observatory) of all consumer-facing web apps
                </li>
                <li>
                  Developed JavaScript client to help customers with product
                  integrations, deployed to npm and cdn.
                </li>
              </ul>
            </div>
          </div>
          <div className="item">
            <h2>Open Source / Software Community</h2>
            <div className="subitem">
              <h3>
                <a href="https://ydkjs-exercises.com">YDKJS Exercises</a>
              </h3>
              <p className="small-description">
                {` - Exercises to go along with `}
                <a href="https://github.com/getify/You-Dont-Know-JS">
                  You Don't Know JavaScript
                </a>
              </p>
              <p>JavaScript, React, Jest, react-testing-library, Cypress</p>
              <ul>
                <li>Creator and maintainer</li>
                <li>98 stars and 28 contributors</li>
                <li>Architected application to ensure reusability</li>
                <li>Used React Context API to manage application state</li>
                <li>
                  Fostered open and encouraging community that encourages
                  first-time contributors
                </li>
              </ul>
            </div>
            <div className="subitem">
              <h3>
                <a href="https://github.com/paypal/downshift">Downshift</a>
              </h3>
              <p className="small-description">
                {` - Autocomplete React component that uses render props design
                pattern`}
              </p>
              <p>JavaScript, React, Jest, Storybook, Cypress</p>
              <ul>
                <li>Added as collaborator</li>
                <li>
                  Developed feature allowing the user to disable item event
                  handlers, added unit test, and updated documentation
                </li>
                <li>
                  Fixed bug preventing toggle button from working properly when
                  the user tabs to it, added unit test and integration tests
                </li>
                <li>Fixed bug causing warning to trigger at the wrong time</li>
                <li>
                  Added example for integrating downshift with react-final-form
                </li>
                <li>
                  Active in answering questions, reporting bugs, and reviewing
                  pull requests
                </li>
              </ul>
            </div>
            <div className="subitem">
              <h3>
                <a href="https://www.meetup.com/East-Bay-React-Meetup-Group/">
                  East Bay React Meetup
                </a>
              </h3>
              <p className="small-description">
                {` - Discuss/Teach/Learn all things React`}
              </p>
              <p>JavaScript, React</p>
              <ul>
                <li>Creator and Organizer</li>
                <li>200+ members</li>
                <li>
                  Gave tech talk on React Context API for audience of 30 members
                </li>
              </ul>
            </div>
          </div>
          <div className="item">
            <h2 id="my-work">Projects</h2>
            <div className="subitem">
              <h3>
                <a
                  href="https://sicc-piccs.netlify.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SICC PICCS
                </a>
              </h3>
              <p className="small-description">
                {` - Real-time, image-recognition, multiplayer scavenger hunt`}
              </p>
              <p>JavaScript, React, GraphQL, Apollo, Postgres</p>
              <p className="description">
                {`Create or join a game with friends or strangers. Once the game starts, all players
                will be prompted to take a picture of something (hot dog, coffee mug, etc.). 
                The first person to take a picture of that item, wins. Clarifai API was used for 
                image recognition. Hasura API was used as a real-time, GraphQL server. 
                This web app was developed with a team of 5 developers.
                  `}
              </p>
            </div>
            <div className="subitem">
              <h3>
                <a
                  href="https://www.stockit.tech"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  StockIT.Tech
                </a>
              </h3>
              <p className="small-description">
                {` - Machine learning stock-picking game`}
              </p>
              <p>
                JavaScript, React, Python, Flask, Pandas, Scikit Learn, D3, CSS,
                HTML
              </p>
              <p className="description">
                Used Pandas and Scikit Learn to develop a machine learning model
                for each stock. This model is used to determine if/when the AI
                should buy/sell. Used D3 and React to plot the data and update
                the leaderboard. Optimized for desktop and mobile.
              </p>
              <a
                href="http://stockit.tech"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="video-container">
                  <video
                    poster={stockItImgSrc}
                    src={stockItVidSrc}
                    id="stockit"
                    className="video"
                    muted
                    autoPlay
                    loop
                  />
                </div>
              </a>
            </div>
            <div className="subitem">
              <h3>
                <a
                  href="https://www.jobsort.tech"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  jobSort.Tech
                </a>
              </h3>
              <p className="small-description">
                {` - Sorts/Filters job listings from Hacker News: Who is Hiring`}
              </p>
              <p>
                JavaScript, React, Redux, Node, Express, MySQL, CSS, HTML,
                Mocha, Chai, Enzyme, ESLint, Prettier
              </p>
              <p className="description">
                A node app updates a MySQL database every hour with updates to
                the latest Hacker News: Who is Hiring post. Separately, the web
                app queries the MySQL database for Hacker News data when the
                user submits input form. The job listings are sorted by the tech
                the user knows and how familiar the user is with each of them.
                Optimized for desktop and mobile.
              </p>
              <a
                href="http://jobsort.tech"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="video-container">
                  <video
                    poster={jobSortImgSrc}
                    src={jobSortVidSrc}
                    id="jobsort"
                    className="video"
                    muted
                    autoPlay
                    loop
                  />
                </div>
              </a>
            </div>
            <div className="subitem">
              <h3>
                <a
                  href="https://www.yeggle.tech"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Yeggle.Tech
                </a>
              </h3>
              <p className="small-description">
                {` - Compares Yelp search results with Google Maps`}
              </p>
              <p>JavaScript, React, Node, Express, CSS, HTML</p>
              <p className="description">
                Calls Yelp and Google APIs to get search result data that can be
                filtered/sorted by various categories. The "Yeggle" button
                matches up Google results to Yelp results; the Yeggle algorithm
                utilizes coordinates, title, and address to determine if there
                is a match. Optimized for desktop and mobile.
              </p>
              <a
                href="http://yeggle.tech"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="video-container">
                  <video
                    poster={yeggleImgSrc}
                    src={yeggleVidSrc}
                    id="yeggle"
                    className="video"
                    muted
                    autoPlay
                    loop
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default IndexPage
