// Write your code here
// import {Component} from 'react'?
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
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
            <input type="checkbox" onChange={onToggleShowContents} />
            <span>Content</span>
            <br />
            <input
              type="checkbox"
              value="left-navbar"
              onChange={onToggleShowLeftNavbars}
            />
            <span>Left Navbar</span>
            <br />
            <input
              type="checkbox"
              value="right-navbar"
              onChange={onToggleShowRightNavbars}
            />
            <span>Right Navbar</span>
            <br />
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
