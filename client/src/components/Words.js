import React from 'react';
import { Button, Table } from 'semantic-ui-react'
import AddWord from './AddWord' 

export default class Words extends React.Component {

  render () {
    const listItems = this.props.words.map((word) =>
      <Table.Row key={word.id}>
        <Table.Cell>
          {word.origin_phrase}
        </Table.Cell>
        <Table.Cell>
          {word.foreign_phrase}
        </Table.Cell>
        <Table.Cell>
          {word.foreign_language_id}
        </Table.Cell>
        <Table.Cell>
          <Button negative onClick={() => this.props.destroyWord(word)}>X</Button>
        </Table.Cell>
      </Table.Row>
    );

    return (
      <div>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>In {this.props.selectedLanguage.name}</Table.HeaderCell>
              <Table.HeaderCell>Translated</Table.HeaderCell>
              <Table.HeaderCell>Language</Table.HeaderCell>
              <Table.HeaderCell></Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {listItems}
          </Table.Body>
        </Table>
        <AddWord 
          languages={this.props.languages} 
          selectedLang={this.props.selectedLanguage} 
          addWord={this.props.addWord}
        />
      </div>
    );
  }
}