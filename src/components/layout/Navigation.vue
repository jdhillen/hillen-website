<!--|== Template =============================================================================== -->
<template>
    <nav class="nav">

        <button class="hamburger hamburger--squeeze" :class="{ 'is-active': isActive }" @click="toggleNav()" type="button">
            <span class="hamburger-box">
                <span class="hamburger-inner"></span>
            </span>
        </button>

        <div class="nav__container" :class="{ 'is-active': isActive }">
            <router-link to="/" @click.native="toggleNav()">Home</router-link>
            <router-link to="/about" @click.native="toggleNav()">About</router-link>
            <router-link to="/resume" @click.native="toggleNav()">Resume</router-link>
        </div>
        
    </nav>
</template>


<!--|== Scripts ================================================================================ -->
<script>

export default {
    name: 'site-navigation',

    components: {

    },

    data() {
        return {
            isActive: false,
        };
    },

    beforeCreate() {
        
    },

    created() {

    },

    beforeMount() {
        
    },

    mounted() {
       
    },

    beforeUpdate() {

    },

    updated() {
        
    },

    beforeDestroy() {
    
    },

    destroyed() {

    },

    computed: {

    },

    methods: {

        toggleNav: function() {
            this.isActive = !this.isActive;
        },

    },

    watch: {
        
    }
    
};

</script>


<!--|== CSS ==================================================================================== -->
<style lang="scss" scoped>

.nav {
    position: relative;
    text-align: center;

    .hamburger {
        position: absolute;
        top: 10px;
        right: 10px;
        z-index: 200;

        &-inner,
        &-inner::before,
        &-inner::after {
            background-color: black(0.70);
        }

        &.is-active {
            .hamburger-inner,
            .hamburger-inner::before,
            .hamburger-inner::after {
                background-color: $white;
            }
        }
    }

    &__container {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background-color: black(0.75);
        z-index: 100;
        display: flex;
        flex-direction: column;
        justify-content: center;
        visibility: hidden;
        opacity: 0;
        transition: opacity 0.25s;
        -webkit-transition: opacity 0.25s;

        &.is-active {
            visibility: visible;
            opacity: 1;
        }
    }
}

</style>
