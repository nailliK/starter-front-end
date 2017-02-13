<style lang="scss">
    /* all necessary mixins, frameworks and variables */
    /
    /
    @import 'includes';
</style>

<template>
    <p>This is home.</p>
</template>

<script>
    export default {
        name: 'home',
        store: window.store,
        data () {
            return {
                fizz: 'buzz'
            };
        },
        computed: {
            foo: function () {
                return this.$store.state.foo;
            }
        },
        created () {
            // on create
        },
        methods: {
            getFoo: function () {
                console.log(this.foo);
            }
        }
    }
</script>
