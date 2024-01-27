"use client"

import React from 'react'
import RadioButtonsComponent from './RadioButtons';

import { redirect } from 'next/navigation'

export default function GoodForm() {

    const [selectedLetter, setSelectedLetter] = React.useState('');
    const [selectedLetter2, setSelectedLetter2] = React.useState('');
    const [selectedLetter3, setSelectedLetter3] = React.useState('');
    const [selectedLetter4, setSelectedLetter4] = React.useState('');
    const [selectedLetter5, setSelectedLetter5] = React.useState('');
    const [selectedLetter6, setSelectedLetter6] = React.useState('');
    const [selectedLetter7, setSelectedLetter7] = React.useState('');
    const [selectedLetter8, setSelectedLetter8] = React.useState('');
    const [selectedLetter9, setSelectedLetter9] = React.useState('');
    const [day, setDay] = React.useState(1);
    const [month, setMonth] = React.useState(1);
    const [year, setYear] = React.useState(1900);
    const currentYear = new Date().getFullYear();

    // Create an array of letters from A-Z
    const letters = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));
    const letters2 = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));
    const letters3 = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));
    const letters4 = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));
    const letters5 = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));
    const letters6 = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));
    const letters7 = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));
    const letters8 = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));
    const letters9 = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));
    const letters10 = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));


    const handleChange = (event) => {
        setSelectedLetter(event.target.value);
    };

    const handleChange2 = (event) => {
        setSelectedLetter2(event.target.value);
    };
    const handleChange3 = (event) => {
        setSelectedLetter3(event.target.value);
    };
    const handleChange4 = (event) => {
        setSelectedLetter4(event.target.value);
    };
    const handleChange5 = (event) => {
        setSelectedLetter5(event.target.value);
    };
    const handleChange6 = (event) => {
        setSelectedLetter6(event.target.value);
    };
    const handleChange7 = (event) => {
        setSelectedLetter7(event.target.value);
    };
    const handleChange8 = (event) => {
        setSelectedLetter8(event.target.value);
    };
    const handleChange9 = (event) => {
        setSelectedLetter9(event.target.value);
    };

    const re = () => {
        redirect('/submitted');
    }

    return (
        <div>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <h1>ENTER YOUR NAME</h1>
            <select value={selectedLetter} onChange={handleChange}>
                <option value="">Select a letter</option>
                {letters.map(letter => (
                    <option key={letter} value={letter}>{letter}</option>
                ))}
            </select>
            <select value={selectedLetter2} onChange={handleChange2}>
                <option value="">Select a letter</option>
                {letters2.map(letter => (
                    <option key={letter} value={letter}>{letter}</option>
                ))}
            </select>
            <select value={selectedLetter3} onChange={handleChange3}>
                <option value="">Select a letter</option>
                {letters3.map(letter => (
                    <option key={letter} value={letter}>{letter}</option>
                ))}
            </select>
            <select value={selectedLetter4} onChange={handleChange4}>
                <option value="">Select a letter</option>
                {letters4.map(letter => (
                    <option key={letter} value={letter}>{letter}</option>
                ))}
            </select>
            <select value={selectedLetter5} onChange={handleChange5}>
                <option value="">Select a letter</option>
                {letters5.map(letter => (
                    <option key={letter} value={letter}>{letter}</option>
                ))}
            </select>
            <select value={selectedLetter6} onChange={handleChange6}>
                <option value="">Select a letter</option>
                {letters6.map(letter => (
                    <option key={letter} value={letter}>{letter}</option>
                ))}
            </select>
            <select value={selectedLetter7} onChange={handleChange7}>
                <option value="">Select a letter</option>
                {letters7.map(letter => (
                    <option key={letter} value={letter}>{letter}</option>
                ))}
            </select>
            <select value={selectedLetter8} onChange={handleChange8}>
                <option value="">Select a letter</option>
                {letters8.map(letter => (
                    <option key={letter} value={letter}>{letter}</option>
                ))}
            </select>
            <select value={selectedLetter9} onChange={handleChange9}>
                <option value="">Select a letter</option>
                {letters9.map(letter => (
                    <option key={letter} value={letter}>{letter}</option>
                ))}
            </select>
            <select value={selectedLetter} onChange={handleChange}>
                <option value="">Select a letter</option>
                {letters10.map(letter => (
                    <option key={letter} value={letter}>{letter}</option>
                ))}
            </select>

            <h1>IS YOUR NAME LONGER THAN 10 LETTERS?? I DONT CARE LOL</h1>

            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

            <div>
                <div>
                    Day:
                    <input type="range" min="1" max="32" value={day} onChange={(e) => setDay(e.target.value)} />
                </div>
                <div>
                    Month:
                    <input type="range" min="1" max="1000" value={month} onChange={(e) => setMonth(e.target.value)} />
                </div>
                <div>
                    Year:
                    <input type="range" min="1" max={currentYear} value={year} onChange={(e) => setYear(e.target.value)} />
                </div>
                <div>
                    Selected Daytuhhhhhh: {day}/{month}/{year}
                </div>
            </div>

            <h2>can i have your number pretty please? i miss you 😭😭😭😭😭😭😭😭😭</h2>
            <h3>PART ONE</h3>
            <RadioButtonsComponent />

            <h3>PART TWO</h3>
            <RadioButtonsComponent />

            <h3>PART 3</h3>
            <RadioButtonsComponent />


            <button style={
                {width: "150px", height: "20px"}} onClick={re}>submit</button>
        </div>
    );
}