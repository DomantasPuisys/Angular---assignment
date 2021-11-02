import { weekListInterface } from './weekList.interface';
import { dataInterface } from '../../data.interface';
import { data } from '../../mock-data';

function getType(type: string)
{
	if (type === "Sat" || type === "Sun") {
		return "weekend"
	}
	return "workday"
}

function formatDate(date: Date)
{
	return date.toLocaleString().split(' ')[0]
}

function getDataByDate(date: Date)
{
	const formatedDate = formatDate(date)
	let assignedData: dataInterface[] = []
	for(let i = 0; i < data.length; i++) {
		if (formatDate(data[i]['date']) === formatedDate) {
			assignedData.push(data[i])
		}
	}
	return assignedData;
}

function getTaskStatus(daysData: dataInterface[])
{
	let status: string = "green";
	for(let i = 0; i < daysData.length; i++) {
		if(
			daysData[i].state !== "approved" 
			&& 
			daysData[i].state !== "rejected"
		) {
			status = "grey"
		} else if(daysData[i].state === "rejected") {
			status = "red"
		}
	}
	return status
}

function getWorkHours(daysData: dataInterface[])
{
	let workHours = 0
	for(let i = 0; i < daysData.length; i++) {
		workHours += daysData[i].quantity
	}
	return workHours
}

export function getWeekList()
{
	const date = new Date();
	const week = [
	  "Sun",
	  "Mon",
	  "Tue",
	  "Wed",
	  "Thu",
	  "Fri",
	  "Sat"
	]
	let daysData = getDataByDate(date)
	let workHours = "-"
	let dotStatus = "none"

	if(daysData.length > 0) {
		let hours = getWorkHours(daysData)
		workHours = hours.toString() + ":00"
		dotStatus = getTaskStatus(daysData)
	}

	let weekList: weekListInterface[] = [{
		day: week[date.getDay()],
		date: date.getDate(),
		type: getType(week[date.getDay()]),
		status: true,
		workHours: workHours,
		dotStatus: dotStatus
	}];
	for (let i = 1; i <= 6; i++) {
		date.setDate(date.getDate() - 1)
		daysData = getDataByDate(date)

		if(daysData.length > 0) {
			let hours = getWorkHours(daysData)
			workHours = hours.toString() + ":00"
			dotStatus = getTaskStatus(daysData)
		} else {
			workHours = "-"
			dotStatus = "none"
		}

		let weekDay = {
			day: week[date.getDay()],
			date: date.getDate(),
			type: getType(week[date.getDay()]),
			status: false,
			workHours: workHours,
			dotStatus: dotStatus
		}
		weekList.push(weekDay)
	}
	return weekList.reverse()
}

export function getThisMonth()
{
	const months = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December"
	]
	const date = new Date()
	const thisMonth = date.getMonth()
	return months[thisMonth];
}

export function getThisYear()
{
	const date = new Date()
	return date.getFullYear()
}
