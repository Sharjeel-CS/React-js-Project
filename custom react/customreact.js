function customRender(reactElement,mainContainer){
   /* const domElement=document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.children

    domElement.setAttribute('href',reactElement.props.href)

    domElement.setAttribute('target',reactElement.props.target)

    mainContainer.appendChild(domElement)*/
    
    //version 2

    const domElement=document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.children

    for(const prop in reactElement.props)
     {   if(prop === 'children') continue;
    domElement.setAttribute(prop,reactElement.props[prop])
     }
     mainContainer.appendChild(domElement)
}

const reactElement={

    type:'a',
    //props means properties. And actually it is an object element
    props:{
        href:'https://google.com',
        target:'_blank'
          },
          children:'Click me to visit Google'
}




const mainContainer=document.querySelector('#root')

customRender(reactElement,mainContainer)


