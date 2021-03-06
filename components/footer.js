import React from 'react'
import { config } from 'config'



export default class Footer extends React.Component {
  render () {
    return (
      <footer>
        <p className="tagline quoted">{config.tagLine}</p>
        <div className="credits">
          Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="http://www.flaticon.com" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>
        </div>
        <div className="social">
          <a title="Github" href={config.githubUrl}>
            <i className="github" />
          </a>
          <a title="Twitter" href={config.twitterUrl}>
            <i className="twitter" />
          </a>
          <a title="discuss" href={config.discussUrl}>
            <i className="discuss" />
          </a>
        </div>
      </footer>
    );
  }
}

