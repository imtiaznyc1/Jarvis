import * as vscode from 'vscode';

export function getWebviewContent(logo: vscode.Uri, script: vscode.Uri) {
	return `<!DOCTYPE html>    
  <html lang="en">
  <head>
	  <meta charset="UTF-8">
	  <meta name="viewport" content="width=device-width, initial-scale=1.0">
	  <title>Darvis</title>
  </head>
  <body>
    <img src = "${logo}" alt="Darvis Logo :(">
	  <h1>Hello! This is Darvis, your fellow assistant.</h1>
    <h2>Overview</h2>
	  <p>Thank you for giving Darvis a shot! To start using it, feel free to use the command pallete \'Command
    + Shift + P\' and type in Debug. If you run this command through your active window it will display all error
     messages it detects with the current file. If no active editor is detected, it will run through all files
      and display errors found throughout. And that's it!</p>
      
      <div id="foundBugs">
        <h2>Discovered Issues</h2>
      </div>

      <p>
      Creator &nbsp;| Imtiaz Rahman<br>
      Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| imtiaznyc1@gmail.com
      </p>

      <script src="${script}>
      </script>


      
  </body>
  </html>`;
  }