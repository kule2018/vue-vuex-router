<template>
	<div class="m-xgplayer">
		<Xgplayer :config="config" @player="Player = $event"/>
	</div>
</template>

<script>
	import Xgplayer from "xgplayer-vue";

	export default {
		data() {
			return {
				config: {
					id: "vs",
					url: "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4",
					width: window.innerWidth,
					height: 220,
					poster:
						"http://ww1.sinaimg.cn/large/0069osmDly1fxgv7wf2ypj30jk0cun0d.jpg",
					playbackRate: [0.5, 0.75, 1, 1.5, 2],
					rotate: {
						//视频旋转按钮配置项
						innerRotate: true, //只旋转内部video
						clockwise: false // 旋转方向是否为顺时针
					},
					// playsinline: true,
					// "x5-video-player-type": "h5",
					// "x5-video-player-fullscreen": false,
					"x5-video-orientation": "landscape",
					whitelist: ["iPhone"]
				},
				Player: null
			};
		},
		components: {
			Xgplayer
		},
		mounted() {
			// alert(navigator.userAgent)
		}
	};
</script>

<style lang="scss" scoped>
	.m-xgplayer {
	}
</style>
