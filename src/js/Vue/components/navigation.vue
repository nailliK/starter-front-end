<style lang="scss">
    /* all necessary mixins, frameworks and variables */
    @import 'includes';

</style>

<template>
    <header role="banner" class="global-header">
        <nav class="global-header__nav">
            <router-link to="/foo/0" active-class="active" exact>Foo 0</router-link>
            <router-link to="/foo/1" active-class="active" exact>Foo 1</router-link>
        </nav>
    </header>
</template>

<script>
    export default {
        name: 'navigation',
        store: window.store,
        computed: {
            foo () {
                return this.$store.state.foo;
            }
        }
    };
</script>
