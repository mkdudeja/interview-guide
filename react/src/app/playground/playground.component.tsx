import React from "react";
import { getDayAppointments } from "./plaground.data";
import {
  Meridiem,
  MeridiemHours,
  getScheduleDayGridProps,
} from "./playground.helper";
import {
  IAppointmentSchedule,
  IScheduleDayGridProps,
} from "./playground.interface";

const Playground: React.FC = () => {
  const [gridProps, setGridProps] = React.useState<IScheduleDayGridProps>();
  const [dataSource, setDataSource] = React.useState<IAppointmentSchedule[]>();

  React.useEffect(() => {
    const dataSource = getDayAppointments();
    const gridProps = getScheduleDayGridProps(dataSource);

    setGridProps(gridProps);
    setDataSource(dataSource);
  }, []);

  const renderApoointmentItem = (item: IAppointmentSchedule) => {
    const gridPos = gridProps.position.get(item.id);
    if (!gridPos.colStart) return;
    return (
      <li
        key={item.id}
        className="relative mt-px flex"
        style={{
          gridRow: `${gridPos.rowStart} / ${gridPos.rowEnd}`,
          gridColumn: `${gridPos.colStart} / span 1`,
        }}
      >
        <a
          href="#"
          className="group absolute inset-1 flex flex-col overflow-y-auto rounded-lg bg-blue-50 p-2 text-xs leading-5 hover:bg-blue-100"
        >
          <p className="font-semibold text-blue-700">{`${item.title}`}</p>
          <p className="text-blue-500 group-hover:text-blue-700">
            {item.id} <br />
            {item.startTime} <br />
            {item.endTime} <br />
            {JSON.stringify(gridPos, null, 4)}
          </p>
        </a>
      </li>
    );
  };

  const renderAppointments = () => {
    if (!gridProps?.cols) return;

    return (
      <ol
        className="col-start-1 col-end-2 row-start-1 grid overflow-x-auto"
        style={{
          gridTemplateColumns: `repeat(${gridProps.cols}, minmax(18rem, 1fr))`,
          gridTemplateRows: "repeat(48, minmax(0, 1fr)) auto",
        }}
      >
        <li className="row-end-1 h-7"></li>
        {dataSource.map(renderApoointmentItem)}
      </ol>
    );
  };

  return (
    <div className="flex w-full flex-auto bg-white">
      <div className="w-14 flex-none ring-1 ring-gray-100" />
      <div className="grid flex-auto grid-cols-1 grid-rows-1">
        {/* Horizontal lines */}
        <div
          className="col-start-1 col-end-2 row-start-1 grid divide-y divide-gray-100"
          style={{ gridTemplateRows: "repeat(48, minmax(3.5rem, 1fr))" }}
        >
          <div className="row-end-1 h-7"></div>
          {Meridiem.map((suffix) =>
            MeridiemHours.map((hour) => (
              <React.Fragment key={`${hour}${suffix}}`}>
                <div>
                  <div className="sticky left-0 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                    {hour}
                    {suffix}
                  </div>
                </div>
                <div />
              </React.Fragment>
            ))
          )}
        </div>

        {/* render appointments */}
        {renderAppointments()}
      </div>
    </div>
  );
};

export default Playground;
