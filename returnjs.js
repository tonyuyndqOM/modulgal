(function (Scratch){
    'use strict';
    x = 0;
    
    class returnjs {
        constructor() {
        }
    
        getInfo() {
            return {
                color1: "#44A9FF",
                color2: "#44A9FF",
                "id": "returnjs",
                "name": "returnjs",
                "description":"a very normal extension",
                "blocks": [
                    {
                        "opcode":"pi",
                        "blockType": "reporter",
                        "text":"pi",
                        "arguments":{}
                    },
                    {
                        "opcode":"e",
                        "blockType": "reporter",
                        "text":"e",
                        "arguments":{}
                    },
                    {
                        "opcode":"x",
                        "blockType": "reporter",
                        "text":"x",
                        "arguments":{}
                    }
                    {
                        "opcode":"evaluate",
                        "blockType": "reporter",
                        "text":"evaluate [VAL]",
                        "arguments":{
                            "VAL":{
                                "type":"string",
                                "defaultvalue": "10"
                            }
                        }
                    }
                ]
            };
        }

        pi(){
            return Math.PI;
        }
        e(){
            return Math.E;
        }
        x(){
            return x;
        }
        evaluate(args){
            return eval(args.VAL);
        }
    }

    Scratch.extensions.register(new returnjs());
})(Scratch);
