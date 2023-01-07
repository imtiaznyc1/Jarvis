"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const path = require("path");
class ViewLoader {
    constructor(extensionPath) {
        this._disposables = [];
        this._extensionPath = extensionPath;
        this._panel = vscode.window.createWebviewPanel("Jarvis", "Jarvis", vscode.ViewColumn.Beside, {
            enableScripts: true,
            localResourceRoots: [
                vscode.Uri.file(path.join(extensionPath, "configViewer"))
            ]
        });
        this._panel.webview.html = this.getWebviewContent();
    }
    getWebviewContent() {
        var _a;
        // Local path to main script run in the webview
        // const reactAppPathOnDisk = vscode.Uri.file(
        //   path.join(this._extensionPath, "configViewer", "configViewer.js")
        // );
        const reactAppPathOnDisk = (_a = this._panel) === null || _a === void 0 ? void 0 : _a.webview.asWebviewUri(vscode.Uri.file(path.join(this._extensionPath, "configViewer", "configViewer.js")));
        // const reactAppUri = reactAppPathOnDisk.with({ scheme: "vscode-resource" });
        console.log("im in the viewer js again final yur", reactAppPathOnDisk);
        const nonce = this.getNonce();
        return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Jarvis</title>
        <meta http-equiv="Content-Security-Policy"
                    content="default-src 'none';
                             img-src https:;
                             script-src 'unsafe-eval' 'unsafe-inline' vscode-resource:;
                             style-src vscode-resource: 'unsafe-inline';">
        <script>
          window.acquireVsCodeApi = acquireVsCodeApi;
        </script>
    </head>
    <body>
        <div id="root"></div>
        <script src="${reactAppPathOnDisk}"></script>
    </body>
    </html>`;
    }
    getNonce() {
        let text = "";
        const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (let i = 0; i < 32; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    }
}
exports.default = ViewLoader;
//# sourceMappingURL=landingPage.js.map