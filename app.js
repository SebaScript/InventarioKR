const firebaseConfig = {
    apiKey: "AIzaSyDFjlX0aORMj7g3K4mp5CejHkXGNbkYXSA",
    authDomain: "inventario-kr.firebaseapp.com",
    projectId: "inventario-kr",
    storageBucket: "inventario-kr.appspot.com",
    messagingSenderId: "239589442494",
    appId: "1:239589442494:web:1f53aa3e47b17ebe7cefef",
    measurementId: "G-7QM6M2CTNE"
  };


const openAddModal = document.getElementById('openAddModal')
const addModal = document.getElementById('addModal')
const closeAddModal = document.getElementById('closeAddModal')
const addForm = document.getElementById('addArticleForm')

const showAddModal = () =>{
    addModal.classList.toggle('is-active')
}

openAddModal.addEventListener('click', showAddModal)
closeAddModal.addEventListener('click', showAddModal)
