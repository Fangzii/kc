<template>
	<view :class="{ 'uni-card--full': isFull === true || isFull === 'true', 'uni-card--shadow': isShadow === true || isShadow === 'true' }"
	 class="uni-card" @click="onClick" :style="backgroundColor? 'background:' + backgroundColor: ''">
		<view v-if="mode === 'style'" class="uni-card__thumbnailimage">
			<view class="uni-card__thumbnailimage-box">
				<image class="uni-card__thumbnailimage-image" :src="thumbnail" mode="aspectFill" />
			</view>
			<view v-if="title" class="uni-card__thumbnailimage-title"><text class="uni-card__thumbnailimage-title-text">{{ title }}</text></view>
		</view>
		<view v-if="mode === 'title'" class="uni-card__title">
			<view class="uni-card__title-header">
				<image class="uni-card__title-header-image" :src="thumbnail" mode="scaleToFill" />
			</view>
			<view class="uni-card__title-content">
				<text class="uni-card__title-content-title">{{ title }}</text>
				<text class="uni-card__title-content-extra">{{ extra }}</text>
			</view>
		</view>
		<!-- 标题 -->
		<view v-if="mode === 'basic' && title" class="uni-card__header">
			<view v-if="thumbnail" class="uni-card__header-extra-img-view">
				<image :src="thumbnail" class="uni-card__header-extra-img" />
			</view>
			<text class="uni-card__header-title-text">{{ title }}</text>
			<text v-if="extra" class="uni-card__header-extra-text">{{ extra }}</text>
		</view>
		<!-- 内容 -->
		<view class="uni-card__content uni-card__content--pd">
			<view v-if="mode === 'style' && extra" class=""><text class="uni-card__content-extra">{{ extra }}</text></view>
			<slot />
		</view>
		<!-- 底部 -->
		<view v-if="note" class="uni-card__footer">
			<slot name="footer">
				<text class="uni-card__footer-text">{{ note }}</text>
			</slot>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'UniCard',
		props: {
			title: {
				type: String,
				default: ''
			}, // 标题
			extra: {
				type: String,
				default: ''
			}, // 扩展信息
			note: {
				type: String,
				default: ''
			}, // Tips
			thumbnail: {
				type: String,
				default: ''
			}, // 缩略图
			// 卡片模式 ， 可选值 basic：基础卡片 ；style ：图文卡片 ； title ：标题卡片
			mode: {
				type: String,
				default: 'basic'
			},
			isFull: {
				// 内容区域是否通栏
				type: Boolean,
				default: false
			},
			isShadow: {
				// 是否开启阴影
				type: Boolean,
				default: false
			},
			backgroundColor: {
				// 是否开启阴影
				type: String,
				default: ''
			},
		},
		methods: {
			onClick() {
				this.$emit('click')
			}
		}
	}
</script>

<style lang="scss" scoped>
	.uni-card {
		/* #ifndef APP-NVUE */
		display: flex;
		flex: 1;
		box-shadow: 0 0 0 rgba(0, 0, 0, 0);
		/* #endif */
		margin: 12px;
		background-color: $uni-bg-color;
		position: relative;
		flex-direction: column;
		border-color: $uni-border-color;
		border-style: solid;
		border-width: 1px;
		border-radius: 3px;
		overflow: hidden;

	}

	.uni-card__thumbnailimage {
		position: relative;
		flex-direction: column;
		justify-content: center;
		height: 150px;
		overflow: hidden;
	}

	.uni-card__thumbnailimage-box {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex: 1;
		flex-direction: row;
		overflow: hidden;
	}

	.uni-card__thumbnailimage-image {
		flex: 1;
	}

	.uni-card__thumbnailimage-title {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		flex-direction: row;
		padding: $uni-spacing-col-base $uni-spacing-col-lg;
		background-color: $uni-bg-color-mask;
	}

	.uni-card__thumbnailimage-title-text {
		flex: 1;
		font-size: $uni-font-size-base;
		color: #fff;
	}

	.uni-card__title {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		padding: 10px;
		border-bottom-color: #F5F5F5;
		border-bottom-style: solid;
		border-bottom-width: 1px;
	}

	.uni-card__title-header {
		width: 40px;
		height: 40px;
		overflow: hidden;
		border-radius: 5px;
	}

	.uni-card__title-header-image {
		width: 40px;
		height: 40px;
	}

	.uni-card__title-content {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
		justify-content: center;
		padding-left: 10px;
		height: 40px;
		overflow: hidden;


	}

	.uni-card__title-content-title {
		font-size: $uni-font-size-base;
		line-height: 22px;
		lines: 1;
	}

	.uni-card__title-content-extra {
		font-size: 26rpx;
		line-height: 35rpx;
		color: #999;
	}

	.uni-card__header {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		position: relative;
		flex-direction: row;
		padding: $uni-spacing-col-lg;
		align-items: center;
		border-bottom-color: $uni-border-color;
		border-bottom-style: solid;
		border-bottom-width: 1px;
	}

	.uni-card__header-title {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		margin-right: $uni-spacing-col-base;
		justify-content: flex-start;
		align-items: center;
	}

	.uni-card__header-title-text {
		font-size: $uni-font-size-lg;
		flex: 1;
		/* #ifndef APP-NVUE */
		white-space: nowrap;
		/* #endif */
		/* #ifdef APP-NVUE */
		lines: 1;
		/* #endif */
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.uni-card__header-extra-img {
		height: $uni-img-size-sm;
		width: $uni-img-size-sm;
		margin-right: $uni-spacing-col-base;
	}

	.uni-card__header-extra-text {
		flex: 1;
		margin-left: $uni-spacing-col-base;
		font-size: $uni-font-size-base;
		text-align: right;
		color: $uni-text-color-grey;
	}

	.uni-card__content {
		color: $uni-text-color;
	}

	.uni-card__content--pd {
		padding: $uni-spacing-col-lg;
	}

	.uni-card__content-extra {
		font-size: $uni-font-size-base;
		padding-bottom: 10px;
		color: #999;
	}

	.uni-card__footer {
		justify-content: space-between;
		padding: 10px;
		border-top-color: $uni-border-color;
		border-top-style: solid;
		border-top-width: 1px;
	}

	.uni-card__footer-text {
		color: $uni-text-color-grey;
		font-size: $uni-font-size-base;
	}

	.uni-card--shadow {
		border-color: $uni-border-color;
		border-style: solid;
		border-width: 1px;
		/* #ifndef APP-NVUE */
		box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
		/* #endif */
	}

	.uni-card--full {
		margin: 0;
		border-radius: 0;
	}
</style>
