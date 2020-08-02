// Añadir un objeto de atributos a un elemento
const addAttributes = (element, attrObj) => {
    for (let attr in attrObj) {
        if (attrObj.hasOwnProperty(attr)) element.setAttribute(attr,attrObj[attr])
    }
};
// Crear elementos con atributos e hijo
const createCustomElement = (element,attributes,children) => {
    let customElement = document.createElement(element);
    if (children !== undefined) children.forEach(el => {
      if (el.nodeType) {
        if (el.nodeType === 1 || el.nodeType === 11) customElement.appendChild(el);
      } else {
        customElement.innerHTML += el;
      }
    });
    addAttributes(customElement,attributes);
    return customElement;
};

const printModal = content =>{

    modalHeader = createCustomElement('div',{
        class:'modal-header'
    },[content.header])
    modalBody = createCustomElement('div',{
        class:'modal-body'
    },[content.body])
    modalFooter= createCustomElement('div',{
        class:'modal-footer'
    },[content.footer])
    // let con = 
    modalContent = createCustomElement('div',{
        class:'modal-content'
    },[modalHeader])
    modalContent.appendChild(modalBody)
    modalContent.appendChild(modalFooter)
    modalMain = createCustomElement('div',{
        id:'modal-demo',
        class:'modal', 
    },[modalContent])

    document.body.appendChild(modalMain)

    modalMain.addEventListener('click',(e)=>{
        // console.log('EE' ,modalMain)
        if(e.target === modalMain){
            document.body.removeChild(modalMain)
        } 
    })
    document.getElementById('close').addEventListener('click',function(){
        modalContent.classList.add('modal-rc')
        setTimeout(function(){
            document.getElementById('close').closest('.modal').remove()
        },400)
    })
     

}

let btn_modal = document.getElementById('createel')
const title_modal = '<span class="close" id="close">&times;</span><h2>Modal Header</h2>'
var body_modal = `<p id="data-body">Some text in the Modal Body</p>
<p>Some other text...</p>`
const footer_modal = '<h3>Modal Footer</h3>'

btn_modal.addEventListener('click',()=>{
    printModal({header:title_modal,body:body_modal,footer:footer_modal})
})
setTimeout(function(){
    document.getElementById('data-body').innerText = 'gogogo'
    console.log('GOGOO')
},4000)
 
// let modalButtons = document.querySelectorAll("[data-modal]")
// let modalBtnsClose = document.querySelectorAll("[data-modal-close]")

// // OPEN
// modalButtons.forEach(function(btn){
//   btn.onclick = function(){
//     let modal = btn.getAttribute('data-modal')
//     toggleModal(modal)
//   }
// })

// function toggleModal(modal){
//   const current_modal = document.getElementById(modal)
//   current_modal.style.display = 'block' 
//   current_modal.classList.toggle('opacity-0')
//   current_modal.classList.toggle('pointer-events-none')
//   current_modal.classList.toggle('modal-active')
//   document.body.style.overflow='hidden'
// }
// // CLOSE
// modalBtnsClose.forEach(function(btnClose){
//   btnClose.onclick = function(){
//     let current_modal_close =btnClose.closest(".modal")
//     // console.log(btnClose.closest(".modal"))
//     current_modal_close.style.display="none"
//     current_modal_close.classList.toggle('opacity-0')
//     current_modal_close.classList.toggle('pointer-events-none')
//     current_modal_close.classList.toggle('modal-active')
//     document.body.style.overflow='auto'
//   }
// })
