// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { getWebviewContent } from './htmlWebview';
import { userInfo } from 'os';
import { stdout } from 'process';
// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "darvis" is now active!');
	vscode.window.showInformationMessage('At your service!');
		const panel = vscode.window.createWebviewPanel(
			'darvis',
			'darvis',
			vscode.ViewColumn.Two,
			{
				enableScripts: true
			}
		)
		const onDiskPath = vscode.Uri.joinPath(context.extensionUri, 'src', 'assets', 'darvisLogoTransparent.png');
		const onDiskPath2 = vscode.Uri.joinPath(context.extensionUri, 'src', 'script.js');
		console.log(onDiskPath)
		console.log(onDiskPath2)
		const logo = panel.webview.asWebviewUri(onDiskPath);
		const script = panel.webview.asWebviewUri(onDiskPath2);
		panel.webview.html = getWebviewContent(logo, script)

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('jarvis.helloWorld', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from Darvis!');
	});

	let disposable2 = vscode.commands.registerCommand('darvis.helloJarvis', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInformationMessage('At your service!');
		const panel = vscode.window.createWebviewPanel(
			'darvis',
			'Darvis',
			vscode.ViewColumn.Two,
			{
				enableScripts: true
			}
		)

		panel.webview.html = getWebviewContent(logo, script)
	});  

	let disposable3 = vscode.commands.registerCommand('darvis.debug', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInformationMessage('Parsing messages from debug console...');
		let uB = vscode.languages.createDiagnosticCollection('userBugs')
		let filePath = vscode.Uri.file('C:\\Users\\imtia\\PersonalProjects\\NewerJarvis\\Jarvis\\jarvis')
		// console.log('the file path is: ' + filePath)

		const uri = vscode.window.activeTextEditor?.document.uri;
		// console.log('' + uri)
		if(uri){
			let diagnostics = vscode.languages.getDiagnostics(uri!); 
			diagnostics.forEach( function(value: vscode.Diagnostic){
				console.log(value.message)
			})
		}else{
			let diagnostics = vscode.languages.getDiagnostics();
			console.log('your stoopid')
			diagnostics.forEach(function(value){
				if(value[1].length > 0)
					console.log(value[1][0].message) 
			})

		}
		
		// console.log(diagnostics)


	});

	context.subscriptions.push(disposable);
	context.subscriptions.push(disposable2);
	context.subscriptions.push(disposable3);
}


// This method is called when your extension is deactivated
export function deactivate() {}
