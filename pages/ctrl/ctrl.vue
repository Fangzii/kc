<template>
	<view>
		<!--  #ifdef  MP-WEIXIN -->
		<view style="height: 120upx"></view>
		<!--  #endif -->
		<!-- 显示Switch -->
		<uni-list>
		    <uni-list-item title="高效模式" :show-switch="true" :switch-checked="$setting.efficient" @switchChange="switchChange"></uni-list-item>
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
			this.$setting.efficient = !this.$setting.efficient;
		}
	}
};
</script>

<style></style>
