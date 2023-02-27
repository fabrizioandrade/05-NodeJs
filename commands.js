const fs=require('fs')
const request=require('request')
const commands={
    pwd:function(args,done){done(process.cwd())},
    date: function (args,done) {
       done(Date())

      },
    cmd:function(data,done){
        process.stdout.write('You typed: ' + data);
        done();
    },
    ls:function(args,done){
      fs.readdir(".", function (err, files) {
        if (err) throw err;
        let response = "";
        files.forEach(function (file) {
          response += file + "\n"; //cohersión (ojo)
        });
        done(response);
      });
    },
    echo: function(args,done) {
        args?process.stdout.write(args.join(" ")):process.stdout.write('ingresar argumento')
        done()
    },
    cat:function(args){
      console.log(args)
      let contador=0;
      args.forEach((archivo)=>{
        fs.readFile(archivo,(err,data)=>{
        if(!data){
          console.error('No data.The data is wrong',err);
          return;
        }
        process.stdout.write(data);
        contador++
        if(contador===args.length){
          process.stdout.write('prompt > ')
        }
      })})
    },
    curl:function(args,done){
      request(args[0],(err,response,data)=>{
        if(err) throw err;
        done(data)
      })
    }
}
module.exports=commands;