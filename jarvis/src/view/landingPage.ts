import * as vscode from "vscode";
import * as fs from "fs";
import * as path from "path";

export default class ViewLoader {
  private readonly _panel: vscode.WebviewPanel | undefined;
  private readonly _extensionPath: string;
  private _disposables: vscode.Disposable[] = [];

  constructor(extensionPath: string) {
    this._extensionPath = extensionPath;

      this._panel = vscode.window.createWebviewPanel(
        "Jarvis",
        "Jarvis",
        vscode.ViewColumn.Beside,
        {
          enableScripts: true,

          localResourceRoots: [
            vscode.Uri.file(path.join(extensionPath, "configViewer"))
          ]
        }
      );
      this._panel.webview.html = this.getWebviewContent();
    
  }

  private getWebviewContent(): string {
    // Local path to main script run in the webview
    // const reactAppPathOnDisk = vscode.Uri.file(
    //   path.join(this._extensionPath, "configViewer", "configViewer.js")
    // );
    const reactAppPathOnDisk = this._panel?.webview.asWebviewUri(
      vscode.Uri.file(path.join(this._extensionPath, "configViewer", "configViewer.js"))
    );

    // const reactAppUri = reactAppPathOnDisk.with({ scheme: "vscode-resource" });
    console.log("im in the viewer js again final yur", reactAppPathOnDisk)

    const nonce = this.getNonce()
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

  getNonce(): string {
    let text = "";
    const possible =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < 32; i++) {
        text += possible.charAt(
            Math.floor(Math.random() * possible.length)
        );
    }
    return text;
}

//nonce = "${nonce}"


}