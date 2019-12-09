<template>
	<view v-if="data" class="kc_order">
		<!--  #ifdef  MP-WEIXIN -->
		<view style="height: 120upx"></view>
		<!--  #endif -->
		<view class="kc_order_head">{{ data.type == 100 ? '饿了么订单' : '美团订单' }}</view>
		<view class="kc_order_line"></view>
		<view class="kc_order_content">
			<view class="kc_order_time_tag">创建时间: {{ data.eleme_order.ctime }}</view>
			<view class="kc_order_merchandise">
				<view class="corner_mark"></view>
				<view class="kc_order_merchandise_head">商品</view>
			</view>
			<view class="kc_order_food" v-for="(item, index) in data.eleme_order.Merchandise" :key="index">
				<text>套餐名称: {{ item.title }}</text>
				<text style="margin-left: 40px;">SKU: {{ item.sku }}</text>
				<text style="float: right">{{ item.price }} ¥</text>
				<view v-for="(foods, indexs) in item.food" :key="indexs" class="kc_order_food_detail">
					<view v-if="indexs === 0">
						<text class="td">名称</text>
						<text class="td">成本</text>
						<text style="float: right;margin-right: 30upx;">单价</text>
					</view>
					<view>
						<text class="td">{{ foods.name }}</text>
						<text class="td">{{ foods.cost }} ¥</text>
						<text style="float: right;margin-right: 30upx;">{{ foods.price }} ¥</text>
					</view>
				</view>
			</view>
			<view style="float: right;font-size: 24upx;margin-top: 20upx;">
				本单商家总利润: {{data.real_price}} ¥
			</view>
		</view>
	</view>
</template>

<script>
export default {
	name: 'kcOrder',
	props: {
		data: {
			type: Object,
			default: null
		} // 标题
	},
	data() {
		return {};
	}
};
</script>

<style lang="less" scoped>
.kc_order {
	&_head {
		font-size: 20upx;
		font-weight: 900;
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
</style>
