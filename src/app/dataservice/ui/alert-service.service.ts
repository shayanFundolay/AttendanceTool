import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertServiceService {

  constructor() { }

  _show(msg='',label='default',interval=3000){
    const html = this._create(msg,label)
    document.querySelector('body').append(html)
    this._hide(interval)
  }

  _create(msg,label){
    const container = document.createElement('div')
    container.classList.add('alertify-logs')
    container.style.zIndex = '1100'

    const inner = document.createElement('div')
    inner.classList.add(`${label}`,'alertify','show')
    inner.innerText = msg

    container.append(inner)
    return container
  }

  _hide(interval){
    setInterval(function(){
      const html = document.querySelector('.alertify.show')
      html.classList.remove('show')
    },interval)
  }


}
