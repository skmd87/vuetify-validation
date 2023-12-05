<template>
  <v-app>
    <v-container>
      <v-form
        ref="form"
        @submit.prevent="validate"
      >
        <v-card
          max-width="700"
          class="mx-auto"
        >
          <v-card-title>Playground</v-card-title>
          <v-card-text>
            <v-text-field
              v-model="data.required"
              label="Required"
              :rules="[$vv('required').required().validate()]"
            />
            <v-text-field
              v-model="data.minMax"
              label="Min 3 Max 5"
              :rules="[$vv().min(3).max(5).validate()]"
            />
            <v-text-field
              v-model="data.email"
              label="Email"
              :rules="[$vv().email().validate()]"
            />
            <v-text-field
              v-model="data.url"
              label="Url"
              :rules="[$vv().url().validate()]"
            />
            <v-text-field
              v-model="data.number"
              label="Number"
              :rules="[$vv().numeric().validate()]"
            />
            <v-text-field
              v-model="data.digits"
              label="Float"
              :rules="[$vv().numeric().validate()]"
            />
            <v-text-field
              v-model.number="data.price"
              label="Price"
              :rules="[$vv().numeric().validate()]"
            />
            <v-text-field
              v-model="data.dateBetween"
              label="Date Between"
              :rules="[$vv().toDate().between(new Date('2021-01-01'), new Date('2021-12-31')).validate()]"
            />
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn
              type="submit"
              color="primary"
            >
              Submit
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-form>
    </v-container>
  </v-app>
</template>

<script setup>
const form = ref(null)
const data = reactive({
  required: '',
  minMax: '2',
  email: 'user@test',
  url: 'http://tets',
  number: '2',
  digits: '3',
  price: '2.3',
  dateBetween: '2020-01-01',
})
const validate = () => {
  form.value.validate()
}
</script>
