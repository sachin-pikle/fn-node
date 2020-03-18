const fdk=require('@fnproject/fdk');

fdk.handle(function(input){
  console.log('Entering Hello Node.js function with name ' + input.name);
  let name = 'World';
  if (input.name) {
    name = input.name;
  }
  console.log('Exiting Hello Node.js function');
  return {'message': 'Hello ' + name}
})
