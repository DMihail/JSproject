const game = new Phaser.Game(480, 320, Phaser.AUTO, null, {preload: preload, create: create, update: update});
let sprite;
let platforms;
let backgraund;
let playBackground = true;
let backgraundAudio;
let backgroundAudioImage;
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


const changeSprite = {
    sprite1: null,
    sprite2: null
};

const gemMass = ['gem01', 'gem02', 'gem03', 'gem04', 'gem05', 'gem06', 'gem07'];
function preload() {
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;
    game.stage.backgroundColor = '#eee';
    game.load.audio('background', ['audio/background.mp3']);
    game.load.audio('kill', ['audio/kill.mp3']);
    game.load.audio('select1', ['audio/select-1.mp3']);
    game.load.audio('select2', ['audio/select-2.mp3']);
    game.load.audio('select3', ['audio/select-3.mp3']);
    game.load.audio('select4', ['audio/select-4.mp3']);
    game.load.audio('select5', ['audio/select-5.mp3']);
    game.load.audio('select6', ['audio/select-6.mp3']);
    game.load.audio('select7', ['audio/select-7.mp3']);
    game.load.audio('select8', ['audio/select-8.mp3']);
    game.load.audio('select9', ['audio/select-9.mp3']);
    game.load.image('fon', 'images/backgrounds/background.jpg');
    game.load.image('donut', 'images/donut.png');
    game.load.image('gem01', 'images/game/gem-01.png');
    game.load.image('gem02', 'images/game/gem-02.png');
    game.load.image('gem03', 'images/game/gem-03.png');
    game.load.image('gem04', 'images/game/gem-04.png');
    game.load.image('gem05', 'images/game/gem-05.png');
    game.load.image('gem06', 'images/game/gem-06.png');
    game.load.image('gem07', 'images/game/gem-07.png');
    game.load.image('gem08', 'images/game/gem-08.png');
    game.load.image('gem09', 'images/game/gem-09.png');
    game.load.image('gem10', 'images/game/gem-10.png');
    game.load.image('gem11', 'images/game/gem-11.png');
    game.load.image('gem12', 'images/game/gem-12.png');
    game.load.image('hand', 'images/game/hand.png');
    game.load.image('shadow', 'images/game/shadow.png');
    game.load.image('particle1', 'images/particles/particle-1.png');
    game.load.image('particle2', 'images/particles/particle-2.png');
    game.load.image('particle3', 'images/particles/particle-3.png');
    game.load.image('particle4', 'images/particles/particle-4.png');
    game.load.image('particle5', 'images/particles/particle-5.png');
    game.load.image('particleEx1', 'images/particles/particle_ex1.png');
    game.load.image('particleEx2', 'images/particles/particle_ex2.png');
    game.load.image('particleEx3', 'images/particles/particle_ex3.png');
    game.load.image('bgscore', 'images/bg_score.png');
    game.load.image('bigshadow', 'images/big-shadow.png');
    game.load.image('play', 'images/btn-play.png');
    game.load.image('sfx', 'images/btn-sfx.png');
    game.load.image('logoDonuts', 'images/donuts_logo.png');
    game.load.image('timeup', 'images/text-timeup.png');
}
function create() {
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.add.sprite(0, 0, 'fon');
    backgraundAudio = game.add.audio('background');
    backgroundAudioImage = game.add.sprite( 400, 250, 'sfx');
    backgroundAudioImage.width = 50;
    backgroundAudioImage.height = 50;
    backgroundAudioImage.inputEnabled = true;
    backgroundAudioImage.events.onInputDown.add(StatePlayAudio, this);
 //   backgraundAudio.play();
    platforms = game.add.group();
    platforms.enableBody = true;

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            let num = getRandomInt(0, gemMass.length );
            let gem = platforms.create(i * 50, j *25, gemMass[num]);
            gem.width = 25;
            gem.height = 25;
            gem.inputEnabled = true;
            //gem.key  = `${i},${j}`;
            //gem.frame = gemMass[num];
            gem.events.onInputDown.add(listener, this);
        }
    }
    //|| platforms.children[i].key === "gem03" && platforms.children[i + 10].key === "gem03"
    // console.log(platforms.children)
    for (let i = 0; i < platforms.children.length; i++){
        if (platforms.children[i].key === "gem03"  && platforms.children[i + 1].key === "gem03" ){

            let massGem = [];
            for (let j = i; j <  Math.ceil(i/ 10) * 10 ; j++){
                  if (platforms.children[j].key === "gem03"){
                      massGem.push(j);
                  }
                  else {
                      break;
                  }
            }
            console.log(massGem);
            //console.log(trueMass(massGem));
            if (massGem.length >= 3 && trueMass(massGem)){
                console.log('delete');
                for (let del = 0 ; del < massGem.length; del++){
                    let num = massGem[del];
                    platforms.children[num - del].destroy();
                    // console.log(platforms.children)
                }
            }
        //   platforms.children[i].visible = false;
         //    //platforms.children[i + 1].visible = true;
         //      platforms.children[i].destroy();
         //    platforms.children[i + 1].destroy();


         }
            // else {
        //     platforms.children[i].visible = false;
        // }
    }

}
function update() {

//AutoplayMusic();
   //ChangePlase()

}

