<!--|== Template =============================================================================== -->
<template>
    <v-container class="home">
        <v-row>
            <v-col>
                <img
                    class="home__img"
                    src="~@/assets/img/layout/code_coffee_metal.png"
                    alt="Code Coffee Metal"
                />
                <p>New site is under development.</p>
            </v-col>
        </v-row>
    </v-container>
</template>


<!--|== Scripts ================================================================================ -->
<script>
export default {
	name: 'home',

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

	destroyed() {}
};
</script>


<!--|== CSS ==================================================================================== -->
<style lang="scss">
.home {
	text-align: center;

	&__img {
		width: 250px;
		height: 230px;
		margin-bottom: 20px;
	}
}
</style>
