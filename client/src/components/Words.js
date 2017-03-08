import React from 'react';
import { Button } from 'semantic-ui-react'


export default class Words extends React.Component {


  render () {
    const listItems = this.props.words.map((word) =>
      <li key={word.id}>
        {word.origin_phrase} in {word.foreign_language} {word.foreign_phrase}
        <Button negative onClick={() => this.props.destroyWord(word)}>X</Button>
      </li>
    );

    return (
      <div>
        <h3>Words</h3>
        <ul>{listItems}</ul>
      </div>
    );
  }
}

