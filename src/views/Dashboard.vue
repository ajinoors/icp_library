<template>
  <div class="dashboard">
    <div id="wrapper">
      <!-- Sidebar -->
      <sidebar />
      <!-- End of Sidebar -->

      <!-- Content Wrapper -->
      <div id="content-wrapper" class="d-flex flex-column">
        <!-- Main Content -->
        <div id="content">
          <!-- Topbar -->
          <navbar />
          <!-- End of Topbar -->

          <!-- Begin Page Content -->
          <div class="container-fluid">
            <!-- <h1 class="h3 mb-2 text-gray-800">Book List</h1> -->

            <div>
              <b-button
                id="show-btn"
                variant="success"
                class="mb-4"
                @click="$bvModal.show('modal-addNew')"
                >Add New Book</b-button
              >

              <b-modal id="modal-addNew" hide-footer>
                <template #modal-title> Add New Book </template>
                <div class="d-block">
                  <b-form>
                    <!-- <b-form-group id="addID" label="ID :" label-for="addID">
                      <b-form-input
                        id="addID"
                        placeholder="Book ID"
                        required
                      ></b-form-input>
                    </b-form-group> -->
                    <b-form-group
                      id="addName"
                      label="Name :"
                      label-for="addName"
                    >
                      <b-form-input
                        id="addName"
                        placeholder="Book Name"
                        required
                        v-model="addBookName"
                      ></b-form-input>
                    </b-form-group>
                    <b-form-group
                      id="addDescription"
                      label="Description :"
                      label-for="addDescription"
                    >
                      <b-form-textarea
                        id="addDescription"
                        size="sm"
                        placeholder="Book Description"
                        required
                        v-model="addBookDescription"
                      ></b-form-textarea>
                    </b-form-group>

                    <b-button @click="setAddNew" block type="submit" variant="primary"
                      >Submit</b-button
                    >
                  </b-form>
                </div>
                <b-button
                  class="mt-3"
                  block
                  @click="$bvModal.hide('modal-addNew')"
                  >Close</b-button
                >
              </b-modal>
            </div>

            <!-- DataTales Example -->
            <div class="card shadow mb-4">
              <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">
                  Book List
                </h6>
              </div>
              <div class="card-body">
                <div class="table-responsive">
                  <table
                    class="table table-bordered"
                    id="dataTable"
                    width="100%"
                    cellspacing="0"
                  >
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tfoot>
                      <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Action</th>
                      </tr>
                    </tfoot>
                    <tbody>
                      <tr v-for="book in book" :key="book.id">
                        <td>{{book.id}}</td>
                        <td>{{book.name}}</td>
                        <td>{{book.description}}</td>
                        <td class="d-flex justify-content-around">
                          <p class="h4 mb-2">
                            <b-button
                              variant="light"
                              class="btn-action"
                              @click="setBookDetails(book.id)"
                              
                              ><b-icon
                                icon="eye"
                                style="color: #7952b3"
                              ></b-icon
                            ></b-button>
                          </p>
                          <p class="h4 mb-2">
                            <b-button variant="light" class="btn-action"
                            @click="showModalEdit(book.id,book.name,book.description)"
                              ><b-icon
                                icon="box-arrow-in-down-right"
                                style="color: #7952b3"
                              ></b-icon>
                            </b-button>
                          </p>
                          
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <b-modal id="modal-description" hide-footer>
              <template #modal-title> Book Details </template>
              <div class="d-block">
                <b-row >
                  <b-col class="justify-content-between" sm="4">
                    <span> ID : </span>
                  </b-col>
                  <b-col sm="8">
                    <span>{{bookDetails.id}}</span>
                  </b-col>
                </b-row>
                <b-row class="mt-2">
                  <b-col sm="4">
                    <span> Name : </span>
                  </b-col>
                  <b-col sm="8">
                    <span>{{bookDetails.name}}</span>
                  </b-col>
                </b-row>
                <b-row class="mt-2" >
                  <b-col sm="4">
                    <span> Description : </span>
                  </b-col>
                  <b-col sm="8">
                    <span>{{bookDetails.description}}</span>
                  </b-col>
                </b-row>
              </div>
              <b-button
                class="mt-3"
                block
                @click="$bvModal.hide('modal-description')"
                >Close</b-button
              >
            </b-modal>

            <b-modal id="modal-Edit" hide-footer>
                <template #modal-title> Edit Book </template>
                <div class="d-block">
                  <b-form>
                    <!-- <b-form-group id="addID" label="ID :" label-for="addID">
                      <b-form-input
                        id="addID"
                        placeholder="Book ID"
                        required
                      ></b-form-input>
                    </b-form-group> -->
                    <b-form-group
                      id="editName"
                      label="Name :"
                      label-for="editName"
                    >
                      <b-form-input
                        id="editName"
                        placeholder="Book Name"
                        required
                        v-model="editBookName"
                      ></b-form-input>
                    </b-form-group>
                    <b-form-group
                      id="editDescription"
                      label="Description :"
                      label-for="editDescription"
                    >
                      <b-form-textarea
                        id="editDescription"
                        size="sm"
                        placeholder="Book Description"
                        required
                        v-model="editBookDescription"
                      ></b-form-textarea>
                    </b-form-group>

                    <b-button @click="setEdit" block type="submit" variant="primary"
                      >Submit</b-button
                    >
                  </b-form>
                </div>
                <b-button
                  class="mt-3"
                  block
                  @click="$bvModal.hide('modal-Edit')"
                  >Close</b-button
                >
              </b-modal>


          </div>
          <!-- /.container-fluid -->
        </div>
        <!-- End of Main Content -->
      </div>
      <!-- End of Content Wrapper -->
    </div>
  </div>
