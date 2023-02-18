(function (Scratch){
    'use strict';
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
                        "opcode":"flip",
                        "blockType": "reporter",
                        "text":"flip sign of [VAL]",
                        "arguments":{
                            "VAL":{
                                "type":"number",
                                "defaultvalue": "10"
                            }
                        }
                    },
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
        flip(args){
            return 0 - args.VAL;
        evaluate(args){
            return eval(args.VAL);
        }
    }

    Scratch.extensions.register(new returnjs());
})(Scratch);
