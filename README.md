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

You can easily change the color 

```js
const colors = ["black", "white", "red", "darkGreen", "green", "darkBlue", "blue", "cyan", "lightBlue", "purple", "lightPurple", "yellow", "pink"]

logger.blue()
logger.send("blue colored text")
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
logger.changeName("Debug")
logger.send("This text is a debug") // => [Debug] | This text is a debug
```

#### Traces

You don't know where the log comes from? add a stack trace!

```js
logger.sendTraced("This text got sent with a trace") // => This text got sent with a trace | /home/cutesy/project/index.js:10:12
```

#### Log into files

ever want to log stuff into a file? now you can with just one line!

```js
logger.save("./log.txt", "This text in a file")
```


#### Example
Here we want to have a blue color, with the "Info" tag to log into the console, and then into a file.

```js
const Logger = require('cutesy.js')
const logger = new Logger()

logger.blue()
logger.changeName("Info")
logger.send("This information gets logged into a file")
logger.save("./log.txt") //we don't need to define a message since we have a context
```
