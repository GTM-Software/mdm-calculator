"use strict"


const date = () => {};

/***
 * Date Format Type Example
 * 
 * ISO Date 	"2015-03-25" (The International Standard)
 * Short Date 	"03/25/2015"
 * Long Date 	"Mar 25 2015" or "25 Mar 2015"
 * 
 * 
 */
const DATE_FORMAT = {
    "ISO" : "YYYY-MM-DD",
    "SHORT" : "MM/DD/YYYY",
    "LONG" : "MMM DD YYYY",
};

module.exports = {date, DATE_FORMAT};

