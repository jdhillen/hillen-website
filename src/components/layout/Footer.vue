<!--|== Template =============================================================================== -->
<template>
    <section class="footer row">
        
        <footer class="col-xs-12">
            
            
            <a :href="contact.github" target="_blank">
                <font-awesome-icon :icon="[ 'fab', 'github' ]" size="2x"/>
            </a>

            <a :href="contact.linkedin" target="_blank">
                <font-awesome-icon :icon="[ 'fab', 'linkedin' ]" size="2x"/>
            </a>

            <a :href="contact.facebook" target="_blank">
                <font-awesome-icon :icon="[ 'fab', 'facebook' ]" size="2x"/>
            </a>

            <a :href="contact.twitter" target="_blank">
                <font-awesome-icon :icon="[ 'fab', 'twitter' ]" size="2x"/>
            </a>

            <a :href="contact.instagram" target="_blank">
                <font-awesome-icon :icon="[ 'fab', 'instagram' ]" size="2x"/>
            </a>

            <a :href="'mailto:' + contact.email + '?subject=Hello'">
                <font-awesome-layers full-width class="fa-2x">
                    <font-awesome-icon icon="envelope"/>
                    <span class="fa-layers-counter" style="background:Tomato">1</span>
                </font-awesome-layers>
            </a>
            
        </footer>

    </section>
</template>


<!--|== Scripts ================================================================================ -->
<script>

import { mapState } from 'vuex';

export default {
    name: 'site-footer',

    components: {

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

        ...mapState({
            contact: state => state.api.contact,
        })

    },

    methods: {

        
    },

    watch: {
        
    }
    
}

</script>


<!--|== CSS ==================================================================================== -->
<style lang="scss" scoped>

.footer {
    text-align: center;
}

</style>
