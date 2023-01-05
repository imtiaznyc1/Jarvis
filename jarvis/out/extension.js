"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = require("vscode");
const landingPage_1 = require("./view/landingPage");
// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
function activate(context) {
    console.log('Congratulations, your extension "jarvis" is now active!');
    context.subscriptions.push(vscode.commands.registerCommand('jarvis.helloWorld', () => {
        vscode.window.showInformationMessage('Hello World from Jarvis, sir!');
    }));
    context.subscriptions.push(vscode.commands.registerCommand('jarvis.Jarvis', () => {
        vscode.window.showInformationMessage('Hello World from Jarvis, sir! At your service...');
        const view = new landingPage_1.default(context.extensionPath);
    }));
}
exports.activate = activate;
// This method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map