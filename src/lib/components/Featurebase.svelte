<script lang="ts">
    import { onMount } from "svelte";
    import { browser } from "$app/environment";
  
    if (browser) {
      let win: any = window;
  
      const script = document.createElement("script");
      script.src = "https://do.featurebase.app/js/sdk.js";
      script.id = "featurebase-sdk";
      document.head.appendChild(script);
  
      onMount(() => {
        if (typeof win.Featurebase !== "function") {
          win.Featurebase = function () {
            (win.Featurebase.q = win.Featurebase.q || []).push(arguments);
          };
        }
        win.Featurebase("initialize_feedback_widget", {
          organization: "tragoslocos", // Replace this with your organization name, copy-paste the subdomain part from your Featurebase workspace url (e.g. https://*yourorg*.featurebase.app)
          theme: "light", // optional
          //placement: "right", // optional - remove to hide the floating button
          locale: "en", // Change the language, view all available languages from https://help.featurebase.app/en/articles/8879098-using-featurebase-in-my-language
          //defaultBoard: "yourboardname", // optional - preselect a board
          metadata: null // Attach session-specific metadata to feedback. Refer to the advanced section for the details: https://help.featurebase.app/en/articles/3774671-advanced#7k8iriyap66 
        });
      });
    }
  </script>
  
<button data-featurebase-feedback>
    <slot /> 
</button>