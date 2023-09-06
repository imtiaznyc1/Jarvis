export function getWebviewContent() {
	return `<!DOCTYPE html>
  <html lang="en">
  <head>
	  <meta charset="UTF-8">
	  <meta name="viewport" content="width=device-width, initial-scale=1.0">
	  <title>Jarvis</title>
  </head>
  <body>
	  <h1>Hello! This is Jarvis, your fellow assistant.</h1>
	  <p>When you enter a debug session in VSCode, this page will populate with 
	  list of potential answers for the issues appearing. Note that at any moment you can 
    also run the command \"Analyze\" on the command palatte...</p>
      
      <p>
      </p>

      
      <script>
        var text = 'HELLO'
        window.addEventListener('message', event => {
            const value = event.data;

            switch (value.command){
                case 'bugs':
                    text = "BUGS"
            }
        })
      </script>
  </body>
  </html>`;
  }