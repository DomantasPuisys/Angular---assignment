import {dataInterface} from './data.interface';

export const data: dataInterface[] = [
	{
		date: new Date("2021-10-28"),
		quantity: 2,
		price: 1,
		eventTypeName: "test",
		eventType: "hour",
		isWorkHour: true,
		state: "approved",
		tasksCount: 1,
		firstTaskStart: new Date("2021-01-01"),
		lastTaskEnd: new Date("2021-01-01")
	},
	{
		date: new Date("2021-10-28"),
		quantity: 2,
		price: 1,
		eventTypeName: "test",
		eventType: "hour",
		isWorkHour: true,
		state: "approved",
		tasksCount: 1,
		firstTaskStart: new Date("2021-01-01"),
		lastTaskEnd: new Date("2021-01-01")
	},
	{
		date: new Date("2021-10-27"),
		quantity: 3,
		price: 1,
		eventTypeName: "test",
		eventType: "hour",
		isWorkHour: true,
		state: "approved",
		tasksCount: 1,
		firstTaskStart: new Date("2021-01-01"),
		lastTaskEnd: new Date("2021-01-01")
	},
	{
		date: new Date("2021-10-27"),
		quantity: 2,
		price: 1,
		eventTypeName: "test",
		eventType: "hour",
		isWorkHour: true,
		state: "rejected",
		tasksCount: 1,
		firstTaskStart: new Date("2021-01-01"),
		lastTaskEnd: new Date("2021-01-01")
	},
	{
		date: new Date("2021-10-26"),
		quantity: 6,
		price: 1,
		eventTypeName: "test",
		eventType: "hour",
		isWorkHour: true,
		state: "none",
		tasksCount: 1,
		firstTaskStart: new Date("2021-01-01"),
		lastTaskEnd: new Date("2021-01-01")
	}
]