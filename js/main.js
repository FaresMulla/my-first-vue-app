import showTimeCmp from './cmps/show-time.cmp.js';
import countDownCmp from './cmps/count-down.cmp.js';
import whoWatchCmp from './cmps/who-watch.cmp.js';

const options = {
    template: `
        <div class="text-center border border-warning">        
        <show-time></show-time>        
        </div>

        <hr class="m-5"/>

        <div class="text-center border border-primary">        
        <count-down v-bind:future-time="dateParent" v-on:due="endNotice"></count-down>        
        </div>

        <hr class="m-5"/>
        <div class="text-center border border-danger">        
        <who-watch></who-watch>
        </div>
        
    `,
    data() {
        return {
            dateParent: (Date.now()+1000*60), 
                                
        }

    },
    methods: {
        endNotice(){
            console.log('Time is done');
            
        }
        
    },
    computed: {
        getfutureTime(){
            //return this.dateParent.toLocaleTimeString('en-US')
        }
    }

};

const app = Vue.createApp(options);
app.component('show-time', showTimeCmp);
app.component('count-down', countDownCmp);
app.component('who-watch', whoWatchCmp);

app.mount('#app');