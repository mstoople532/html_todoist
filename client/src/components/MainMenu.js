import React, { Component } from 'react'
import { Input, Label, Menu } from 'semantic-ui-react'

export default class MenuExampleVertical extends Component {
  state = { activeItem: 'add_word' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu vertical>
        <Menu.Item name='add_word' active={activeItem === 'add_word'} onClick={this.handleItemClick}>
          Add Phrase
        </Menu.Item>

        <Menu.Item name='langs' active={activeItem === 'langs'} onClick={this.handleItemClick}>
          <Label>51</Label>
          Languages
        </Menu.Item>
        
        <Menu.Item>
          <Input icon='search' placeholder='Search mail...' />
        </Menu.Item>
      </Menu>
    )
  }
}
