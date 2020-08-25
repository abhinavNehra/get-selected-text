import React, { Component } from 'react'

const css = (props) => {

    let color = 'yellow'
    if (props.color) {
        color = props.color
    }

    return `
        .popup {
          width: auto;
          position: absolute;
          visibility: hidden;
          z-index: 9999999999;
          will-change: transform;
          top: 0px;
          left: 0px;
          transform: translate3d(0px, 0px, 0px);
          display:block;
          background-color: #000;
          color: #FFF;
          text-align: center;
          border-radius: 6px;
          padding: 10px;
          margin-left: -80px;
          line-height: 20px;
          font-size: 14px;
          borde r: 4px solid rgb(0, 0, 0);
          box-shadow: rgba(0, 0, 0, 0.1) 1px 1px 2px 0px;
         }
        .popup::after {
          content: "";
          position: absolute;
          width: 0;
          height: 0;
          border-width: 10px;
          border-style: solid;
          border-color: #000 transparent transparent transparent;
          top: 44px;
          left: 50%;
          margin-left:-12px;
          
        }
        .popupItem{width:auto; padding:8px 12px; font-size:16px; font-weight:bold; border-right:1px solid #433E49; cursor:pointer;}
        .popupItem:hover{text-decoration:underline; color:#1890ff;}
        .popupItem:last-child{border-right:none}
        .extracted-class {
        position: relative;
    display: inline-block;
    }
        .extracted-class::after {
          background:  ${color};
          content: "";
          display: block;
          position: absolute;
          z-index: 999;
          left: 0;
          right: 0;
          opacity: 0.3;
          top: 0;
          bottom: 0;
        }
        
        .extracted-simple-text {
          background-color: ${color};
          color: black;
        }
        
        .for-mobile {
            position: fixed;
            top: 50%;
            right: 40px;
            width: auto;
        }
        .visible {
            visibility: visible;
        }

        #tooltip {
            position: fixed;
            display: none;
        }
        `
}
class PopOver extends Component {
    constructor(props) {
        super(props)
        this.state = {
            startX: 0,
            startY: 0,
            timeout: null
        }
        this.el = document.createElement('span')
        this.range = null
        this.frangment = null
        this.tooltipElement = null
    }

    parseItems = (items) => {
        if (items != null && items != undefined && items.length > 0) {
            if (!Array.isArray(items)) items = [items]

            let parsed = ''
            items.forEach((item, index) => {
                const handler = `<span class='popupItem' data-action="${index}"  id="${item.text}-${index}">
            ${item.text}
          </span>`
                parsed += handler
            })
            return parsed
        }
    }

    componentDidMount() {
        const style = document.createElement('style')
        style.type = 'text/css'
        if (style.styleSheet) {
            style.styleSheet.cssText += css(this.props)
        } else {
            style.appendChild(document.createTextNode(css(this.props)))
        }
        this.el.appendChild(style)

        const span = document.createElement('span')
        const parseItems = this.parseItems(this.props.events)

        span.className = 'popup-span'
        if (document.getElementsByClassName('popup-span').length) {
            return
        }

        if (this.checkMobile()) {
            span.className += ' for-mobile'
            span.innerHTML = `<span class='popup popup-button visible' id="popup-dynamic" >
              ${parseItems}
            </span>`
            window.addEventListener("touchstart", this.processSelection)
            window.addEventListener("pointerdown", this.selectionEndText)
            window.addEventListener("touchmove", this.selectionEndText)
            window.addEventListener("touchend", this.selectionEndText)
            window.addEventListener("touchcancel", this.selectionEndText)
            span.addEventListener('onclick', function (e) {
                this.selectionEndText(e)
                setTimeout(function () {
                    this.processSelection(e)
                })
            })
        } else {
            span.innerHTML = `<span class='popup popup-button' id="popup-dynamic" >
              ${parseItems}
            </span>`
            document.onmouseup = this.selectionEndText
            document.onmousedown = this.processSelection
        }

        this.el.appendChild(span)
        document.body.appendChild(this.el)
    }

