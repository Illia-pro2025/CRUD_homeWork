let e="http://localhost:1111/students",t=document.querySelector("#list"),n=document.querySelector("#get-students-btn"),r=document.querySelector("#add-student-form"),o=document.querySelector("#name"),l=document.querySelector("#age"),d=document.querySelector("#course"),a=document.querySelector("#skills"),s=document.querySelector("#email"),c=document.querySelector("#isEnrolled"),i=null;function u(){fetch(e).then(e=>e.json()).then(e=>{var n;return n=e,t.innerHTML="",t.innerHTML=n.map(e=>` <tr>
      <th scope="row">${e.id}</th>
      <td>${e.name}</td>
      <td>${e.age}</td>
      <td>${e.course}</td>
      <td>${e.skills}</td>
      <td>${e.email}</td>
      <td>${e.isEnrolled}</td>
      <td>
       <button class="edit" data-id=${e.id}>edit</button>
      <button class="delete"data-id=${e.id}>delete</button>
      </td>
    </tr>`).join()}).catch(e=>console.error(e))}n.addEventListener("click",u),r.addEventListener("submit",t=>{t.preventDefault();let n={name:o.value.trim(),age:l.value.trim(),course:d.value.trim(),skills:a.value.trim(),email:s.value.trim(),isEnrolled:c.value.trim()};if(i){var h;h=i,fetch(`${e}/${h}`,{method:"PATCH",headers:{"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(n)}).then(e=>e.json()).then(()=>u()).catch(e=>console.error(e))}else fetch(e,{method:"POST",headers:{"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(n)}).then(e=>e.json()).then(()=>u()).catch(e=>console.error(e));r.reset()}),t.addEventListener("click",t=>{let n=t.target.dataset.id;t.target.classList.contains("edit")&&fetch(`${e}/${n}`).then(e=>e.json()).then(e=>{o.value=e.name,l.value=e.age,d.value=e.course,a.value=e.skills,s.value=e.email,c.value=e.isEnrolled,i=e.id}),t.target.classList.contains("delete")&&fetch(`${e}/${n}`,{method:"DELETE"}).then(e=>e.json()).then(()=>u()).catch(e=>console.error(e))});
//# sourceMappingURL=dz.0b4beddc.js.map
