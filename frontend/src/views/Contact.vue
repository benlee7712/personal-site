<template>
  <div class="w-full flex justify-center">
    <div class=" max-w-[310px] sm:max-w-[450px] md:max-w-[530px] lg:max-w-[650px] 2xl:max-w-[850px] mt-[12.5vh]">
      <v-form ref="form" class="inline-block w-full mt-[-12px] sm:mt-[-16px]">
        <v-container>
          <v-row>
            <v-col>
              <h1 class="text-6xl sm:text-7xl md:text-8xl lg:text-10xl 2xl:text-11xl font-oswald float-left pb-6 w-full">TALK TO ME</h1>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-text-field
                v-model="name"
                :rules="rules.notEmpty"
                label="Name"
                class="font-outfit"
                required
                :density="inputDensity"
              ></v-text-field>
            </v-col>
            <v-col>
              <v-text-field
                v-model="email"
                :rules="rules.email"
                label="Email"
                class="font-outfit"
                required
                :density="inputDensity"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="pt-0">
              <v-btn-toggle
                v-model="message_type"
                color="#E13F3F"
                :rules="rules.notEmpty"
                group
                class="w-full"
              >
                <v-btn class="w-[20%] md:w-[33.3%]" :height="btnHeight">
                  <span class="font-outfit text-2xs sm:text-xs lg:text-base">PRINTS</span>
                </v-btn>
                <v-btn class="w-[36%] md:w-[33.3%]" :height="btnHeight">
                  <span class="font-outfit text-2xs sm:text-xs lg:text-base">COMMISSIONS</span>
                </v-btn>
                <v-btn class="w-[114px] sm:w-[44%] md:w-[33.3%] px-[8px] md:px-4" :height="btnHeight">
                  <span class="font-outfit text-2xs sm:text-xs lg:text-base">SOMETHING ELSE</span>
                </v-btn>
              </v-btn-toggle>
            </v-col>
          </v-row>
          <br/>
          <v-row>
            <v-col>
              <v-textarea
                v-model="message"
                counter
                label="Message"
                class="font-outfit"
                :rules="rules.notEmpty"
                single-line
              ></v-textarea>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-btn
                class="white--text mb-4 font-outfit text-xs sm:text-base text-off_white"
                block
                flat
                color="#E13F3F"
                @click="submit"
              >
                <span v-if="sending === false">Send</span>
                <v-progress-circular
                color="grey-lighten-4"
                indeterminate
                v-if="sending === true"
                ></v-progress-circular>
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </div>
  </div>
</template>
<script>
  import { computed } from 'vue'
  import { useDisplay } from 'vuetify'
  import axios from 'axios'


  const messageTypeMap = {
    0: "Prints",
    1: "Commissions",
    2: "Something Else",
  }

  export default {
    setup () {
      const { name } = useDisplay()

      const btnHeight = computed(() => {
        switch (name.value) {
          case 'xs': return 36
          case 'sm': return 36
          case 'md': return 48
          case 'lg': return 48
          case 'xl': return 48
          case 'xxl': return 48
        }

        return undefined
      })

      const inputDensity = computed(() => {
        switch (name.value) {
          case 'xs': return "compact"
          case 'sm': return "compact"
          case 'md': return "default"
          case 'lg': return "default"
          case 'xl': return "default"
          case 'xxl': return "default"
        }

        return undefined
      })

      return { btnHeight, inputDensity }
    },
    data: () => ({
      name: '',
      rules: {},
      email: '',
      message: '',
      message_type: null,
      sending: false,
    }),

    methods: {
      async validate () {
        const { valid } = await this.$refs.form.validate()

        return valid
      },
      async submit (event) {
        this.rules = {
          notEmpty: [v => !!v || 'Required'],
          email: [
            value => !!value || 'Required',
            value => {
              const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
              return pattern.test(value) || 'Invalid email'
            },
            value => (value || '').length <= 64 || 'Max 64 characters',
          ]
        }
        let valid = await this.$refs.form.validate()

        this.$nextTick(() => {
          var form = this.$refs.form;
          var that = this;
          if (valid.valid) {
            that.sending = true;
            axios.post('/submit-contact-form', {
              name: this.name,
              email: this.email,
              message_type: messageTypeMap[this.message_type ?? 2],
              message: this.message,
            })
            .then(function (_response) {
              form.resetValidation();
              form.reset();
              that.message_type = null;
              that.sending = false;
            })
            .catch(function (error) {
              console.log(error);
            });
          }
        })
      },
    },
  }
</script>

<style scoped>
.v-col {
  padding: 8px 8px 0 8px;
}

:deep(.v-field__input) {
  font-size: 0.75rem;
  line-height: 1.5rem;
}

:deep(.v-label.v-field-label) {
  font-size: 0.75rem;
  line-height: 1.5rem;
}

:deep(.v-label.v-field-label--floating) {
  font-size: 0.5625rem;
  line-height: 1.125rem;
}

@media (min-width: 640px) {
    :deep(.v-field__input) {
      font-size: 1rem;
      line-height: 1.5rem;
    }

    :deep(.v-label.v-field-label) {
      font-size: 1rem;
      line-height: 1.5rem;
      }

    :deep(.v-label.v-field-label--floating) {
      font-size: 0.75rem;
      line-height: 1rem;
    }

    .v-col {
      padding: 12px;
    }
}
</style>
