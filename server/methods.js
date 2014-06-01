Meteor.methods({
  register: function (data) {
    Regulate.form.validate(data, function (error, data) {
      if (error) {
        console.log('Server-side validation failed.');
      } else {
        console.log('Server-side validation passed!');
      }
    });
  }
});
