// // Import the functions you need from the SDKs you need

// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js";
// import { getDatabase, ref, set, child, get } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-database.js";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries
// import { getFirestore, collection, query, where, getDocs } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";
// // Your web app's Firebase configuration
var firebaseConfig = {
    // apiKey: "AIzaSyAl9bfYYylB4VBRBJw-xwuQrbHWilm0yG4",
    // authDomain: "kc326-46665.firebaseapp.com",
    // databaseURL: "https://kc326-46665-default-rtdb.firebaseio.com",
    // projectId: "kc326-46665",
    // storageBucket: "kc326-46665.appspot.com",
    // messagingSenderId: "1000211689378",
    // appId: "1:1000211689378:web:862f3fbdab1f9fa2040cfb"
    apiKey: "AIzaSyARV7DnYdYyeERtSZWIE3EewJMZxcg4Itg",
    authDomain: "kc326-3d108.firebaseapp.com",
    projectId: "kc326-3d108",
    storageBucket: "kc326-3d108.appspot.com",
    messagingSenderId: "923442191852",
    appId: "1:923442191852:web:7346512320f5446673f4c9",

  //Điền thông tin Firebase config của cá nhân vào đây
 
};
// Initialize Firebase
// const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore();

//resevation room 1
// onAuthStateChanged(auth, user => {
//     if(user != null) {
//         console.log('logged in!');
//     } else {
//          console.log('No user');
//     }
//  })

// Bắt đầu xe 1
document.getElementById('formroom1').addEventListener('submit',(e)=>{
    e.preventDefault();
    var phone= document.getElementById('room1Phone');
    var name= document.getElementById('room1Name');
    var lastname= document.getElementById('room1Lastname');
    var email= document.getElementById('room1Email');
    var day= document.getElementById('room1day');
    var price= document.getElementById('room1Price');
    document.getElementById("btnroom1").style.visibility = 'hidden';
    firebase.firestore().collection('clients').add({
        name: name.value,
        lastname: lastname.value,
        email: email.value

    })
    .then ((key)=>{
        firebase.firestore().collection('clients').doc(key.id).update({id:key.id})
        .then(()=>{
            firebase.firestore().collection('room1').add({
                day: day.value,
                price: price.value,
                idClient:key.id
            })
            .then((res)=>{
        Swal.fire({
        icon:'success',
        title: `Reservation ID: ${res.id}`
    })
                alert(`Rervation - succes ID:${res.id}` )
                name.value='';
                lastname.value='';
                email.value='';
                day.value='';
                document.getElementById('btnroom1').style.visibility = 'visible';
                $('#ModalRoom1').modal('hide')
            })
        })
    })
})
// Kết thúc xe 1

// Bắt đầu xe 2
document.getElementById('formroom2').addEventListener('submit',(e)=>{
    e.preventDefault();
    var name= document.getElementById('room2Name');
    var lastname= document.getElementById('room2Lastname');
    var email= document.getElementById('room2Email');
    var day= document.getElementById('room2day');
    var price= document.getElementById('room2Price');
    document.getElementById("btnroom2").style.visibility = 'hidden';
    firebase.firestore().collection('clients').add({
        name: name.value,
        lastname: lastname.value,
        email: email.value

    })
    .then ((key)=>{
        firebase.firestore().collection('clients').doc(key.id).update({id:key.id})
        .then(()=>{
            firebase.firestore().collection('room2').add({
                day: day.value,
                price: price.value,
                idClient:key.id
                
                
            })
            .then((res)=>{
        Swal.fire({
        icon:'success',
        title: `Reservation ID: ${res.id}`
    })
                alert(`Rervation - succes ID:${res.id}` )
                name.value='';
                lastname.value='';
                email.value='';
                day.value='';
                document.getElementById('btnroom2').style.visibility = 'visible';
                $('#ModalRoom2').modal('hide')
            })
        })
    })
})
//Kết thúc xe 2

