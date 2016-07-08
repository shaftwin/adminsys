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

styles.center = {
  textAlign: "center",
}

styles.title = {
  fontWeight: 'bold'
}

styles.titleCenter = {
  fontWeight: 'bold',
  textAlign: "center",
}

styles.content = {
}

export default class Profile extends React.Component {
  state = {
    display: null,
    pageTitle: "",
  };

  componentDidMount = (e) => {
  };

  handleSearch() {
    var content = Pages.map(function (page) {
      console.log('search = ' + this.state.search);
      console.log('nom de la page = ' + page.page);
      if (this.state.search.toLowerCase() == page.page.toLowerCase()) {
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
        <Col style={styles.border} xs={8} sm={8} md={8} lg={8} xsOffset={2} smOffset={2} mdOffset={2} lgOffset={2}>
          <div style={styles.center}>
            <TextField
              floatingLabelText="Search..."
              onChange={(event) => {this.setState({search: event.target.value})}}
              />
            <FlatButton label="Search" secondary={true} onClick={this.handleSearch.bind(this)} />
          </div>
          {
            this.state.pageContent
            ? <div>
            <p style={styles.titleCenter}>{this.state.pageTitle}</p>
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
