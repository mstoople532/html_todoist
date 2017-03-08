import React from 'react';
import { Header, Icon, Container } from 'semantic-ui-react'
import AddWord from './AddWord' 
import MainMenu from './MainMenu' 
import Languages from './Languages' 
import Words from './Words' 

class App extends React.Component {
  state = {
    languages: [
      {id: 1, name: "German", code: "de"},
      {id: 2, name: "Spanish", code: "es"}
    ],
    selectedLanguage: {id: 1, name: "German", code: "de"}, 
    words: [{id: 1, origin_language: "en", origin_phrase: "That's Cool", foreign_language: "de", foreign_phrase: 'Dats kuhl'}]
  };

  addWord = (word) => {
    this.setState({ words: [...this.state.words, word] })
  }

  render () {
    return (
      <Container>
        <Header as='h2'>
          <Icon name='plug' />
          <Header.Content>
            Decode
          </Header.Content>
          <MainMenu languages={this.state.languages}/>
        </Header>
        <Languages languages={this.state.languages}/>
        <Words words={this.state.words}/>
        <AddWord languages={this.state.languages} selectedLang={this.state.selectedLanguage} addWord={this.addWord}/>
      </Container>
  );
  }
}

export default App;
