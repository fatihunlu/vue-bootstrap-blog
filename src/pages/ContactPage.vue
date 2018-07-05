<template>
    <div class="sample row">
        <div class="col-sm-2"></div>
        <b-form @submit="onSubmit" @reset="onReset" v-if="show" class="col-sm-8">
            <b-form-group id="emailGroup"
                            label="Email address:"
                            label-for="emailInput"
                            description="We'll never share your email with anyone else.">
                <b-form-input id="emailInput"
                            type="email"
                            v-model="form.email"
                            required
                            placeholder="Enter email">
                </b-form-input>
            </b-form-group>

            <b-form-group id="fullnameGroup"
                            label="Your Name:"
                            label-for="fullnameInput">
                <b-form-input id="fullnameInput"
                            type="text"
                            v-model="form.fullname"
                            required
                            placeholder="Enter name">
                </b-form-input>
            </b-form-group>

            <b-form-group id="messageGroup"
                            label="Message:"
                            label-for="messageInput"
                            description="Tell us what you think.">
                <b-form-textarea id="messageInput"
                                v-model="form.message"
                                placeholder="Tell us what you think."
                                :rows="7"
                                :max-rows="13">
                </b-form-textarea>
            </b-form-group>

            <b-button type="submit" variant="primary">Submit</b-button>
            <b-button type="reset" variant="danger">Reset</b-button>
        </b-form>
        <div class="col-sm-2"></div>        
    </div>
</template>

<script>
export default {
    data() {
        return {
            show: true,
            form:  {
                email : '',
                fullname: '',
                message: ''
            }
        }
    },

    methods: {
        onSubmit(evt) {
            const vm = this;

            evt.preventDefault();
            alert(JSON.stringify(vm.form));
        },

        onReset(evt) {
            const vm = this;

            evt.preventDefault();

            /* Reset our form values */
            vm.form.email = '';
            vm.form.message = '';
            vm.form.fullname = '';
            /* Trick to reset/clear native browser form validation state */
            vm.show = false;
            vm.$nextTick(() => { vm.show = true });
        }
    }
}
</script>

<style scoped>
    .sample {
        height: 500px;
        text-align: center;
    }
</style>
