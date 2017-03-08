import React, { Component } from 'react'
import { Input, Label, Menu } from 'semantic-ui-react'

export default class MenuExampleVertical extends Component {
  state = { activeItem: this.props.languages[0].name }

  handleItemClick = (e, { name }) => {
    this.props.changeLang(this.props.languages.filter((el) => el.name === name)[0])
    this.setState({ activeItem: name })
  }

  render() {
    const { activeItem } = this.state

    const menuItems = this.props.languages.map((lang) =>
      <Menu.Item key={lang.id} name={lang.name} active={activeItem === lang.name} onClick={this.handleItemClick}>
          {lang.name}
        </Menu.Item>
    );

    return (
      <Menu vertical>
       {menuItems}
        
        <Menu.Item>
          <Input icon='search' placeholder='Search mail...' />
        </Menu.Item>
      </Menu>
    )
  }
}
