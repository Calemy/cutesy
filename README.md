# cutesy
a cute javascript logger with helpful utility <3
<br>
some updates still expected

## How to use it

#### Create a logger

```js
const Logger = require('cutesy.js')
const logger = new Logger()
```

#### Change color

You can easily change the color with our color pallet consitent of currently 15 colors

```js
const colors = [
    "black", "white", "red", "darkGreen", "green",
    "darkBlue", "blue", "cyan", "purpleBlue", "lightBlue", 
    "purple", "lightPurple", "yellow", "pink", "orange"
]

logger.blue()
.send("you can do it like this")

logger.blue("or like this")
.send()

logger.blue("you even can change the color ")
.red("in the same message, ")
.green("by chaining colors together!")
.send()

logger.rainbow("and if you are very funny, use this :)")
.send()
```

#### Add Timestamp

You want a timestamp added to know when the log was made? No problem!
We have multiple formats for all needs.

```js
logger.addTimestamp("hh:mm:ss")
logger.send("This text has a timestamp") // => 04:31:05 - This text has a timestamp
```

#### Prefixes/Names

You can add a prefix to know what type of log you are recieving

```js
logger.changeTag("Debug")
.send("This text is a debug") // => [Debug] | This text is a debug
```

#### Traces

You don't know where the log comes from? add a stack trace!

```js
logger.sendTraced("This text got sent with a trace") // => This text got sent with a trace | /home/cutesy/project/index.js:10:12
```

#### Log into files

ever want to log stuff into a file? now you can with just one line!
it automatically appends the log on each save

```js
logger.save("./log.txt", "This text is in a file")

//log.txt:
//This text is in a file

logger.send("We save this in a context")
.save("./log.txt")

//log.txt:
//This text is in a file
//We save this in a context
```


#### Example
Here we want to have a blue color, with the "Info" tag to log into the console, and then into a file.

```js
const Logger = require('cutesy.js')
const logger = new Logger()

logger.blue()
.changeTag("Info")
.send("This information gets logged into a file")
.save("./log.txt") //we don't need to define a message since we have a context
```

#### Tips
The Logger uses the same Tag, Timestamp and Color unless you want to change it.

```js
logger.blue()
.changeTag("Info")
.addTimestamp("hh:mm:ss")
.send("I like the color blue") //-> [Info] | 00:55:29 - I like the color blue

logger.send("This stays blue") //-> [Info] | 00:55:29 - This stays blue

logger.red()
.send("until you change the color") //-> [Info] | 00:55:29 - until you change the color

logger.reset()
.send("and you can start all over again") //-> and you can start all over again
```