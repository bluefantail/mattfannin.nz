import React from "react"

class OffsiteLinks extends React.Component {
  render() {
    return (
      <span className="offsite-links">
        <a href="https://github.com/bluefantail" className="github" target="_blank" rel="noopener noreferrer"><span>Github</span></a>
        <a href="https://codepen.io/bluefantail/" className="codepen" target="_blank" rel="noopener noreferrer"><span>Codepen</span></a>
        <a href="https://medium.com/@mattfannin" className="medium" target="_blank" rel="noopener noreferrer"><span>Medium</span></a>
        <a href="https://twitter.com/FanninMatt" className="twitter" target="_blank" rel="noopener noreferrer"><span>Twitter</span></a>
      </span>
    )
  }
}

export default OffsiteLinks
