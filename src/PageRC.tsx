import React from "react";
import "./App.css";
import liff from "@line/liff";
require("dotenv").config();

const PageRC: React.FC = () => {
	const sendMessage = () => {
		liff.init({ liffId: process.env.REACT_APP_LIFF_ID as string }).then(() => {
			if (!liff.isLoggedIn()) {
				liff.login({});
			}
			liff
				.sendMessages([
					{
						type: "text",
						text: "次の操作に進む\n>>復旧写真",
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
			<div className="hero min-h-auto text-center bg-base-100 mt-4">
				<div className="card shadow-lg mt-2">
					<div className="card-body">
						<h1 className="card-title">復旧後の確認</h1>
						<form
							method="POST"
							action="https://script.google.com/macros/s/AKfycbzaVNDgAjKXjQxq1xPIc1FNtnIqrmr6ylRKlHjGnrsWi7gJun5-Xjh11wm4s6L3a-_g/exec"
						>
							<div className="form-control">
								<label>作物名</label>
								<input
									name="crop_name"
									type="text"
									className="input input-bordered input-primary"
								/>
							</div>
							<div className="form-control mt-2">
								<label>復旧した施設・機械</label>
								<textarea
									name="damage_target"
									className="textarea h-24 max-h-48 textarea-bordered textarea-primary"
									placeholder="ビニールハウス、排水ポンプ、管理機など"
								></textarea>
							</div>
							<div className="form-control mt-2">
								<label>確認の結果</label>
								<textarea
									name="damege_status"
									className="textarea h-24 max-h-48 textarea-bordered textarea-primary"
									placeholder="詳細"
								></textarea>
							</div>
							<button type="submit" className="btn mt-4 btn-wide btn-primary">
								記録する
							</button>
						</form>
						<button
							onClick={sendMessage}
							className="btn btn-md mt-4 btn-outline btn-primary"
						>
							次の操作に進む
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
export default PageRC;
