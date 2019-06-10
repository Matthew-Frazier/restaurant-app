import React from 'react';
import axios from 'axios';
import MenuList from './components/MenuList';
import MenuForm from './components/MenuForm';
import { Container, Header, } from 'semantic-ui-react'

class App extends React.Component {
  state = { menus: [] }

  componentDidMount() {
    axios.get("/api/menus")
      .then( res => {
        this.setState({ menus: res.data })
      })
      .catch( err => {
        console.log(err)
      })
  }

  addMenu = (name) => {
    axios.post("/api/menus", { name: name})
      .then( res => {
        this.setState({ menus: [...this.state.menus, res.data] })
      })
  }

  updateMenu = (id) => {
    axios.put(`/api/menus/${id}`)
      .then( res => {
        const menus = this.state.menus.map( m => {
          if (m.id === id)
            return res.data
          return m;
        })
        this.setState({ menus, })
      })
  }

  deleteMenu = (id) => {
    axios.delete(`/api/menus/${id}`)
      .then( res => {
        const { menus, } = this.state;
        this.setState({ menus: menus.filter( m => m.id !== id ), })
      })
  }

  render() {
    return (
      <Container>
        <Header as="h1">Menus</Header>
        <MenuForm addMenu={this.addMenu} />
        <br/>
        <div>
          <MenuList
            menus={this.state.menus}
            updateMenu={this.updateMenu}
            deleteMenu={this.deleteMenu}
          />
        </div>
      </Container>
    );
  };
};

export default App;
