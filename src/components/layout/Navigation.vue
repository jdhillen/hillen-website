<!--|== Template =============================================================================== -->
<template>
    <nav class="nav">

        <div class="container-fluid">
            <div class="row">
                <div class="col-xs-12">
                    <router-link to="/">Home</router-link>
                    <router-link to="/about">About</router-link>
                    <router-link to="/resume">Resume</router-link>
                </div>
            </div>
        </div>
        
    </nav>
</template>


<!--|== Scripts ================================================================================ -->
<script>

export default {
    name: 'site-navigation',
}

</script>


<!--|== CSS ==================================================================================== -->
<style lang="scss" scoped>

.nav {
    text-align: center;
}

</style>
