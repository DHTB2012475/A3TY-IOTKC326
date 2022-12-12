var firebaseConfig = {
    apiKey: "AIzaSyARV7DnYdYyeERtSZWIE3EewJMZxcg4Itg",
    authDomain: "kc326-3d108.firebaseapp.com",
    projectId: "kc326-3d108",
    storageBucket: "kc326-3d108.appspot.com",
    messagingSenderId: "923442191852",
    appId: "1:923442191852:web:7346512320f5446673f4c9", 
};
firebase.initializeApp(firebaseConfig);


// Liên hệ
firebase.firestore().collection("contact").onSnapshot( (querySnapshot)=>{
    document.getElementById('contactm').innerHTML='';
    querySnapshot.forEach((doc)=>{
      console.log(doc.id, " => ", doc.data());
      document.getElementById('contactm').innerHTML+=`
      <tr>
      <td>${doc.data().name}</td>
      <td>${doc.data().msg}</td>
    </tr>
  `
    });
  });
  
  
//ROOM 1
firebase.firestore().collection("room1").onSnapshot( (querySnapshot)=>{
    document.getElementById('room1').innerHTML='';
    querySnapshot.forEach((doc)=>{
  
      console.log(doc.id, " => ", doc.data());
      document.getElementById('room1').innerHTML+=`
      // <tr>
      // <td>${doc.id}</td>
      // <td>${doc.data().idClient}</td>
      // <td>${doc.data().day}</td>
      // <td>$ ${doc.data().price}.00</td>
      // <td>
      // <button class="btn btn-danger" onclick="deletec1(1,'${doc.id}')" >X</button>
      // </td>
      // </tr>
      <tr>
      <td>${doc.data().name}</td>
      <td>${doc.data().msg}</td>
    </tr>
      `
    });
  });
  //ROOM1 END

  //ROOM 2
firebase.firestore().collection("room2").onSnapshot( (querySnapshot)=>{
    document.getElementById('room2').innerHTML='';
    querySnapshot.forEach((doc)=>{
  
      console.log(doc.id, " => ", doc.data());
      document.getElementById('room2').innerHTML+=`
      <tr>
      <td>${doc.id}</td>
      <td>${doc.data().idClient}</td>
      <td>${doc.data().day}</td>
      <td>$ ${doc.data().price}.00</td>
      <td>
      <button class="btn btn-danger" onclick="deletec1(2,'${doc.id}')" >X</button>
      </td>
      </tr>
      `
    });
  });
  //ROOM2END

  //ROOM 3
firebase.firestore().collection("room3").onSnapshot( (querySnapshot)=>{
    document.getElementById('room3').innerHTML='';
    querySnapshot.forEach((doc)=>{
  
      console.log(doc.id, " => ", doc.data());
      document.getElementById('room3').innerHTML+=`
      <tr>
      <td>${doc.id}</td>
      <td>${doc.data().idClient}</td>
      <td>${doc.data().day}</td>
      <td>${doc.data().price}.00</td>
      <td>
      <button class="btn btn-danger" onclick="deletec1(3,'${doc.id}')" >X</button>
      </td>
      </tr>
      `
    });
  });
  //ROOM3 END

  //ROOM 4
firebase.firestore().collection("room4").onSnapshot( (querySnapshot)=>{
    document.getElementById('room4').innerHTML='';
    querySnapshot.forEach((doc)=>{
  
      console.log(doc.id, " => ", doc.data());
      document.getElementById('room4').innerHTML+=`
      <tr>
      <td>${doc.id}</td>
      <td>${doc.data().idClient}</td>
      <td>${doc.data().day}</td>
      <td>$ ${doc.data().price}.00</td>
      <td>
      <button class="btn btn-danger" onclick="deletec1(4,'${doc.id}')" >X</button>
      </td>
      </tr>
      `
    });
  });
  //ROOM4 END

//   Không nhận xe
function deletec1(room,id) {
    console.log(room,id)
    firebase.firestore().collection(`room${room}`).doc(id).delete().then(function() {
        Swal.fire({
            title: 'Bạn có chắc không nhận hợp đòng thuê xe? ',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Chắn chắc',
            denyButtonText: `Không`,
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              Swal.fire('Đã xóa', '', 'success')
            } else if (result.isDenied) {
              Swal.fire('Changes are not saved', '', 'info')
            }
          })
    }).catch(()=>{
    console.log('Lỗi')
  })
  }


//   EndXoas

firebase.firestore().collection("clients").onSnapshot( (querySnapshot)=>{
    document.getElementById('clientst').innerHTML='';
    querySnapshot.forEach((doc)=>{
  
      console.log(doc.id, " => ", doc.data());
      document.getElementById('clientst').innerHTML+=`
      <tr>
      <td>${doc.id}</td>
      <td>${doc.data().name}</td>
      <td>${doc.data().lastname}</td>
      <td>${doc.data().email}.00</td>
      </tr>
      `
    });
  });

