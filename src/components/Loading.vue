<template>
    <div class="loading" v-show="visible">
        <div class="loading-mask">
            <div class="loading-outter">
                <div class="loading-wrap">
		    		<div class="loading-ring"></div>
		    	</div>
	    		<div class="loading-rect"></div>
	    		<div class="loading-text">{{ text }}</div>
	    	</div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        text: {
            type: String,
            default: ''
        }
    },
    data () {
        return {
            visible: true
        };
    }
};
</script>
<style lang="less" scoped>
	.loading{
		transition: opacity .3s linear;
		width: 100%;
		height: 100%;
		position: fixed;
		display: block;
		text-align: center;
		top: 0;
		background-color: transparent;//背景透明
		z-index: 9999;
		&:after{
			content: "";
			display: inline-block;
		}
	}
	.loading-mask{
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, .2);
	}
.loading-outter {
    position: relative;
    top: 50%;
    margin-top: -0.35rem;
    display: inline-block;
    vertical-align: middle;
    background-color: #222;
    border-radius: .5rem;
    height: .75rem;
}
.loading-wrap {
    position: absolute;
    width: .56rem;
    height: .56rem;
    top: .094rem;
    left: .09rem
}
.loading-ring {
    width: .56rem;
    height: .56rem;
    background-image: url("../assets/loading.svg");
    background-size: cover;
    position: absolute;
}
.loading-rect {
    height: .18rem;
    width: .18rem;
    background-color: #FD404A;
    border-radius: .05rem;
    -webkit-transform: rotate3D(0, 0, 1, 45deg);
    position: absolute;
    left: .28rem;
    top: .28rem;
}

.loading-text {
    text-align: left;
    color: #fff;
    font-size: .24rem;
    font-family: sans-serif;
    line-height: .75rem;
    padding-left: .85rem;
    padding-right: .26rem;
}

.loading-enter,
.loading-leave-active {
    opacity: 0;
}
</style>
