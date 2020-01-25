# text-selection-react
This module provide the selected text and html and also provide the feature to color the selected text/html

## Installation
To install this package you have to run
```bash
npm install text-selection-react
```

## Usage

This is a independent module. To use it you don't have to wrap it around any component. You can put it any where in the component or in the file inside render to use this component.


```react

import TextSelector from 'text-selection-react'

    <TextSelector
        events={[
        {
            text: 'Submit',
            handler: this.handler
        }
        ]}
    />

```

Here In events you can add as many event as you want. like currently i am using only one event then it will be shown as 

![Image of work](https://raw.githubusercontent.com/abhinavNehra/get-selected-text/master/popover-example.png)