(function (Scratch){
    'use strict';
    class returnjs {
        constructor() {
        }
    
        getInfo() {
            return {
                "id": "returnjs",
                "name": "returnjs",
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
                    }
                    {
                        "opcode":"evaluate",
                        "blockType": "reporter",
                        "text":"evaluate [VAL]",
                        "arguments":{
                            "value":{
                                "type":"string",
                                "defaultvalue": "5+5"
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
        evaluate(args){
            return eval(args.VAL);
        }
    }

    Scratch.extensions.register(new returnjs());
})(Scratch);
