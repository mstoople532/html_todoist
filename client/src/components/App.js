import React from 'react';
import { Button, Header, Icon, Container, Grid } from 'semantic-ui-react'

import MainMenu from './MainMenu' 
import Words from './Words' 

class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      languages: [
        {id: 0, name: "English", code: "en"},
        {id: 1, name: "German", code: "de"},
        {id: 2, name: "Spanish", code: "es"}
      ],
      words: []
    };
    // HACK
    this.state.selectedLanguage = this.state.languages[0];

    this.getWords();
  }

  changeSelectedLanguage = (language) => {
    this.setState({selectedLanguage: language});
  }

  filteredWords = () => {
    return this.state.words.filter((el) => parseInt(el.origin_language_id) === parseInt(this.state.selectedLanguage.id))
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
          
        </Header>
        <Grid>
          <Grid.Row>
            <Grid.Column width={4}>
              <MainMenu languages={this.state.languages} changeLang={this.changeSelectedLanguage}/>
            </Grid.Column>
            <Grid.Column width={12}>
              <Button onClick={this.getWords} > Refresh Words </Button>
              <Words languages={this.state.languages} selectedLanguage={this.state.selectedLanguage}words={this.filteredWords()} destroyWord={this.destroyWord} addWord={this.addWord}/>
              
            </Grid.Column>
          </Grid.Row>
        </Grid>

        
        
        
      </Container>
  );
  }
}

export default App;
