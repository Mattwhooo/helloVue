Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{todo.message}}</li>'
});

Vue.component('hero-list', {
    props: ['heroes'],
    template: '<ol><hero-list-item v-for="item in heroes" :hero="item" :key="item.id"></hero-list-item></ol>'
});

Vue.component('hero-list-item', {
    props: ['hero'],
    // template: '<li> <div class="well"><img :src="img_url">{{ hero.name }}</div><hero-bullets :bullets="hero.powers"</li>',
    template: '<li> <div class="well"><img :src="img_url">{{ hero.name }}<hero-power-bullets :bullets="hero.powers" ></hero-power-bullets><hero-weakness-bullets :bullets="hero.weaknesses" ></hero-weakness-bullets></div></li>',
    computed: {
        img_url: function(){ return gravatar(this.hero.name +'@' + this.hero.id + '.com', {size: 75, rating: "pg", backup: "monsterid", secure: true})}
    }
});

Vue.component('hero-power-bullets', {
    props: ['title', 'bullets'],
    template: '<div style="margin-left:30px;display:inline-block"><h3>Super Powers</h3><ul><li v-for="bullet in bullets" :key="bullet">{{ bullet }}</li></ul></div>'
});

Vue.component('hero-weakness-bullets', {
    props: ['title', 'bullets'],
    template: '<div style="margin-left:30px;display:inline-block"><h3>Weaknesses</h3><ul><li v-for="bullet in bullets" :key="bullet">{{ bullet }}</li></ul></div>'
});


heroes = [
    {id: 0, name: 'Superman', powers: ['X-Ray Vision', 'Flight', 'Super Strength'], weaknesses: ['Kryptonite']},
    {id: 1, name: 'Batman', powers: ['Rich', 'Cool Toys'], weaknesses: ['Parent Issues', 'Avoids Guns']}

];

document.addEventListener("DOMContentLoaded", function(event) {


    app = new Vue({
       el: '#vue',
       data: {
           heroList:  heroes,
           groceryList: [
               {id: 0, message: 'One'},
               {id: 1, message: 'Two'},
               {id: 3, message: 'Three'}
           ]
       }
   })
});