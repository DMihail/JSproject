window.onload = function () {
    function DCanvas(el)
    {
        const ctx = el.getContext('2d');
        const pixel = 10;

        let is_mouse_down = false;

        can.width = 300;
        can.height = 300;

        this.drawLine = function(x1, y1, x2, y2, color = 'gray') {
            ctx.beginPath();
            ctx.strokeStyle = color;
            ctx.lineJoin = 'miter';
            ctx.lineWidth = 1;
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.stroke();
        };

        this.drawCell = function(x, y, w, h) {
            ctx.fillStyle = 'blue';
            ctx.strokeStyle = 'blue';
            ctx.lineJoin = 'miter';
            ctx.lineWidth = 1;
            ctx.rect(x, y, w, h);
            ctx.fill();
        };

        this.clear = function() {
            ctx.clearRect(0, 0, can.width, can.height);
        };

        this.drawGrid = function() {
            const w = can.width;
            const h = can.height;
            const p = w / pixel;

            const xStep = w / p;
            const yStep = h / p;

            for( let x = 0; x < w; x += xStep )
            {
                this.drawLine(x, 0, x, h);
            }

            for( let y = 0; y < h; y += yStep )
            {
                this.drawLine(0, y, w, y);
            }
        };

        this.calculate = function(draw = false) {
            const w = can.width;
            const h = can.height;
            const p = w / pixel;

            const xStep = w / p;
            const yStep = h / p;

            const vector = [];
            let __draw = [];

            for( let x = 0; x < w; x += xStep )
            {
                for( let y = 0; y < h; y += yStep )
                {
                    const data = ctx.getImageData(x, y, xStep, yStep);

                    let nonEmptyPixelsCount = 0;
                    for( let i = 0; i < data.data.length; i += 10 )
                    {
                        const isEmpty = data.data[i] === 0;

                        if( !isEmpty )
                        {
                            nonEmptyPixelsCount += 1;
                        }
                    }

                    if( nonEmptyPixelsCount > 1 && draw )
                    {
                        __draw.push([x, y, xStep, yStep]);
                    }

                    vector.push(nonEmptyPixelsCount > 1 ? 1 : 0);
                }
            }

            if( draw )
            {
                this.clear();
                this.drawGrid();

                for(let _d in __draw )
                {
                    this.drawCell( __draw[_d][0], __draw[_d][1], __draw[_d][2], __draw[_d][3] );
                }
            }

            return vector;
        };

        el.addEventListener('mousedown', function(e) {
            is_mouse_down = true;
            ctx.beginPath();
        });

        el.addEventListener('mouseup', function(e) {
            is_mouse_down = false;
        });

        el.addEventListener('mousemove', function(e) {
            if( is_mouse_down )
            {
                ctx.fillStyle = 'blue';
                ctx.strokeStyle = 'blue';
                ctx.lineWidth = pixel;

                ctx.lineTo(e.offsetX, e.offsetY);
                ctx.stroke();

                ctx.beginPath();
                ctx.arc(e.offsetX, e.offsetY, pixel / 2, 0, Math.PI * 2);
                ctx.fill();

                ctx.beginPath();
                ctx.moveTo(e.offsetX, e.offsetY);
            }
        })
    }
    const M = document.getElementById('M');
    const V = document.getElementById('V');
    const img = document.getElementById('img');
    const clean = document.getElementById('clean');
    const output = document.getElementById('output');

    let vector = [];
    let net = null;
    let train_data = [];
    const d = new DCanvas(document.getElementById('can'));
    M.addEventListener('click', LM);
    V.addEventListener('click', LV);
    clean.addEventListener('click', clear);
    output.addEventListener('click', res);
    function LM(){
        vector = d.calculate(true);

            train_data.push({
                input: vector,
                output: {M: 1}
            });
            console.log('M');
    }
    function LV(){
        vector = d.calculate(true);

        train_data.push({
            input: vector,
            output: {V: 1}
        });
        console.log('V');
    }

    function clear(){
        d.clear();
        img.src = 'img/rect.jpg'
    }

    function res(){
        net = new brain.NeuralNetwork();
        net.train(train_data, {log: true});

        const result = brain.likely(d.calculate(), net);
        if (result == "M") {
            img.src = 'img/m.png'
        } else {
            img.src = 'img/d.jpg'
        }

    }
    document.addEventListener('keypress', function(e) {
        if( e.key.toLowerCase() == 'c' )
        {
            d.clear();

        }

        if( e.key.toLowerCase() == 'v' )
        {
            vector = d.calculate(true);

            //train
            if( confirm('Positive?') )
            {
                train_data.push({
                    input: vector,
                    output: {positive: 1}
                });
            } else
            {
                train_data.push({
                    input: vector,
                    output: {negative: 1}
                });
            }
        }

        if( e.key.toLowerCase() == 'b' )
        {
            net = new brain.NeuralNetwork();
            net.train(train_data, {log: true});

            const result = brain.likely(d.calculate(), net);
            alert(result);
        }
    });
};
