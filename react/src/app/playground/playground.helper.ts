import {
  IAppointmentSchedule,
  IScheduleDayGridProps,
  IAppointmentPosition,
} from "./playground.interface";

export const Meridiem = ["AM", "PM"];
export const MeridiemHours = [
  "12",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
];
export const SCHEDULE_DAY_TIME_SLOT = 30; // in minutes

export function getScheduleDayGridProps(
  appointments: IAppointmentSchedule[]
): IScheduleDayGridProps {
  const appointmentGroups = new Map<number, string[]>();
  const appointmentPosition = new Map<string, IAppointmentPosition>();

  appointments.map((item) => {
    // prepare timeSlots map
    const endParts = item.endTime.split(":").map((item) => Number(item));
    const startParts = item.startTime.split(":").map((item) => Number(item));

    let toStart = startParts[0];
    do {
      if (!appointmentGroups.has(toStart)) {
        appointmentGroups.set(toStart, []);
      }

      appointmentGroups.get(toStart).push(item.id);
      toStart++;
    } while (toStart < endParts[0]);

    const considerEndAlso = endParts.slice(1).some((item) => item > 0);
    if (considerEndAlso) {
      if (!appointmentGroups.has(endParts[0])) {
        appointmentGroups.set(endParts[0], []);
      }

      appointmentGroups.get(endParts[0]).push(item.id);
    }

    // calculate horizontal position
    const gridRowStart =
      (startParts[0] * 60 * 60 + startParts[1] * 60 + startParts[2]) /
      (SCHEDULE_DAY_TIME_SLOT * 60);
    const gridRowEnd =
      (endParts[0] * 60 * 60 + endParts[1] * 60 + endParts[2]) /
      (SCHEDULE_DAY_TIME_SLOT * 60);

    appointmentPosition.set(item.id, {
      rowStart: gridRowStart + 1,
      rowEnd: gridRowEnd + 1,
      colStart: null,
    });
  });

  let maxColumns = 1;
  Object.values(Object.fromEntries(appointmentGroups)).forEach(
    (appointmentIds) => {
      appointmentIds.forEach((eleId) => {
        const elePos = appointmentPosition.get(eleId);

        let colPos = 1;
        while (colPos <= maxColumns) {
          let doesExist = false;
          for (const [key, item] of appointmentPosition) {
            doesExist =
              key !== eleId &&
              item.colStart === colPos &&
              ((item.rowStart >= elePos.rowStart &&
                item.rowStart < elePos.rowEnd) ||
                (item.rowEnd > elePos.rowStart &&
                  item.rowEnd <= elePos.rowEnd));
            if (doesExist) break;
          }

          if (!doesExist) {
            break;
          } else {
            colPos++;
          }
        }

        elePos.colStart = colPos;
        if (maxColumns < colPos) {
          maxColumns = colPos;
        }
      });
    }
  );

  return {
    cols: maxColumns,
    position: appointmentPosition,
  };
}
