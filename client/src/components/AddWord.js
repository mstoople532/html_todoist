import React from 'react'
import { Container, Form, Input, Button } from 'semantic-ui-react'


export default class AddWord extends React.Component {

  state = {
    origin_phrase: "",
    foreign_language: this.props.languages[1],
    foreign_phrase: ""
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addWord({
      origin_language_id: this.props.selectedLang.id, 
      origin_phrase: this.state.origin_phrase, 
      foreign_language_id: this.state.foreign_language.id, 
      foreign_phrase: this.state.foreign_phrase}
    )
  }

  changeOriginPhrase = (e) => {
    this.setState({origin_phrase: e.target.value})
  }

  changeForeignPhrase = (e) => {
    this.setState({foreign_phrase: e.target.value})
  }

  changeForeignLanguage = (e) => {
    const {languages} = this.props;
    const lang = languages.find((el) => el.id === parseInt(e.target.value))
    this.setState({foreign_language: lang})
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
            label={`Phrase in ${this.props.selectedLang.name}`}
            control="input" 
            placeholder='Origin Phrase' />
          <Form.Field onChange={this.changeForeignLanguage} label='Foreign Language' control='select' defaultValue={this.state.foreign_language.id}>
            {languageOptions}
          </Form.Field>
          <Form.Field 
            onChange={this.changeForeignPhrase} 
            label={`Phrase in ${this.state.foreign_language.name}`}
            control="input" 
            placeholder='Foreign Phrase' />
          <Button color="green" type='submit'>Save</Button>
        </Form>
      </Container>
    );
  }
}



