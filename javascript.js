(function (Scratch){
    'use strict';
    class everything {
        constructor() {
        }
    
        getInfo() {
            return {
                color1: "#44A9FF",
                color2: "#44A9FF",
                "id": "everything",
                "name": "javascript everything",
                "description":"a very normal extension",
                "blocks": [
                  {
                        "opcode":"run",
                        "blockType":"stack",
                        "text":"run command [C] in javascript",
                        "arguments":{
                            "C":{
                                "type":"string",
                                "defaultValue": "alert('hello world')"
                            }
                        }
                    }
                ]
            };
        }

        run(args){
            eval(args.C)
        }
    }

    Scratch.extensions.register(new everything());
})(Scratch);
/**/
