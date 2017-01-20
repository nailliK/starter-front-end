<style lang="scss">
	/* all necessary mixins, frameworks and variables */
	@import 'includes';

</style>

<template>
	<p>This is foo at {{ $route.params.id }}.</p>
</template>

<script>
	export default {
		name: 'foo',
		store: window.store,
		data () {
			return {
				fizz: 'buzz'
			};
		},
		computed: {
			foo: function() {
				return this.$store.state.foo;
			}
		},
		created () {
			// on create
			console.log()
		},
		methods: {
			getFoo: function() {
				console.log(this.foo);
			}
		}
	}
</script>