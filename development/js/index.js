// When the Vue fails to load, this is one of the hack to make it work.
// The issue was, the Vue instance was getting executed before the DOM rendered.
// Hence we fixed it with the onload event to make sure tha the DOM is loaded
/*window.onload = function() {
	var welcome = new Vue({
		el  : '#welcome',
		data : {
			message : "Welcome to Vue"
		}
	})
}*/
Vue.component('getnames',{
	props : ['name'],
	template : '<div> {{name.title}} </div>'
});
var sample = Vue.component('sample', {
	props : ['text'],
	template : '<div class="textMessage"> {{text}} </div>'
});
var welcome = new Vue({
	el : '#welcome',
	//components: {sample: sample},
	data : {
		message : "About us",
		count : 0,
		pageContent : {
			aboutUs : "We are real time testing unit with the world best entity all around the globe"
		},
		rawHTML : '<h1> TESTING </h1>'
	},
	created : function() {
		console.log('This is the create class' + this.message);
	},
	beforeCreate : function() {
		console.log('This is called before creating the instance, lets see whether message is availbe' + this.message);
	},
	beforeMount : function() {
		console.log('Before mount is getting called' + this.message);
	},
	mounted : function() {
		console.log('Mounted is getting called' + this.message);
	},
	beforeUpdate : function() {
		console.log('Before update is getting called' + this.message);
	},
	updated : function() {
		console.log('Updated is getting called' + this.message);
	},
	beforeDestroy : function() {
		console.log('beforeDestroy is getting called' + this.message)
	},
	destroyed: function() {
		console.log('Destroyed is getting called' + this.message)
	},
	computed : {
		reverseMessage : function() {
			return this.message.split(' ').reverse().join(' ');
		}
	}
})
