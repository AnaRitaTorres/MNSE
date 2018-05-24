<template>
    <div>
        <b-navbar id="header" toggleable="md" fixed="top">
            <b-navbar-brand id="nav_logo" href="/">
                <b-img width="100" height="45" src="static/images/header_logo.png"/>
            </b-navbar-brand>
            <b-navbar-nav class="ml-auto">
                <b-collapse is-nav id="nav_collapse">
                    <b-button @click="showModal">
                        Open Modal
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
                                <b-form-input id="input1" :state="state" v-model.trim="username"></b-form-input>
                            </b-form-group>
                            <b-form-group
                              id="fieldset2"
                              label="Enter your password"
                              label-for="input2"
                              :invalid-feedback="invalidFeedback"
                              :valid-feedback="validFeedback"
                              :state="state"
                            >
                              <b-form-input id="input2" :state="state" v-model.trim="password"></b-form-input>
                            </b-form-group>
                        </div>
                        <br> <!-- ñ havia uma class/tag que punha um tracinho? -->
                        <div class="d-block text-center">
                            <h3>Register</h3>
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
    }
  },
  computed: {
    state () {
      return this.password.length >= 1 && this.username.length >= 1
    },
    invalidFeedback () {
      if (this.password.length > 1 && this.username.length >= 1) {
        return ''
      } else {
        return 'Password or username field empty!'
      }
    },
    validFeedback () {
      return this.state === true ? 'Thank you' : ''
    }
  },
  data () {
    return {
      username: '',
      password: ''
    }
  }
}
</script>

<style>
#header{
    background-color: white;
    box-shadow: 0 2px 0px 0px rgba(0, 0, 0, 0.2);
}
</style>
