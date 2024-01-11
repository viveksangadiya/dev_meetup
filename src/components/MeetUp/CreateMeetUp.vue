<template>
  <v-sheet width="600" class="mx-auto">
    <h1>Create New MeetUp</h1>
    <v-form fast-fail @submit.prevent="submitFormData">
      <v-text-field
        v-model="title"
        label="Title"
        required
      ></v-text-field>

      <v-text-field
        v-model="location"
        label="Location"
        :rules="lastNameRules"
        required
      ></v-text-field>

      <v-text-field
        v-model="imageUrl"
        label="Image Url"
        required
      ></v-text-field>
       <v-flex>
        <img v-if="imageUrl" :src="imageUrl" height="200" alt="Image Preview" />
      </v-flex>
      <v-textarea
        v-model="description"
        label="Description"
        multi-line
        required
      ></v-textarea>
      
      <v-btn type="submit" block class="mt-2 info bg-primary" :disabled="!formIsValid">Submit</v-btn>
    </v-form>
  </v-sheet>
</template>

<script>
export default {
   data(){
     return{
        title:'',
        location:'',
        imageUrl:'',
        description:''
     }
   },
   computed:{
    formIsValid(){
        return this.title!= "" && this.location != "" && this.imageUrl != "" && this.description != ""
    }
   },
   methods:{
        submitFormData(){
            const formData={
                title:this.title,
                location:this.location,
                imageUrl:this.imageUrl,
                description:this.description,
                date:new Date()
            }
            console.log(formData)
            this.$store.dispatch('createMeetUp',formData)
        }
   }
}
</script>