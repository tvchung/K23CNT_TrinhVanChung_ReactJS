import { useTheme } from "../context/TvcThemeContext";

export default function TvcThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      Chuyển sang {theme === "light" ? "Tối" : "Sáng"}
    </button>
  );
}


