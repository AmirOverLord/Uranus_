<template>
    <div class="rank content">
      <hr>
        <h1>أفضل اللاعبين </h1>
        <div class='tabs'>
          <input type='radio' id='r1' name='t' checked>
          <label for='r1'>مخدم 9.4</label>
            <div class='tab-content'>
              <top_player show="9.4"></top_player>
            </div>
          <input type='radio' id='r2' name='t'>
          <label for='r2'>مخدم 7.2</label>
              <div class='tab-content'>
                <top_player show="7.2"></top_player>
              </div>
          <div id='slider'></div>
        </div>
    </div>
</template>

<script>
   import top_player from '../utile/top_player'
    export default {
        name: "rank",
        components: {
          top_player
        }
    }
</script>

<style lang="css" scoped>
  .rank {
    height: 1100px;
  }

  .tabs {
    box-shadow: 0 2px 15px 2px #000;
    margin: 50px 0 0 289px;
    min-width: 106%;
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
    font-family: 'Lemonada', cursive;
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
    top: 42px;
    right: 0;
    left: 0;
    padding: 20px;
    display: none;
    border-radius: 4px;
    background-color: #211c1c;
  }

  #slider {
    background-color: transparent;
    position: absolute;
    border: 3px solid #ffcd81;
    border-radius: 15px;
    margin: 7px 10px;
    transition: transform 0.5s;
    width: 130px;
  }

  #slider:hover {
    border: 3px solid #db7831;
    border-radius: 24px;
  }

  [type=radio],#r1:checked ~ #slider {
    transform: translate(300px, 0px);
  }

  [type=radio],#r2:checked ~ #slider {
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
