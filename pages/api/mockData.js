const MOCK_DATA = [
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

export default function handler(req, res) {
  res.status(200).json(MOCK_DATA);
}
