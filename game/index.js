const game = new Phaser.Game(480, 320, Phaser.AUTO, null, {preload: preload, create: create, update: update});
let sprite,
     platforms,
     playBackground = true,
     backgraundAudio,
     backgroundAudioImage,
     ScoreImage,
     killAudio,
     ScoreText,
     score = 0,
     select1,
     select2,
     select3,
     select4,
     select5,
     select6,
     select7,
     select8,
     select9,
    gran;
const gemMass = ['gem01', 'gem02', 'gem03', 'gem04', 'gem05', 'gem06', 'gem07'];

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


const changeSprite = {
    sprite1: null,
    sprite2: null
};


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
    game.load.image('bgscore', 'images/bg-score.png');
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
    killAudio = game.add.audio('kill');
    select1 = game.add.audio('select1');
    select2 = game.add.audio('select2');
    select3 = game.add.audio('select3');
    select4 = game.add.audio('select4');
    select5 = game.add.audio('select5');
    select6 = game.add.audio('select6');
    select7 = game.add.audio('select7');
    select8 = game.add.audio('select8');
    select9 = game.add.audio('select9');
    gran = game.add.sprite(0, 240, 'gran');
    gran.width = 800;
    gran.height = 3;
    gran.inputEnabled = true;
    //game.physics.enable(gran, Phaser.Physics.ARCADE);
   // gran.body.collideWorldBounds = true;
    //gran.body.velocity.set(0, 0);
    backgroundAudioImage = game.add.sprite( 400, 250, 'sfx');
    ScoreImage = game.add.sprite( 150, 250, 'bgscore');
    ScoreText = this.add.text(200, 280, score, { fontSize: '22px', fill: '#FFFFFF' });
    ScoreImage.width = 200;
    ScoreImage.height = 100;
    backgroundAudioImage.width = 50;
    backgroundAudioImage.height = 50;
    backgroundAudioImage.inputEnabled = true;
    backgroundAudioImage.events.onInputDown.add(StatePlayAudio, this);
 //   backgraundAudio.play();
    platforms = game.add.group();
    platforms.enableBody = true;

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            AddGem(i, j)
        }
    }

    console.log(platforms.children);
    // gemMass.map(gem => {
    //     DellGem(gem);
    // });
    // setTimeout(function () {
    //     gemMass.map(gem => {
    //         DellGemVertical(gem);
    //     });
    // }, 3000);

    // setTimeout(function () {
    //     gemMass.map(gem => {
    //         DellGemGorizontal(gem);
    //     });
    // }, 6000);


    gemMass.map(gem => {
        DellGemVertical(gem);
    });
    // gemMass.map(gem => {
    //     DellGemGorizontal(gem);
    // });
    //|| platforms.children[i].key === "gem03" && platforms.children[i + 10].key === "gem03"
}
function update() {
    game.physics.arcade.collide(gran, platforms.children);
    game.physics.arcade.collide(platforms.children, platforms.children);

    // gemMass.map(gem => {
    //     DellGemGorizontal(gem);
    // });


    // gemMass.map(gem => {
    //     DellGemVertical(gem);
    // });
    ChangePlase();
    // gemMass.map(gem => {
    //     DellGemVertical(gem);
    // });

//AutoplayMusic();



}

function listener (event) {
    addSprite(event)

}

function ChangePlase() {
   if (changeSprite.sprite1 !== null && changeSprite.sprite2 !== null){
       let num1 = platforms.children[changeSprite.sprite1];
       let num2 = platforms.children[changeSprite.sprite2];
       let x1, x2, y1, y2;
       x1 = num1.x;
       x2 = num2.x;
       y1 = num1.y;
       y2 = num2.y;
       if(Math.abs(x1 - x2) === 50 || Math.abs(y1 - y2) <= 25){
           if (x1 < x2) {
                platforms.children[changeSprite.sprite1] = num2;
                platforms.children[changeSprite.sprite2] = num1;
            //   for (;changeSprite.sprite1.x < x2;) {
                   platforms.children[changeSprite.sprite1].x = x1;
                   platforms.children[changeSprite.sprite2].x = x2;
             //  }
           }
           else
               if (x1 > x2) {
                   platforms.children[changeSprite.sprite1] = num2;
                   platforms.children[changeSprite.sprite2] = num1;
             //  for (;changeSprite.sprite1.x > x2;) {
                   platforms.children[changeSprite.sprite1].x = x1;
                   platforms.children[changeSprite.sprite2].x = x2;
             //  }
           }
           else
           if (y1 < y2) {
                platforms.children[changeSprite.sprite1] = num2;
                platforms.children[changeSprite.sprite2] = num1;
             //  for (;changeSprite.sprite1.y < y2;) {
                    platforms.children[changeSprite.sprite1].y = y1;
                    platforms.children[changeSprite.sprite2].y = y2;
              // }
           }
           else
               if (y1 > y2) {
                   platforms.children[changeSprite.sprite1] = num2;
                   platforms.children[changeSprite.sprite2] = num1;
            //   for (;changeSprite.sprite2.y > y1;) {
                   platforms.children[changeSprite.sprite1].y = y1;
                   platforms.children[changeSprite.sprite2].y = y2;
             //  }
           }
       }
       for (let key in changeSprite){
           changeSprite[key] = null;
       }
   }

}

