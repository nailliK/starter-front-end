<style lang="scss">
	/* all necessary mixins, frameworks and variables */
	@import 'includes';

	/* Global styles (only include this up in app.vue) */
	@import '_reset';
	@import 'font-awesome/_font-awesome';
	@import 'global';
</style>

<template>
	<wrapper>
		<navigation></navigation>
		<router-view></router-view>
	</wrapper>
</template>

<script>
	export default {
		name: 'app',
		components: {
			navigation: require('./navigation.vue')
		}
	}
</script>
