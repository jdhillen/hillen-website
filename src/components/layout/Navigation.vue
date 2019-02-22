<!--|== Template =============================================================================== -->
<template>
    <nav class="nav">

        <div class="grid-container">
            <div class="grid-x">
                <div class="cell">
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
