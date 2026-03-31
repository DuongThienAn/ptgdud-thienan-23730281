import { useContext } from "react";
import { ThemeContext } from "./ContextGlobalState"; 

function Button() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div>
            <p>Theme hiện tại: {theme}</p>
            <button onClick={toggleTheme}>Đổi theme</button>
        </div>
    );
}
export default Button;