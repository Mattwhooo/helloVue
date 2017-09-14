
<template>
    <div class="well container-fluid">
        <div @click='removeHero' class="pull-right btn btn-sm btn-secondary">
            <span data-toggle="tooltip" title="Remove Hero" class="glyphicon glyphicon glyphicon-remove-circle" />
        </div>

        <div class="col-sm-3">
            <h1>
                <img :src="img_url">
                {{ hero.name }}
            </h1>
        </div>

        <editable-list class="col-sm-3" :title="'Super Powers'" :bullets="hero.powers" ></editable-list>
        <editable-list class="col-sm-3" :title="'Weaknesses'" :bullets="hero.weaknesses" ></editable-list>
    </div>
</template>

<script>
    import EditableList from './EditableList.vue'
    export default {
        components: {EditableList},
        props: ['hero'],
        computed: {
            img_url: function(){ return gravatar(this.hero.name +'@' + this.hero.id + '.com', {size: 75, rating: "pg", backup: "monsterid", secure: true})}
        },
        methods: {
            removeHero: function(){
                this.$emit('content-hero-remove', this.hero.id);
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