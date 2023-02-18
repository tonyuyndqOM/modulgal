(function (Scratch){
    'use strict';
    var x = 0;
    
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
                        "opcode":"getx",
                        "blockType": "reporter",
                        "text":"x",
                        "arguments":{}
                    },
                    {
                        "opcode":"set",
                        "blockType": "command",
                        "text":"set x to [VAL]",
                        "arguments":{
                            "VAL":{
                                "type":"number",
                                "defaultvalue": "20"
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
                                "defaultvalue": ""
                            }
                        }
                    },
                    {
                        "opcode":"mixedfr",
                        "blockType":"reporter",
                        "text":"mixed fraction [WHOLE],[NUM] over [DEN]",
                        "arguments":{
                            "WHOLE":{
                                "type":"number",
                                "defaultvalue": "1"
                            }
                            "NUM":{
                                "type":"number",
                                "defaultvalue": "3"
                            }
                            "DEN":{
                                "type":"number",
                                "defaultvalue": "4"
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
        getx(){
            return x;
        }
        set(args){
            x = args.VAL;
        }
        evaluate(args){
            return eval(args.VAL);
        }
        mixedfr(args){
            return args.WHOLE + args.NUM / args.DEN;
        }
    }

    Scratch.extensions.register(new returnjs());
})(Scratch);
