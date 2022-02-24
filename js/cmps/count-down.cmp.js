export default {
    props:['futureTime'],
    template: `
        <div >
        <h1>Count Down</h1>                
        <p class="lead fs-1"><span>{{minutes}}</span>:<span v-bind:class="textRed">{{seconds}}</span></p>
        </div>
    `,
    data() {
        return {
            timeNow: Date.now(),
            minutes:'',
            seconds:'',
            leftTime:'',
            textRed:'',
            intervalSId:null,
            intervalMId:null,
            
            
        };
    },
    methods: {
        howMuchLeft(){
            this.leftTime = ((this.futureTime-this.timeNow)/1000)
            // console.log('leftTime', (this.leftTime).toFixed());
            // console.log('leftTimeS', (this.leftTime%60).toFixed());
            // console.log('leftTimeMathF', Math.round((this.leftTime/60)));
            if((this.leftTime).toFixed()>60){
                this.seconds = 60;
                this.minutes = Math.floor(((this.leftTime-60)/60))
            }else{
                this.seconds = Math.floor(this.leftTime)
            }
            // console.log('S',this.seconds);
            // console.log('M',this.minutes);
            if (!this.minutes) this.minutes = '00'
            else if (this.minutes<10) this.minutes = this.minutes
            if(!this.seconds) this.seconds = '00'
            else if(this.seconds<10) this.seconds = this.seconds

            // console.log('S after',this.seconds);
            // console.log('M after',this.minutes);
            

        },        
        
    },
    computed: {       
        getLeftTime(){
            return 44
        }
    },
    created() {
        this.howMuchLeft()
        this.intervalSId = setInterval(() => {
            this.seconds--  
            if(this.seconds<10){
                this.seconds = '0'+this.seconds
                this.textRed = 'text-danger'
            }
            if(!this.minutes||this.minutes==0&&this.seconds<10){
                this.textRed = 'text-danger'
                
            }
            if(!this.minutes||this.minutes==0&&this.seconds==0){
                // console.log('counter stoped');
                clearInterval(this.intervalSId)
                clearInterval(this.intervalMId)
                var audio = new Audio('audio/001.mp3')
                audio.play()
                this.$emit('due')

            }
        }, 1000);
        this.intervalMId = setInterval(() => {
            this.minutes--            
            if(!this.minutes||this.minutes==0&&this.seconds==0)         {
                clearInterval(this.intervalMId)
            }
            
        }, 60000);
    },
    ummounted(){
        
    }

};