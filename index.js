const fs = require('fs');
module.exports = class {
    constructor(){
        this.color = 0
        this.extra = 0
        this.time = ""
        this.message = ""
        this.tag = ""
    }

    addTimestamp(format){
        const d = new Date();
        const h = d.getHours() < 10 ? '0' + d.getHours() : d.getHours();
        const m = d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes();
        const s = d.getSeconds() < 10 ? '0' + d.getSeconds() : d.getSeconds();

        if(format == "hh:mm:ss"){
            this.time = `${h}:${m}:${s} - `
        }

        if(format == "hh:mm"){
            this.time = `${h}:${m} - `
        }

        if(format == "mm:ss"){
            this.time = `${m}:${s} - `
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
            if(!trace) return this.sendTraced(message, n-1)
            return this.send(message + " | " + trace)
        }
    }

    changeColor(code){
        this.color = code
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

        fs.writeFileSync(path, `${content}${this.tag}${this.time}${message}\n`);
    }

    send(message){
        console.log(`\u001b[${this.extra ? this.extra + ";" : ""}38;5;${this.color}m${this.tag}${this.time}${message}\x1b[0m`)
        this.message = message
        return this
    }

    black(){
        return this.changeColor(0)
    }

    white(){
        return this.changeColor(7)
    }

    red(){
        return this.changeColor(9)
    }

    darkGreen(){
        return this.changeColor(34)
    }

    green(){
        return this.changeColor(47)
    }

    darkBlue(){
        return this.changeColor(69)
    }

    blue(){
        return this.changeColor(75)
    }

    cyan(){
        return this.changeColor(86)
    }

    lightBlue(){
        return this.changeColor(123)
    }

    purple(){
        return this.changeColor(135)
    }

    lightPurple(){
        return this.changeColor(177)
    }

    yellow(){
        return this.changeColor(191)
    }

    pink(){
        return this.changeColor(206)
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
        return this
    }
}