export default {
    template: `
        <h1>who-watch</h1>
        <button class="btn btn-primary col-12" data-bs-toggle="modal" data-bs-target="#AddModal">Add New User</button>
        <div class="row">
            <div class="col-ms-6 col-md-4 col-xl-3 col-xxl-2" v-for="user in users">
                <div class="card">
                  <img v-bind:src="user.imgUrl" class="card-img-top" alt="..." v-on:click="openModalShows(user.id)" data-bs-toggle="modal" data-bs-target="#ShowsModal">
                  <div class="card-body">
                    <h5 class="card-title">{{user.name}}</h5>
                    <button class="btn btn-danger col-12" v-on:click="onRemoveUser(user.id)">Remove</button>                   
                  </div>
                </div>
            </div>
        </div>
        

        <div class="modal fade" id="ShowsModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-fullscreen">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title" id="exampleModalLabel">{{currUser.name}}</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                  <h1>My favorite series</h1>
                <h2 contenteditable="true" v-for="show in currUser.shows">{{show}}
                    <hr/>
                </h2>
                
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>                
                
              </div>
            </div>
          </div>
        </div>

        <div class="modal fade" id="AddModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-fullscreen">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title" id="exampleModalLabel">Add New User</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">                  
              <input type="text" class="form-control" v-model="newUserName">
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>                
                <button type="button" class="btn btn-primary" data-bs-dismiss="modal" v-on:click="addNewUser">Add</button>
              </div>
            </div>
          </div>
        </div>
    `,
    data() {
        return {
            users:[
                {
                    id:'m101',
                    name: 'Fares Mulla',
                    shows: ['The 100', 'SHERLOCK', 'CHILDREN of ADAM', 'VIKINGS'],
                    imgUrl: './img/001.JPG'
                },
                {
                    id:'m102',
                    name: 'Reem Saleh',
                    shows: ['The 100', 'SHERLOCK', 'CHILDREN of ADAM', 'VIKINGS'],
                    imgUrl: './img/002.JPG'
                },
                {
                    id:'m103',
                    name: 'Tawfiq Ibrahim',
                    shows: ['The 100', 'SHERLOCK', 'CHILDREN of ADAM', 'VIKINGS'],
                    imgUrl: './img/003.JPG'
                },
                {
                    id:'m104',
                    name: 'Shadi Moaddi',
                    shows: ['The 100', 'SHERLOCK', 'CHILDREN of ADAM', 'VIKINGS'],
                    imgUrl: './img/004.JPG'
                },
                {
                    id:'m105',
                    name: 'Janan Farhoud',
                    shows: ['The 100', 'SHERLOCK', 'CHILDREN of ADAM', 'VIKINGS'],
                    imgUrl: './img/005.JPG'
                }
            ],
            currUser:{},
            newUserName:''
        };
    },
    methods: {
        openModalShows(idx){
            // console.log('idx', idx);
            var myUser = this.users.find(user=>user.id===idx)
            // console.log('myUser', myUser);
            this.currUser = {
                id:myUser.id,
                name:myUser.name,
                imgUrl: myUser.imgUrl,
                shows: myUser.shows
            }
        },
        addNewUser(){
            var newUser ={
                id:'m'+(new Date().getTime()/10000000).toFixed(),
                name:this.newUserName,
                imgUrl: './img/001.JPG',
                shows: ['The 100', 'SHERLOCK', 'CHILDREN of ADAM', 'VIKINGS']
            }
            this.users.push(newUser)
            this.newUserName = ''
        },
        onRemoveUser(idx){
            var myUserIdx = this.users.findIndex(user=>user.id===idx)
            this.users.splice(myUserIdx,1)
        },
        // saveShows(idx){
        //     var myUserShows = this.users.find(user=>user.id===idx)
        //     console.log(myUserShows.shows);
        // }
    },
    computed: {
        

    },
    created() {
        
    },

};