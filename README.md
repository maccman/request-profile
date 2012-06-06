#requestProfile

An idea to access autocomplete data via an API for one-click signups and payment.

![Request Profile](http://f.cl.ly/items/08092L2X0U2k1i321v0R/Screen%20Shot%202012-06-06%20at%206.06.09%20PM.png)

##Example

    var error = function(type){
      console.log('You lose!');
    };

    var success = function(profile){
      Stripe.createToken(profile.card, function(){
        console.log('You payed!');
      });
    };

    navigator.requestProfile(['firstName', 'lastName', 'card'], success, error);