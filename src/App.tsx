import { useState } from "react";
import "./App.css";
import "@telegram-apps/telegram-ui/dist/styles.css";
import { AppRoot, Button, Placeholder } from "@telegram-apps/telegram-ui";
import WebApp from "@twa-dev/sdk";

// https://tgui.xelene.me/?path=/docs/blocks-card--documentation

function App() {
    const [count, setCount] = useState(0);

    return (
        <AppRoot>
            <div>
                <Placeholder header="Title" description="Description">
                    <img
                        alt="Telegram sticker"
                        src="https://xelene.me/telegram.gif"
                        style={{ display: "block", width: "144px", height: "144px" }}
                    />
                </Placeholder>
                <Button>Button</Button>
            </div>
            <h1>TWA + Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount(count => count + 1)}>count is {count}</button>
            </div>
            {/*  */}
            <div className="card">
                <button onClick={() => WebApp.showAlert(`Hello World! Current count is ${count}`)}>
                    Show Alert
                </button>
            </div>
        </AppRoot>
    );
}

export default App;
