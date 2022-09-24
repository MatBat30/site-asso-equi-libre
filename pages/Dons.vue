<template>
<v-container>

  <div id="paypal-donate-button-container"></div>

  <script>
    PayPal.Donation.Button({

      hosted_button_id: 'YOUR_SANDBOX_HOSTED_BUTTON_ID',
      business: 'YOUR_EMAIL_OR_PAYERID',
      image: {
        src: 'https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif',
        title: 'PayPal - The safer, easier way to pay online!',
        alt: 'Donate with PayPal button'
      },
      onComplete: function (params) {
        // Your onComplete handler
      },
    }).render('#paypal-donate-button-container');
  </script>

</v-container>

</template>