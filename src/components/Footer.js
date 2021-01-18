import React from 'react'

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 text-center pb-2">
            Made with<span role="img" aria-label="love">❤️</span> by <a href="http://abhijeetkwh.vercel.app/" target="_blank" rel="noreferrer">Abhijeet Kushwaha</a> 
          </div>
          <div className="col-12 text-center justify-content-center align-item-centers">
            <div class="social-links">
              <a href="https://github.com/Abhijeetrkushwaha" rel="noreferrer" target="_blank"><i class="fab fa-github"></i></a>
              <a href="https://twitter.com/Abhijeetkwh" rel="noreferrer" target="_blank"><i class="fab fa-twitter"></i></a>
              <a href="https://www.facebook.com/abhijeet.kushwaha.1800" rel="noreferrer" target="_blank"><i class="fab fa-facebook-square"></i></a>
              <a href="https://www.instagram.com/abhijeetkwh/" rel="noreferrer" target="_blank"><i class="fab fa-instagram"></i></a>
              <a href="https://www.linkedin.com/in/abhijeet-kushwaha-1882a41a5/" rel="noreferrer" target="_blank"><i class="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
