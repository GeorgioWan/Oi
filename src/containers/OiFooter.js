import React, { Component } from 'react';

export default class OiFooter extends Component {
  render() {
    return (
      <div className="oi-footer">
        <div>© 2016 <i className="glyphicon glyphicon-heart"></i> OAwan</div>
        <a className="github-button" href="https://github.com/georgiowan/Oi/fork" data-icon="octicon-repo-forked" aria-label="Fork georgiowan/Oi on GitHub">Fork</a>
        <a className="github-button" href="https://github.com/georgiowan/Oi" data-icon="octicon-star" data-count-href="/georgiowan/Oi/stargazers" data-count-api="/repos/georgiowan/Oi#stargazers_count" data-count-aria-label="# stargazers on GitHub" aria-label="Star georgiowan/Oi on GitHub">Star</a>
      </div>
    );
  }
}