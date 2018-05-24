<template>
    <div>
        <b-navbar id="header" toggleable="md" fixed="top">
            <b-navbar-brand id="nav_logo" href="/">
                <b-img width="100" height="45" src="static/images/header_logo.png"/>
            </b-navbar-brand>
            <b-navbar-nav class="ml-auto">
                <b-collapse is-nav id="nav_collapse">
                    <a class="log" v-if="!isLogged" @click="showModal">
                        Login/Register
                    </a>
                    <a class="log" v-if="isLogged" v-on:click="profile">
                      {{username}}
                    </a>
                    <a class="log" v-if="isLogged" v-on:click="logout">
                        Logout
                    </a>
                    <b-modal ref="myModalRef" hide-footer title="Log In\Register">
                        <div class="d-block text-center" v-if="logTab">
                            <h3>Log In</h3>
                            <b-form-group
                                id="fieldset1"
                                :state="state"
                            >
                                <b-form-input id="input1" placeholder="Enter your email" :state="state" v-model.trim="email"></b-form-input>
                            </b-form-group>
                            <b-form-group
                              id="fieldset2"
                              :invalid-feedback="invalidFeedback"
                              :valid-feedback="validFeedback"
                              :state="state"
                            >
                              <b-form-input type='password' id="input2" placeholder="Enter your password" :state="state" v-model.trim="password"></b-form-input>
                            </b-form-group>
                            <b-button variant="success" v-on:click="login">
                              Log In
                            </b-button>
                            <br>
                            <br>
                            <a class="question" v-on:click="logTab = false">
                                Did you register yet? If not then please do!
                            </a>
                        </div>
                        <br> <!-- ñ havia uma class/tag que punha um tracinho? -->
                        <div class="d-block text-center" v-if="!logTab">
                            <h3>Register</h3>
                            <b-form-group
                              id="fieldset3"
                              :state="stateR"
                            >
                              <b-form-input id="input3" placeholder="Enter your email" :state="stateR" v-model.trim="email"></b-form-input>
                            </b-form-group>
                            <b-form-group
                              id="fieldset4"
                              :state="stateR"
                            >
                              <b-form-input type='password' placeholder="Enter your password" id="input4" :state="stateR" v-model.trim="password"></b-form-input>
                            </b-form-group>
                            <b-form-group
                              id="fieldset5"
                              :state="stateR"
                            >
                              <b-form-input id="input5" placeholder="Enter your name"  :state="stateR" v-model.trim="name"></b-form-input>
                            </b-form-group>
                            <b-form-group
                              id="fieldset6"
                              :state="stateR"
                            >
                              <b-form-input id="input6" placeholder="Enter a description for yourself! (optional)" :state="stateR" v-model.trim="description"></b-form-input>
                            </b-form-group>
                            <b-form-group
                              id="fieldset7"
                              :invalid-feedback="invalidFeedbackR"
                              :valid-feedback="validFeedbackR"
                              :state="stateR"
                            >
                              <b-form-input id="input7" placeholder="Where are you from? (optional) " :state="stateR" v-model.trim="location"></b-form-input>
                            </b-form-group>
                            <b-button variant="success" v-on:click="register">
                                Register
                            </b-button>
                            <br>
                            <br>
                            <a class="question" v-on:click="logTab = true">
                                Already Registered? Please log in!
                            </a>
                        </div>
                    </b-modal>
                    <b-nav-form id="search">
                        <b-form-input  size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
                    </b-nav-form>
                </b-collapse>
             </b-navbar-nav>
        </b-navbar>
    </div>
</template>

<script>
export default {
  methods: {
    showModal () {
      this.$refs.myModalRef.show()
    },
    login () {
      if (!this.state) return false
      let sendObj = {
        email: this.email,
        password: this.password
      }
      let page = this
      this.$http.post(this.dbURL + 'login', sendObj).then(
        function (res) {
          if (!res.body.success) {
            page.errorMsg = res.body.content
            console.log(res.body.content)
            return
          }
          page.errorMsg = ''
          require('../scripts/cookies').setCookie('token', res.body.content.token)
          require('../scripts/cookies').setCookie('name', res.body.content.name)
          require('../scripts/cookies').setCookie('id', res.body.content.id)
          window.location.replace(('/'))
        }
      )
    },
    logout () {
      require('../scripts/cookies').cleanCookie('token')
      require('../scripts/cookies').cleanCookie('name')
      require('../scripts/cookies').cleanCookie('id')
      window.location.replace(('/'))
    },
    profile () {
      window.location.replace(('/#/profile'))
    },
    register () {
      if (!this.stateR) return false
      let desc = (this.description === '') ? null : this.description
      let loc = (this.location === '') ? null : this.location
      let sendObj = {
        name: this.name,
        email: this.email,
        password: this.password,
        description: desc,
        location: loc
      }
      let page = this
      this.$http.post(this.dbURL + 'register', sendObj).then(
        function (res) {
          if (!res.body.success) {
            page.errorMsg = res.body.content
            return
          }
          page.errorMsg = ''
          page.login()
        }
      )
    }
  },
  computed: {
    state () {
      return this.password.length >= 1 && this.email.length >= 1 && this.errorMsg === ''
    },
    invalidFeedback () {
      if (this.password.length >= 1 && this.email.length >= 1 && this.errorMsg === '') {
        return ''
      } else if (this.password.length < 1 || this.email.length < 1) {
        return 'Password Or Email Field Empty!'
      } else {
        return this.errorMsg
      }
    },
    validFeedback () {
      return (this.state === true) ? 'Thank you' : this.errorMsg
    },
    stateR () {
      return this.password.length >= 4 && this.email.length >= 1 && this.name.length >= 1 && this.errorMsg === ''
    },
    invalidFeedbackR () {
      if (this.password.length >= 4 && this.email.length >= 1 && this.name >= 1 && this.errorMsg === '') {
        return ''
      } else if (!this.email.includes('@')) {
        return 'Please Write A Valid Email!'
      } else if (this.password.length < 4) {
        return 'Password Must Have At Least 4 Chars!'
      } else if (this.errorMsg !== '') {
        return this.errorMsg
      } else {
        return 'Some Required Fields Are Empty!'
      }
    },
    validFeedbackR () {
      return this.stateR === true ? 'Thank you' : ''
    }
  },
  data () {
    return {
      email: '',
      isLogged: false,
      logTab: true,
      password: '',
      errorMsg: '',
      dbURL: 'http://localhost:8420/',
      name: '',
      description: '',
      location: '',
      username: ''
    }
  },
  created () {
    this.isLogged = (require('../scripts/cookies').getCookie('id') !== undefined)
    this.username = require('../scripts/cookies').getCookie('name')
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Tajawal');

#header{
    font-family: 'Tajawal', sans-serif;
    background-color: white;
    box-shadow: 0 2px 0px 0px rgba(0, 0, 0, 0.2);
}
#search{
  padding-right: 25%;
}
#search .mr-sm-2{
  padding-right: 10%;
}
.log{
  color:grey;
  margin-right: 10%;
  font-weight: bold;
}
.log:active{
  text-decoration: underline;
}
.question{
  border-style: solid;
  border-color: green;
  border-radius: 12px;
  padding: 1%;
}
</style>
