import React from 'react';
// import { Header, Icon, Container } from 'semantic-ui-react'


export default class Words extends React.Component {
  render () {
    const listItems = this.props.words.map((word) =>
      <li key={word.id}>{word.origin_phrase} -> {word.foreign_phrase}</li>
    );

    return (
      <div>
        <h3>Words</h3>
        <ul>{listItems}</ul>
      </div>
    );
  }
}

