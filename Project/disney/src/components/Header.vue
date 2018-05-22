<template>
    <div>
        <b-navbar id="header" toggleable="md" fixed="top">
            <b-navbar-brand id="nav_logo" href="/">
                <b-img width="100" height="45" src="static/images/header_logo.png"/>
            </b-navbar-brand>
            <b-navbar-nav class="ml-auto">
                <b-collapse is-nav id="nav_collapse">
                    <b-nav-item href="#">
                        Home
                    </b-nav-item>
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
}
</script>

<style>
#header{
    background-color: white;
}
</style>
