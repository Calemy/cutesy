const fs = require('fs');
module.exports = class {
    constructor(){
        this.color = 0
        this.extra = 0
        this.time = ""
        this.message = ""
        this.tag = ""
        this.colors = []
        this.messages = []
        this.format = ""
    }

    addTimestamp(format){
        const d = new Date();
        const h = d.getHours() < 10 ? '0' + d.getHours() : d.getHours();
        const m = d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes();
        const s = d.getSeconds() < 10 ? '0' + d.getSeconds() : d.getSeconds();

        if(format == "hh:mm:ss"){
            this.time = `${h}:${m}:${s} - `
            this.format = format
        }

        if(format == "hh:mm"){
            this.time = `${h}:${m} - `
            this.format = format
        }

        if(format == "mm:ss"){
            this.time = `${m}:${s} - `
            this.format = format
        }

        return this
    }

    sendTraced(message, nesting){
        const n = nesting || 2
        const Object = {};
        try {
            Object.debug();
        } catch(ex) {
            const trace = ex.stack?.split("\n", n + 1)[n]?.split("(")[1]?.split(")")[0]
            if(!trace) return this.sendTraced(n-1)
            if(message == "" || !message) return this.send(" |-> " + trace, true)
            return this.send(message + " |-> " + trace, true)
        }
    }

    changeColor(code, message){
        this.color = code

        if(!message) return this

        this.colors.push(code)
        this.messages.push(message)
        return this
    }

    changeFont(code){
        this.extra = code
        return this
    }

    changeTag(tag){
        if(tag) this.tag = `[${tag}] | `
        return this
    }

    save(path, message){
        if(message) this.message = message
        if(this.message == "") return this

        let content;

        try {
            content = fs.readFileSync(path, 'utf8');
        } catch {
            content = ""
        }

        fs.writeFileSync(path, `${content}${this.tag}${this.time}${this.message}\n`);

        this.message = ""
    }

    send(msg, trace = false){
        let message = msg ? msg : ""
        let init = message

        if(this.format) this.addTimestamp(this.format)

        if(trace){
            message = ""

            if(init.split("|->")[0].length == 1){
                for(var i = 0; i < this.colors.length; i++){
                    message += `\u001b[${this.extra ? this.extra + ";" : ""}38;5;${this.colors[i]}m${this.messages[i]}`
                }
                message += init
            } else {
                message = init
            }
        } else {
            message = ""
            if(init.length < 1){
                for(var i = 0; i < this.colors.length; i++){
                    message += `\u001b[${this.extra ? this.extra + ";" : ""}38;5;${this.colors[i]}m${this.messages[i]}`
                }
            } else {
                message = init
            }
        }

        console.log(`\u001b[${this.extra ? this.extra + ";" : ""}38;5;${this.color}m${this.tag}${this.time}${message}\x1b[0m`)
        
        this.message = init.length < 1 ? this.messages.join("") : init

        this.messages = []
        this.colors = []
        return this
    }

    rainbow(message){
        const colors = ["red", "orange", "yellow", "green", "blue", "darkBlue", "purple"]

        let i = 0
        let u = 0

        while(u < message.length){
            if(i == colors.length - 1) i = 0
            this[colors[i]](message[u])
            if(message[u] != " ") i++
            u++
        }
        return this
    }

    black(message){
        return this.changeColor(0, message)
    }

    white(message){
        return this.changeColor(7, message)
    }

    red(message){
        return this.changeColor(9, message)
    }

    darkGreen(message){
        return this.changeColor(34, message)
    }

    green(message){
        return this.changeColor(47, message)
    }

    darkBlue(message){
        return this.changeColor(69, message)
    }

    blue(message){
        return this.changeColor(75, message)
    }

    cyan(message){
        return this.changeColor(86, message)
    }

    purpleBlue(message){
        return this.changeColor(105, message)
    }

    lightBlue(message){
        return this.changeColor(123, message)
    }

    purple(message){
        return this.changeColor(141, message)
    }

    lightPurple(message){
        return this.changeColor(177, message)
    }

    yellow(message){
        return this.changeColor(191, message)
    }

    pink(message){
        return this.changeColor(206, message)
    }

    orange(message){
        return this.changeColor(208, message)
    }

    bold(){
        return this.changeFont(1)
    }

    underline(){
        return this.changeFont(4)
    }

    reversed(){
        return this.changeFont(7)
    }

    reset(){
        this.color = 0
        this.extra = 0
        this.tag = ""
        this.time = ""
        this.message = ""
        this.colors = []
        this.messages = []
        return this
    }
}