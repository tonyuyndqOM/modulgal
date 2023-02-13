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
                "text":"pi"
                "arguments":{}
              }
            ]
        };
    }

    pi(){
      return(Math.PI)
    }
}

Scratch.extensions.register(new returnjs())
