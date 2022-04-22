import React, { useState } from 'react';

export default function ThemeToggle() {

    const [theme, setTheme] = useState('dark');

    const handleChange = (event) => {
        setTheme(event.target.value)
    }

    return (
        <div className="footer_theme-toggle">
                <div className="theme-toggle" role="radiogroup" aria-label="Select a color scheme preference">

                    <div className="theme-toggle_item">
                        <input
                            className="theme-toggle_control"
                            type="radio"
                            name="color-theme"
                            value="light"
                            checked={theme === 'light'}
                            onChange={handleChange}
                            />

                        <label className="theme-toggle_text">light</label>
                    </div>

                    <div className="theme-toggle_item">
                        <input
                            className="theme-toggle_control"
                            type="radio"
                            name="color-theme"
                            value="dark"
                            checked={theme === 'dark'}
                            onChange={handleChange}
                            />

                        <label className="theme-toggle_text">dark</label>
                    </div>

                    <div className="theme-toggle_item">
                        <input
                            className="theme-toggle_control"
                            type="radio" name="color-theme"
                            value="auto"
                            checked={theme === 'auto'}
                            onChange={handleChange}
                            />

                        <label className="theme-toggle_text">auto</label>
                    </div>

                </div>
            </div>
    )
};