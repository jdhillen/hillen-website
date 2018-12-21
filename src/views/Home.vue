<!--|== Template =============================================================================== -->
<template>
    <section class="home row center-xs">

        <div class="home__fullwh col-xs-12">
            <img class="home__img" src="~@/assets/img/layout/code_coffee_metal.png" alt="Code Coffee Metal">
            <p>New site is under development.<br>Launching sometime in early 2019.</p>
        </div>

  </section>
</template>


<!--|== Scripts ================================================================================ -->
<script>

export default {
    name: 'home',

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

    }
    
};

</script>


<!--|== CSS ==================================================================================== -->
<style lang="scss">
.home {
    height: 100vh;
    text-align: center;

    &__fullwh {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    &__img {
        width: 250px;
        height: 230px;
    }
}
</style>