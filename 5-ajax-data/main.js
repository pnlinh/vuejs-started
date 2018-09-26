const app = new Vue({
    el: '#app',
    data: {
        friends: []
    },
    mounted() {
        fetch('http://rest.learncode.academy/api/someuser/friends')
            .then(res => res.json())
            .then(data => {
                this.friends = data
            })
    },
    template: `
            <div>
              <li v-for="friend in friends" v-text="friend.name"></li>
            </div>
  `
});