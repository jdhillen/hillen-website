<!--|== Template =============================================================================== -->
<template>
    <footer class="footer container-fluid">

        <div class="row">
            <div class="footer__container col-xs-12">
                <ul>
                    <li>
                        <a :href="contact.github" target="_blank">
                            <font-awesome-icon :icon="[ 'fab', 'github' ]" size="2x"/>
                        </a>
                    </li>

                    <li>
                        <a :href="contact.linkedin" target="_blank">
                            <font-awesome-icon :icon="[ 'fab', 'linkedin' ]" size="2x"/>
                        </a>
                    </li>

                    <li>
                        <a :href="contact.facebook" target="_blank">
                            <font-awesome-icon :icon="[ 'fab', 'facebook' ]" size="2x"/>
                        </a>
                    </li>

                    <li>
                        <a :href="contact.twitter" target="_blank">
                            <font-awesome-icon :icon="[ 'fab', 'twitter' ]" size="2x"/>
                        </a>
                    </li>

                    <li>
                        <a :href="contact.instagram" target="_blank">
                            <font-awesome-icon :icon="[ 'fab', 'instagram' ]" size="2x"/>
                        </a>
                    </li>

                    <li>
                        <a :href="'mailto:' + contact.email + '?subject=Hello'">
                            <font-awesome-layers full-width class="fa-2x">
                                <font-awesome-icon icon="envelope"/>
                                <span class="fa-layers-counter" style="background:Tomato; right:-5px;">1</span>
                            </font-awesome-layers>
                        </a>
                    </li>
                </ul>
            </div>
        </div>

        <div class="row">
            <div class="footer__container col-xs-12">
                <div>Made with <div class="icon icon__vue"></div> by J.D. Hillen</div>
            </div>
        </div>

    </footer>
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
            year: undefined,
        };
    },

    beforeCreate() {
        
    },

    created() {

    },

    beforeMount() {
        this.year = new Date().getFullYear();
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

    &__container {
        padding: 20px 0;

        ul {
            margin: 0;
            padding: 0;

            li {
                padding: 0 10px;
                display: inline;

                a {
                    color: black(0.75)
                }
            }
        }

    }
}

</style>
