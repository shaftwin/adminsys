import React from 'react'

import Paper from 'material-ui/lib/paper';
import Delete from 'material-ui/lib/svg-icons/action/delete';
import Colors from 'material-ui/lib/styles/colors';

import Person from 'material-ui/lib/svg-icons/social/person';
import NotificationSystem from 'react-notification-system';
import {Grid, Row, Col, Input, Button} from 'react-bootstrap';

const styles = [];
styles.container = {
  marginTop: '75px',
  color: "black",
  width: '100%',
}

styles.paper = {
  margin: 'auto',
  background: "rgba(255,255,255,0.3)",
  fontWeight: 'bold',
  paddingBottom: '25px',
  borderRadius: 10,
}

styles.center = {
  textAlign: "center",
}

export default class Profile extends React.Component {
  state = {
  };

  refresh = () => {

  };

  componentDidMount = (e) => {
  };

  render() {
    return (
        <Row>
            <Col style={styles.border} xs={4} sm={4} md={4} lg={4} xsOffset={4} smOffset={4} mdOffset={4} lgOffset={4}>
                <Paper style={styles.paper} zDepth={2}>
                  <p style={styles.center}>TOTO</p>
                </Paper>
            </Col>
            <NotificationSystem ref="notificationSystem" />
        </Row>
    );
  }
}
