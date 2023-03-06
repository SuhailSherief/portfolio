import React from 'react'

function Backend() {
  return (
    <div className="skills__content">
    <h2 className="skills__title">Backend Developer</h2>
    <div className="skills__box">
      <div className="skills__group">
          <div className="skills__data">
              <i className="bx bx-badge-check"></i>
              <div>
                  <h3 className="skills__name">NodeJS</h3>
                  <span className="skills__level">Advanced</span>
              </div>
          </div>
          <div className="skills__data">
              <i className="bx bx-badge-check"></i>
              <div>
                  <h3 className="skills__name">Django</h3>
                  <span className="skills__level">Intermediate</span>
              </div>
          </div>
          <div className="skills__data">
              <i className="bx bx-badge-check"></i>
              <div>
                  <h3 className="skills__name">.NET</h3>
                  <span className="skills__level">Intermediate</span>
              </div>
          </div>
      </div>
      <div className="skills__group">
          <div className="skills__data">
              <i className="bx bx-badge-check"></i>
              <div>
                  <h3 className="skills__name">MongoDB</h3>
                  <span className="skills__level">Advanced</span>
              </div>
          </div>
          <div className="skills__data">
              <i className="bx bx-badge-check"></i>
              <div>
                  <h3 className="skills__name">PostgreSQL</h3>
                  <span className="skills__level">Intermediate</span>
              </div>
          </div>
          <div className="skills__data">
              <i className="bx bx-badge-check"></i>
              <div>
                  <h3 className="skills__name">Firebase</h3>
                  <span className="skills__level">Intermediate</span>
              </div>
          </div>
          <div className="skills__data">
              <i className="bx bx-badge-check"></i>
              <div>
                  <h3 className="skills__name">MySQL</h3>
                  <span className="skills__level">Basic</span>
              </div>
          </div>
      </div>
    </div>
  </div>
  )
}

export default Backend