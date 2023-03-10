(function (Scratch){
    'use strict';
    class sum {
        constructor() {
        }
    
        getInfo() {
            return {
                color1: "#44A9FF",
                color2: "#44A9FF",
                "id": "sum",
                "name": "sum",
                "description":"a very normal extension",
                "blocks": [
                    {
                        "opcode":"sum",
                        "blockType": "reporter",
                        "text":"Σ from x: [X] to x: [Y] add [Z]",
                        "arguments":{
                          "X":{
                            "type":"number",
                            "defaultValue": "0"
                          },
                          "Y":{
                            "type":"number",
                            "defaultValue": "10"
                          },
                          "Z":{
                            "type":"string",
                            "defaultValue":"x"
                        }
                    }
                ]
            };
        }

        sum(args){
          var a = 0;
          for(let x=args.X,x<=args.Y,x++){
            a+=eval(args.Z);
          }
          return a;
        }
    }

    Scratch.extensions.register(new sum());
})(Scratch);
/**/
