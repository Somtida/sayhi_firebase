// let ref = new firebase('https://helloworld-4c12b.firebaseio.com/');

  // Initialize Firebase
  var config = {
    apiKey: "process.env.KEY",
    authDomain: "helloworld-4c12b.firebaseapp.com",
    databaseURL: "https://helloworld-4c12b.firebaseio.com",
    storageBucket: "helloworld-4c12b.appspot.com",
  };
  firebase.initializeApp(config);

  var database = firebase.database();


  $(() => {


    let wordsRef = database.ref('/words');

    wordsRef.on('value', snapshot => {
      // console.log('snapshot: ', snapshot.val());
      let dataObj = snapshot.val();

      let $lis = [];

      for(let key in dataObj){
        // let $li = $('<li>').text(dataObj[key]);
        let message = dataObj[key];

        let $li = $('<li>').text(message.name + '-' + message.text);
        $lis.push($li);
        // console.log(key, dataObj[key]);
      }

      $('#thelist').empty().append($lis);
      // $('#thelist').empty().append($lis);

    });

    $('#clickme').click(() => {
      let message = {
        name: $('#myname').val(),
        text: $('#myinput').val()

      }
      wordsRef.push(message);

    });
    // $('#clickme').click(() => {
    //   let name = $('#myname').val();
    //   let text = $('#myinput').val();
    //   wordsRef.push(text);
    //   // database.ref('/words').push(text);
    // });
  });


  // database.ref('/timestamps').child('-KNERV4nncooPnE_KH9x').set('woooooo');
  // database.ref('/timestamps/-KNERV4nncooPnE_KH9x').set('woooooo');
  database.ref('/timestamps').update({
    '-KNERV4nncooPnE_KH9x': 'woooooo'
  });

  // database.ref().set({
  //   name: 'Somtida'
  // })

  //database.ref().set(true);


  // database.ref('/users').set({
  //   name: 'James'
  // })

  // database.ref('/timestamps').push(Data.now());
