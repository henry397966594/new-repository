var xhr = new XMLHttpRequest()
console.log(xhr);

xhr.open('get', './new.json')
xhr.onreadystatechange=function(){
    if(this.status===200&&this.readyState===4){
        console.log(this.responseText)
    }

}
xhr.send()