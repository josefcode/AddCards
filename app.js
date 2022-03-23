// Selecionamos o body para adicionar elementos.
document.body.innerHTML = `
    <div class="container">
    <div class="container-form">
    <form action="" class='form'>
        <h1>Add info</h1>
        <div class='form-card'>
            <label>Title:</label>
            <input type="text" name="" id="inputTitle" placeholder="Title.."/>
            <label>Image url:</label>
            <input type="url" name="" id="inputImage" placeholder="url image..."/>
            <label>Desc:</label>
            <input type="text" name="" id="inputDesc" placeholder="Desc.."/>
            <button type="submit">Submit</button>
            <button type="reset">Reset</button>
        </div>
    </form>
    </div>
    <div class='container-card'>
   
    </div>
    </div>
    `
    // Selecionar elementos
   const form = document.querySelector("form");
   const inputTitle = document.getElementById("inputTitle");
   const inputImage = document.getElementById("inputImage");
   const inputTask = document.getElementById("inpuDesc");

// validamos a form 
form.addEventListener('submit', executaEvento);
function executaEvento(e) {
 e.preventDefault();
//  colocar o value de cada elemento no variavel
  const inputTitle = document.getElementById("inputTitle").value;
  const inputImage = document.getElementById("inputImage").value;
  const inputTask = document.getElementById("inputDesc").value;
// Selecione o elemento que vai acontecer o adicional de nove elementos
 const card = document.querySelector('.container-card');

// Adicionar novos elementos para o elemento selecionado
 card.innerHTML += `
   <div class='card'>
   <div>
   <img src=${inputImage} />
   </div>
   <h1>${inputTitle}</h1>
   <p>${inputTask}</p>
   <button id="delete" class='delete'>Delete</button>
    </div>
    `
testdriver()
}
function testdriver(){
 let letdelete = document.querySelectorAll('#delete')

 letdelete.forEach(element=>{
   element.addEventListener('click', ()=>{
   element.parentNode.remove()
 })
 })
 console.log(letdelete)
}




