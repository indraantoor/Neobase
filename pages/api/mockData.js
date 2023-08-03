const SESSION_HISTORY = [
  {
    id: 1,
    sessions_start_time: "11:43:23",
    date: "27-03-2023",
    duration: "0.245 sec",
    node_used: "Wineguard",
    data_consumed: "0.12 MB",
    location_of_node: "Singapore",
  },
  {
    id: 2,
    sessions_start_time: "11:43:23",
    date: "27-03-2023",
    duration: "0.245 sec",
    node_used: "Wineguard",
    data_consumed: "0.12 MB",
    location_of_node: "Singapore",
  },
  {
    id: 3,
    sessions_start_time: "11:43:23",
    date: "27-03-2023",
    duration: "0.245 sec",
    node_used: "Wineguard",
    data_consumed: "0.12 MB",
    location_of_node: "Singapore",
  },
  {
    id: 4,
    sessions_start_time: "11:43:23",
    date: "27-03-2023",
    duration: "0.245 sec",
    node_used: "Wineguard",
    data_consumed: "0.12 MB",
    location_of_node: "Singapore",
  },
  {
    id: 5,
    sessions_start_time: "11:43:23",
    date: "27-03-2023",
    duration: "0.245 sec",
    node_used: "Wineguard",
    data_consumed: "0.12 MB",
    location_of_node: "Singapore",
  },
  {
    id: 6,
    sessions_start_time: "11:43:23",
    date: "27-03-2023",
    duration: "0.245 sec",
    node_used: "Wineguard",
    data_consumed: "0.12 MB",
    location_of_node: "Singapore",
  },
];

export const SESSION_ACTIVITY = [
  {
    id: 1,
    month: "jan",
    sessions: 25,
  },
  {
    id: 2,
    month: "feb",
    sessions: 50,
  },
  {
    id: 3,
    month: "mar",
    sessions: 75,
  },
  {
    id: 4,
    month: "apr",
    sessions: 30,
  },
  {
    id: 5,
    month: "may",
    sessions: 54,
  },
  {
    id: 6,
    month: "jun",
    sessions: 80,
  },
  {
    id: 7,
    month: "jul",
    sessions: 58,
  },
  {
    id: 8,
    month: "aug",
    sessions: 90,
  },
  {
    id: 9,
    month: "sep",
    sessions: 40,
  },
  {
    id: 10,
    month: "oct",
    sessions: 30,
  },
  {
    id: 11,
    month: "nov",
    sessions: 60,
  },
  {
    id: 12,
    month: "dec",
    sessions: 87,
  },
];

export default function handler(req, res) {
  res.status(200).json({
    data: {
      sessionHistory: SESSION_HISTORY,
      sessionActivity: SESSION_ACTIVITY,
    },
  });
}
