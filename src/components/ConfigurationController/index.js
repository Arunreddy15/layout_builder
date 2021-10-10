// Write your code here
// import {Component} from 'react'?
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value
      const onToggleShowContents = () => {
        onToggleShowContent()
      }

      const onToggleShowLeftNavbars = () => {
        onToggleShowLeftNavbar()
      }

      const onToggleShowRightNavbars = () => {
        onToggleShowRightNavbar()
      }
      return (
        <div className="configurationController-container">
          <h1>Layout</h1>
          <div>
            <div className="controls">
              <input
                type="checkbox"
                id="content"
                onChange={onToggleShowContents}
                checked={showContent}
              />
              <label htmlFor="content">Content</label>
            </div>
            <div className="controls">
              <input
                type="checkbox"
                value="left-navbar"
                id="left"
                onChange={onToggleShowLeftNavbars}
                checked={showLeftNavbar}
              />
              <label htmlFor="left">Left Navbar</label>
            </div>
            <div className="controls">
              <input
                type="checkbox"
                value="right-navbar"
                onChange={onToggleShowRightNavbars}
                id="right"
                checked={showRightNavbar}
              />
              <label htmlFor="right">Right Navbar</label>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

//   onToggleShowContent = () => {
//     this.setState(prevState => ({
//       showContent: !prevState.showContent,
//     }))
//   }

//   onToggleShowLeftNavbar = () => {
//     this.setState(prevState => ({
//       showLeftNavbar: !prevState.showLeftNavbar,
//     }))
//   }

//   onToggleShowRightNavbar = () => {
//     this.setState(prevState => ({
//       showRightNavbar: !prevState.showRightNavbar,
//     }))
//   }

export default ConfigurationController
