<template>
	<view>
		<uni-popup ref="popupTop" type="top" style="z-index:5555;">
			<view class="kc_detail_popup" style="height: 900upx; z-index:5555;" ><kc-order :data="orderDetail"></kc-order></view>
		</uni-popup>
		<uni-popup ref="popupShop" type="center" style="z-index:5555;">
			<view><kc-shop></kc-shop></view>
		</uni-popup>
		<an-layer ref="anRef" :autoClose="true" timer="3" type="info"><text>有一个新订单！！！</text></an-layer>
		<!--  #ifdef  MP-WEIXIN -->
		<!-- 兼容小程序按钮隐藏不了 -->
		<view style="height: 120upx;background:#384038"></view>
		<uni-nav-bar backgroundColor="#384038">
		<!--  #endif -->
		<!-- #ifndef  MP-WEIXIN -->
		<uni-nav-bar :shadow="true" :fixed="true" backgroundColor="#384038">
		<!-- #endif -->
			<view class="center">
				<QSInput
					:value="searchInput"
					:fontSize="22"
					class="searchInput"
					:border="true"
					placeholder="请输入搜索内容"
					:width="`${$isMoblie ? '110%' : '120%'}`"
					focusBorderColor="#37b747"
					blurBorderColor="#b7e6cc"
				></QSInput>
			</view>
			<view slot="left" class="navbar_left">
				<image src="../../static/icon/logo.png" style="height: 100upx;width: 100upx"></image>
			</view>
			<view slot="right" class="navbar_right">
				<uni-icons type="home-filled" size="60" :style="'color:' + (newNumber > 0? '#2e8cf099;':'#d6e6da;') + 'transition: all 1s'"  @click="openShop"></uni-icons>
				<uni-badge :text="`${newNumber}`" :type="newNumber > 0 ? 'primary' : 'success'" size="small" @click="openShop" style="transition: all 1s;right: 30upx;bottom: 20upx;position: relative;"></uni-badge>
			</view>
		</uni-nav-bar>
		<view :class="(!$isMoblie? 'kc_div' : 'kc_moblie_div')">
			<!--  #ifdef  MP-WEIXIN -->
			<view class="kc_list" v-for="(item, index) in data" :key="index" @click="openDetail(item)" style="width: 100%;">
			<!--  #endif -->
			<!-- #ifndef  MP-WEIXIN -->
			<view class="kc_list" v-for="(item, index) in data" :key="index" @click="openDetail(item)">
			<!-- #endif -->
				<image v-if="item.new" :src="'/static/icon/new.png'" style="transition: all 1s;right: 14px;position: absolute;width: 40upx;height: 40upx;z-index: 555;"></image>
				<!-- backgroundColor 为兼容小程序样式渲染顺序 -->
				<uni-card
					class="kc_card"
					:is-shadow="true"
					:extra="item.title"
					:backgroundColor="item['new'] ? '#2e8cf099' : '#3a825a21'"
					:style="(!$isMoblie ? 'width: 200upx;' : 'width: 92%;') + (item['new'] ? 'background:#2e8cf099' : '')"
				>
					<view class="kc_content" :style="(!$isMoblie ? 'font-size: 16upx;': '')">
						<view class="kc_title">
						<view class="kc_title_left">{{ item.title }}</view>
						<view class="kc_title_right">
							<!--  #ifdef  MP-WEIXIN -->
							<uni-tag  :text="`${item.type == 100? '饿了么' : '美团'}`" :type="`${item.type == 100? 'error' : 'warning'}`" :class="(item.type == 100? 'kc_tag_elm' : 'kc_tag_mt')" size="small"></uni-tag>
							<!--  #endif -->
							<!--  #ifndef  MP-WEIXIN -->
							<uni-tag  :text="`${item.type == 100? '饿了么' : '美团'}`" type="primary" :class="(item.type == 100? 'kc_tag_elm' : 'kc_tag_mt')" size="small"></uni-tag>	
							<!--  #endif -->
						</view>
						</view>
						<view class="kc_line"></view>
						<view>商品: {{ item.eleme_order.Merchandise.length }}</view>
						<view>备注: {{ item.eleme_order.description }}</view>
						<view>创建时间: {{ item.eleme_order.ctime }}</view>
					</view>
					<view slot="footer"></view>
				</uni-card>
			</view>
		</view>
	</view>
</template>

