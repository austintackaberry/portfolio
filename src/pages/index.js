import React from 'react'
/* eslint-disable jsx-a11y/anchor-has-content */

const IndexPage = () => (
  <div>
    <div class="banner">
      <div class="banner-container">
        <div class="photo-container">
          <img
            class="profile-pic"
            align="top"
            src="pic-square.jpg"
            alt="Professional"
          />
        </div>
        <div class="banner-text">
          <h1>Austin Tackaberry</h1>
        </div>
      </div>
    </div>
    <div class="content">
      <script src="https://cdn.rawgit.com/IonicaBizau/github-calendar/gh-pages/dist/github-calendar.min.js" />

      <link
        rel="stylesheet"
        href="https://cdn.rawgit.com/IonicaBizau/github-calendar/gh-pages/dist/github-calendar.css"
      />

      <link rel="stylesheet" href="styles.css" />

      <div class="calendar item" id="my-calendar" />

      <script>GitHubCalendar(".calendar", "austintackaberry");</script>
      <div class="item">
        <h2 id="about">About</h2>
        <div class="subitem" style={{ paddingBottom: '0px' }}>
          <p>
            Software Engineer working at Human API{' '}
            <span role="img" aria-label="Human API emoji">
              🙋‍
            </span>{' '}
            who graduated from Purdue University currently living in Berkeley,
            CA. I enjoy building software, contributing to the open source
            community, and continuously learning.
          </p>
          <div class="icons">
            <a
              href="https://www.linkedin.com/in/austintackaberry/"
              class="fab fa-linkedin fa-2x"
            />
            <a
              href="https://twitter.com/AETackaberry"
              class="fab fa-twitter fa-2x"
            />
            <a
              href="https://github.com/austintackaberry/"
              class="fab fa-github fa-2x"
            />
            <a
              href="https://www.reddit.com/user/austintackaberry/"
              class="fab fa-reddit fa-2x"
            />
            <a
              href="https://www.medium.com/@austintackaberry"
              class="fab fa-medium fa-2x"
            />
          </div>
        </div>
      </div>
      <div class="item">
        <h2>Languages</h2>
        <div class="subitem" style={{ paddingBottom: '0px' }}>
          <p>JavaScript, Python, Nodejs</p>
        </div>
      </div>
      <div class="item">
        <h2>Technologies</h2>
        <div class="subitem" style={{ paddingBottom: '0px' }}>
          <p>
            React, Redux, Express, Sass, CSS, HTML, Git, Jest, MySQL, Mocha,
            Chai, Enzyme, Cypress, ESLint, Prettier, Linux/Unix, D3, Flask,
            MongoDB, AWS
          </p>
        </div>
      </div>
      <div class="item">
        <h2>Work Experience</h2>
        <div class="subitem">
          <h3>Software Engineer - Human API</h3>
          <p>JavaScript, React, Nodejs, Sass, Hapijs, Mongo, Scrum</p>
          <ul>
            <li>
              Head maintainer for company's main consumer-facing web application
            </li>
            <li>
              Led the effort to improve web security (A+ on Mozilla Observatory)
              of all consumer-facing web apps
            </li>
            <li>
              Developed JavaScript client to help customers with product
              integrations, deployed to npm and cdn.
            </li>
          </ul>
        </div>
      </div>
      <div class="item">
        <h2>Open Source / Software Community</h2>
        <div class="subitem">
          <h3>
            <a href="https://ydkjs-exercises.com">YDKJS Exercises</a>
          </h3>
          <p class="small-description">
            - Exercises to go along with
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
              Fostered open and encouraging community that encourages first-time
              contributors
            </li>
          </ul>
        </div>
        <div class="subitem">
          <h3>
            <a href="https://github.com/paypal/downshift">Downshift</a>
          </h3>
          <p class="small-description">
            - Autocomplete React component that uses render props design pattern
          </p>
          <p>JavaScript, React, Jest, Storybook, Cypress</p>
          <ul>
            <li>Added as collaborator</li>
            <li>
              Developed feature allowing the user to disable item event
              handlers, added unit test, and updated documentation
            </li>
            <li>
              Fixed bug preventing toggle button from working properly when the
              user tabs to it, added unit test and integration tests
            </li>
            <li>Fixed bug causing warning to trigger at the wrong time</li>
            <li>
              Added example for integrating downshift with react-final-form
            </li>
            <li>
              Active in answering questions, reporting bugs, and reviewing pull
              requests
            </li>
          </ul>
        </div>
        <div class="subitem">
          <h3>
            <a href="https://www.meetup.com/East-Bay-React-Meetup-Group/">
              East Bay React Meetup
            </a>
          </h3>
          <p class="small-description">
            - Discuss/Teach/Learn all things React
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
        <div class="subitem" style={{ paddingBottom: '0px' }}>
          <h3>
            <a href="https://github.com/reactjs/redux">Redux</a>
          </h3>
          <p class="small-description">
            - Predictable state container for JavaScript apps
          </p>
          <p>JavaScript</p>
          <ul>
            <li>Contributed to documentation - when to use Redux</li>
          </ul>
        </div>
      </div>
      <div class="item">
        <h2 id="my-work">Projects</h2>
        <div class="subitem">
          <h3>
            <a
              href="https://www.stockit.tech"
              target="_blank"
              rel="noopener noreferrer"
            >
              StockIT.Tech
            </a>
          </h3>
          <p class="small-description">- Machine learning stock-picking game</p>
          <p>
            JavaScript, React, Python, Flask, Pandas, Scikit Learn, D3, CSS,
            HTML
          </p>
          <p class="description">
            Used Pandas and Scikit Learn to develop a machine learning model for
            each stock. This model is used to determine if/when the AI should
            buy/sell. Used D3 and React to plot the data and update the
            leaderboard. Optimized for desktop and mobile.
          </p>
          <a
            href="http://stockit.tech"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div class="video-container">
              <video
                poster="stockit.png"
                src="stockit.ogv"
                id="stockit"
                class="video"
                muted
                autoplay
                loop
              />
            </div>
          </a>
        </div>
        <div class="subitem">
          <h3>
            <a
              href="https://www.jobsort.tech"
              target="_blank"
              rel="noopener noreferrer"
            >
              jobSort.Tech
            </a>
          </h3>
          <p class="small-description">
            - Sorts/Filters job listings from Hacker News: Who is Hiring
          </p>
          <p>
            JavaScript, React, Redux, Node, Express, MySQL, CSS, HTML, Mocha,
            Chai, Enzyme, ESLint, Prettier
          </p>
          <p class="description">
            A node app updates a MySQL database every hour with updates to the
            latest Hacker News: Who is Hiring post. Separately, the web app
            queries the MySQL database for Hacker News data when the user
            submits input form. The job listings are sorted by the tech the user
            knows and how familiar the user is with each of them. Optimized for
            desktop and mobile.
          </p>
          <a
            href="http://jobsort.tech"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div class="video-container">
              <video
                poster="jobsort.png"
                src="jobsort.webm"
                id="jobsort"
                class="video"
                muted
                autoplay
                loop
              />
            </div>
          </a>
        </div>
        <div class="subitem">
          <h3>
            <a
              href="https://www.yeggle.tech"
              target="_blank"
              rel="noopener noreferrer"
            >
              Yeggle.Tech
            </a>
          </h3>
          <p class="small-description">
            - Compares Yelp search results with Google Maps
          </p>
          <p>JavaScript, React, Node, Express, CSS, HTML</p>
          <p class="description">
            Calls Yelp and Google APIs to get search result data that can be
            filtered/sorted by various categories. The "Yeggle" button matches
            up Google results to Yelp results; the Yeggle algorithm utilizes
            coordinates, title, and address to determine if there is a match.
            Optimized for desktop and mobile.
          </p>
          <a
            href="http://yeggle.tech"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div class="video-container">
              <video
                poster="yeggle.png"
                src="yeggle.ogv"
                id="yeggle"
                class="video"
                muted
                autoplay
                loop
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
)

export default IndexPage
