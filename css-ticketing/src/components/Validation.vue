<template>
    <div>
        <!-- only showing this div if the errors array sin't empty -->
        <div class="alert alert-danger" v-show="errors.length > 0">
            <!-- looping over the errors array and showing everything in it -->
            <li v-for="error in errors" v-bind:key="error.id">{{error}}</li>
        </div>
    </div>
</template>


<script>
export default {
    name: "Validation",
    props: {
        //getting the erros array from out parent component
        errors: Array
    }
}
</script> 