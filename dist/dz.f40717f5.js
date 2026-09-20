let e="https://6aafacbeee9c55c910bf5fd7.mockapi.io/api/v1/students",t=document.querySelector("#list"),r=document.querySelector("#get-students-btn"),a=document.querySelector("#add-student-form"),n=document.querySelector("#name"),o=document.querySelector("#age"),c=document.querySelector("#course"),l=document.querySelector("#skills"),i=document.querySelector("#email"),d=document.querySelector("#isEnrolled"),s=null;async function u(){try{var r;let a=await fetch(e);return r=await a.json(),t.innerHTML="",t.innerHTML=r.map(e=>` <tr>
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
    </tr>`).join()}catch(e){console.error(e)}}async function m(t){try{return await fetch(e,{method:"POST",headers:{"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(t)}),u()}catch(e){console.error(e)}}async function y(t,r){try{return await fetch(`${e}/${t}`,{method:"PATCH",headers:{"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(r)}),u()}catch(e){console.error(e)}}async function h(t){try{return await fetch(`${e}/${t}`,{method:"DELETE"}),u()}catch(e){console.error(e)}}async function v(t){try{let r=await fetch(`${e}/${t}`),a=await r.json();n.value=a.name,o.value=a.age,c.value=a.course,l.value=a.skills,i.value=a.email,d.value=a.isEnrolled,s=a.id}catch(e){console.error(e)}}r.addEventListener("click",u),a.addEventListener("submit",e=>{e.preventDefault();let t={name:n.value.trim(),age:o.value.trim(),course:c.value.trim(),skills:l.value.trim(),email:i.value.trim(),isEnrolled:d.value.trim()};s?y(s,t):m(t),a.reset()}),t.addEventListener("click",e=>{let t=e.target.dataset.id;e.target.classList.contains("edit")&&v(t),e.target.classList.contains("delete")&&h(t)});
//# sourceMappingURL=dz.f40717f5.js.map
