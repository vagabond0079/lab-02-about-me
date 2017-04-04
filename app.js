'use strict';

/* Five questions:

1. I know how to launch a tomahawk missile.
2. I have taught English abroad.
3. I ran the field operation for a successful local political campaign.
4. I'm interested in writing software for the organic agriculture sector.
5. I may be living in Berlin next year.
*/

alert('Let\'s play a little get to know me game. I\'ll ask you five questions and based on my "About Me" page, you tell me whether you think they\'re true or not.');

var missile = prompt('Do I know how to launch a tomahawk missile?');
console.log('missile was ' + missile);
if ((missile.trim().toLowerCase() == 'yes') || (missile.trim().toLowerCase() == 'y')) {
  alert('It\'s true. I used to be a Tomahawk Launch Officer on my ship. Never had to fire one, I\'m glad to say.');
} else {
  alert('Actually, I do. I used to be a Tomahawk Launch Officer on my ship. Never had to fire one, I\'m glad to say.');
}

var teachEnglish = prompt('Have I ever taught English abroad?');
console.log('teachEnglish was ' + teachEnglish);
if ((teachEnglish.trim().toLowerCase() == 'no') || (teachEnglish.trim().toLowerCase() == 'n')) {
  alert('You\'re right, I never have. I just spent a month in San Diego getting a certification to teach English abroad and I hope to have the opportunity to use it in the near future.');
} else {
  alert('Nope. While I have a CELTA certification to teach, I just got it recently and haven\'t had the chance to use it yet.');
}

var ranField = prompt('Did I run the field operation for a successful local political campaign?');
console.log('ranField was ' + ranField);
if ((ranField.trim().toLowerCase() == 'no') || (ranField.trim().toLowerCase() == 'n')) {
  alert('');
} else {
  alert('');
}

var orgAg = prompt('Do I hope to use my coding skills to write software for the organic farming industry?');
console.log('orgAg was ' + orgAg);
if ((orgAg.trim().toLowerCase() == 'no') || (orgAg.trim().toLowerCase() == 'n')) {
  alert('');
} else {
  alert('');
}

var goBerlin = prompt('Might I be living in Berlin by this time next year?');
console.log('goBerlin was ' + goBerlin);
if ((goBerlin.trim().toLowerCase() == 'no') || (goBerlin.trim().toLowerCase() == 'n')) {
  alert('');
} else {
  alert('');
}
