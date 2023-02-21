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
                                "defaultValue": "20"
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
                                "defaultValue": "5+5"
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
                                "defaultValue": "1"
                            },
                            "NUM":{
                                "type":"number",
                                "defaultValue": "3"
                            },
                            "DEN":{
                                "type":"number",
                                "defaultValue": "4"
                            }
                        }
                    },
                    {
                        "opcode":"power",
                        "blockType":"reporter",
                        "text":"[F]^[S]",
                        "arguments":{
                            "F":{
                                "type":"number",
                                "defaultValue": "2"
                            },
                            "S":{
                                "type":"number",
                                "defaultValue": "3"
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
        power(args){
            return args.F ** args.S;
        }
    }

    Scratch.extensions.register(new returnjs());
})(Scratch);
/**/
