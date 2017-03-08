import React from 'react'
import { Container, Form, Input, Button } from 'semantic-ui-react'


export default class AddWord extends React.Component {

  state = {
    origin_phrase: "",
    foreign_language: "",
    foreign_phrase: ""
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('this.state', this.state);
    
    this.props.addWord({
      origin_language: this.props.selectedLang, 
      origin_phrase: this.state.origin_phrase, 
      foreign_language: this.state.foreign_language, 
      foreign_phrase: this.state.foreign_phrase}
    )
  }

  changeOriginPhrase = (e) => {
    console.log('this.state.origin_phrase', this.state.origin_phrase);
    
    this.setState({origin_phrase: e.target.value})
  }

  changeForeignPhrase = (e) => {
    console.log('this.state.foreign_phrase', this.state.foreign_phrase);
    
    this.setState({foreign_phrase: e.target.value})
  }

  changeForeignLanguage = (e) => {
    console.log('this.state.foreign_language', this.state.foreign_language);
    
    this.setState({foreign_language: e.target.value})
  }

  render () {

    const languageOptions = this.props.languages.map((lang) =>
      <option key={lang.id} value={lang.id}>{lang.name}</option>
    );

    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field 
            onChange={this.changeOriginPhrase} 
            label='Origin Phrase' 
            control="input" 
            placeholder='Origin Phrase' />
          <Form.Field  onChange={this.changeForeignLanguage} label='Foreign Language' control='select'>
            {languageOptions}
          </Form.Field>
          <Form.Field 
            onChange={this.changeForeignPhrase} 
            label='Foreign Phrase' 
            control="input" 
            placeholder='Foreign Phrase' />
          <Button type='submit'>Submit</Button>
        </Form>
      </Container>
    );
  }
}



