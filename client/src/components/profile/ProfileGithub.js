import React, { Component } from "react";
// import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class ProfileGithub extends Component {
  _isMounted = false;
  // myRef = React.createRef();

  state = {
    clientId: process.env.REACT_APP_GITHUB_CLIEND_ID,
    clientSecret: process.env.REACT_APP_GITHUB_CLIEND_SECRET,
    count: 5,
    sort: "created: asc",
    repos: [],
  };

  componentDidMount() {
    this._isMounted = true;

    const { username } = this.props;
    const { count, sort, clientId, clientSecret } = this.state;

    fetch(
      `https://api.github.com/users/${username}/repos?per_page=${count}&sort=${sort}&client_id=${clientId}&client_secret=${clientSecret}`
    )
      .then((res) => res.json())
      .then((data) => {
        // if (this.myRef) {
        if (this._isMounted) {
          this.setState({ repos: data });
        }
      })
      .catch((err) => console.log(err));
  }

  // Can't perform a React state update on an unmounted component.
  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const { repos } = this.state;

    const repoItems = repos.map((repo) => (
      <div key={repo.id} className="card card-body mb-2">
        <div className="row">
          <div className="col-md-6">
            <h4>
              {/* Link doesn't work with outside paths? */}
              <a
                href={repo.html_url}
                className="text-info"
                target="_blank"
                rel="noopener noreferrer"
              >
                {repo.name}
              </a>
            </h4>
            <p>{repo.description}</p>
          </div>
          <div className="col-md-6">
            <span className="badge badge-info mr-1">
              Stars: {repo.stargazers_count}
            </span>
            <span className="badge badge-secondary mr-1">
              Watchers: {repo.watchers_count}
            </span>
            <span className="badge badge-success">
              Forks: {repo.forks_count}
            </span>
          </div>
        </div>
      </div>
    ));

    return (
      <div>
        <hr />
        <h3 className="mb-4">Latest Github Repos</h3>
        {repoItems}
      </div>
    );
  }
}

// We pass in a prop so logically this is needed but commenting this doesn't seem to change anything

ProfileGithub.propTypes = {
  username: PropTypes.string.isRequired,
};

export default ProfileGithub;
