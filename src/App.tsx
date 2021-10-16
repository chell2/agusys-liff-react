import React from "react";
import "./App.css";
import liff from "@line/liff";
// import {buildReplyText} from "line-message-builder";
require("dotenv").config();

const App: React.FC = () => {
	const sendMessage = () => {
		liff.init({ liffId: process.env.REACT_APP_LIFF_ID as string }).then(() => {
			if (!liff.isLoggedIn()) {
				liff.login({});
			}
			liff
				.sendMessages([
					{
						type: "text",
						text: "Hello, World!",
					},
				])
				.then(() => {
					console.log("message sent");
				})
				.catch((err) => {
					console.log("error", err);
				});
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
