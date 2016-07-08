import React from 'react'

import GlobalNav from './GlobalNav'
import MenuItem from 'material-ui/lib/menus/menu-item';
import Valide from 'material-ui/lib/svg-icons/action/done';
import Warning from 'material-ui/lib/svg-icons/alert/warning';

import {Grid, Row, Col, Input, Button} from 'react-bootstrap';
import { Link } from 'react-router'
import FlatButton from 'material-ui/lib/flat-button';

const styles = {}
styles.border = {
  //border:  "1px solid #FFFFFF",
}

styles.marginBot = {
  marginBottom: '30px',
}

export default class App extends React.Component {

  state = {
  };

  componentDidMount = () => {
    window.onpopstate = this.onBackButtonEvent
  };

  onBackButtonEvent = (e) => {
    //le back button marche pas
    e.preventDefault();
  };

  render() {
    return (
      <Grid >
        <Row style={styles.marginBot}>
          <GlobalNav />
        </Row>
        <Row >
          <Col xs={12} sm={12} md={12} lg={12}>
            {
              this.props.children
              ||
              <div>
                <h2>Mensarum</h2>
              </div>
            }
          </Col>
        </Row>
      </Grid>
    )
  };
}