function addSprite(sprite) {
    for (let i = 0; i < platforms.children.length; i++){
        if (platforms.children[i].x === sprite.x && platforms.children[i].y === sprite.y){
            if (changeSprite.sprite1 === null) {
                changeSprite.sprite1 = i
            } else
            if (changeSprite.sprite2 === null) {
                changeSprite.sprite2 = i
            }
        }
    }


    console.log(changeSprite)
}

function AutoplayMusic() {
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

function trueMassVertical(mass) {
   for (let i = 0; i < mass.length - 1; i++){
           if (mass[i] !== (mass[i + 1] - 1)){
               return false;
       }

   }
   return true;

}


function trueMassGorizontal(mass) {
    for (let i = 0; i < mass.length - 1; i++){
        if (mass[i] !== (mass[i + 1] - 10)){
            return false;
        }

    }
    return true;

}

function DellGemVertical(gem) {
        for (let i = 0; i < platforms.children.length; i++) {
            if ((i + 10) < platforms.children.length) {
                if (platforms.children[i].key === gem && platforms.children[i + 10].key === gem) {
                    let massGem = [];
                    for (let j = i; j < Math.ceil(i / 10) * 10; j++) {
                        if (platforms.children[j].key === gem) {
                            massGem.push(j);
                        } else {
                            break;
                        }
                    }
                    console.log(massGem);
                    if (massGem.length >= 3 && trueMassVertical(massGem)) {
                        console.log('delete');
                        ScoreSumm(massGem.length);
                      //  killAudio.play();
                        for (let del = 0; del < massGem.length; del++) {
                            console.log(gem);
                            let num = massGem[del];
                            platforms.children[num - del].destroy();
                        }
                        FallGem(massGem);
                    }
                }
            }
        }
}


function AddGem(i, j) {
    let num = getRandomInt(0, gemMass.length );
    let gem = platforms.create(i * 50, j *25, gemMass[num]);
    gem.width = 25;
    gem.height = 25;
    gem.inputEnabled = true;
   game.physics.enable(gem, Phaser.Physics.ARCADE);
   gem.body.collideWorldBounds = true;

    gem.body.velocity.set(0, 10);
    gem.events.onInputDown.add(listener, this);
}


function FallGem(y) {
  //  console.log(Math.max.apply(null, y));
    let min = Math.min.apply(null, y);
    let num = Math.max.apply(null, y);
    let zel, drob;
    if(y < 10){
        console.log(num)
    }else {
         zel = Math.trunc(num/10);
         drob = num - zel*10;
        console.log(zel, drob)
    }

    for (let i = 0;  i < 10; i++){
         AddGem(0, -75)
    }

   // platforms.children
}

function ScoreSumm(length) {
    switch (length) {
        case 3:
            score += 300;
            ScoreText.setText(score);
            // select1.play();
            break;
        case 4:
            score += 400;
            ScoreText.setText(score);
            //  select2.play();
            break;
        case 5:
            score += 500;
            ScoreText.setText(score);
            // select3.play();
            break;
        case 6:
            score += 600;
            ScoreText.setText(score);
            //select4.play();
            break;
        case 7:
            score += 700;
            ScoreText.setText(score);
            //  select5.play();
            break;
        case 8:
            score += 800;
            ScoreText.setText(score);
            //select6.play();
            break;
        case 9:
            score += 900;
            ScoreText.setText(score);
            //select7.play();
            break;
    }
}

    function DellGemGorizontal(gem) {
         for (let i = 0; i <( platforms.children.length - 10) ; i++) {
            if (i  <= platforms.children.length) {
                if (platforms.children[i].key === gem && platforms.children[i + 10].key === gem) {
                    let massGem = [];
                    for (let j = i; j < platforms.children.length ; ) {
                        if (platforms.children[j].key === gem) {
                            massGem.push(j);
                        } else {
                            break;
                        }
                        j = j + 10;
                    }
                    console.log(massGem);
                    console.log(trueMassGorizontal(massGem));
                    if (massGem.length >= 3 && trueMassGorizontal(massGem)) {
                        console.log('delete');
                        ScoreSumm(massGem.length);
                        //  killAudio.play();
                        for (let del = 0; del < massGem.length; del++) {
                            console.log(gem);
                            let num = massGem[del];
                            platforms.children[num - del].destroy();
                        }
                        FallGem(massGem);
                    }
                }
            }
         }

     }




