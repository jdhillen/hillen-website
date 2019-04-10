<!--|== Template =============================================================================== -->
<template>
    <nav class="nav">

        <div class="nav__container">
            <button class="hamburger hamburger--squeeze" :class="{ 'is-active': isActive }" @click="toggleNav()" type="button">
                <span class="hamburger-box">
                    <span class="hamburger-inner"></span>
                </span>
            </button>
        </div>

        <div ref="links" class="nav__wrapper" :class="{ 'is-active': isActive }">
            <router-link class="nav__item" to="/" @click.native="toggleNav()">Home</router-link>
            <router-link class="nav__item" to="/about" @click.native="toggleNav()">About</router-link>
            <router-link class="nav__item" to="/work" @click.native="toggleNav()">Work</router-link>
            <router-link class="nav__item" to="/resume" @click.native="toggleNav()">Resume</router-link>
        </div>
        
    </nav>
</template>


<!--|== Scripts ================================================================================ -->
<script>

import {TweenMax, Back} from "gsap/TweenMax";

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
            if (this.isActive) { 
                this.animateIn();
            } else {
                this.animateOut();
            }
        },

        animateIn: function() {
            TweenMax.staggerTo(this.$refs.links.children, 0.35, {top:"0px", autoAlpha:1, ease:Back.easeOut.config(1.5)}, 0.1);
            this.$emit('nav', this.isActive);
         },

        animateOut: function() {
            TweenMax.set(this.$refs.links.children, { top:"50px", autoAlpha:0 });
            this.$emit('nav', this.isActive);
        }

    },

    watch: {
        
    }
    
};

</script>


<!--|== CSS ==================================================================================== -->
<style lang="scss">

.nav {
    position: fixed;
    width: 100%;
    height: 75px;
    z-index: 200;

    .hamburger {
        position: absolute;
        top: 10px;
        right: 10px;
        z-index: 1000;

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
        width: 100%;
        height: 75px;
    }

    &__wrapper {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh; 
        background-color: black(0.75);
        z-index: 900;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        opacity: 0;
        -webkit-transition: opacity 0.25s;
        -o-transition: opacity 0.25s;
        transition: opacity 0.5s;
        

        &.is-active {
            visibility: visible;
            opacity: 1;
        }
    }

    &__item {
        color: $white;
        text-transform: uppercase;
        font-family: 'Lato Black';
        font-size: 50px;
        letter-spacing: 4px;
        @extend %nav-links-animate;
    }

}

</style>
