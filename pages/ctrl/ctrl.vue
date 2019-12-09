<template>
	<view>
		
		<!-- 显示Switch -->
		<uni-list>
		    <uni-list-item title="高效模式" :show-switch="true" :switch-checked="$efficient.open" @switchChange="switchChange"></uni-list-item>
		</uni-list>
	</view>
</template>
<script>
import uniList from '@/components/uni-list/uni-list.vue';
import uniListItem from '@/components/uni-list-item/uni-list-item.vue';
export default {
	name: 'ctrl',
	components: { uniList, uniListItem },

	data() {
		return {};
	},
	methods: {
		switchChange(e) {
			this.$efficient.open = !this.$efficient.open;
		}
	}
};
</script>

<style></style>
