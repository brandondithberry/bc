<template>
  <div class="contact">
    <h1>Contact</h1>
    <div class="content">
      <p>
        If you want to find out if there are VA Benefits you may be entitled to,
        please feel free to contact us for a free consultation.
      </p>
      <p>
        <b>Phone:</b> (800) 400-2591<br /><b>Email:</b> info@helpwithbenefits.com<br /><b>Fax:</b>
        (888) 201-0091
      </p>
    </div>
    <ContactForm />
  </div>
</template>

<script>
import ContactForm from "../components/ContactForm";

export default {
  components: {
    ContactForm,
  },
};
</script>
