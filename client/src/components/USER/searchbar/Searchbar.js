import React, { useState, useEffect, useRef } from 'react';
import './searchbar.css'
import { DatePicker, Space } from 'antd';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faLocationArrow, faPerson, faSearch } from "@fortawesome/free-solid-svg-icons";

function Searchbar() {
    const { RangePicker } = DatePicker;
    const [destination, setDestination] = useState('');
    const optionsRef = useRef(null);

    const handleDestinationChange = (e) => {
        setDestination(e.target.value);
    };

    const handleSearch = () => {

        window.location.assign('/');
    };

    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adult: 1,
        childern: 0,
        room: 1,
    });

    const handleOption = (name, operation) => {
        setOptions((prev) => {
            return {
                ...prev,
                [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
            };
        });
    };

    const handleClickOutside = (event) => {
        if (optionsRef.current && !optionsRef.current.contains(event.target)) {
            setOpenOptions(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="search">
            <div className="searchItem1">
                <div className="icon-input-wrapper">
                    <FontAwesomeIcon icon={faLocationArrow} className="searchIcon" />
                    <input
                        type="text"
                        placeholder="Where's your destination?"
                        className="searchInput"
                        value={destination}
                        onChange={handleDestinationChange}
                    />
                </div>
            </div>

            <div className="searchItem2">
                <div className="icon-people-warapper">
                    <FontAwesomeIcon icon={faPerson} className="searchIcon" />

                    <span
                        onClick={() => setOpenOptions(!openOptions)}
                        className="searchText"
                    >{`${options.adult} adult · ${options.childern} children · ${options.room} room`}</span>
                    {openOptions && (
                        <div className="options" ref={optionsRef}>
                            <div className="optionItem">
                                <span className="optionText">Adult</span>
                                <div className="optionCounter">
                                    <button
                                        disabled={options.adult <= 0}
                                        className="optionCounterButton"
                                        onClick={() => handleOption("adult", "d")}
                                    >
                                        -
                                    </button>
                                    <span className="optionCounterNumber">{options.adult}</span>
                                    <button
                                        className="optionCounterButton"
                                        onClick={() => handleOption("adult", "i")}
                                    >
                                        +
                                    </button>
                                </div>
                            </div>

                            <div className="optionItem">
                                <span className="optionText">Children</span>
                                <div className="optionCounter">
                                    <button
                                        disabled={options.childern <= 0}
                                        className="optionCounterButton"
                                        onClick={() => handleOption("childern", "d")}
                                    >
                                        -
                                    </button>


                                    <span className="optionCounterNumber">{options.childern}</span>
                                    <button
                                        className="optionCounterButton"
                                        onClick={() => handleOption("childern", "i")}
                                    >
                                        +
                                    </button>
                                </div>
                            </div>

                            <div className="optionItem">
                                <span className="optionText">Rooms</span>
                                <div className="optionCounter">
                                    <button
                                        disabled={options.room <= 0}
                                        className="optionCounterButton"
                                        onClick={() => handleOption("room", "d")}
                                    >
                                        -
                                    </button>
                                    <span className="optionCounterNumber">{options.room}</span>
                                    <button
                                        className="optionCounterButton"
                                        onClick={() => handleOption("room", "i")}
                                    >
                                        +
                                    </button>
                                </div>

                            </div>
                            <div className="optionbtn">
                                <button onClick={() => setOpenOptions(false)} className='btn-done'>Done</button>

                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className='searchItem3'>
                <div className="icon-date-wrapper">
                    <FontAwesomeIcon icon={faCalendar} className='searchIcon' />
                    <RangePicker
                        format='DD-MM-YYYY'
                        placeholder={['Check-in date', 'Check-out date']}
                        className="customRangePicker"
                    />
                </div>

            </div>


            <div className='searchItem4'>
                <button className='btn-search' onClick={handleSearch}>
                    <FontAwesomeIcon icon={faSearch} className='searchIcon' />
                </button>

            </div>
        </div>
    );
}

export default Searchbar;

