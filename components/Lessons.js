import React from 'react'
import Pages from './WikiContent'
import TextField from 'material-ui/lib/text-field';
import FlatButton from 'material-ui/lib/flat-button';

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

styles.title = {
  fontWeight: 'bold'
}

styles.content = {
}

const listLessons = [
  "lesson 1",
  "lesson 2",
  "lesson 3",
]

export default class Lessons extends React.Component {
  state = {
    display: null,
    pageTitle: "",
    listLessons: null
  };

  componentDidMount = (e) => {
  };

  handleSearch() {
    var content = Pages.map(function (page) {
      console.log('search = ' + this.state.search);
      console.log('nom de la page = ' + page.page);
      if (this.state.search == page.page) {
        this.setState({pageTitle: page.page})
        var ret = page.data.map(function(content) {
          return (
            <div key={content.title}>
              <p style={styles.title}>{content.title}</p>
              <p style={styles.content}>{content.content}</p>
            </div>
          )
        })
        this.setState({pageContent: ret})
      }
    }.bind(this))
  };

  render() {
    return (
      <Row>
        <Col style={styles.border} xs={2} sm={2} md={2} lg={2} xsOffset={2} smOffset={2} mdOffset={2} lgOffset={2}>
          {
            this.state.listLessons
            ?
            <div>
              <p>Lessons:</p>
              {this.state.listLessons}
            </div>
            : null
          }
        </Col>
        <Col style={styles.border} xs={6} sm={6} md={6} lg={6}>
          {
            this.state.pageContent
            ? <div>
            <TextField
              floatingLabelText="Search..."
              onChange={(event) => {this.setState({search: event.target.value})}}
              />
            <FlatButton label="Search" secondary={true} onClick={this.handleSearch.bind(this)} />
            <p>{this.state.pageTitle}</p>
            {this.state.pageContent}
          </div>
          : null
        }
      </Col>
      <NotificationSystem ref="notificationSystem" />
    </Row>
  );
}
}
