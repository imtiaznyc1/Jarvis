"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const path = require("path");
class ViewLoader {
    constructor(extensionPath) {
        this._disposables = [];
        this._extensionPath = extensionPath;
        this._panel = vscode.window.createWebviewPanel("Jarvis", "Jarvis", vscode.ViewColumn.One, {
            enableScripts: true,
            localResourceRoots: [
                vscode.Uri.file(path.join(extensionPath, "configViewer"))
            ]
        });
        this._panel.webview.html = this.getWebviewContent();
    }
    getWebviewContent() {
        // Local path to main script run in the webview
        const reactAppPathOnDisk = vscode.Uri.file(path.join(this._extensionPath, "configViewer", "configViewer.js"));
        const reactAppUri = reactAppPathOnDisk.with({ scheme: "vscode-resource" });
        return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Config View</title>
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
        <script src="${reactAppUri}"></script>
    </body>
    </html>`;
    }
}
exports.default = ViewLoader;
//# sourceMappingURL=landingPage.js.map