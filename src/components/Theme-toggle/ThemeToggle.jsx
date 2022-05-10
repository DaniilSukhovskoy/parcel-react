import React, { useState, useEffect } from 'react';
import { useLocalStorage } from '../../services/useLocalStorage';

export default function ThemeToggle() {

    let [theme, setTheme] = useLocalStorage('theme', 'dark');

    // on load
    useEffect(() => {
        const data = localStorage.getItem('theme');
        if (data) {
            setTheme(JSON.parse(data));
            showSelected();
        }
    }, []);

    // on toggle change !!!
    const handleChange = (e) => {
        showSelected();
        setTheme(e.target.value);
    }

    const showSelected = () => {
        theme === 'auto' ? getDetectTheme() : document.documentElement.classList.toggle("lightmode", theme === 'light');
    }

    // system change
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
        getDetectTheme()
    });

    const getDetectTheme = () => {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            autoTheme = 'dark';
            document.documentElement.classList.remove("lightmode");
        } else {
            autoTheme = 'light';
            document.documentElement.classList.add("lightmode");
        }
        console.log(`prefers-color-scheme: ${autoTheme}. Theme is ${theme}`);
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