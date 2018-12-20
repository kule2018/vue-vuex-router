<template>
    <div class="m-audio">
        <audio
            ref="audioRef"
            class="audio"
            :src="musicSrc"
            controls
            @play="onPlay"
            @pause="onPause"
        ></audio>
        <div class="control-container">
            <div class="play" @click="handlePlay">
                {{control}}
            </div>
            <div @click="next">
                下一首
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AudioDemo",
        data() {
            return {
                musicList: [
                    'http://sc1.111ttt.cn:8282/2018/1/03m/13/396131232171.m4a?tflag=1519095601&pin=6cd414115fdb9a950d827487b16b5f97#.mp3',
                    'http://sc1.111ttt.cn:8282/2018/1/03m/13/396131229550.m4a?tflag=1519095601&pin=6cd414115fdb9a950d827487b16b5f97#.mp3',
                    'http://sc1.111ttt.cn:8282/2018/1/03m/13/396131225385.m4a?tflag=1519095601&pin=6cd414115fdb9a950d827487b16b5f97#.mp3',
                ],
                musicSrc: '',
                control: '播放',
                isPlaying: false,
                currentIndex: 0,
            }
        },
        watch: {
            isPlaying(newVal) {
                const audio = this.$refs.audioRef;
                this.$nextTick(() => {
                    newVal ? audio.play() : audio.pause();
                    this.control = newVal === false ? '播放' : '暂停';
                })
            }
        },
        methods: {
            handlePlay() {
                this.musicSrc = this.musicList[this.currentIndex];
                this.$refs.audioRef.play();
                this.isPlaying = !this.isPlaying;
            },
            next() {
                this.currentIndex = this.currentIndex > 2 ? 0 : this.currentIndex + 1;
                this.musicSrc = this.musicList[this.currentIndex];
            },
            onPlay() {
                this.$refs.audioRef.play();s
            },
            onPause() {
                this.$refs.audioRef.pause();
            }
        }
    }
</script>

<style scoped lang="scss">
    .m-audio {
        .control-container {
            display: flex;
            justify-content: space-around;
        }
    }
</style>
