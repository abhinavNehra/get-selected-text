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
        color={'yellow'}
        colorText={true}
    />

```

Here In events you can add as many event as you want. like currently i am using only one event then it will be shown as 

![Image of work](https://raw.githubusercontent.com/abhinavNehra/get-selected-text/master/images/popover-example.png)

so if you click on submit it will change the background of the text into

![Image of change background](https://raw.githubusercontent.com/abhinavNehra/get-selected-text/master/images/popup_color.png)

you can add as many event as you want in it 

like 

![Image of multi events](https://raw.githubusercontent.com/abhinavNehra/get-selected-text/master/images/pop-up-multi-event.png)



this will look like 
![Image of multi events view ](https://raw.githubusercontent.com/abhinavNehra/get-selected-text/master/images/multi-function.png)


## Handler
handle will return two params. which are html and text.


![Image of return params ](https://raw.githubusercontent.com/abhinavNehra/get-selected-text/master/images/popup_text_html.png)

