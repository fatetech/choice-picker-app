const tagsEl = document.querySelector('.tags');
const textarea = document.getElementById('textarea');

textarea.focus()

///// the event that should run when i enter a key on the textarea.
textarea.onkeyup = (e)=> {
    createTags(e.target.value)

    if(e.key === "Enter") {
        setTimeout(() => {
            e.target.value = ''
        },10)

        randomSelect();
    }

}

// createTag function

createTags = (input) => {
    const tags =  input.split(',').filter(tag => tag.trim()
     !== '').map(tag => tag.trim()) 

    tagsEl.innerHTML = '';
    
    tags.forEach(tag => {
        const tagEl = document.createElement('span')
        tagEl.classList.add('tag')
        tagEl.innerHTML = tag;
        tagsEl.append(tagEl)
        
    });

} 


// random select  funcction

function randomSelect(){

    // the random highlight effect
    const times = 30;
  
    const interval = setInterval(() => {
        const randomTag = pickRandomTag() 

         highLightTag(randomTag);

         setTimeout(() => {
             unHighLightTag(randomTag);
         }, 100)

    }, 100);

    // to pick from the random effect

    setTimeout(() => {
        clearInterval(interval)

        setTimeout(()=> {
            const randomTag = pickRandomTag()

            highLightTag(randomTag)
        }, 100)
        
    }, times * 100);

}


// pickRandom choice math function

function pickRandomTag(){
    const tags = document.querySelectorAll('.tag');
    return tags[Math.floor(Math.random() * tags.length )]
}

function highLightTag(tag){
    tag.classList.add('highlight');
}

function unHighLightTag(tag){
    tag.classList.remove('highlight');
}