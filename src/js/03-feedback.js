
import throttle from 'lodash.throttle';
import {save,load,remove} from './storage'

const formRef = document.querySelector('.feedback-form');
const LOCALE_STORAGE_KEY = 'feedback-form-state';


initPage();



const onFormInput = e =>{
const {name, value} = e.target;

let storageData = load(LOCALE_STORAGE_KEY);
storageData = storageData ? storageData : {};
// if (storageData) {
//     storageData = JSON.parse(storageData);
// } else {
//     storageData = {};
// }
storageData[name] = value;
// const stringifyData = JSON.stringify(storageData);
save(LOCALE_STORAGE_KEY,storageData);
} 



formRef.addEventListener('input', throttle(onFormInput, 500)) 


function initPage() {
    const storageData = load(LOCALE_STORAGE_KEY);
    
if(!storageData) {
    return
}

    Object.entries(storageData).forEach(([name,value]) => {
        formRef.elements[name].value = value;
            });




    } 



function onHandleSubmit(e) {
e.preventDefault();

const {elements: {email, message}} = e.currentTarget;
const submitData = {email: email.value, message: message.value};
console.log(submitData);
e.currentTarget.reset();
remove(LOCALE_STORAGE_KEY)

}



formRef.addEventListener('submit', onHandleSubmit)

