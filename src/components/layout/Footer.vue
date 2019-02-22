<!--|== Template =============================================================================== -->
<template>
    <footer class="footer">

        <div class="footer__icons grid-container fluid">
            <div class="cell small-12">
                <ul>
                    <li>
                        <a :href="contact.github" target="_blank">
                            <font-awesome-icon :icon="[ 'fab', 'github' ]" class="footer__icon"/>
                        </a>
                    </li>

                    <li>
                        <a :href="contact.linkedin" target="_blank">
                            <font-awesome-icon :icon="[ 'fab', 'linkedin' ]" class="footer__icon"/>
                        </a>
                    </li>

                    <li>
                        <a :href="contact.facebook" target="_blank">
                            <font-awesome-icon :icon="[ 'fab', 'facebook' ]" class="footer__icon"/>
                        </a>
                    </li>

                    <li>
                        <a :href="contact.twitter" target="_blank">
                            <font-awesome-icon :icon="[ 'fab', 'twitter' ]" class="footer__icon"/>
                        </a>
                    </li>

                    <li>
                        <a :href="contact.instagram" target="_blank">
                            <font-awesome-icon :icon="[ 'fab', 'instagram' ]" class="footer__icon"/>
                        </a>
                    </li>

                    <li>
                        <a :href="'mailto:' + contact.email + '?subject=Hello'">
                            <font-awesome-layers full-width class="footer__icon">
                                <font-awesome-icon icon="envelope"/>
                                <span class="fa-layers-counter" style="background:Tomato; right:-3px;">1</span>
                            </font-awesome-layers>
                        </a>
                    </li>
                </ul>
            </div>
        </div>


        <div class="footer__copyright grid-container fluid">
            <div class="cell small-12">
                <div class=footer__copyright--txt>Made with <a href="https://vuejs.org/" target="_blank"><div class="icon icon__vue"></div></a> by J.D. Hillen</div>
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
    width: 100%;

    &__icons {
        text-align: center;
        padding: 20px 0;
        background-color: black(0.70);

        ul {
            margin: 0;
            padding: 0;

            li {
                padding: 0 20px;
                display: inline;

                a {
                    color: white(0.25);
                    transition: 300ms color;

                    &:hover { color: $white; }
                }
            }
        }
    }

    &__icon {
        transform: scale(1.75);
    }

    &__copyright {
        text-align: center;
        padding: 50px 0;
        background-color: black(0.8);

        &--txt {
            font-family: 'Lato Hairline';
            font-size: 8px;
            letter-spacing: 2px;
            text-transform: uppercase;
            color: $white;
        }
    }
}

</style>
