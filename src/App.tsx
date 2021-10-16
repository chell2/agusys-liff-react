import React from "react";
import "./App.css";
import liff from "@line/liff";
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
						text: "次の操作に進む\n>>被災写真",
					},
				])
				.then(function () {
					window.alert("右上の×で入力フォームを閉じてください");
				})
				.catch((err) => {
					console.log("error", err);
				});
		});
	};

	return (
		<div className="App">
			<div className="hero min-h-screen text-center">
				<div className="card shadow-lg">
					<div className="card-body">
						<h1 className="card-title">被災状況の報告</h1>
						<form
							method="POST"
							action="https://script.google.com/macros/s/AKfycbxC57dGAtVmaX-otkO6RmUaJg1xEvWvgd7OtQwQt7xNy6o9zPEFARnd9ZJl5Cv2LkRm/exec"
						>
							<div className="form-control">
								<label>作物名</label>
								<input
									name="crop_name"
									type="text"
									className="input input-success input-bordered"
								/>
							</div>
							<div className="form-control mt-2">
								<label>被害にあった施設・機械</label>
								<textarea
									name="damage_target"
									className="textarea h-20 textarea-bordered textarea-success"
									placeholder="ビニールハウス、排水ポンプ、管理機など"
								/>
							</div>
							<div className="form-control mt-2">
								<label>現地の状況</label>
								<textarea
									name="damege_status"
									className="textarea h-20 textarea-bordered textarea-success"
									placeholder="詳細"
								/>
							</div>
							<button type="submit" className="btn mt-4 btn-wide btn-success">
								記録する
							</button>
						</form>
						<button
							onClick={sendMessage}
							className="btn btn-md mt-4 btn-outline btn-success"
						>
							次の操作に進む
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
