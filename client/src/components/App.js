import React from 'react';
import { Button, Header, Icon, Container } from 'semantic-ui-react'
import AddWord from './AddWord' 
import MainMenu from './MainMenu' 
import Words from './Words' 

class App extends React.Component {
  constructor (props) {
    super(props);
    this.getWords();
  }

  state = {
    languages: [
      {id: 0, name: "English", code: "en"},
      {id: 1, name: "German", code: "de"},
      {id: 2, name: "Spanish", code: "es"}
    ],
    selectedLanguage: {id: 1, name: "German", code: "de"}, 
    words: []
  };

  changeSelectedLanguage = (language) => {
    this.setState({selectedLanguage: language});
  }

  addWord = (word) => {
    fetch('/words', {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(word)
    }).then(res=>res.json())
      .then(res => this.setState({ words: [...this.state.words, res] }));
  }

  getWords = () => {
    const self = this;
    
    fetch('/words')
      .then(res=>res.json())
      .then(function(words) {
        self.setState({words: words})
      }).catch(function(ex) {
        console.log('parsing failed', ex)
      })
  }

  destroyWord = (word) => {
    const self = this;
    
    fetch(`/words/${word.id}`, {
      method: 'delete',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
      .then(res=>res.json())
      .then(function(words) {
        self.setState({words: self.state.words.filter((el) => el.id !== word.id)})
        self.getWords();
      }).catch(function(ex) {
        console.log('parsing failed', ex)
      })
  }

  render () {
    return (
      <Container>
        <Header as='h2'>
          <Icon name='bookmark' />
          <Header.Content>
            Decode
          </Header.Content>
          <MainMenu languages={this.state.languages} changeLang={this.changeSelectedLanguage}/>
        </Header>
        <Words words={this.state.words} destroyWord={this.destroyWord}/>
        <Button onClick={this.getWords} > Refresh Words </Button>
        <AddWord languages={this.state.languages} selectedLang={this.state.selectedLanguage} addWord={this.addWord}/>
      </Container>
  );
  }
}

export default App;
