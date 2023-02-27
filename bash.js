const commands=require('./commands')


// Un prompt como output
process.stdout.write('prompt > ');

function done(data){
  if (data){
  process.stdout.write(data);
  process.stdout.write('\nprompt > ');}
  else{
    process.stdout.write('\nprompt > ');
  }
}

// El evento STDIN 'data' se dispara cuando el usuario escribe una línea
process.stdin.on('data', function (data) {
  const [command,...args]=data.toString().trim().split(' ') // Remueve la nueva línea
if (commands[command]) {
      commands[command](args,done);
    }
 else {
    process.stdout.write('Command not found: ' + command);
  }
  

});