</template>

<script>
import navbar from "@/components/navbar.vue";
import sidebar from "@/components/sidebar.vue";
import axios from "axios";
export default {
  name: "Dashboard",
  components: {
    navbar,
    sidebar,
  },
  data() {
    return {
        book:[],
        bookDetails:[],
        token:'',
        addBookDescription:'',
        addBookName:'',
        editBookDescription:'',
        editBookName:'',
        recentBookId:'',
        recentBookName:'',
        recentBookDescription:''

    };
  },

  methods:{
setBook(data) {
      this.book = data;
    //   console.log(this.book)
    },
    setBookDetails(id){
        this.$bvModal.show('modal-description')
      axios.get('/books/detail?token='+this.token+'&id='+id,  {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      proxy: {
        '/books': {
          target: 'https://test.incenplus.com/',
          changeOrigin: true,
          pathRewrite: {
            '^/books': 'books'
          }
        },

      }
    }).then((response) => {
        this.bookDetails=response.data.data;
    //   console.log(response.data.data)
      
    })
    },

   setAddNew(event){
      event.preventDefault()
      
    axios.post('/books/insert?token='+this.token, 'name='+this.addBookName+'&description='+this.addBookDescription, {headers: {'Content-Type': 'application/x-www-form-urlencoded'}})
    .then((response) => {
      
      console.log(response.data.data)
      this.$bvModal.hide('modal-addNew')

       axios.get('/books?token='+localStorage.getItem('name'),  {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      proxy: {
        '/books': {
          target: 'https://test.incenplus.com/',
          changeOrigin: true,
          pathRewrite: {
            '^/books': 'books'
          }
        },

      }
    }).then((response) => {
        this.setBook(response.data.data.books);
    //   console.log(response.data.data.books)
    })
    this.addBookName=''
    this.addBookDescription=''
       
       
    })

  },

  showModalEdit(id,name,description){
this.$bvModal.show('modal-Edit')
this.editBookId=id,
        this.editBookName=name,
        this.editBookDescription=description

  },

setEdit(event){
      event.preventDefault()
    this.$bvModal.show('modal-Edit')
      
    axios.post('/books/edit?token='+this.token, 'id='+this.editBookId+'&name='+this.editBookName+'&description='+this.editBookDescription, {headers: {'Content-Type': 'application/x-www-form-urlencoded'}})
    .then(() => {
      axios.get('/books?token='+localStorage.getItem('name'),  {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      proxy: {
        '/books': {
          target: 'https://test.incenplus.com/',
          changeOrigin: true,
          pathRewrite: {
            '^/books': 'books'
          }
        },

      }
    }).then((response) => {
        this.setBook(response.data.data.books);
    //   console.log(response.data.data.books)
    })
      
      this.$bvModal.hide('modal-Edit')
      
       
       
    })

  }

  },
  mounted(){
     axios.get('/books?token='+localStorage.getItem('name'),  {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      proxy: {
        '/books': {
          target: 'https://test.incenplus.com/',
          changeOrigin: true,
          pathRewrite: {
            '^/books': 'books'
          }
        },

      }
    }).then((response) => {
        this.setBook(response.data.data.books);
    //   console.log(response.data.data.books)
    })

    
       this.token=localStorage.getItem('name')
       console.log(this.token)

  }
};
</script>

<style>
</style>