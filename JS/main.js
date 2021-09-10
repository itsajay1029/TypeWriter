class TypeWriter{
    constructor(array,wait=2000,span){
        this.index=0;
        this.array=array;
        this.wait=wait;
        this.isDeleting=false;
        this.span=span;
        this.txt='';
    }

    type(){
        let currentIndex=this.index%(this.array.length);
        let currentWord=this.array[currentIndex];

        if(!this.isDeleting){
            this.txt=currentWord.substring(0,this.txt.length+1);
            this.span.innerHTML=`<span class="txt">${this.txt}</span>`
        }else{
            this.txt=currentWord.substring(0,this.txt.length-1);
            this.span.innerHTML=`<span class="txt">${this.txt}</span>`
        }
        //Type Speeed
        let typeSpeed=300;
        if(this.isDeleting){
            typeSpeed/=2;
        }

        if(!this.isDeleting && this.txt===currentWord){
            typeSpeed=this.wait;
            this.isDeleting=true;
        }else if(this.isDeleting && this.txt===''){
            this.isDeleting=false;
            this.index++;
            typeSpeed=500;
        }





        console.log('No Error')

        setTimeout(()=>{this.type()},typeSpeed)





        
        //ss

    }

}

const dom_loaded=()=>{
  
    const span=document.querySelector('.txt-type');
    let array=JSON.parse(span.getAttribute('data-words'));
    let wait=parseInt(span.getAttribute('data-wait'));
    new TypeWriter(array,wait,span).type();
  
}

document.addEventListener('DOMContentLoaded', dom_loaded);

