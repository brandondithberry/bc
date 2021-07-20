<template>
  <div>
    <!-- First, we make sure we don't have a bot -->
    <div v-if="isBot">
      Great! You have proven to be a bot! I've destroyed the form from the page,
      and acted like you successfully sent the form.
    </div>
    <!-- Then we show the rest of the component if not. -->
    <div v-else>
      <div v-if="success" class="success">
        Great! Your message has been sent successfully. I will try to respond
        quickly.
      </div>
      <form v-else @submit.prevent="sendMessage">
        <div v-if="errored">
          Bummer, Something went wrong. Did you fill out all of the fields?
        </div>
        <div>
          <label for="full_name">Full name*</label>
          <div class="relative rounded-md shadow-sm">
            <input
              id="full_name"
              v-model="name"
              required
              name="name"
              placeholder="Full name*"
            />
          </div>
        </div>
        <!-- The whole field and label is set to display hidden with Tailwind CSS -->
        <div class="hidden">
          <label>Don’t fill this out if you're human: </label>
          <input
            v-model="bot"
            name="bot-field"
            placeholder="This field is only for the robots."
          />
        </div>
        <div>
          <label for="email">Email*</label>
          <div>
            <input
              id="email"
              v-model="email"
              required
              name="email"
              type="email"
              placeholder="Email*"
            />
          </div>
        </div>
        <div>
          <label for="phone">Phone</label>
          <div>
            <input
              id="phone"
              v-model="phone"
              name="phone"
              placeholder="Phone"
            />
          </div>
        </div>
        <div>
          <label for="message">Message*</label>
          <div>
            <textarea
              id="message"
              v-model="message"
              required
              name="message"
              rows="4"
              placeholder="Message*"
            ></textarea>
          </div>
        </div>
        <div>
          <span>
            <button class="btn" type="submit">
              {{ loading ? "Sending Message..." : "Send" }}
            </button>
          </span>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      success: false,
      errored: false,
      isBot: false,
      name: "",
      bot: null,
      email: "",
      phone: "",
      message: "",
    };
  },
  methods: {
    sendMessage() {
      this.loading = true;
      /* This is where I check if the bot field has a value. 
         Only bots will fill this out. */
      if (this.bot != null) {
        this.isBot = true;
      }
      // Otherwise the form will try to go through.
      else {
        this.$http
          .post("http://localhost:1337/messages", {
            name: this.name,
            email: this.email,
            phone: this.phone,
            message: this.message,
          })
          .then((response) => {
            this.success = true;
            this.errored = false;
          })
          .catch((error) => {
            this.errored = true;
          })
          .finally(() => {
            this.loading = false;
          });
      }
    },
  },
};
</script>
