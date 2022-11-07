import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer>
      <div className='footer-container'>
        <h3>Collaborators:</h3>
        <ul className='github-container'>
          <li className='github-links'>
              <a className='github-icons' target="_blank" rel="noreferrer" href="https://github.com/dmpellegrini">
                <img className='githubLogo' src={require("./github-logo.png")} alt="github logo" />
                <div className='github-names'>Danny P.</div>
              </a>
            </li>
            <li>
            <a className='github-icons' target="_blank" rel="noreferrer" href="https://github.com/jeanreye4">
                <img className='githubLogo' src={require("./github-logo.png")} alt="github logo" />
                <div className='github-names'>Jean R.</div>
              </a>
            </li>
            <li>
            <a className='github-icons' target="_blank" rel="noreferrer" href="https://github.com/VictorApaez">
                <img className='githubLogo' src={require("./github-logo.png")} alt="github logo" />
                <div className='github-names'>Victor A.</div>
              </a>
            </li>
            <li>
            <a className='github-icons' target="_blank" rel="noreferrer" href="https://github.com/vvsuji">
                <img className='githubLogo' src={require("./github-logo.png")} alt="github logo" />
                <div className='github-names'>Suji F.</div>
              </a>
            </li>
            <li>
            <a className='github-icons' target="_blank" rel="noreferrer" href="https://github.com/durlinlin">
                <img className='githubLogo' src={require("./github-logo.png")} alt="github logo" />
                <div className='github-names'>Lin Lin L.</div>
              </a>
            </li>
          </ul>
      <div className='footer-icons'>
        <a className='footer-logo' target="_blank" rel="noreferrer" href="https://www.leagueoflegends.com/en-us/"></a>
        <div className='maturity-rating'></div>
        </div>
      </div>
    </footer>
  )
}

export default Footer