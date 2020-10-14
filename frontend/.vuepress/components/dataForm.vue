<template>
	<div>
		<FormulateForm  v-model="formValues">
		<div class="features" >
      		<div class="feature" >
			<FormulateInput name="firstName"   type="text" label="שם פרטי"/>
			<FormulateInput name="lastName"   type="text" label="שם משפחה"/>
			<FormulateInput name="id"   type="text" label="תעודת זהות"/>
			<FormulateInput name="yearOfBirth"   type="text" label="שנת לידה"/>
			</div>
			<div class="feature" >
			<FormulateInput name="phone"   type="text" label="טלפון"/>
			<FormulateInput name="email"   type="text" label="אימייל"/>
			<FormulateInput type="cityAutocomplete" name="city" label="עיר" />
			<FormulateInput type="submit" label="המשך"/>
			</div>
			</div>
		</FormulateForm>	
	</div>
</template>

<style>
	.formulate-input-element--submit,.formulate-input-element--submit--label, .formulate-input-element--text, .formulate-input-label, .formulate-input-element--cityAutocomplete{
		margin: 10px auto;
    	text-align: center;
	}
	.formulate-input[data-classification='button'] button{
		width: 15em;
		margin: 20px auto;
	}
	h3 {
		text-align: center;
	}
</style>

<script>

export default {

    data() {
      return {
      	formValues: {}
      }
    } 

}
</script>