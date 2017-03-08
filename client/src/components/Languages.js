import React from 'react';
// import { Header, Icon, Container } from 'semantic-ui-react'


export default class App extends React.Component {
  render () {

    const listItems = this.props.languages.map((lang) =>
      <li key={lang.id}>{lang.name}</li>
    );

    return (
      <ul>{listItems}</ul>
    );
  }
}

