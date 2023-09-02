// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { getWebviewContent } from './htmlWebview';
// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "jarvis" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('jarvis.helloWorld', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from jarvis!');
	});

	let disposable2 = vscode.commands.registerCommand('jarvis.helloJarvis', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInformationMessage('At your service!');
		const panel = vscode.window.createWebviewPanel(
			'jarvis',
			'Jarvis',
			vscode.ViewColumn.Two,
			{
				enableScripts: true
			}
		)

		panel.webview.html = getWebviewContent()
	});

	context.subscriptions.push(disposable);
	context.subscriptions.push(disposable2)
}


// function getWebviewContent() {
// 	return `<!DOCTYPE html>
//   <html lang="en">
//   <head>
// 	  <meta charset="UTF-8">
// 	  <meta name="viewport" content="width=device-width, initial-scale=1.0">
// 	  <title>Jarvis</title>
//   </head>
//   <body>
// 	  <h1>Hello! This is Jarvis, your fellow assistant.</h1>
// 	  <p>When you compile or run your code with errors, this page will populate with 
// 	  list of potential answers for the issues appearing.</p>
//   </body>
//   </html>`;
//   }

// This method is called when your extension is deactivated
export function deactivate() {}
