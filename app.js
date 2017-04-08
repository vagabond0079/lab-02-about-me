'use strict';

window.onload = function(){

  var correctAnswers = 0;
  var userName = prompt('Hello there, thanks for visiting my "About Me" page. What\'s your name?');

  alert('Let\'s play a little get to know me game. I\'ll ask you five questions and based on my "About Me" page, you tell me whether you think they\'re true or not.');

  function missileQuestion (){
    var missile = prompt('Do I know how to launch a tomahawk missile?');
    console.log('missile was ' + missile);
    if (missile == null) {
      alert('Actually, I do. I used to be a Tomahawk Launch Officer on my ship. Never had to fire one, I\'m glad to say.');
    } else if ((missile.trim().toLowerCase() == 'yes') || (missile.trim().toLowerCase() == 'y')) {
      alert('It\'s true. I used to be a Tomahawk Launch Officer on my ship. Never had to fire one, I\'m glad to say.');
      correctAnswers++
    } else {
      alert('Actually, I do. I used to be a Tomahawk Launch Officer on my ship. Never had to fire one, I\'m glad to say.');
    }
  }

  function teachQuestion (){
    var teachEnglish = prompt('Have I ever taught English abroad?');
    console.log('teachEnglish was ' + teachEnglish);
    if (teachEnglish == null) {
      alert('Nope. While I have a CELTA certification to teach, I just got it recently and haven\'t had the chance to use it yet.');
    } else if ((teachEnglish.trim().toLowerCase() == 'no') || (teachEnglish.trim().toLowerCase() == 'n')) {
      alert('You\'re right, I never have. I just spent a month in San Diego getting a certification to teach English abroad and I hope to have the opportunity to use it in the near future.');
      correctAnswers++
    } else {
      alert('Nope. While I have a CELTA certification to teach, I just got it recently and haven\'t had the chance to use it yet.');
    }
  }

  function fieldQuestion (){
    var ranField = prompt('Did I run the field operation for a successful local political campaign?');
    console.log('ranField was ' + ranField);
    if (ranField == null) {
      alert('While it seems like someone else lived that life, I actually did that. It was back in 2009 and I had just come back from a year of traveling after getting out of the Navy. I started volunteering for Mike McGinn and ended up running his field operation, which is all the phone calls, door knocking, and campaign literature dropping that goes on in any good campaign. He ended up winning and I went to City Hall with him for a couple years.');
    } else if ((ranField.trim().toLowerCase() == 'yes') || (ranField.trim().toLowerCase() == 'y')) {
      alert('I did indeed. It was back in 2009 and I had just come back from a year of traveling after getting out of the Navy. I started volunteering for Mike McGinn and ended up running his field operation, which is all the phone calls, door knocking, and campaign literature dropping that goes on in any good campaign. He ended up winning and I went to City Hall with him for a couple years.');
      correctAnswers++
    } else {
      alert('While it seems like someone else lived that life, I actually did that. It was back in 2009 and I had just come back from a year of traveling after getting out of the Navy. I started volunteering for Mike McGinn and ended up running his field operation, which is all the phone calls, door knocking, and campaign literature dropping that goes on in any good campaign. He ended up winning and I went to City Hall with him for a couple years.');
    }
  }

  function agQuestion (){
    var orgAg = prompt('Do I hope to use my coding skills to write software for the organic farming industry?');
    console.log('orgAg was ' + orgAg);
    if (orgAg == null) {
      alert('Well, I can\'t say this is my life\'s passion or my reason for getting into coding, but yes, I can imagine writing software for the non-profit and organic agricultural sector. After a couple years in organic ag, I recognize a lot of need for tech that\'s going unmet. I wouldn\'t say this is a certainty, but I can see a use for my skills that would still be in alignment with my values here.');
    } else if ((orgAg.trim().toLowerCase() == 'yes') || (orgAg.trim().toLowerCase() == 'y')) {
      alert('Yeah, I do. After a couple years in organic ag, I recognize a lot of need for tech that\'s going unmet. I wouldn\'t say this is a certainty, but I can see a use for my skills that would still be in alignment with my values here.');
      correctAnswers++
    } else {
      alert('Well, I can\'t say this is my life\'s passion or my reason for getting into coding, but yes, I can imagine writing software for the non-profit and organic agricultural sector. After a couple years in organic ag, I recognize a lot of need for tech that\'s going unmet. I wouldn\'t say this is a certainty, but I can see a use for my skills that would still be in alignment with my values here.');
    }
  }

  function berlinQuestion (){
    var goBerlin = prompt('Might I be living in Berlin by this time next year?');
    console.log('goBerlin was ' + goBerlin);
    if (goBerlin == null) {
      alert('Definitely not a sure thing, but actually there may be a chance I\'ll be in Berlin after graduating from Code Fellows. I have an old Navy friend who has lived there for the past decade and feels pretty confident he could get me a job as a software developer there if I want one. So that\'s cool.');
    } else if ((goBerlin.trim().toLowerCase() == 'yes') || (goBerlin.trim().toLowerCase() == 'y')) {
      alert('There may be a chance I\'ll be in Berlin, yes. I have an old Navy friend who has lived there for the past decade and feels pretty confident he could get me a job as a software developer there if I want one. So that\'s cool.');
      correctAnswers++
    } else {
      alert('Definitely not a sure thing, but actually there may be a chance I\'ll be in Berlin after graduating from Code Fellows. I have an old Navy friend who has lived there for the past decade and feels pretty confident he could get me a job as a software developer there if I want one. So that\'s cool.');
    }
  }

  function countryQuestion (){
    var correctNumber = 54;
    var countryNotDone = true;
    var countryGuess;

    alert('Okay, now for a guessing game. How many countries have I visited, would you guess?')

    for ( var i = 4; i > 0 && countryNotDone; i--) {
      countryGuess = prompt('How many countries?');
      console.log('countryGuess was ' + countryGuess);
      if (countryGuess == correctNumber) {
        alert('Spot on! I\'ve visited 54 countries. Mostly in Europe and Asia, but a few in South America, Africa, and the Middle East as well.');
        correctAnswers++
        countryNotDone = false;
      }else if (i === 1) {
        alert('Bummer. You lose. I\'ve visited 54 countries.')
      }else if (countryGuess > correctNumber+10) {
        alert('You\'re too high. Go way lower... ' + (i-1) + ' left');
      }else if (countryGuess > correctNumber) {
        alert('Lower... ' + (i-1) + ' left');
      }else if (countryGuess < correctNumber-10) {
        alert('You\'re too low. Go way higher... ' + (i-1) + ' left');
      }else if (countryGuess < correctNumber) {
        alert('Higher... ' + (i-1) + ' left');
      }
    }
  }

  function statesQuestion (){
    var statesIveLivedIn = ['kansas', 'missouri', 'georgia', 'virginia', 'rhode island'];
    var statesIveLivedInAsString = 'Kansas, Missouri, Georgia, Virginia, and Rhode island';
    var stateGuess;
    var userWon = false;

    alert('I have lived in five states other than Washington. If you can guess even one, I\'ll owe you a coke.');

    for (var i = 6; i > 0 && !userWon; i--) {
      stateGuess = prompt ('What\'s one state, other than Washington, you think I\'ve lived in?');
      stateGuess = stateGuess.trim().toLowerCase();
      console.log('stateGuess was ' + stateGuess);

      if (!userWon) {
        for (var j = statesIveLivedIn.length; j > 0 && !userWon; j--) {
          if (statesIveLivedIn[j] === stateGuess) {
            alert('Yes! Over the years I\'ve lived in ' + statesIveLivedInAsString + '. I owe you a coke.');
            correctAnswers++
            userWon = true;
          }
        } if (!userWon && i > 1) {
          alert('Nope. Never lived there. Try again. You\'ve got ' + (i - 1) + ' guesses left.');
        } else if (!userWon) {
          alert('Sorry, you\'re out of guesses. In addition to Washington, I\'ve lived in ' + statesIveLivedInAsString + '. You owe me a job.');
        }
      }
    }
  }

  missileQuestion ();
  teachQuestion ();
  fieldQuestion ();
  agQuestion ();
  berlinQuestion ();
  countryQuestion();
  statesQuestion ();


  if (correctAnswers > 5) {
    alert('Well ' + userName + ', you got ' + correctAnswers + ' right. I have to say, that\'s pretty darn good. Thanks for taking the time to get to know me better!');
  } else {
    alert('Well ' + userName + ', you got ' + correctAnswers + ' right. I hope you learned a bit more about me through this game. Thanks for taking the time!');
  }

}
