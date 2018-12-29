<template>
    <div class="better-scroll">
        <div class="wrapper" ref="scroll">
            <ul class="content">
                <li v-for="item in list">
                    {{item}}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'

    export default {
        name: "betterScroll",
        data() {
            return {
                list: [],
                scroll: null,
            }
        },
        mounted() {
            this.initList();
            this.$nextTick(() => {
                this.initScroll();
            });
        },
        methods: {
            initList() {
                for (let i = 0; i < 100; i++) {
                    this.list.push(this.list.length + 1);
                }
            },
            initScroll() {
                this.scroll = new BScroll(this.$refs.scroll, {
                    // startY: -50,
                    scrollY: true,
                    // click: true,
                    mouseWheel: true,
                    scrollbar: {
                        fade: false,
                        interactive: true
                    },
                    dblclick: true,
                    probeType: 3
                });
                this.scroll.on('scrollStart', () => {
                    console.log('scrollStart')
                })

                this.scroll.on('scroll', (pos) => {
                    console.log('pos:', pos)
                })

                this.scroll.on('scrollEnd', () => {
                    console.log('scrollEnd')
                })
            }
        }
    }
</script>

<style scoped lang="scss">
    .better-scroll {
        height: 100vh;
        li {
            list-style-type: none;
            line-height: 1.6;
        }
        .wrapper {
            height: 100%;
        }
    }
</style>