// Bắt đầu xe 3
document.getElementById('formroom3').addEventListener('submit',(e)=>{
    e.preventDefault();
    var name= document.getElementById('room3Name');
    var lastname= document.getElementById('room3Lastname');
    var email= document.getElementById('room3Email');
    var day= document.getElementById('room3day');
    var price= document.getElementById('room3Price');
    document.getElementById("btnroom3").style.visibility = 'hidden';
    firebase.firestore().collection('clients').add({
        name: name.value,
        lastname: lastname.value,
        email: email.value

    })
    .then ((key)=>{
        firebase.firestore().collection('clients').doc(key.id).update({id:key.id})
        .then(()=>{
            firebase.firestore().collection('room3').add({
                day: day.value,
                price: price.value,
                idClient:key.id
            })
            .then((res)=>{
        Swal.fire({
        icon:'success',
        title: `Reservation ID: ${res.id}`
    })
                alert(`Rervation - succes ID:${res.id}` )
                name.value='';
                lastname.value='';
                email.value='';
                day.value='';
                document.getElementById('btnroom3').style.visibility = 'visible';
                $('#ModalRoom3').modal('hide')
            })
        })
    })
})
{/* <kết thúc  xe3 */}
// Bắt đầu xe 4
document.getElementById('formroom4').addEventListener('submit',(e)=>{
    e.preventDefault();
    var name= document.getElementById('room4Name');
    var lastname= document.getElementById('room4Lastname');
    var email= document.getElementById('room4Email');
    var day= document.getElementById('room4day');
    var price= document.getElementById('room4Price');
    document.getElementById("btnroom4").style.visibility = 'hidden';
    firebase.firestore().collection('clients').add({
        name: name.value,
        lastname: lastname.value,
        email: email.value

    })
    .then ((key)=>{
        firebase.firestore().collection('clients').doc(key.id).update({id:key.id})
        .then(()=>{
            firebase.firestore().collection('room4').add({
                day: day.value,
                price: price.value,
                idClient:key.id
            })
            .then((res)=>{
        Swal.fire({
        icon:'success',
        title: `Reservation ID: ${res.id}`
    })
                alert(`Rervation - succes ID:${res.id}` )
                name.value='';
                lastname.value='';
                email.value='';
                day.value='';
                document.getElementById('btnroom4').style.visibility = 'visible';
                $('#ModalRoom4').modal('hide')
            })
        })
    })
})
{/* <kết thúc */}


// Đăng nhập
document.getElementById('formadmin').addEventListener('submit', (e)=>{
    e.preventDefault();
    var user = document.getElementById('adminuser');
    var pass = document.getElementById('adminpass');
    if (user.value == 'a3ty' && pass.value =='a3ty') {
        window.location.href= "admin.html";
    }

});
// Liên hệ
document.getElementById('formcontact').addEventListener('submit', (e)=>{e.preventDefault();
    var user = document.getElementById('contactName');
    var msg = document.getElementById('contactMessage');
    firebase.firestore().collection("contact").add({
        name: user.value,
        msg: msg.value
    })
    .then(function(docRef){
        Swal.fire({
            icon:'success',
            title: `Chúng tôi sẽ sớm liên hệ với bạn `
        })
        $(function (){
            $('#ModalContact').modal('toggle');
        });
        user.value='';
        msg.value="";
    })
    .catch(function(error){
        console.error("Tin nhắn bị lỗi:",error);
    });
});
  

//Kiểm tra xe
document.getElementById('formcheck').addEventListener('submit', (e)=>{
    e.preventDefault();
    document.getElementById('checkr').innerHTML='';
    var id = document.getElementById('checkid');
    var roomc = document.getElementById('roomcheck');

    firebase.firestore().collection(`room${roomc.value}`).doc(id.value).get()
    .then(function(doc) {
        if (doc.exists ) {
            firebase.firestore().collection(`clients`).doc(doc.data().idClient).get().then((doc2) =>{
                console.log("Document data: ", doc.data());
                document.getElementById('checkr').innerHTML+=`
                <hr>
                <h6>Reservation ID: ${doc.id}</h6>
                <h6>Name: ${doc2.data().name}</h6>
                <h6>Last Name: ${doc2.data().lastname}</h6>
                <h6>E-mail: ${doc2.data().email}</h6>
                <h6>Resarvation Day: ${doc.data().day}</h6>
                <h6>Price: ${doc.data().price}</h6>
                `
                
            })
        } else {
            //doc.data() will under in this case
            console.log("Error");
        }
}).catch(function(error) {
    console.log("Error");
});
});

//form cancel
document.getElementById('formcancel').addEventListener('submit', (e)=>{
    e.preventDefault();
    document.getElementById('cancelr').innerHTML='';
    var id = document.getElementById('cancelid');
    var room = document.getElementById('roomcancel');
    console.log(id,room)
    firebase.firestore().collection(`room${room.value}`).doc(id.value).delete().then
    (function(){
        Swal.fire({
            icon:'success',
            title: `Đã xóa`
        })
        
        id.value='';
        room.value='';
        }).catch(()=>{
        console.log('error')
    })
});

    
    
       