<script>
import uniTag from "@/components/uni-tag/uni-tag.vue";
import anLayer from '@/components/an-layer/an-layer';
import uniCollapse from '@/components/uni-collapse/uni-collapse.vue';
import uniCollapseItem from '@/components/uni-collapse-item/uni-collapse-item.vue';
import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue';
import uniPopup from '@/components/uni-popup/uni-popup.vue';
import uniCard from '@/components/uni-card/uni-card';
import uniBadge from '@/components/uni-badge/uni-badge.vue';
import uniIcons from '@/components/uni-icons/uni-icons.vue';
import kcOrder from '@/components/kc-order/kc-order';
import kcShop from '@/components/kc-shop/kc-shop';
import QSInput from '@/components/QS-inputs-split/elements/QS-input/index.vue';
export default {
	components: {
		uniNavBar,
		uniCard,
		uniPopup,
		QSInput,
		uniCollapse,
		uniCollapseItem,
		kcOrder,
		kcShop,
		uniBadge,
		anLayer,
		uniIcons,
		uniTag  
	},
	watch: {
		newNumber: function(newVal, oldVal) {
			console.log(newVal, oldVal, 99999);
			if (newVal > oldVal) {
				this.$refs.anRef.show();
			}
		}
	},
	data() {
		return {
			title: 'Hello',
			searchInput: '',
			data: null,
			orderDetail: null,
			newNumber: 0
		};
	},
	onLoad() {
		this.getOrder();
	},
	methods: {
		getOrder() {
			this.$api.get('order/', {params: { date: this.$setting.date }}).then(res => {
				this.data = res.data;
				let total = 0;
				for (let i in this.data) {
					let item = this.data[i];
					item.title = `${item.eleme_order.Merchandise.map(e => e.title).join('、')}`;
					// 5分钟以内的单子提醒
					if (this.$moment(new Date()).valueOf() - this.$moment(item.eleme_order.ctime).valueOf() < 5 * 60 * 1000) {
						item.new = true;
						total++;
					}
				}
				this.newNumber = total; // 更新计数器
				// 轮询
				setTimeout(() => {
					this.getOrder();
				}, (this.$setting.efficient ? 1500 : 5000));
			});
		},
		openDetail(item) {
			this.orderDetail = item;
			this.$refs.popupTop.open();
		},
		openShop() {
			this.$refs.popupShop.open();
		}
	}
};
</script>

<style scoped lang="less">
.content {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.logo {
	height: 200rpx;
	width: 200rpx;
	margin-top: 200rpx;
	margin-left: auto;
	margin-right: auto;
	margin-bottom: 50rpx;
}

.text-area {
	display: flex;
	justify-content: center;
}

.title {
	font-size: 36rpx;
	color: #8f8f94;
}
.searchInput {
	// margin-top: 40upx;
}
.kc {
	&_div {
		display: flex;
		padding: 10upx;
		flex-wrap: wrap;
		 // #ifndef  MP-WEIXIN
		height: 1200upx;
		// #endif
		background: #c5e0c554;
	}
	
	&_moblie_div {
		// #ifndef  MP-WEIXIN
		height: 1200upx;
		// #endif
		padding: 10upx;
		background: #c5e0c554;
	}
	
	&_list {
		margin-left: 5upx;
	}
	&_card {
		position: relative;
		transition: all 1s;
		width: 180upx;
		background: #3a825a21;
	}
	&_content {
		font-size: 22upx;
		// color: #ecf1f7;
	}
	&_title {
		display: flex;
		&_right {
			margin-left: auto;
		}
		&_left {
			width: 50%;
		}
	}
	&_line {
		width: 120%;
		height: 1px;
		background: linear-gradient(to left, #84cc9a, white);
		margin-top: 6px;
		margin-bottom: 6px;
		opacity: 0.5;
		margin-left: auto;
		margin-right: auto;
	}
	&_detail_popup {
		height: 500upx;
		background: #ebedef;
		padding: 20upx;
	}
	&_tag {
		&_elm {
			background: #2e8cf099!important;
			border-color: #2e8cf099!important;
		}
		
		&_mt {
			background: #f0ae2e99!important;
			border-color: #558c7d!important;
		}
	}
}

.navbar_righ {
	float: right;
	margin-left: 0;
}

.navbar_left {
	margin-top: 70upx;
	padding: 35upx;
}
.center {
	margin-left: 20upx;
}

</style>
