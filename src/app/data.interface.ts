export interface dataInterface {
	date: Date;
	quantity: number;
	price: number;
	eventTypeName: string;
	eventType: 'hour' | 'expense' | 'additionalHour';
	isWorkHour: boolean;
	state: 'approved' | 'rejected' | 'none';
	tasksCount: number;
	firstTaskStart: Date;
	lastTaskEnd: Date;
}