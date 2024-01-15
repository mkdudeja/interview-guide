export interface IAppointmentSchedule {
  id: string;
  title: string;
  startTime: string;
  endTime: string;
}

export interface IAppointmentPosition {
  rowStart: number;
  rowEnd: number;
  colStart: number;
}

export interface IScheduleDayGridProps {
  cols: number;
  position: Map<string, IAppointmentPosition>;
}
