import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { useContext } from 'react';
import { Appcontext } from './Context';

export default function DateCalendarReferenceDate() {
  let { darkmod } = useContext(Appcontext);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateCalendar']}>
        <DateCalendar
          referenceDate={dayjs('2025-05-22')}
          views={['year', 'month', 'day']}
          sx={{
            width: { xs: "100%", sm: "300px" },
            height: 300,
            transition: "all 0.3s ease-in-out",
            borderRadius: 3,
            cursor: "context-menu",
            bgcolor: "transparent",
            color: !darkmod ? '#e0e0e0' : '#222',
            '.MuiTypography-root': {
              color: !darkmod ? '#e0e0e0' : '#222',
            },
            '.MuiDayCalendar-weekDayLabel': {
              color: !darkmod ? "blue" : '#555555',
              fontWeight: 'bold',
            },
            '.MuiPickersDay-root': {
              color: !darkmod ? '#e0e0e0' : '#222',
              '&.Mui-selected': {
                bgcolor: !darkmod ? '#bb86fc' : '#6200ee',
                color: '#fff',
                '&:hover': {
                  bgcolor: !darkmod ? '#9f6fff' : '#3700b3',
                },
              },
              '&:hover': {
                bgcolor: !darkmod ? '#333' : '#eee',
              },
            },
          }}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
