<!--|== Template =============================================================================== -->
<template>
    <footer class="footer" v-if="contact">
        <v-row class="footer__icons">
            <v-col>
                <ul>
                    <li v-for="(item, index) in social" :key="index">
                      <a :href="item.url" target="_blank" :alt="item.name">
                            <font-awesome-icon :icon="[ 'fab', `${item.icon}` ]" class="footer__icon" />
                        </a>
                    </li>
                    <li>
                        <a :href="'mailto:' + contact.email + '?subject=Hello'">
                            <font-awesome-layers full-width class="footer__icon">
                                <font-awesome-icon icon="envelope" />
                                <span
                                    class="fa-layers-counter"
                                    style="background:Tomato; right:-3px;"
                                >1</span>
                            </font-awesome-layers>
                        </a>
                    </li>
                </ul>
            </v-col>
        </v-row>

        <v-row class="footer__copyright grid-container fluid">
            <v-col>
                <div class="footer__copyright--txt">
                    Made with
                    <a href="https://vuejs.org/" target="_blank">
                        <div class="icon icon__vue"></div>
                    </a> by J.D. Hillen
                </div>
            </v-col>
        </v-row>
    </footer>
</template>


<!--|== Scripts ================================================================================ -->
<script>
import { mapState } from 'vuex';

export default {
	name: 'site-footer',

	components: {},

	data() {
		return {};
	},

	beforeCreate() {},

	created() {},

	beforeMount() {},

	mounted() {},

	beforeUpdate() {},

	updated() {},

	beforeDestroy() {},

	destroyed() {},

	computed: {
		...mapState({
			contact: state => state.api.contact,
			social: state => state.api.social
		})
	},

	methods: {},

	watch: {}
};
</script>


<!--|== CSS ==================================================================================== -->
<style lang="scss" scoped>
.footer {
	width: 100%;
	z-index: 100;

	&__icons {
		text-align: center;
		padding: 20px 0;
		background-color: $grey-light;

		ul {
			margin: 0;
			padding: 0;

			li {
				padding: 0 20px;
				display: inline;

				a {
					color: white(0.25);
					transition: 300ms color;

					&:hover {
						color: $white;
					}
				}
			}
		}
	}

	&__icon {
		transform: scale(1.75);
	}

	&__copyright {
		text-align: center;
		padding: 30px 0;
		background-color: $grey-dark;

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
