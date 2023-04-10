import React, { useState, useEffect } from 'react'
import './searchbar.css'
import { DatePicker, Space } from 'antd';
import moment from 'moment'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faLocationArrow, faPerson, faSearch } from "@fortawesome/free-solid-svg-icons";

function Searchbar() {
    const { RangePicker } = DatePicker;
    const [rooms, setrooms] = useState([])
    const [fromdate, setfromdate] = useState()
    const [todate, settodate] = useState()
    const [duplicaterooms, setduplicaterooms] = useState([])

    function filterByDate(dates) {
        const dateFrom = new Date(dates[0]);
        const dateTo = new Date(dates[1]);
        setfromdate(moment(dateFrom).format('DD-MM-YYYY'))
        settodate(moment(dateTo).format('DD-MM-YYYY'))

        var temprooms = []

        for (const room of duplicaterooms) {
            var availability = true;

            if (room.currentbookings.length > 0) {
                for (const booking of room.currentbookings) {

                    const start = moment(booking.fromdate, 'DD-MM-YYYY');
                    const end = moment(booking.todate, 'DD-MM-YYYY');

                    if (moment(dateFrom).isBetween(start, end) ||
                        moment(dateTo).isBetween(start, end)

                        ||
                        (moment(start).isBetween(dateFrom, dateTo) ||
                            moment(end).isBetween(dateFrom, dateTo))

                        ||
                        (
                            moment(dateFrom).isSame(start) &&
                            moment(dateTo).isSame(end)
                        )
                        ||
                        (
                            moment(dateFrom).isSameOrAfter(start) &&
                            moment(dateTo).isSameOrBefore(end))
                    ) {
                        availability = false;
                        break;
                    }
                }
            }
            if (availability) {
                temprooms.push(room)
            }
        }
        setrooms(temprooms)
    }


    function clearRange() {
        window.location.assign('/home');
    }


    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adult: 1,
        childern: 0,
        room: 1,

    });

    const handleOption = (name, operation) => {

        setOptions(prev => {
            return {
                ...prev,
                [name]: operation === "i" ? options[name] + 1 : options[name] - 1
            };
        });

    };

    return (

        < div className='search'>

            <div className='searchItem1'>
                <div className='icon-input-wrapper'>
                    <FontAwesomeIcon icon={faLocationArrow} className='searchIcon' />
                    <input
                        type="text"
                        placeholder="Where's your destination ?"
                        className="searchInput" />
                </div>
            </div>


            <div className='searchItem2'>
                <div className="icon-people-warapper">
                    <FontAwesomeIcon icon={faPerson} className='searchIcon' />

                    <span onClick={() => setOpenOptions(!openOptions)} className='searchText'>{`${options.adult} adult · ${options.childern} children · ${options.room} room`}</span>
                    {openOptions && <div className='options'>

                        <div className='optionItem'>
                            <span className='optionText'>Adult</span>
                            <div className="optionCounter">
                                <button
                                    disabled={options.adult <= 0}
                                    className="optionCounterButton"
                                    onClick={() => handleOption("adult", "d")}>-</button>
                                <span className="optionCounterNumber">{options.adult}</span>
                                <button
                                    className="optionCounterButton"
                                    onClick={() => handleOption("adult", "i")}> +</button>
                            </div>
                        </div>

                        <div className="optionItem
                            ">
                            <span className="optionText">Childern</span>
                            <div className="optionCounter">
                                <button
                                    disabled={options.childern <= 0}
                                    className="optionCounterButton"
                                    onClick={() => handleOption("childern", "d")}> -</button>
                                <span className="optionCounterNumber">{options.childern}</span>
                                <button
                                    className="optionCounterButton"
                                    onClick={() => handleOption("childern", "i")}> +</button>
                            </div>
                        </div>

                        <div className="optionItem
                            ">
                            <span className="optionText">Room</span>
                            <div className="optionCounter">
                                <button
                                    disabled={options.room <= 1}
                                    className="optionCounterButton"
                                    onClick={() => handleOption("room", "d")}> -</button>
                                <span className="optionCounterNumber">{options.room}</span>
                                <button
                                    className="optionCounterButton"
                                    onClick={() => handleOption("room", "i")}> +</button>
                            </div>

                        </div>

                    </div>}
                </div>

            </div>

            <div className='searchItem3'>
                <div className="icon-date-wrapper">
                    <FontAwesomeIcon icon={faCalendar} className='searchIcon' />
                    <RangePicker format='DD-MM-YYYY' onChange={filterByDate} onCalendarChange={(dates) => !dates ? clearRange() : null} />
                    {/* <span className='searchText'>Check-in-date — Check-out-date</span> */}
                </div>

            </div>

            <div className='searchItem4'>
                <FontAwesomeIcon icon={faSearch} className='searchIcon' />
            </div>

        </div>

    )
}

export default Searchbar