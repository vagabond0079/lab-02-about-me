'use strict';

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
if ((ranField.trim().toLowerCase() == 'yes') || (ranField.trim().toLowerCase() == 'y')) {
  alert('I did indeed. It was back in 2009 and I had just come back from a year of traveling after getting out of the Navy. I started volunteering for Mike McGinn and ended up running his field operation, which is all the phone calls, door knocking, and campaign literature dropping that goes on in any good campaign. He ended up winning and I went to City Hall with him for a couple years.');
} else {
  alert('While it seems like someone else lived that life, I actually did that. It was back in 2009 and I had just come back from a year of traveling after getting out of the Navy. I started volunteering for Mike McGinn and ended up running his field operation, which is all the phone calls, door knocking, and campaign literature dropping that goes on in any good campaign. He ended up winning and I went to City Hall with him for a couple years.');
}

var orgAg = prompt('Do I hope to use my coding skills to write software for the organic farming industry?');
console.log('orgAg was ' + orgAg);
if ((orgAg.trim().toLowerCase() == 'yes') || (orgAg.trim().toLowerCase() == 'y')) {
  alert('Yeah, I do. After a couple years in organic ag, I recognize a lot of need for tech that\'s going unmet. I wouldn\'t say this is a certainty, but I can see a use for my skills that would still be in alignment with my values here.');
} else {
  alert('Well, I can\'t say this is my life\'s passion or my reason for getting into coding, but yes, I can imagine writing software for the non-profit and organic agricultural sector. After a couple years in organic ag, I recognize a lot of need for tech that\'s going unmet. I wouldn\'t say this is a certainty, but I can see a use for my skills that would still be in alignment with my values here.');
}

var goBerlin = prompt('Might I be living in Berlin by this time next year?');
console.log('goBerlin was ' + goBerlin);
if ((goBerlin.trim().toLowerCase() == 'yes') || (goBerlin.trim().toLowerCase() == 'y')) {
  alert('There may be a chance I\'ll be in Berlin, yes. I have an old Navy friend who has lived there for the past decade and feels pretty confident he could get me a job as a software developer there if I want one. So that\'s cool.');
} else {
  alert('Definitely not a sure thing, but actually there may be a chance I\'ll be in Berlin after graduating from Code Fellows. I have an old Navy friend who has lived there for the past decade and feels pretty confident he could get me a job as a software developer there if I want one. So that\'s cool.');
}
