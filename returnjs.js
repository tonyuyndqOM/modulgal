(function (Scratch){
    'use strict';
    class returnjs {
        constructor() {
        }
    
        getInfo() {
            return {
                "id": "returnjs",
                "name": "returnjs",
                "color1": "#aa1111",
                "color2": "#aa1111",
                "color3": "#aa1111",
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
                        "text":"evaluate [value]",
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
        evaluate({value}){
            return eval(value);
        }
    }

    Scratch.extensions.register(new returnjs());
})(Scratch);
