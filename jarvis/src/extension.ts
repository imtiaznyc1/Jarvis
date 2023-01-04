import * as vscode from 'vscode';
import * as path from 'path'
import ViewLoader from './view/landingPage';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "jarvis" is now active!');

	context.subscriptions.push(
		vscode.commands.registerCommand('jarvis.helloWorld', () => {
			vscode.window.showInformationMessage('Hello World from Jarvis, sir!');
		})
	);

	context.subscriptions.push(
		vscode.commands.registerCommand('jarvis.Jarvis', () => {
			vscode.window.showInformationMessage('Hello World from Jarvis, sir! At your service...');
			const view = new ViewLoader(context.extensionPath)
		})
	);
}



// This method is called when your extension is deactivated
export function deactivate() {}
