<template>
    <div>
        <div class="alert alert-danger" v-show="errors.length > 0">
            <li v-for="error in errors" v-bind:key="error.id">{{error}}</li>
        </div>
    </div>
</template>


<script>
export default {
    name: "Validation",
    props: {
        errors: Array
    }
}
</script> 