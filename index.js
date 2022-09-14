

function check() {
    stringLength = document.getElementById('txt').value.length;
    if (stringLength >= 50) {
         document.getElementById('warning').innerText = "Máximo de caracteres 50";
         
    } else {
        document.getElementById('warning').innerText = ""
    }
}


function checkAsunto() {
    stringLength = document.getElementById('txt-asunto').value.length;
    if (stringLength >= 50) {
         document.getElementById('warning-asunto').innerText = "Máximo de caracteres 50";
         
    } else {
        document.getElementById('warning-asunto').innerText = ""
    }
}



function checkTextarea() {
    stringLength = document.getElementById('txt-textarea').value.length;
    if (stringLength >= 300) {
         document.getElementById('warning-textArea').innerText = "Máximo de caracteres  300";
         
    } else {
        document.getElementById('warning-textArea').innerText = ""
    }
}


function validateEmail(){
    let email = document.getElementById("email").value;
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(email.match(pattern)){
        document.getElementById('warning-email').innerText = ""
    }else{
        document.getElementById('warning-email').innerText = "Formato invalido";
    }
}


function validateBtn(){
        let form = document.form;
        if(form.nombre.value==0){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Todos los campos son obligatorios'
              });
            form.nombre.value="";
            return false;
        }if(form.email.value==0){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Todos los campos son obligatorios'
              });
            form.email.value="";
            return false;
        }if(form.asunto.value==0){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Todos los campos son obligatorios'
              });
            form.asunto.value="";
            return false;
        } if(form.message.value==0){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Todos los campos son obligatorios'
              });
            form.message.value="";
            return false;
        } else{
            alert("Mensaje enviado con exito")
            form.submit()
        }     
}

document.getElementById('btn').addEventListener("click",function(event){
    event.preventDefault()
})
