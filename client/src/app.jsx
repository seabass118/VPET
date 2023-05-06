import { useEffect, useState } from "preact/hooks";

const ws = new WebSocket("ws://localhost:8082");

export function App() {
	const [data, setData] = useState("");

    ws.addEventListener("message", message => {
        setData(message.data);
    })
    
	return (
		<div className="bg-slate-800 min-h-screen p-10">
			<div className="text-3xl font-bold text-emerald-400 pb-6">
                VITE, PREACT, TAILWIND, EXPRESS
            </div>
            <div className="text-white font-bold">{data}</div>
		</div>
	);
}
