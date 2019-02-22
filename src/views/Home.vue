<!--|== Template =============================================================================== -->
<template>
    <section class="page home">

        <div class="grid-container">
            <div class="grid-x">
                <div class="cell">
                    <img class="home__img" src="~@/assets/img/layout/code_coffee_metal.png" alt="Code Coffee Metal">
                    <p>New site is under development.<br>Launching sometime in early 2019.</p>
                </div>
            </div>
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    

    &__img {
        width: 250px;
        height: 230px;
    }
}
</style>