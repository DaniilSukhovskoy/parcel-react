import React, { useState, useEffect } from 'react';
import { useLocalStorage } from '../../services/useLocalStorage';

export default function ThemeToggle() {

    let [theme, setTheme] = useLocalStorage('theme', 'dark');
    const themeClass = document.documentElement.classList;

    // on load
    useEffect(() => {
        const data = localStorage.getItem('theme');
        if (data) {
            setTheme(JSON.parse(data));
            toggleClass();
        }
    }, []);

    // on toggle change
    const handleChange = (e) => {
        theme = e.target.value
        setTheme(theme);
        console.log(theme)
        toggleClass();
    }

    const toggleClass = () => {
        theme === 'auto' ? getMediaTheme() : themeClass.toggle("lightmode", theme === 'light');
    }

    // system theme change
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
        getMediaTheme()
    });

    const getMediaTheme = () => {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            autoTheme = 'dark';
            themeClass.remove("lightmode");
        } else {
            autoTheme = 'light';
            themeClass.add("lightmode");
        }
        console.log(`device theme is ${autoTheme}`);
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
                        onChange={handleChange}
                        checked={theme === 'light'}
                    />

                    <label className="theme-toggle_text">light</label>
                </div>

                <div className="theme-toggle_item">
                    <input
                        className="theme-toggle_control"
                        type="radio"
                        name="color-theme"
                        value="dark"
                        onChange={handleChange}
                        checked={theme === 'dark'}
                    />

                    <label className="theme-toggle_text">dark</label>
                </div>

                <div className="theme-toggle_item">
                    <input
                        className="theme-toggle_control"
                        type="radio" name="color-theme"
                        value="auto"
                        onChange={handleChange}
                        checked={theme === 'auto'}
                    />

                    <label className="theme-toggle_text">auto</label>
                </div>

            </div>
        </div>
    )
};