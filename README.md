# text selection react
text selection react module provide the selected text and html on desktop and mobile browser. It also provide the feature to color the selected text/html

## Installation
To install this package you have to run
```bash
npm install text-selection-react
```

## Demo
[Link of demo](https://admiring-hodgkin-677ccb.netlify.com/)

##UPDATE:- Now Support Mobile Browser Also 

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

color :- In color you can add color of you choise

colorText :- if true then it color the selected text

![Image of work](https://raw.githubusercontent.com/abhinavNehra/get-selected-text/master/images/popover-example.png)

so if you click on submit it will change the background of the text into

![Image of change background](https://raw.githubusercontent.com/abhinavNehra/get-selected-text/master/images/popup_color.png)

Mobile View

![Image of multi events](https://raw.githubusercontent.com/abhinavNehra/get-selected-text/master/images/mobile-view.png)

you can add as many event as you want in it 

like 

![Image of multi events](https://raw.githubusercontent.com/abhinavNehra/get-selected-text/master/images/pop-up-multi-event.png)



this will look like 
![Image of multi events view ](https://raw.githubusercontent.com/abhinavNehra/get-selected-text/master/images/multi-function.png)


## Handler
handle will return two params. which are html and text.


![Image of return params ](https://raw.githubusercontent.com/abhinavNehra/get-selected-text/master/images/popup_text_html.png)

## Shoutouts
This is written during one of my project in which i have to provide the selected text but i didn't find any library that give you the selected text so i research on it and find this solution uptill now. And will add new function in future as there are many in my mind

## Question 
if you have any question or want me to add or modify as per your requirement then contact me i will do it for you.

## Request
If you like it please give a star on github. Thanks

# text selection react
# text-selection-react