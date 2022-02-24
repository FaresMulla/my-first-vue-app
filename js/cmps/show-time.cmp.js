export default {
    template: `
        <div v-bind:class="getClass" v-on:click="statusBGC">
        <h1>show time</h1>
        <img v-bind:src="relevantImg" alt="">        
        <p class="lead fs-1">{{myClock}}</p>
        <p class="lead fs-1">{{witherName}}</p>
        </div>
    `,
    data() {
        return {
            date: new Date(),
            myClock:'',            
            relevantImg: '',
            witherName:'',
            isDark: false, 

        };
    },
    methods: {
        knowWither() {
            
            switch (this.date.getMonth()+1) {
                case 12:
                case 1:
                case 2:
                    this.relevantImg = './img/winter.png';
                    this.witherName='Winter';
                    break;
                    case 3:
                    case 4:
                    case 5: 
                    this.relevantImg = './img/spring.png';
                    this.witherName='Spring'
                    break;
                case 6:
                case 7:
                case 8:
                    this.relevantImg = './img/summer.png';
                    this.witherName='Summer'
                    break;
                case 9:
                case 10: 
                case 11:
                    this.relevantImg = './img/winter.png';
                    this.witherName='Autumn'
                    break;

                default:
                    break;
            }                     
        },
        showClock(){
            this.myClock = (this.date).toLocaleTimeString('en-US') 
            
        },
        updateClock(){
            this.date= new Date();            
        },
        checkLength(val){
            var newVal = val
            (String(val).length===1)? newVal = '0'+val : newVal
            return newVal
        },
        statusBGC(){
            this.isDark = !this.isDark 
        },
    },
    computed: {
        getClass(){
            return { "bg-light text-dark" : !this.isDark ,"bg-dark text-white": this.isDark}
        }

    },
    created() {
        this.showClock()
        this.knowWither();        
        setInterval(() => {
            this.showClock();
            this.updateClock();
            
        }, 1000);
    },

};