function listener (event) {
// event.x += 30;
    addSprite(event)
}

function ChangePlase() {
   if (changeSprite.sprite1 !== null && changeSprite.sprite2 !== null){
       let x1, x2, y1, y2;
       x1 = changeSprite.sprite1.x;
       x2 = changeSprite.sprite2.x;
       y1 = changeSprite.sprite1.y;
       y2 = changeSprite.sprite2.y;
       if(Math.abs(x1 - x2) === 50 || Math.abs(y1 - y2) === 25){
           if (x1 < x2) {
               for (;changeSprite.sprite1.x < x2;) {
                   changeSprite.sprite1.x += 1;
                   changeSprite.sprite2.x -= 1;
               }
           }
           else
               if (x1 > x2) {
               for (;changeSprite.sprite1.x > x2;) {
                   changeSprite.sprite1.x -= 1;
                   changeSprite.sprite2.x += 1;
               }
           }
           else
           if (y1 < y2) {
               for (;changeSprite.sprite1.y < y2;) {
                   changeSprite.sprite1.y += 1;
                   changeSprite.sprite2.y -= 1;
               }
           }
           else
               if (y1 > y2) {
               for (;changeSprite.sprite2.y > y1;) {
                   changeSprite.sprite1.y -= 1;
                   changeSprite.sprite2.y += 1;
               }
           }

           // changeSprite.sprite2.x = x1;
           // changeSprite.sprite1.x = x2;
           // changeSprite.sprite2.y = y1;
           // changeSprite.sprite1.y = y2;
       }
       for (let key in changeSprite){
           changeSprite[key] = null;
       }
       // ChangePlase(sprite);
   }

}

function addSprite(sprite) {
    if (changeSprite.sprite1 === null) {
        changeSprite.sprite1 = sprite
    } else
    if (changeSprite.sprite2 === null) {
        changeSprite.sprite2 = sprite
    }

    console.log(changeSprite)
}

function AutoplayMusic() {
    console.log(playBackground)
    if (playBackground) {
        if (!backgraundAudio.isPlaying) {
            backgraundAudio.play();
        }
    }else {
        if (backgraundAudio.isPlaying) {
            backgraundAudio.pause();
        }
    }
}

function StatePlayAudio(event) {
    playBackground = !playBackground;
    console.log(playBackground)
}

function trueMass(mass) {
   for (let i = 0; i < mass.length - 1; i++){
           if (mass[i] !== (mass[i + 1] - 1)){
               return false;
       }

   }
   return true;

}

//console.log(trueMass([1,2,3,4,5]));
// console.log(3 === (4 - 1));
// console.log(trueMass([1,2,3,4,5]));
// // console.log(trueMass([23, 24, 25]));
// // console.log(trueMass([1, 2, 3, 4,5, 6]));