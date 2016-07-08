import React from 'react'
import TextField from 'material-ui/lib/text-field';
import FlatButton from 'material-ui/lib/flat-button';
import NotificationSystem from 'react-notification-system';

import ReCAPTCHA from 'react-google-recaptcha'

const styles = [];
styles.container = {
  width: '400px',
  height: '525px',
  marginLeft: 'auto',
  marginRight: 'auto',
  backgroundColor: '#FFFFFF',
  marginTop: '150px',
}

styles.txt = {
  paddingTop: '25px',
  marginLeft: '75px',
}

styles.bt = {
  width: '200px',
  marginLeft: 'auto',
  marginRight: 'auto',
}

export default class LoginForm extends React.Component {

  state = {
    mailCo: "",
    passCo: "",
    fname : "",
    lname : "",
    email : "",
    password  : "",
    spassword: "",
    swap: true,
    swapLabel: "Sign Up",
    cap: false
  };

  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };

  handleFNameChange = (e) => {
    this.setState({fname: e.target.value});
  };

  handleLNameChange = (e) => {
    this.setState({lname: e.target.value});
  };

  handleEmailChange = (e) => {
    this.setState({email: e.target.value});
  };

  handlePasswordChange = (e) => {
    this.setState({password: e.target.value});
  };

  handlePasswordSaveChange = (e) => {
    this.setState({spassword: e.target.value});
  };

  handleEmailCoChange = (e) => {
    this.setState({mailCo: e.target.value});
  };

  handlePasswordCoChange = (e) => {
    this.setState({passCo: e.target.value});
  };

  handleCreateUser = () => {
    if (this.state.fname == "" || this.state.lname == "" || this.state.email == "" || this.state.password == "" || this.state.spassword == "") {
      this.refs.notificationSystem.addNotification({
        title: 'Error',
        message: 'At Least One Information is missing',
        level: 'error',
        position: 'tc'
      });
      return ;
    }
    else if (this.state.password != this.state.spassword) {
      this.refs.notificationSystem.addNotification({
        title: 'Error',
        message: 'Not the same password',
        level: 'error',
        position: 'tc'
      });
      return ;
    }
    else if (this.state.cap == false) {
      this.refs.notificationSystem.addNotification({
        title: 'Error',
        message: 'Valid Captchap for creating user',
        level: 'error',
        position: 'tc'
      });
      return ;
    }
    var mailformat = /^\w+([\]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!this.state.email.match(mailformat)) {
      this.refs.notificationSystem.addNotification({
        title: 'Error',
        message: "Email not valid",
        level: 'error',
        position: 'tc'
      });
      return ;
    }
    var parts = this.state.email.split("@");
    for (var ite = 0; ite < garbage.length; ite++) {
      if (parts[1] == garbage[ite]) {
        this.refs.notificationSystem.addNotification({
          title: 'Error',
          message: "temporaryemail is not accepted by the website",
          level: 'error',
          position: 'tc'
        });
        return ;
      }
    }

    var ret = JSON.parse(ApiMixin.createUser(this.state.fname, this.state.lname, this.state.email, this.state.password).responseText);
    if (ret.success == false) {
      this.refs.notificationSystem.addNotification({
        title: 'Error',
        message: ret.message,
        level: 'error',
        position: 'tc'
      });
      return ;
    }
    else {
      this.refs.notificationSystem.addNotification({
        title: 'Success',
        message: ret.message,
        level: 'success',
        position: 'tc'
      });
      this.setState({swap : !this.state.swap});
    }
  };

  handleLogin = () => {
    if (this.state.mailCo == "" || this.state.passCo == "") {
      this.refs.notificationSystem.addNotification({
        title: 'Error',
        message: 'At Least One Information is missing',
        level: 'error',
        position: 'tc'
      });
      return ;
    }
    var ret = JSON.parse(ApiMixin.login(this.state.mailCo, this.state.passCo).responseText);
    if (ret.success == false) {
      this.refs.notificationSystem.addNotification({
        title: 'Error',
        message: ret.message,
        level: 'error',
        position: 'tc'
      });
      return ;
    }
    localStorage.setItem('token', ret.token);
    localStorage.setItem('user_id', ret.user_id);
    this.context.router.go(-1);
  };

  handleCaptcha = (value) => {
    this.setState({cap: true})
  };

  swapDisplay = () => {
    if (this.state.swap == true) {
      this.setState({swap: false});
      this.setState({swapLabel: "Sign In"});
      this.setState({cap: false});
    }
    else {
      this.setState({swap: true});
      this.setState({swapLabel: "Sign Up"});
      this.setState({cap: false});
    }
  };

  render () {
    return (
      <div style={styles.container}>
        {
          this.state.swap ? (
            <div style={styles.txt}>
              <form>
                <TextField
                  floatingLabelText="Email"
                  value={this.state.mailCo}
                  onChange={this.handleEmailCoChange}
                  />
                <TextField
                  floatingLabelText="Password"
                  value={this.state.passCo}
                  onChange={this.handlePasswordCoChange}
                  />
              </form>
            </div>
          ) : (
            <div style={styles.txt}>
              <form>
                <TextField
                  floatingLabelText="First Name"
                  onChange={this.handleFNameChange}
                  />
                <TextField
                  floatingLabelText="Last Name"
                  onChange={this.handleLNameChange}
                  />
                <TextField
                  floatingLabelText="Email"
                  onChange={this.handleEmailChange}
                  />
                <TextField
                  floatingLabelText="Password"
                  onChange={this.handlePasswordChange}
                  />
                <TextField
                  floatingLabelText="Password Again"
                  onChange={this.handlePasswordSaveChange}
                  />
                <ReCAPTCHA
                  ref="recaptcha"
                  sitekey="6LerSxoTAAAAACFTv6H5WtVLxeB0A5TyOgYKsJOg"
                  onChange={this.handleCaptcha}
                  />
              </form>
            </div>
          )
        }
        <div style={styles.bt}>
          {
            this.state.swap ? (
              <FlatButton label="Login" secondary={true} onClick={this.handleLogin.bind(this)} />
            ) : (
              <FlatButton label="Create" secondary={true} onClick={this.handleCreateUser} />
            )
          }
          <FlatButton label={this.state.swapLabel} secondary={true} onClick={this.swapDisplay}/>
        </div>
        <NotificationSystem ref="notificationSystem" />
      </div>
    )};
  }

  var garbage = [
    '0815.ru0clickemail.com',
    '0-mail.com',
    '0wnd.net',
    '0wnd.org',
    '10minutemail.com',
    '20minutemail.com',
    '2prong.com',
    '3d-painting.com',
    '4warding.com',
    '4warding.net',
    '4warding.org',
    '9ox.net',
    'a-bc.net',
    'ag.us.to',
    'amilegit.com',
    'anonbox.net',
    'anonymbox.com',
    'antichef.com',
    'antichef.net',
    'antispam.de',
    'baxomale.ht.cx',
    'beefmilk.com',
    'binkmail.com',
    'bio-muesli.net',
    'bobmail.info',
    'bodhi.lawlita.com',
    'bofthew.com',
    'brefmail.com',
    'bsnow.net',
    'bugmenot.com',
    'bumpymail.com',
    'casualdx.com',
    'chogmail.com',
    'cool.fr.nf',
    'correo.blogos.net',
    'cosmorph.com',
    'courriel.fr.nf',
    'courrieltemporaire.com',
    'curryworld.de',
    'cust.in',
    'dacoolest.com',
    'dandikmail.com',
    'deadaddress.com',
    'despam.it',
    'despam.it',
    'devnullmail.com',
    'dfgh.net',
    'digitalsanctuary.com',
    'discardmail.com',
    'discardmail.de',
    'disposableaddress.com',
    'disposeamail.com',
    'disposemail.com',
    'dispostable.com',
    'dm.w3internet.co.ukexample.com',
    'dodgeit.com',
    'dodgit.com',
    'dodgit.org',
    'dontreg.com',
    'dontsendmespam.de',
    'dump-email.info',
    'dumpyemail.com',
    'e4ward.com',
    'email60.com',
    'emailias.com',
    'emailias.com',
    'emailinfive.com',
    'emailmiser.com',
    'emailtemporario.com.br',
    'emailwarden.com',
    'enterto.com',
    'ephemail.net',
    'explodemail.com',
    'fakeinbox.com',
    'fakeinformation.com',
    'fansworldwide.de',
    'fastacura.com',
    'filzmail.com',
    'fixmail.tk',
    'fizmail.com',
    'frapmail.com',
    'garliclife.com',
    'gelitik.in',
    'get1mail.com',
    'getonemail.com',
    'getonemail.net',
    'girlsundertheinfluence.com',
    'gishpuppy.com',
    'goemailgo.com',
    'great-host.in',
    'greensloth.com',
    'greensloth.com',
    'gsrv.co.uk',
    'guerillamail.biz',
    'guerillamail.com',
    'guerillamail.net',
    'guerillamail.org',
    'guerrillamail.biz',
    'guerrillamail.com',
    'guerrillamail.de',
    'guerrillamail.net',
    'guerrillamail.org',
    'guerrillamailblock.com',
    'haltospam.com',
    'hidzz.com',
    'hotpop.com',
    'ieatspam.eu',
    'ieatspam.info',
    'ihateyoualot.info',
    'imails.info',
    'inboxclean.com',
    'inboxclean.org',
    'incognitomail.com',
    'incognitomail.net',
    'ipoo.org',
    'irish2me.com',
    'jetable.com',
    'jetable.fr.nf',
    'jetable.net',
    'jetable.org',
    'jnxjn.com',
    'junk1e.com',
    'kasmail.com',
    'kaspop.com',
    'klzlk.com',
    'kulturbetrieb.info',
    'kurzepost.de',
    'kurzepost.de',
    'lifebyfood.com',
    'link2mail.net',
    'litedrop.com',
    'lookugly.com',
    'lopl.co.cc',
    'lr78.com',
    'maboard.com',
    'mail.by',
    'mail.mezimages.net',
    'mail4trash.com',
    'mailbidon.com',
    'mailcatch.com',
    'maileater.com',
    'mailexpire.com',
    'mailin8r.com',
    'mailinator.com',
    'mailinator.net',
    'mailinator2.com',
    'mailincubator.com',
    'mailme.lv',
    'mailmetrash.com',
    'mailmoat.com',
    'mailnator.com',
    'mailnull.com',
    'mailzilla.org',
    'mbx.cc',
    'mega.zik.dj',
    'meltmail.com',
    'mierdamail.com',
    'mintemail.com',
    'mjukglass.nu',
    'mobi.web.id',
    'moburl.com',
    'moncourrier.fr.nf',
    'monemail.fr.nf',
    'monmail.fr.nf',
    'mt2009.com',
    'mx0.wwwnew.eu',
    'mycleaninbox.net',
    'myspamless.com',
    'mytempemail.com',
    'mytrashmail.com',
    'netmails.net',
    'neverbox.com',
    'no-spam.ws',
    'nobulk.com',
    'noclickemail.com',
    'nogmailspam.info',
    'nomail.xl.cx',
    'nomail2me.com',
    'nospam.ze.tc',
    'nospam4.us',
    'nospamfor.us',
    'nowmymail.com',
    'objectmail.com',
    'obobbo.com',
    'odaymail.com',
    'onewaymail.com',
    'ordinaryamerican.net',
    'owlpic.com',
    'pookmail.com',
    'privymail.de',
    'proxymail.eu',
    'punkass.com',
    'putthisinyourspamdatabase.com',
    'quickinbox.com',
    'rcpt.at',
    'recode.me',
    'recursor.net',
    'regbypass.comsafe-mail.net',
    'safetymail.info',
    'sandelf.de',
    'saynotospams.com',
    'selfdestructingmail.com',
    'sendspamhere.com',
    'sharklasers.com',
    'shieldedmail.com',
    'shiftmail.com',
    'skeefmail.com',
    'slopsbox.com',
    'slushmail.com',
    'smaakt.naar.gravel',
    'smellfear.com',
    'snakemail.com',
    'sneakemail.com',
    'sofort-mail.de',
    'sogetthis.com',
    'soodonims.com',
    'spam.la',
    'spamavert.com',
    'spambob.net',
    'spambob.org',
    'spambog.com',
    'spambog.de',
    'spambog.ru',
    'spambox.info',
    'spambox.us',
    'spamcannon.com',
    'spamcannon.net',
    'spamcero.com',
    'spamcorptastic.com',
    'spamcowboy.com',
    'spamcowboy.net',
    'spamcowboy.org',
    'spamday.com',
    'spamex.com',
    'spamfree.eu',
    'spamfree24.com',
    'spamfree24.de',
    'spamfree24.eu',
    'spamfree24.info',
    'spamfree24.net',
    'spamfree24.org',
    'spamgourmet.com',
    'spamgourmet.net',
    'spamgourmet.org',
    'spamherelots.com',
    'spamhereplease.com',
    'spamhole.com',
    'spamify.com',
    'spaminator.de',
    'spamkill.info',
    'spaml.com',
    'spaml.de',
    'spammotel.com',
    'spamobox.com',
    'spamspot.com',
    'spamthis.co.uk',
    'spamthisplease.com',
    'speed.1s.fr',
    'suremail.info',
    'tempalias.com',
    'tempe-mail.com',
    'tempemail.biz',
    'tempemail.com',
    'tempemail.net',
    'tempinbox.co.uk',
    'tempinbox.com',
    'tempomail.fr',
    'temporaryemail.net',
    'temporaryinbox.com',
    'tempymail.com',
    'thankyou2010.com',
    'thisisnotmyrealemail.com',
    'throwawayemailaddress.com',
    'tilien.com',
    'tmailinator.com',
    'tradermail.info',
    'trash-amil.com',
    'trash-mail.at',
    'trash-mail.com',
    'trash-mail.de',
    'trash2009.com',
    'trashmail.at',
    'trashmail.com',
    'trashmail.me',
    'trashmail.net',
    'trashmailer.com',
    'trashymail.com',
    'trashymail.net',
    'trillianpro.com',
    'tyldd.com',
    'tyldd.com',
    'uggsrock.com',
    'wegwerfmail.de',
    'wegwerfmail.net',
    'wegwerfmail.org',
    'wh4f.org',
    'whyspam.me',
    'willselfdestruct.com',
    'winemaven.info',
    'wronghead.com',
    'wuzupmail.net',
    'xoxy.net',
    'yogamaven.com',
    'yopmail.com',
    'yopmail.fr',
    'yopmail.net',
    'yuurok.com',
    'zippymail.info',
    'zoemail.com'
  ]
