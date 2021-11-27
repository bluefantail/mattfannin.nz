import React from "react"

class OffsiteLinks extends React.Component {
  render() {
    return (
      <span className="offsite-links">
        <a href="https://github.com/bluefantail" className="github" target="_blank" rel="noopener noreferrer" title="Github"><span>Github</span></a>
        <a href="https://codepen.io/bluefantail/" className="codepen" target="_blank" rel="noopener noreferrer" title="Codepen"><span>Codepen</span></a>
        <a href="https://medium.com/@mattfannin" className="medium" target="_blank" rel="noopener noreferrer" title="Medium"><span>Medium</span></a>
        <a href="https://twitter.com/FanninMatt" className="twitter" target="_blank" rel="noopener noreferrer" title="Twitter"><span>Twitter</span></a>
        <a href="https://www.flickr.com/photos/mfannin" className="flickr" target="_blank" rel="noopener noreferrer" title="Flickr"><span>Flickr</span></a>
      </span>
    )
  }
}

export default OffsiteLinks
