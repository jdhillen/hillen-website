<!--|== Template =============================================================================== -->
<template>
    <div id="app" class="app">
        <site-navigation @nav="onNav"></site-navigation>

        <animated-fade-in>
            <router-view class="page" :class="{ 'blur': blurActive }"></router-view>
        </animated-fade-in>

        <site-footer :class="{ 'blur': blurActive }"></site-footer>
    </div>
</template>


<!--|== Scripts ================================================================================ -->
<script>
import SiteNavigation from "@/components/global/Navigation";
import SiteFooter from "@/components/global/Footer";

export default {
    name: "app",

    components: {
        SiteNavigation,
        SiteFooter
    },

    data() {
        return {
            blurActive: false
        };
    },

    beforeCreate() {
        this.$store.dispatch("api/fetchContact");
    },

    created() {},

    beforeMount() {},

    mounted() {},

    beforeUpdate() {},

    updated() {},

    beforeDestroy() {},

    destroyed() {},

    computed: {},

    methods: {
        onNav(value) {
            this.blurActive = value;
        }
    },

    watch: {}
};
</script>


<!--|== CSS ==================================================================================== -->
<style lang="scss">
.app {
    height: 100%;
    display: flex;
    flex-direction: column;
}
</style>