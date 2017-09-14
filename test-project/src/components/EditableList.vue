
<template>
    <div style="margin-left:30px;display:inline-block">
        <h3>{{ title }}</h3>
        <ul>
            <li v-for="(bullet, index) in bullets" :key="bullet">

                <editable :content="bullet" @update="bullet = $event"></editable>
                <span @click='editBullet(index)' class="glyphicon glyphicon-remove-circle"/>
            </li>
        </ul>
        <div class="input-group">
            <span class="input-group-addon" @click='addBullet'>
                +
            </span>

            <input class='form-control' :placeholder="placeholder" v-model="newBullet" v-on:keyup.enter="addBullet"/>
        </div>
    </div>
</template>

<script>

    import Editable from "./Editable.vue"
    export default {
        components: {Editable},
        props: ['title', 'bullets'],
        data: function(){
            return {newBullet: ''}
        },
        methods: {
            editBullet: function(index){
                this.bullets.splice(index, 1)
            },
            addBullet: function(){
                if (this.newBullet && this.newBullet != '' ){
                    this.bullets.push(this.newBullet);
                    this.newBullet = '';
                }
            }
        },
        computed: {
            placeholder: function(){
                return 'Add ' + this.title
            }
        }
    }
</script>

<style scoped>
    .glyphicon-remove-circle:hover{
        color: #ff3643;
        cursor: pointer;

    }
    .input-group-addon{
        font-weight: bolder;
    }
    .input-group-addon:hover{
        background-color: #61b36b;
        color: white;
        cursor: pointer;
    }
</style>
