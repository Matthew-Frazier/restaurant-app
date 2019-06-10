import React from 'react';
import MenuForm from './MenuForm';
import { Header, Button, Segment, } from 'semantic-ui-react';

const Menu = ({ id, name, updateMenu, deleteMenu }) => (
  <Segment>
    <Header as="h2">{ name }</Header>
    <Button onClick={() => deleteMenu(id)}>Delete Menu</Button>
  </Segment>
);

export default Menu;