import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer>
      <div className='github-links'>
        <a className='github-icons' target="_blank" rel="noopener" href="https://github.com/dmpellegrini">
          <span>Danny P.</span>
        </a>
        <a className='github-icons' target="_blank" rel="noopener" href="https://github.com/jeanreye4"></a>
        <a className='github-icons' target="_blank" rel="noopener" href="https://github.com/VictorApaez"></a>
        <a className='github-icons' target="_blank" rel="noopener" href="https://github.com/vvsuji"></a>
        <a className='github-icons' target="_blank" rel="noopener" href="https://github.com/durlinlin"></a>
      </div>
      <div className='footer-icons'>
        <a className='footer-logo' target="_blank" href="https://www.leagueoflegends.com/en-us/"></a>
      </div>
      <div className='maturity-rating'></div>
    </footer>
  )
}

export default Footer