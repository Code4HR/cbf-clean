Meteor.methods({
  //server side, add form data to db collection, after it's validated
  //form data on client may have already been validated, and sent via
  //Meteor DDP to server, where it's validated again here
  logReport: function (data) {
    Regulate.form.validate(data, function (error, data) {
      if (error) {
        // console.log('Server side validation failed.');
      } else {
        // console.log('Server side validation passed!');
        // console.log(data);

        // Regulate.js isn't handeling the checkbox correctly
        // TODO: improve this to be less hacky or replace Regulate.js validation
        var trashPickup = _.isUndefined(data[11]) ? false : true;

        ZoneReports.insert({
          zoneCaptain: data[0].value,
          partner: data[1].value,
          zone: data[2].value,
          volunteers: data[3].value,
          poundsCollected: data[4].value,
          milesCleaned: data[5].value,
          mostUnusualItem: data[6].value,
          mostCommonItem: data[7].value,
          largestItem: data[8].value,
          activeMilitary: data[9].value,
          boats: data[10].value,
          trashPickup: trashPickup,
          createdAt: new Date()
        });
      }
    });
  }
});

// Sample Data
// [ { name: 'zoneCaptain', value: 'bret' },
//   { name: 'partner', value: '--Choose Your Partner Org--' },
//   { name: 'zone', value: 'me' },
//   { name: 'volunteers', value: '1' },
//   { name: 'poundsCollected', value: '2' },
//   { name: 'milesCleaned', value: '3' },
//   { name: 'mostUnusualItem', value: '' },
//   { name: 'mostCommonItem', value: '' },
//   { name: 'largestItem', value: '' },
//   { name: 'activeMilitary', value: '' },
//   { name: 'boats', value: '' } ]
