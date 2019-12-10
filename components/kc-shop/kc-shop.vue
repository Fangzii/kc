<template>
	<view class="kc_shop">
		<view class="kc_shop_head">
			<!-- KC 旗舰店 -->
			<view class="kc_shop_head_lefthidden"></view>
			<view class="kc_shop_head_nohidden">
				<view class="kc_shop_head_nohidden_body"><image src="../../static/icon/logo.png" style="height: 130upx;width: 130upx"></image></view>
			</view>
			<view class="kc_shop_head_righthidden"></view>
		</view>
		<view class="kc_shop_body">
			<view class="show_time" @tap="toggleTab()">
				<!--  #ifdef  MP-WEIXIN -->
				{{ date }}
				<!--  #endif -->
				<!-- #ifndef  MP-WEIXIN -->
				{{ $setting.date }}
				<!--  #endif -->
				<view style="font-size: 16upx;font-weight: 300;opacity: .9;">订单时间,点击变更</view>
			</view>
			<w-picker
				mode="date"
				startYear="2018"
				endYear="2030"
				:current="false"
				:defaultVal="$setting.date.split('-')"
				@confirm="onConfirm"
				ref="dateTime"
				themeColor="#f00"
			></w-picker>
		</view>
	</view>
</template>

<script>
import wPicker from '@/components/w-picker/w-picker.vue';

export default {
	name: 'kcOrder',
	components: {
		wPicker
	},
	props: {},
	data() {
		return {
			date: null
		};
	},
	methods: {
		toggleTab(item, index) {
			this.$refs.dateTime.show();
		},
		onConfirm(val) {
			this.$setting.date = val.result;
			this.date = val.result;
			this.$forceUpdate();
		}
	},
	created() {
		this.date = this.$setting.date;
	},
};
</script>

<style lang="less" scoped>
.kc_shop {
	height: 600upx;
	width: 600upx;
	&_head {
		width: 100%;
		height: 40%;
		font-size: 32upx;
		font-weight: 900;
		display: flex;

		&_lefthidden {
			background: #9bcab5f0;
			height: 100%;
			width: 25%;
			border-radius: 100% 0px 0px 10px;
		}

		&_righthidden {
			background: #9bcab5f0;
			height: 100%;
			width: 25%;
			border-radius: 0px 100% 10px 0px;
		}

		&_nohidden {
			height: 100%;
			background: #9bcab5f0;
			width: 50%;

			&_body {
				text-align: center;
				margin-top: 30%;
			}
		}
	}

	&_body {
		height: 80%;
		width: 80%;
		border-radius: 0px 0px 10px 10px;
		margin-left: 10%;
		margin-right: 10%;
		background: #dfe6e2d9;
	}

	&_line {
		width: 100%;
		height: 1px;
		background: #333333;
		margin-top: 6px;
		margin-bottom: 6px;
		margin-left: auto;
		margin-right: auto;
	}

	&_content {
		padding: 3px;
	}

	&_time_tag {
		font-size: 14upx;
		color: #adadad;
	}

	&_merchandise {
		margin-top: 10px;
		margin-bottom: 10px;
		display: flex;
		&_head {
			margin-left: 5px;
			font-size: 22upx;
			font-weight: 800;
		}
	}

	&_food {
		font-size: 22upx;
		&_detail {
			// padding-left: 10upx;
		}
	}
}

.corner_mark {
	position: relative;
	top: 8upx;
	height: 22upx;
	width: 3upx;
	background: #007aff;
}

.td {
	margin-left: 40rpx;
}

.show_time {
	width: 80%;
	position: absolute;
	bottom: 0;
	text-align: center;
	color: #59637b;
	font-weight: 700;
}
</style>
