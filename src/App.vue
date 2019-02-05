<!--|== Template =============================================================================== -->
<template>
    <section id="app" class="app container-fluid">
        
        <site-header></site-header>

        <site-navigation></site-navigation>

        <animated-fade-in>
            <router-view></router-view>
        </animated-fade-in>

        <site-footer></site-footer>

    </section>
</template>


<!--|== Scripts ================================================================================ -->
<script>

import SiteHeader from '@/components/layout/Header';
import SiteNavigation from '@/components/layout/Navigation';
import SiteFooter from '@/components/layout/Footer';

export default {
    name: 'app',

    components: {
        SiteHeader,
        SiteNavigation,
        SiteFooter,
    },

    data() {
        return {

        };
    },

    beforeCreate() {
        
    },

    created() {

    },

    beforeMount() {
        this.$store.dispatch('getContact');
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

    },

    watch: {
        
    }
    
}
</script>


<!--|== CSS ==================================================================================== -->
<style lang="scss">

.app {
    
}

</style>