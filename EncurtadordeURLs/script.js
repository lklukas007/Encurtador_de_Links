
  var entradaurl = 'https://www.google.com.br/url?sa=i&url=https%3A%2F%2Fwww.vakinha.com.br%2Fvaquinha%2Ffrutaria-do-james&psig=AOvVaw13V8MZd1fzeUyh75RgBuZS&ust=1687455359940000&source=images&cd=vfe&ved=0CBIQjRxqFwoTCLixhJrz1P8CFQAAAAAdAAAAABAJ'

  const url = 'http://localhost:3000/api/:';

  try{
  fetch(url + entradaurl);
  response => response.text();
  console.log(response);
  }
  catch(error)
  {console.error('Erro na requisição:', error);
  };

