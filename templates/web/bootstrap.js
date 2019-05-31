// If the browser natively handles custom elements include the adapter
if (window.customElements) document.write('<script type="text/javascript" src="https://developers.nuskin.com/custom-elements-es5-adapter.js"></script>');

// Bring in the bundles, stylesheets and meta data
document.write(
  `<script  type="text/javascript" src="https://developers.nuskin.com/webcomponents-loader.js"></script>
  <script  type="text/javascript" src="https://developers.nuskin.com/vendor.bundle.js"></script>
  <script  type="text/javascript" src="https://developers.nuskin.com/aem.bundle.js"></script>
  <script  type="text/javascript" src="https://developers.nuskin.com/devportal.bundle.js"></script>
  <link rel="stylesheet" href="https://developers.nuskin.com/aem-bundle.css"/>

  <META NAME="ROBOTS" CONTENT="NOINDEX" />
  <META NAME="ROBOTS" CONTENT="NOFOLLOW" />
  <META NAME="ROBOTS" CONTENT="NOARCHIVE" />
  <META NAME="ROBOTS" CONTENT="NOSNIPPET" />
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no">
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <base href="/">
  <title>Nuskin Playground</title>
  <script>
      nuskin.init({
          country: "US",
          baseUrl: "https://test.nuskin.com",
          language: "en"
      });
      // if (!nuskin.account.AccountManager.isLoggedIn()) {
      //     nuskin.account.AccountManager.authenticate("usdist", "Abcd1234");
      // }
      $.subscribe(nuskin.events.authentication.valid, function(data) {
          console.log("Valid authentication!");
      });
  </script>`
);

// common-app-styles will not be applied to the playground currently due 
// to custom-global-styles only including common-transition-styles
const $_documentContainer = document.createElement('div');
$_documentContainer.setAttribute('id', 'playgroundBootstrapStyles');
$_documentContainer.setAttribute('style', 'display: none;');
$_documentContainer.innerHTML = `
<custom-style>
  <style is="custom-style" include="common-app-styles"></style>
</custom-style>
`;
document.head.appendChild($_documentContainer);