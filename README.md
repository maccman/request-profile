#requestProfile

`requestProfile` is an API to access autocomplete data, to allow one-click signups and payment in the browser.

This Chrome extension is just a proof of concept, but the API looks like this:

    navigator.requestProfile(profileTypes, success, error);

Then the browser pops open a permissions dialog and, if approved, invokes the callback function with the user's data.

![Request Profile](http://f.cl.ly/items/013Z0r2n3M2e3Z1R1j3l/Screen%20Shot%202012-06-06%20at%206.15.16%20PM.png)

You can specify data to be used in the extension's options:

![Options](http://f.cl.ly/items/1x3b441D2Z3l3s3V2U3l/Screen%20Shot%202012-06-06%20at%206.15.31%20PM.png)

##Example

    var error = function(type){ /* ... */ };

    var success = function(profile){
      Stripe.createToken({
        cardNumber: profile.cardNumber
      });
    };

    navigator.requestProfile(['firstName', 'lastName', 'cardNumber'], success, error);

##Installing the extension

1. `git clone git://github.com/maccman/request-profile.git`
1. Go to Chrome -> Extensions, enter developer mode and **Load unpacked extension**.
1. For an example, open `index.html`.