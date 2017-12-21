Vue.component('toggle-btn',{
    template:
    `
    <button class="btn btn-info" @click="emmitToggle">
    Toggle Box</button>
    `,
    methods: {
        emmitToggle(){
            this.$emit('toggle-box')
        }
    }
})
var app = new Vue({
    el:'#app',
    data:{
        showBox:true
    },
    methods:{
        toggleBox:function(){
            this.showBox=!this.showBox
        }
    }
})