<template>
    <cube-form :model="model" @validate="validateHandler" :options="options" @submit="submitHandler">
        <cube-form-item :field="fields[0]"></cube-form-item>
        <cube-button type="submit">Submit</cube-button>
    </cube-form>
</template>

<script type="text/ecmascript-6">
    export default {
        data() {
            return {
                model: {
                    inputValue: ''
                },
                valid: undefined,
                fields: [
                    {
                        type: 'input',
                        modelKey: 'inputValue',
                        label: 'Input',
                        props: {
                            placeholder: '请输入'
                        },
                        rules: {
                            required: true
                        },
                        messages: {
                            required: 'Please check this field'
                        }
                    },
                ],
                options: {
                    scrollToInvalidField: true,
                    layout: 'classic' // standard fresh
                }
            }
        },
        methods: {
            submitHandler() {

            },
            validateHandler(result) {
                this.validity = result.validity
                this.valid = result.valid
                // console.log('validity', result.validity, result.valid, result.dirty, result.firstInvalidFieldIndex)
            },
        }
    }
</script>
