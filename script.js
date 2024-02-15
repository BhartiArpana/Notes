const addBtn=document.querySelector("#addBtn");
const main=document.querySelector("#main");

const saveNote= () => {
    const notes=document.querySelectorAll(".note textarea")
    console.log(notes);
    const data= [];
    notes.forEach(
        (i)=>{
            data.push(i.value)
        }
    )
    // console.log(data);
    localStorage.setItem("notes",JSON.stringify(data))
}
addBtn.addEventListener(
    "click",
    function(){
       addNote()
    }
)


//  <div class="note">
//          <div class="tool">
//             <i class="fa-solid fa-floppy-disk"></i>
//             <i class="fa-solid fa-trash"></i>
//          </div>
//          <textarea ></textarea>
const addNote=(text="")=>{
    const note=document.createElement("div");
    note.classList.add("note")
    note.innerHTML=`
     <div class="tool">
        <i class="save fa-solid fa-floppy-disk"></i>
        <i class=" trash fa-solid fa-trash"></i>
     </div>
     <textarea >${text}</textarea>
   `;
   note.querySelector(".trash").addEventListener(
        "click",
    function()
    {
             note.remove()
             saveNote()
     }
   )
   note.querySelector(".save").addEventListener(
    "click",
    function()
    {
        saveNote()
    }
   )
  main.appendChild(note);
  saveNote();
}

(
    function(){
        const lsNotes=JSON.parse(localStorage.getItem("notes"));
        lsNotes.forEach(
            (lsNotes)=>{
                addNote(lsNotes)
            }
        )
    }
)()