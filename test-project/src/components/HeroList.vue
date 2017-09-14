
<template>
    <div class="app-container">
        <hero-list-item v-for="item in heroes" :hero="item" :key="item.id" v-on:content-hero-remove="removeHero" />
        <div @click='newHero' class="btn btn-primary"><span class="glyphicon glyphicon-plus"/>Add Hero

        </div>
        <input v-model="newHeroName"  v-on:keyup.enter="newHero" placeholder="Hero Name">
    </div>
</template>

<script>
    import HeroListItem from './HeroListItem.vue'
    export default {
        components: {HeroListItem},
        props: ['heroes'],
        methods: {
            newHero: function() {
                if (this.newHeroName && this.newHeroName != ''){
                    this.heroes.push({name: this.newHeroName, powers: [], weaknesses: []})
                    this.newHeroName = '';
                }
            },
            removeHero: function(id){
                this.heroes.splice(this.heroes.findIndex(x => x.id === id), 1);
            }
        },
        data: function(){
            return {newHeroName: ''}
        }
    }
</script>

<style scoped>
    .app-container{

        padding: 10px;
        margin: 20px;
    }
</style>