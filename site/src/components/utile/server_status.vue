<template>
  <div class="server-status">
    <h3> إحصائيات السيرفر : </h3><br>
    <div class="sb_line"></div>
    <div class='tabs'>
      <input type='radio' id='status1' name='status' checked>
      <label for='status1'>مخدم 9.4</label>
      <div class='tab-content'>
        <div class="stats">
          <div><p> الحالة :
            <span v-show="server94.status" class="text-green">يعمل</span>
            <span v-show="!server94.status" class="text-red">لايعمل</span>
          </p></div>
        </div>
        <div class="stats">
          <div><p> عدد المتصلين :
            <span class="text-green">{{server94.count.online}}</span>
          </p></div>
        </div>
        <div class="stats">
          <div><p>عدد الحسابات :
            <span class="text-green">{{server94.count.account}}</span>
          </p> </div>
        </div>
        <div class="stats">
          <div><p>عدد الشخصيات :
            <span class="text-green">{{server94.count.player}}</span>
          </p> </div>
        </div>
        <div class="stats">
          <div><p>الخبرة :
            <span class="text-green">{{server94.exp}}</span>
          </p></div>
        </div>
        <div class="stats">
          <div><p>اعلي لفل :
            <span class="text-green">{{server94.maxLevel}}</span>
          </p></div>
        </div>
        <div class="stats">
          <div><p>الترويض :
            <span class="text-green">{{server94.taming}}</span>
          </p></div>
        </div>
        <div class="stats">
          <div><p>التطوير :
            <span class="text-green">{{server94.enhance}}</span>
          </p></div>
        </div>
      </div>
      <input type='radio' id='status2' name='status'>
      <label for='status2'>مخدم 7.2</label>
      <div class='tab-content'>
          <div class="stats">
            <div><p> الحالة :
              <span v-show="server72.status" class="text-green">يعمل</span>
              <span v-show="!server72.status" class="text-red">لايعمل</span>
            </p></div>
          </div>
          <div class="stats">
            <div><p> عدد المتصلين :
              <span class="text-green">{{server72.count.online}}</span>
            </p></div>
          </div>
          <div class="stats">
            <div><p>عدد الحسابات :
              <span class="text-green">{{server72.count.account}}</span>
            </p> </div>
          </div>
          <div class="stats">
            <div><p>
              عدد الشخصيات : <span class="text-green">{{server72.count.player}}</span>
            </p> </div>
          </div>
          <div class="stats">
            <div><p>الخبرة :
              <span class="text-green">{{server72.exp}}</span>
            </p></div>
          </div>
          <div class="stats">
            <div><p>
              اعلي لفل : <span class="text-green">{{server72.maxLevel}}</span>
            </p></div>
          </div>
          <div class="stats">
            <div><p>الترويض :
              <span class="text-green">{{server72.taming}}</span>
            </p></div>
          </div>
          <div class="stats">
            <div><p>
              التطوير : <span class="text-green">{{server72.enhance}}</span>
            </p></div>
          </div>
      </div>
      <div id='slider'></div>
    </div>
  </div>
</template>

<script>
   import Account from '../../api/Account'
   import Character from '../../api/Character'
   import Status from '../../api/ServerStatus'

    export default {
        name: "server_status",
        data() {
          return {
            server94: {
               status: true,
               count: {
                 online: 0,
                 player: 0,
                 account: 0
               },
              exp: '300%',
              taming: '80%',
              enhance: '65%',
              maxLevel: 200
            },
            server72: {
              status: false,
              count: {
                online: 0,
                player: 0,
                account: 0
              },
              exp: '50%',
              taming: '35%',
              enhance: '35%',
              maxLevel: 160
            },
          }
        },
       methods: {
         getAccountData() {
           Account.count()
             .then(({server72,server94}) => {
               this.server72.count.account = server72;
               this.server94.count.account = server94;
             })
             .catch(() => {
				//this.getAccountData()
			 })
         },
         getCharacterData() {
            Character.count()
             .then(({server72,server94}) => {
               this.server72.count.player = server72.player;
               this.server72.count.online = server72.online;
               this.server94.count.player = server94.player;
               this.server94.count.online = server94.online;
             })
              .catch(() => {
				  //this.getCharacterData()
			  })
         },
         getPortStatus() {

           Status.getStatus()
             .then(({server72,server94}) => {
                this.server94.status = server94.Game.status;
                this.server72.status = server72.Game.status;
             })
             .catch((error) =>{
               //console.log(error);
             });
         }
       },
      created() {
        this.getAccountData();
        this.getCharacterData();
        this.getPortStatus();
      },
       computed: {
      },
    }
</script>

<style lang="css" scoped>
  .server-status {
    margin-bottom: 124px;
  }

  .text-red {
    color: red;
  }
  .text-green {
    color: green;
  }

  .sb_box p {
    text-align-last: start;
    direction: rtl;
  }

  .sb_box h3 {
    word-spacing: 4px;
    text-align: start;
    direction: rtl;
  }

  .sb_line {
  }

  .tabs {
    margin: 42px 0 40px 153px;
    min-width: 112%;
    direction: rtl;
    border-radius: 8px;
    transform: translate(-50%, -50%);
  }

  label, #slider {
    display: inline-block;
    font-weight: bold;
    text-align: center;
    width: 147px;
    height: auto;
    padding: 20px 0;
    color: #9c8a70;
    font-size: 16px;
  }

  label:hover {
    color: #ffcd81;
    cursor: pointer;
  }

  .tabs [type=radio] {
    display: none;
  }

  .tab-content {
    position: absolute;
    top: 50px;
    right: 0;
    left: 0;
    padding: 20px;
    display: none;
    border-radius: 4px;
    direction: ltr;
  }

  #slider {
    background-color: transparent;
    position: absolute;
    border: 3px solid #ffcd81;
    border-radius: 15px;
    margin: 13px 10px;
    transition: transform 0.5s;
    width: 130px;
  }

  #slider:hover {
    border: 3px solid #db7831;
    border-radius: 24px;
  }

  [type=radio],#status1:checked ~ #slider {
    transform: translate(300px, 0px);
  }

  [type=radio],#status2:checked ~ #slider {
    transform: translate(150px, 0px);
  }

  [type=radio]:checked + label {
    color: #ffcd81;
  }

  [type=radio]:checked:hover + label {
    color: #db7831;
  }

  [type=radio]:checked + label + .tab-content {
    display: inline-block;
  }
</style>

