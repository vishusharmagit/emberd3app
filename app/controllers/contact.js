import Ember from 'ember';

export default Ember.Controller.extend({
	contactEmailAddress:'',
	message:'',
	//isValid: Ember.computed.match('contactEmailAddress', /^.+@.+\..+$/),
	isValidEmail: Ember.computed.match('contactEmailAddress', /^.+@.+\..+$/),
	isValidMessage: Ember.computed.gte('message.length', 5),
  	//isSendDisabled: Ember.computed.not('isValid')
  	isSendDisabled: Ember.computed.and('isValidEmail', 'isValidMessage'),
  	actions : {
  		sendMessage () {
  			/*alert(`We got your message and we’ll get in touch soon on below email: ${this.get('contactEmailAddress')}`);
      		this.set('contactResponseMessage', `Thank you! We will contact on your email address: ${this.get('contactEmailAddress')}`);
      		this.set('contactEmailAddress', '');
      		this.set('message', '');*/
      		const email = this.get('contactEmailAddress');
      		const message = this.get('message');

			const newContact = this.store.createRecord('contact', { email: email, message:message });

			newContact.save().then((response) => {
				//this.set('contactResponseMessage', `Thank you! We will contact on your email address: ${this.get('contactEmailAddress')}`);
				this.set('contactResponseMessage', `Thank you! We will contact on your email address: ${response.get('id')}`);
      			this.set('contactEmailAddress', '');
      			this.set('message', '');
			});
			
  		}
  	}

});