    checkMobile = () => {
        let deviceIsMobile = false;
        if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
          || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) {
            deviceIsMobile = true;
        }
        return deviceIsMobile
    }

    componentWillUnmount() {
        document.body.removeChild(this.el)
        this.range = null
        this.frangment = null
    }

    selectionEndText = (e) => {
        const t = document.getSelection()
        if (t.toString().length !== 0) {
            this.range = t.getRangeAt(0)
            if (this.range && !this.range.collapsed) {
                this.frangment = this.range.cloneContents()
            }


            if (!this.checkMobile()) {
                let top = 0, left = 0
                if (e.pageY < this.state.startY) top = e.pageY - 50
                else top = this.state.startY - 50

                if (this.state.startX > e.pageX) {
                    left = this.state.startX
                } else {
                    left = e.pageX
                }

                const popup = document.querySelector('#popup-dynamic')
                if (popup) {
                    popup.style.visibility = 'visible'
                    popup.style.transform = `translate3d(${left}px, ${top}px, 0px)`
                }
            }
        }
    }

    hidePopup() {
        const popup = document.querySelector('#popup-dynamic')
        if (popup) {
            popup.style.visibility = 'hidden'
        }
    }

    processSelection = (e) => {
        if (this.checkMobile()) {
            if (e.target.classList.contains('popup-button')) return true
        }
        const t = document.getSelection()
        if (t.toString().length !== 0 && e.target.classList.contains('popupItem')) {
            if (this.frangment) {
                if (this.props.colorText) {
                    const span = document.createElement('span')
                    const id = Math.floor(Math.random() * 1000)
                    try {
                        span.className = `extracted-simple-text`
                        span.id = `id-${id}`
                        this.range.surroundContents(span)
                    } catch (error) {
                        console.log(error)
                        const ansector = this.range.commonAncestorContainer
                        let tagCollection = []
                        if (ansector.nodeType != 3) {
                            tagCollection = Array.from(ansector.querySelectorAll('*'))
                        }

                        span.className = ''
                        if (this.frangment && this.frangment.childNodes && this.frangment.childNodes.length) {
                            this.frangment.childNodes.forEach((child, i) => {

                                tagCollection.forEach(tag => {
                                    if (child.nodeType === 3 && child.nodeName == '#text' &&
                                      tag.innerHTML.includes(child.textContent)) {
                                        const spanWrapper = document.createElement('span')
                                        spanWrapper.className = `extracted-simple-text id-${id}`
                                        spanWrapper.id = `id-${id}`
                                        spanWrapper.append(child.textContent)
                                        const Html = tag.innerHTML.replace(child.textContent, spanWrapper.innerHTML)
                                        tag.innerHTML = Html
                                    } else if (tag.innerHTML && tag.innerHTML.includes(child.innerHTML)) {
                                        const spanWrapper = document.createElement('span')
                                        spanWrapper.className = `extracted-simple-text id-${id}`
                                        spanWrapper.id = `id-${id}`
                                        spanWrapper.append(child.textContent)
                                        const Html = tag.innerHTML.replace(child.innerHTML, spanWrapper.outerHTML)
                                        tag.innerHTML = Html
                                    }
                                })
                            })
                        }
                    }
                    if (this.props.unmark) {
                        console.log('this.props.tooltip', this)
                        this.tooltip(id)
                    }
                }
                const frangmentWrapper = document.createElement('span')
                frangmentWrapper.appendChild(this.frangment)
                this.props.events[e.target.dataset.action].handler(frangmentWrapper, this.range.toString())
                if (window.getSelection) { window.getSelection().removeAllRanges(); }
                else if (document.selection) { document.selection.empty(); }
            }
        } else {
            this.setState({
                startX: e.pageX,
                startY: e.pageY
            })
        }
        if (!this.checkMobile()) this.hidePopup()
    }

    tooltip = (id) => {
        if (!this.tooltipElement) {
            const button = document.createElement('button')
            button.id = `tooltip`
            button.textContent = this.props.unmarkText? this.props.unmarkText: 'remove'
            button.style.display = 'none'
            document.body.append(button)
            this.tooltipElement = button
        }

        const elemID = `id-${id}`

        const main = document.getElementById(elemID)
        if (main) {
            main.onmouseenter = this.handleFocus
            main.onmouseleave = this.handleLost
        }
    }

    handleFocus = (e) => {
        e.preventDefault()
        const button = document.getElementById('tooltip')
        if (button.style.display === 'none') {
            button.style.display = 'block'

            if (button.className  !== e.target.id) {
                button.className = e.target.id
                button.style.top = `${e.clientY}px`
                button.style.left = `${e.clientX}px`
                button.onclick = this.deleteElement
                button.onmouseleave = this.handleLost
            }
        }
    }

    deleteElement = (evt) => {
        const classID = evt.target.className
        const element = document.getElementById(classID)
        if (!element) {
            return
        } else if (element) {
                element.className = ''
                element.id = ''
                element.onmouseenter = null
                element.onmouseleave = null
                return this.deleteElement(evt) 
        }
    }

    handleLost = (e) => {
        e.preventDefault()
        
        console.log('lost --')
        if (e.relatedTarget.id === 'tooltip' || (e.target.id === 'tooltip' && e.relatedTarget.className === 'extracted-simple-text')) {
            //console.log('tooltip')
        } else  {
            console.log('other')
            const button = document.getElementById('tooltip')
            button.style.display = 'none'
            button.className = ""
        }       
    }

    render() {
        return null
    }
}

export default PopOver