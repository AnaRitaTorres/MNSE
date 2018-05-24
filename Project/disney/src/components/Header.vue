<template>
    <div>
        <b-navbar id="header" toggleable="md" fixed="top">
            <b-navbar-brand id="nav_logo" href="/">
                <b-img width="100" height="45" src="static/images/header_logo.png"/>
            </b-navbar-brand>
            <b-navbar-nav class="ml-auto">
                <b-collapse is-nav id="nav_collapse">
                    <b-button v-if="!isLogged" @click="showModal">
                        Coiso e tale
                    </b-button>
                    <b-button v-if="isLogged" v-on:click="logout">
                        Logout
                    </b-button>
                    <b-modal ref="myModalRef" hide-footer title="Log In or Register">
                        <div class="d-block text-center">
                            <h3>Log In</h3>
                            <b-form-group
                                id="fieldset1"
                                label="Enter your email"
                                label-for="input1"
                                :state="state"
                            >
                                <b-form-input id="input1" :state="state" v-model.trim="email"></b-form-input>
                            </b-form-group>
                            <b-form-group
                              id="fieldset2"
                              label="Enter your password"
                              label-for="input2"
                              :invalid-feedback="invalidFeedback"
                              :valid-feedback="validFeedback"
                              :state="state"
                            >
                              <b-form-input type='password' id="input2" :state="state" v-model.trim="password"></b-form-input>
                            </b-form-group>
                            <b-button v-on:click="login">
                              Log In
                            </b-button>
                        </div>
                        <br> <!-- ñ havia uma class/tag que punha um tracinho? -->
                        <div class="d-block text-center">
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
                            <b-button v-on:click="register">
                                Register
                            </b-button>
                        </div>
                    </b-modal>
                    <b-nav-form>
                        <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
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
        return 'Password or email field empty!'
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
        return 'Please write a valid email!'
      } else if (this.password.length < 4) {
        return 'Password must have at least 4 chars!'
      } else if (this.errorMsg !== '') {
        return this.errorMsg
      } else {
        return 'Some required fields are empty!'
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
      password: '',
      errorMsg: '',
      dbURL: 'http://localhost:8420/',
      name: '',
      description: '',
      location: ''
    }
  },
  created () {
    this.isLogged = (require('../scripts/cookies').getCookie('id') !== undefined)
  }
}
</script>

<style>
#header{
    background-color: white;
    box-shadow: 0 2px 0px 0px rgba(0, 0, 0, 0.2);
}
</style>
