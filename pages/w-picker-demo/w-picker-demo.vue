<template>
	<view class="content">
		<view class="tab" :class="{'active':index==tabIndex}" @tap="toggleTab(item,index)" v-for="(item,index) in tabList" :key="index">{{item.name}}</view>
		<w-picker
			mode="linkage"
			:level="3"
			:value="['10','1012','10122']"
			:defaultVal="['浙江省','宁波市','海曙区']"
			@confirm="onConfirm"
			ref="linkage"
			:linkList="linkList"
			themeColor="#f00"
		></w-picker>
		<w-picker
			mode="half" 
			:startYear="2016" 
			endYear="2030"
			:defaultVal="['2018','02','05','下午']" 
			:current="false" 
			@confirm="onConfirm"
			:disabledAfter="true"
			ref="half" 
			themeColor="#f00"
		></w-picker>
		<w-picker 
			mode="range" 
			startYear="2017" 
			endYear="2030"
			:defaultVal="['2017','12','31','-','2019','12','31']"
			:current="false"
			@confirm="onConfirm" 
			ref="range" 
			themeColor="#f00"
		></w-picker>
		<w-picker
			mode="limitHour" 
			dayStep="60"
			@confirm="onConfirm"
			ref="limitHour" 
			themeColor="#f00"
		></w-picker>
		<w-picker 
			mode="limit" 
			dayStep="60"
			startHour="8"
			endHour="20"
			minuteStep="5"
			afterStep="30"
			@confirm="onConfirm"
			ref="limit" 
			themeColor="#f00"
		></w-picker>
		<w-picker 
			mode="date" 
			startYear="2017" 
			endYear="2030"
			:defaultVal="['2019','10','31']"
			:current="false" 
			@confirm="onConfirm"
			:disabledAfter="true"
			ref="date" 
			themeColor="#f00"
		></w-picker>
		<w-picker 
			mode="yearMonth" 
			startYear="2016"
			endYear="2030"
			:defaultVal="['2018','12']" 
			:current="false"
			@confirm="onConfirm"
			:disabledAfter="false"
			ref="yearMonth" 
			themeColor="#f00"
		></w-picker>
		<w-picker 
			mode="dateTime" 
			startYear="2017" 
			endYear="2030"
			step="1"
			:defaultVal="['2018','09','10','12','48','45']" 
			:current="false" 
			@confirm="onConfirm" 
			ref="dateTime" 
			themeColor="#f00"
		></w-picker>
		<w-picker 
			mode="time"
			:defaultVal="['02','03','30']" 
			:current="false" 
			@confirm="onConfirm" 
			ref="time"
			step="1"
		></w-picker>
		<w-picker 
			mode="region"
			:defaultVal="['浙江省','杭州市','滨江区']"
			:areaCode="['33','3301','330108']"
			:hideArea="false"
			@confirm="onConfirm" 
			ref="region"
			:timeout="true"
		></w-picker>
		<w-picker 
			v-if="selectList.length!=0"
			mode="selector" 
			:defaultVal="['女']" 
			@confirm="onConfirm" 
			ref="selector" 
			themeColor="#f00"
			:selectList="selectList"
		></w-picker>
		<view class="result">选择结果：{{resultInfo.result}}</view>
	</view>
</template>

<script>
	import wPicker from "@/components/w-picker/w-picker.vue";
	export default {
		components:{
			wPicker
		},
		data() {
			return {
				title: 'Hello',
				startYear:new Date().getFullYear(),
				mode:"range",
				defaultVal:[0,0,0,0,0,0,0],
				tabList:[{
					mode:"linkage",
					name:"多级联动"
				},{
					mode:"half",
					name:"选择上午下午"
				},{
					mode:"range",
					name:"选择区间的日期"
				},{
					mode:"limitHour",
					name:"选择短期的日期上下午"
				},{
					mode:"limit",
					name:"选择短期的日期时间"
				},{
					mode:"date",
					name:"日期选择"
				},
				{
					mode:"yearMonth",
					name:"年月"
				},{
					mode:"dateTime",
					name:"日期时间选择"
				},{
					mode:"time",
					name:"时间选择"
				},
				{
					mode:"region",
					name:"省市区"
				},
				{
					mode:"selector",
					name:"单列选择"
				}],
				tabIndex:0,
				selectList:[{
					label:"男",
					value:0
				},{
					label:"女",
					value:1
				}],
				resultInfo:{
					result:"2019-12-20 10:00:00"
				},
				linkList:[{
					label:"浙江省",
					value:"10",
					children:[{
						label:"杭州市",
						value:"1010",
						children:[{
							label:"滨江区",
							value:"10101"
						},{
							label:"萧山区",
							value:"10102"
						}]
					},{
						label:"宁波市",
						value:"1012",
						children:[{
							label:"海曙区",
							value:"10121"
						},{
							label:"鄞州区",
							value:"10122"
						}]
					}]
				},{
					label:"广东省",
					value:"20",
					children:[{
						label:"广州市",
						value:"2010",
						children:[{
							label:"广州1区",
							value:"20101"
						},{
							label:"广州2区",
							value:"20102"
						}]
					}]
				}]
			}
		},
		computed:{
			
		},
		methods: {
			toggleTab(item,index){
				this.tabIndex=index;
				this.mode=item.mode;
				this.defaultVal=item.value;
				this.$refs[item.mode].show();
			},
			onConfirm(val){
				console.log(val);
				//如果页面需要调用多个mode类型，可以根据mode处理结果渲染到哪里;
				// switch(this.mode){
				// 	case "date":
				// 		break;
				// }
				this.resultInfo=val;
			}
		}
	}
</script>

<style>
	.content {
		text-align: center;
		height: 400upx;
	}
	.tab{
		padding:20upx 0;
		font-size: 32upx;
	}
	.tab.active{
		color:#f00;
	}
	.result{
		margin-top: 100upx;
		font-size: 32upx;
	}
</style>
