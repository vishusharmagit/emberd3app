import Ember from 'ember';

export default Ember.Controller.extend({
	//isDisabled : true,
	emailAddress: '',
	actualEmailAddress: Ember.computed('emailAddress', function() { 
		console.log('actualEmailAddress function is called: ', this.get('emailAddress'));
	}),

	emailAddressChanged: Ember.observer('emailAddress', function() { 
		console.log('observer is called', this.get('emailAddress')); 
	}),
	/*isDisabled : Ember.computed('emailAddress', function() {
		return this.get('emailAddress') === '';
	})*/
	//isDisabled: Ember.computed.empty('emailAddress')
	
	isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  	isDisabled: Ember.computed.not('isValid'),
  	actions : {
  		saveInvitation () {
  			/*alert(`Saving of the following email address is i progress: ${this.get('emailAddress')}`);
      		this.set('responseMessage', `Thank you! We've just saved your email address: ${this.get('emailAddress')}`);
      		this.set('emailAddress', '');*/
      		const email = this.get('emailAddress');

			const newInvitation = this.store.createRecord('invitation', { email: email });
			//newInvitation.save();
			/*newInvitation.save().then(function(response) {
			  console.log('Email address is saved.')
			});*/

			/*this.set('responseMessage', `Thank you! We've just saved your email address: ${this.get('emailAddress')}`);
			this.set('emailAddress', '');*/
			/*newInvitation.save().then(function(response) {
			  this.set('responseMessage', `Thank you! We've just saved your email address: ${this.get('emailAddress')}`);
			  this.set('emailAddress', '');
			}.bind(this));*/

			/*newInvitation.save().then((response) => {
				this.set('responseMessage', `Thank you! We saved your email address with the following id: ${this.get('emailAddress')}`);
				this.set('emailAddress', '');
			});*/
			newInvitation.save().then((response) => {
				this.set('responseMessage', `Thank you! We saved your email address with the following id: ${response.get('id')}`);
				this.set('emailAddress', '');
			});
  		}
  	}
});
