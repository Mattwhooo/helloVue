
<template>
    <span contenteditable="true" @input="update"></span>
</template>

<script>
    export default {
        props: ['content'],
        mounted: function(){
            this.$el.innerText = this.content;
        },
        methods:{
            update:function(event){
                this.$emit('update',event.target.innerText);
            }
        }
    }
</script>

<style scoped>
    .glyphicon-remove-circle{
        color: grey;
        font-size: 1.5em;
    }
    .glyphicon-remove-circle:hover{
        color: #ff3643;
    }


</style>
