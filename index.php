<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
    <link rel="stylesheet" href="css/modelo.css">
    <!--<link rel="stylesheet" href="css/estilos.css">-->
    <script type = "text/javascript" src ="js/config.js"></script>
    <script type = "text/javascript" src ="js/usuario.js"></script>
    <title>Event Dash</title>
</head>
<body>
 <div class="container" >
        <a class="links" id="paralogin"></a>
        <div class="content">  
            <!--FORMULÁRIO DE LOGIN -->
            <div id="login">
              <form method="post" action=""> 
                <h1>Event Dash</h1> 
                <p> 
                  <label for="email_login">Username</label>
                  <input id="txtemail" name="email_login" required="required" type="text" placeholder="Email ou RACF"/>
                </p>
                
                <p> 
                  <label for="senha_login">Password</label>
                  <input id="txtsenha" name="senha_login" required="required" type="password" placeholder="*****" /> 
                </p>
                
                <button onclick="logar()" type="button" class="btn btn-primary btn-lg">Login</button>
              </form>
             
            </div>
        </div>
    </div>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
</body>
</html>