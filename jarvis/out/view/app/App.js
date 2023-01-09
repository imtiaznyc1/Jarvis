"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const react_1 = __importDefault(require("react"));
// import logo from "../../assets/jarvisLogo.jpg"
const App = () => {
    return (<div>
            <h1>Hello! I am pleased to be assisting you today...</h1>
            <p>To begin, please proceed by logging into discord to enable me to provide you with 
                important information from your account. If you wish not to login, you may proceed without doing so.
            </p>
            {/* <img src = {logo} alt = "Logo" /> */}
        </div>);
};
exports.App = App;
//# sourceMappingURL=App.js.map