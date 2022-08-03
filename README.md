# cutesy.js 2.0.0
a cute javascript logger with helpful utility <3

## How to use it

#### Create a logger

```js
const Logger = require('cutesy.js')
const logger = new Logger("My Project") // the String equals your Project name etc.
```

#### Change color

You can easily change the color 

```js
logger.log("[red]i am red! [blue]now i am blue daba di daba die")
```

#### set Timestamp format

Update the default timestamp(yyyy-MM-dd HH:mm:ss) to your own format 

```js
logget.setDateTimeFormat("HH:mm:ss");
```

#### Debug

You can toggle the Debug mode by a simple function

```js
logger.setDebug(true/false);

logger.log("[purple][italic]This is a Debug message", 'DEBUG') // This will only print if debug mode is acitve
```

#### Traces

You don't know where the log comes from? add a stack trace!

```js
logger.logTraced("This text got sent with a trace") // => This text got sent with a trace |-> /home/cutesy/project/index.js:10:12
```


#### Example
You want to print different states of logs.

```js
const Logger = require('cutesy.js')
const logger = new Logger("Example")

logger.log("This is a Info message", 'INFO')
logger.log("This is a Warning message", 'WARNING')
logger.log("This is a Error message", 'ERROR')
logger.log("This is a Debug message", 'DEBUG')
```
