// import React from "react";
// import liff from "@line/liff";
// import logo from "./logo.svg";
// import "./App.css";
// require("dotenv").config();

// function App() {
// 	const sendMessage = () => {
// 		liff.init({ liffId: process.env.MY_LIFF_ID as string }).then(() => {
// 			if (!liff.isLoggedIn()) {
// 				liff.login({});
// 			} else if (liff.isInClient()) {
// 				liff
// 					.sendMessages([
// 						{
// 							type: "text",
// 							text: "You've successfully sent a message! Hooray!",
// 						},
// 					])
// 					.then(function () {
// 						window.alert("Message sent");
// 					})
// 					.catch(function (error) {
// 						window.alert("Error sending message: " + error);
// 					});
// 			}
// 		});
// 	};

// 	const getUserInfo = () => {
// 		liff.init({ liffId: process.env.REACT_APP_LIFF_ID as string }).then(() => {
// 			if (!liff.isLoggedIn()) {
// 				liff.login({});
// 			} else if (liff.isInClient()) {
// 				liff
// 					.getProfile()
// 					.then((profile) => {
// 						const userId: string = profile.userId;
// 						const displayName: string = profile.displayName;
// 						alert(`Name: ${displayName}, userId: ${userId}`);
// 					})
// 					.catch(function (error) {
// 						window.alert("Error sending message: " + error);
// 					});
// 			}
// 		});
// 	};

// 	return (
// 		<div className="App">
// 			<header className="App-header">
// 				<img src={logo} className="App-logo" alt="logo" />
// 				<p>
// 					Edit <code>src/App.tsx</code> and save to reload.
// 				</p>
// 				<button className="button" onClick={sendMessage}>
// 					send message
// 				</button>{" "}
// 				<button className="button" onClick={getUserInfo}>
// 					show user info
// 				</button>{" "}
// 				<a
// 					className="App-link"
// 					href="https://reactjs.org"
// 					target="_blank"
// 					rel="noopener noreferrer"
// 				>
// 					Learn React
// 				</a>
// 			</header>
// 		</div>
// 	);
// }

// export default App;
import React from "react";
import "./App.css";
import liff from "@line/liff";
const message = require("line-message-builder");
// import { buildReplyText } from "line-message-builder";

const App: React.FC = () => {
	const sendMessage = () => {
		liff.init({ liffId: process.env.REACT_APP_LIFF_ID as string }).then(() => {
			if (!liff.isLoggedIn()) {
				liff.login({});
			}
			liff.sendMessages(message.buildReplyText("test"));
		});
	};
	return (
		<div className="App">
			<div className="hero min-h-screen bg-base-200">
				<div className="text-center hero-content">
					<div className="card shadow-lg">
						<div className="card-body">
							<h2 className="card-title">被災状況の報告</h2>
							<br />
							<form
								method="POST"
								action="https://script.google.com/macros/s/AKfycbxC57dGAtVmaX-otkO6RmUaJg1xEvWvgd7OtQwQt7xNy6o9zPEFARnd9ZJl5Cv2LkRm/exec"
							>
								<p>作物名</p>
								<input name="crop_name" type="text" />
								<p>現地の状況</p>
								<input name="contents" type="text" />
								<p>備考</p>
								<input name="memo" type="text" />
								<br />
								<button type="submit" className="btn btn-md mt-3">
									post
								</button>
							</form>
							<button onClick={sendMessage} className="btn btn-md mt-3">
								Send Message
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
