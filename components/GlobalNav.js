import React from 'react'

import { Link } from 'react-router'

import Menu from 'material-ui/lib/menus/menu';
import MenuItem from 'material-ui/lib/menus/menu-item';
import Divider from 'material-ui/lib/divider';
import Colors from 'material-ui/lib/styles/colors';

import FlatButton from 'material-ui/lib/flat-button';
import RaisedButton from 'material-ui/lib/raised-button';
import Avatar from 'material-ui/lib/avatar';

import Home from 'material-ui/lib/svg-icons/action/home';
import ArtistAdd from 'material-ui/lib/svg-icons/social/person-add';
import Search from 'material-ui/lib/svg-icons/action/search';
import Equalize from 'material-ui/lib/svg-icons/av/equalizer';
import Warning from 'material-ui/lib/svg-icons/alert/warning';
import Valide from 'material-ui/lib/svg-icons/action/done';
import Backup from 'material-ui/lib/svg-icons/action/backup';
import People from 'material-ui/lib/svg-icons/social/people';

const dark = 'hsl(200, 20%, 20%)'
const light = '#fff'
import {Grid, Row, Col, Input, Button} from 'react-bootstrap';


const styles = {}
styles.button = {
  fontSize: 'large',
}

styles.center = {
  margin: '0 auto',
  textAlign: 'center',
  //border: "1px solid #FFFFFF",
}

styles.border = {
  //border: "1px solid #FFFFFF",
}

export default class GlobalNav extends React.Component {

  state = {
  };

  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };

  constructor(props, context) {
    super(props, context)
  }

  componentDidMount = (e) => {
    window.onpopstate = this.onBackButtonEvent
  };

  onBackButtonEvent = (e) => {
    if (localStorage.getItem('token')) {
      this.setState({log: true, logLabel: 'Déconnexion'})
    }
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <Row>
          <Col style={styles.border} xs={2} sm={2} md={2} lg={2}>
            <div style={styles.center}>
              <Link to={{pathname: '/wiki'}} > <FlatButton labelStyle={styles.button} hoverColor={Colors.greenA200} label={'Wiki'} /> </Link>
            </div>
          </Col>
          <Col style={styles.border} xs={2} sm={2} md={2} lg={2}>
            <div style={styles.center}>
              <Link to={{pathname: '/lessons'}} > <FlatButton labelStyle={styles.button} hoverColor={Colors.greenA200} label={'Lessons'} /> </Link>
            </div>
          </Col>
          <Col style={styles.border} xs={4} sm={4} md={4} lg={4}>
            <div style={styles.center}>
              <Link to="/" style={styles.border} ><Avatar src="http://formulabula.fr/wp-content/uploads/2015/09/POINTFMR-Logo.png" size='115'/></Link>
            </div>
          </Col>
          <Col style={styles.border} xs={2} sm={2} md={2} lg={2}>
            <div style={styles.center}>
              <Link to={{pathname: '/profile'}} > <FlatButton labelStyle={styles.button} hoverColor={Colors.greenA200} label={'Profil'} /> </Link>
            </div>
          </Col>
        </Row>
      </div>
    )
  };
}
