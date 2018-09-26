const app = new Vue({
    el: '#app',
    data: {
        editFriend: null,
        friends: [
            {
                name: 'Lịnh'
            },
            {
                name: 'Mỹ'
            }
        ]
    },
    methods: {
        deleteFriend(id, i) {
            // fetch(`http://rest.learncode.academy/api/vue-5/friends/${id}`, {
            //     method: 'DELETE'
            // }).then(() => console.log('Deleted !!!'))

            this.friends.splice(i, 1);
            console.log('Deleted');
        },
        updateFriend(friend) {
            fetch(`http://rest.learncode.academy/api/vue-5/friends/${friend.id}`, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(friend)
            }).then(() => this.editFriend = null);
        }
    },
    mounted() {
        // fetch('http://rest.learncode.academy/api/someuser/friends')
        //     .then(res => res.json())
        //     .then(data => {
        //         this.friends = data
        //     })
    },
    template: `
            <div>
                <li v-for="friend, i in friends">
                    <div v-if="editFriend === friend.id">
                        <input type="text" v-model="friend.name" v-on:keyup.13="updateFriend(friend)">
                        <button v-on:click="updateFriend(friend)">Update</button>
                    </div>
                    
                    <div v-else>
                        <button style="color: red" v-on:click="editFriend = friend.id">Edit</button> 
                        <button style="color: red" v-on:click="deleteFriend(friend.id, i)">Delete</button> 
                    </div>
                    
                    {{ friend.name }}
                </li>
            </div>
  `
});