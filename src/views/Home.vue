<!--|== Template =============================================================================== -->
<template>
    <section class="home container-fluid">

        <div class="home__fullwh">
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
    flex: 1;
    text-align: center;

    &__fullwh {
        width: 100%;
        height: 100%;
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