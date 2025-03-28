import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserAppLayout from "./ui/AppLayout";
import Home from "./Pages/Home";
import GlobalStyle from "./Styles/GlobalStyle";

import { PrimeReactProvider } from "primereact/api";

import isPropValid from "@emotion/is-prop-valid";
import { StyleSheetManager } from "styled-components";
import DesignForeCeil from "./Pages/DesignForeCeil";
import DesignMolding from "./Pages/DesignMolding";
import AboutUs from "./Pages/AboutUs";
import LoginAndSignup from "./Pages/LoginAndSignup";
import Dashboard from "./Pages/admin/Dashboard";
import AdminAppLayout from "./ui/AdminAppLayout";
import Workers from "./Pages/admin/Workers";
import Sites from "./Pages/admin/Sites";
import Vendours from "./Pages/admin/Vendours";
import Setting from "./Pages/admin/Setting";

const sites = [
  {
    id: 1,
    name: "param",
    location: "near holichowk village pochanpur sec 23 dwarka new delhi",
    workProgress: "90",
    inventory: [
      { name: "pop bag", quantity: "3 bags" },
      { name: "main", quantity: "6 piece" },
      { name: "cross", quantity: "3 piece" },
      { name: "L", quantity: "1 bundel" },
      { name: "ghodi", quantity: "40 piece" },
      { name: "chali", quantity: "10" },
      { name: "waterTank", quantity: "0" },
    ],
    payment: {
      totalPayment: "Mesurement",
      receivedPayment: 20000,
      remainingPayment: 80000,
    },
    paymentLog: [
      { date: "11/02/2025", amount: "10000", to: "vijender", mode: "cash" },
      { date: "11/02/2025", amount: "10000", to: "vijender", mode: "cash" },
    ],
    lastWorkingDay: "10/03/2025",
    totalMaterialUsed: [
      { name: "pop", quantity: 200, cost: 230 },
      { name: "main", quantity: 5, cost: 150 },
      { name: "cross", quantity: 10, cost: 100 },
      { name: "L", quantity: 8, cost: 100 },
      { name: "bond", quantity: "0", cost: 2000 },
    ],
    status: "Active",
    owner: {
      name: "param",
      phone_number: 9876543210,
    },
    workType: "False Ceil and wall",
    buildingDetails: {
      type: "owner",
      area: "500 sqft",
      floor: "1",
      flatsInfo: [{ rooms: 4, kitchen: 1, bathroom: 4, hall: 1 }],
    },
  },
  {
    id: 2,
    name: "binder",
    location: "near khandewall store pochanpur sec 23 dwarka new delhi",
    workProgress: "75",
    inventory: [
      { name: "pop bag", quantity: "30 bags" },
      { name: "main", quantity: "0" },
      { name: "cross", quantity: "0" },
      { name: "L", quantity: "0" },
      { name: "ghodi", quantity: "5" },
      { name: "chali", quantity: "11" },
      { name: "waterTank", quantity: "1" },
    ],
    payment: {
      totalPayment: "250000",
      receivedPayment: "150000",
      remainingPayment: "100000",
    },
    paymentLog: [
      { date: "11/02/2025", amount: "10000", to: "vijender", mode: "cash" },
      { date: "11/02/2025", amount: "10000", to: "vijender", mode: "cash" },
    ],
    lastWorkingDay: "05/03/2025",
    totalMaterialUsed: [
      { name: "pop", quantity: 200, cost: 230 },
      { name: "main", quantity: 0, cost: 150 },
      { name: "cross", quantity: 0, cost: 100 },
      { name: "L", quantity: 0, cost: 100 },
      { name: "bond", quantity: 8, cost: 2000 },
    ],
    status: "Active",
    owner: {
      name: "binder",
      phone_number: 9876543210,
    },
    workType: "molding",
    buildingDetails: {
      type: "rental",
      area: "250 sqft",
      floor: "4",
      rentFloor: "4",
      rentFloorFlat: "4",
      ownFloor: "0",
      rentFlatInfo: {
        floor1: [
          { rooms: "2", kitchen: "1", bathroom: "0", hall: "1" },
          {
            rooms: "2",
            kitchen: "1",
            bathroom: "0",
            hall: "1",
          },
          {
            rooms: "2",
            kitchen: "0",
            bathroom: "0",
            hall: "0",
          },
        ],
        floor2: [
          { rooms: "2", kitchen: "1", bathroom: "0", hall: "1" },
          {
            rooms: "2",
            kitchen: "1",
            bathroom: "0",
            hall: "1",
          },
          {
            rooms: "2",
            kitchen: "0",
            bathroom: "0",
            hall: "0",
          },
        ],
        floor3: [
          { rooms: "2", kitchen: "1", bathroom: "0", hall: "1" },
          {
            rooms: "2",
            kitchen: "1",
            bathroom: "0",
            hall: "1",
          },
          {
            rooms: "2",
            kitchen: "0",
            bathroom: "0",
            hall: "0",
          },
        ],
        floor4: [
          { rooms: "2", kitchen: "1", bathroom: "0", hall: "1" },
          {
            rooms: "2",
            kitchen: "1",
            bathroom: "0",
            hall: "1",
          },
          {
            rooms: "2",
            kitchen: "0",
            bathroom: "0",
            hall: "0",
          },
        ],
        parking: "included",
      },
      ownerFlatInfo: {
        floor1: [{ room: 2, hall: 1, kitchen: 1, bathroom: 2 }],
        floor2: [{ room: 4, hall: 1, kitchen: 0, bathroom: 2 }],
      },

      flatsInfo: [],
    },
  },
  {
    id: 3,
    name: "mumpy",
    location: "near apolo hospitial village pochanpur sec 23 dwarka new delhi",
    workProgress: "65",
    inventory: [
      { name: "pop bag", quantity: "15 bags" },
      { name: "main", quantity: "0" },
      { name: "cross", quantity: "3 7" },
      { name: "L", quantity: "1" },
      { name: "ghodi", quantity: "11" },
      { name: "chali", quantity: "15" },
      { name: "waterTank", quantity: "1" },
    ],
    payment: {
      totalPayment: "mesurement",
      receivedPayment: "250000",
      remainingPayment: "0",
    },
    paymentLog: [
      { date: "11/02/2025", amount: "10000", to: "vijender", mode: "cash" },
      { date: "11/02/2025", amount: "10000", to: "vijender", mode: "cash" },
    ],
    lastWorkingDay: "10/03/2025",
    totalMaterialUsed: [
      { name: "pop", quantity: 60, cost: 230 },
      { name: "main", quantity: 0, cost: 150 },
      { name: "cross", quantity: 3, cost: 100 },
      { name: "L", quantity: 0, cost: 100 },
      { name: "bond", quantity: 0, cost: 2000 },
    ],

    status: "Active",
    owner: {
      name: "mumpy",
      phone_number: 9876543210,
    },
    workType: "falseCeil",
    buildingDetails: {
      type: "rental and own",
      area: "200 sqft",
      floor: "4",
      rentFloor: "2",
      rentFloorFlat: "2",
      ownFloor: "2",
      rentFlatInfo: {
        floor1: [
          { rooms: "2", kitchen: "1", bathroom: "2", hall: "1" },
          {
            rooms: "1",
            kitchen: "1",
            bathroom: "1",
            hall: "0",
          },
        ],
        floor2: [
          { rooms: "2", kitchen: "1", bathroom: "2", hall: "1" },
          {
            rooms: "1",
            kitchen: "1",
            bathroom: "1",
            hall: "0",
          },
        ],
      },
      ownerFlatInfo: {
        floor1: [{ room: 2, hall: 1, kitchen: 1, bathroom: 2 }],
        floor2: [{ room: 4, hall: 1, kitchen: 0, bathroom: 2 }],
      },
      parking: "included",
    },
  },
];
const WorkerDataRaw = [
  {
    id: 1,
    name: "Krishan",
    phone_number: 9876543210,
    join: "01/feb/2023",
    member_type: "worker",
    active_status: "active",
    addhar_Card: "",
    inventory: [
      { id: 1, name: "hammer", quantity: 1 },
      { id: 2, name: "screwdriver", quantity: 1 },
      { id: 3, name: "screw", quantity: 10 },
      { id: 4, name: "nail", quantity: 10 },
      { id: 5, name: "drill machine", quantity: 1 },
      { id: 6, name: "light", quantity: 1 },
      { id: 7, name: "cutter", quantity: 1 },
      { id: 8, name: "fanti", quantity: 1 },
      { id: 9, name: "fanti", quantity: 1 },
    ],
    payment: {
      totalSalery: 0,
      advance: 0,
      weeklyGiven: 2000,
      get due() {
        return this.totalSalery - this.weeklyGiven - this.advance;
      },
    },
    paymentLog: [
      {
        id: 1,
        amount: 1000,
        date: "05-03-2025",
        paymentFor: "weekly",
        paymentType: "cash",
      },
      {
        id: 2,
        amount: 1000,
        date: "12-03-2025",
        paymentFor: "weekly",
        paymentType: "cash",
      },
      {
        id: 3,
        amount: 1000,
        date: "20-03-2025",
        paymentFor: "weekly",
        paymentType: "cash",
      },
    ],
    attendance: {
      "01/03/2025": { value: "night", site: "mumpy" },
      "02/03/2025": { value: "night", site: "mumpy" },
      "03/03/2025": { value: "night", site: "mumpy" },
      "04/03/2025": { value: "full_present", site: "mumpy" },
      "05/03/2025": { value: "full_present", site: "param" },
      "06/03/2025": { value: "full_present", site: "mumpy" },
      "07/03/2025": { value: "full_present", site: "mumpy" },
      "08/03/2025": { value: "full_present", site: "mumpy" },
      "09/03/2025": { value: "full_present", site: "mumpy" },
      "10/03/2025": { value: "full_present", site: "mumpy" },
      "11/03/2025": { value: "full_present", site: "mumpy" },
      "12/03/2025": { value: "full_present", site: "mumpy" },
      "13/03/2025": { value: "present", site: "mumpy" },
      "14/03/2025": { value: "absent", site: "mumpy" },
      "15/03/2025": { value: "full_present", site: "mumpy" },
      "16/03/2025": { value: "full_present", site: "mumpy" },
      "17/03/2025": { value: "full_present", site: "mumpy" },
      "18/03/2025": { value: "full_present", site: "mumpy" },
      "19/03/2025": { value: "full_present", site: "mumpy" },
      "20/03/2025": { value: "full_present", site: "mumpy" },
    },
  },
  {
    id: 2,
    name: "Shubhot",
    phone_number: 9234567890,
    join: "01/feb/2023",
    member_type: "worker",
    inventory: [],
    active_status: "active",
    payment: {
      id: 1,
      totalSalery: 0,
      advance: 6000,
      weeklyGiven: 2000,
      get due() {
        return this.totalSalery - this.weeklyGiven - this.advance;
      },
    },
    paymentLog: [
      {
        id: 1,
        amount: 1000,
        date: "03-03-2025",
        paymentFor: "advance",
        paymentType: "upi",
      },
      {
        id: 2,
        amount: 1000,
        date: "05-03-2025",
        paymentFor: "weekly",
        paymentType: "cash",
      },
      {
        id: 3,
        amount: 5000,
        date: "10-03-2025",
        paymentFor: "advance",
        paymentType: "cash",
      },
      {
        id: 4,
        amount: 1000,
        date: "12-03-2025",
        paymentFor: "weekly",
        paymentType: "cash",
      },
      {
        id: 5,
        amount: 1000,
        date: "15-03-2025",
        paymentFor: "advance",
        paymentType: "cash",
      },
      {
        id: 6,
        amount: 1000,
        date: "20-03-2025",
        paymentFor: "weekly",
        paymentType: "cash",
      },
    ],
    attendance: {
      "01/03/2025": { value: "night", site: "mumpy" },
      "02/03/2025": { value: "night", site: "mumpy" },
      "03/03/2025": { value: "night", site: "mumpy" },
      "04/03/2025": { value: "full_present", site: "mumpy" },
      "05/03/2025": { value: "full_present", site: "param" },
      "06/03/2025": { value: "full_present", site: "mumpy" },
      "07/03/2025": { value: "full_present", site: "mumpy" },
      "08/03/2025": { value: "full_present", site: "mumpy" },
      "09/03/2025": { value: "full_present", site: "mumpy" },
      "10/03/2025": { value: "full_present", site: "mumpy" },
      "11/03/2025": { value: "full_present", site: "mumpy" },
      "12/03/2025": { value: "full_present", site: "mumpy" },
      "13/03/2025": { value: "present", site: "mumpy" },
      "14/03/2025": { value: "absent", site: "mumpy" },
      "15/03/2025": { value: "absent", site: "mumpy" },
      "16/03/2025": { value: "full_present", site: "mumpy" },
      "17/03/2025": { value: "full_present", site: "param" },
      "18/03/2025": { value: "full_present", site: "param" },
      "19/03/2025": { value: "full_present", site: "param" },
      "20/03/2025": { value: "full_present", site: "param" },
    },
  },
  {
    id: 3,
    name: "Virender",
    phone_number: 9456789012,
    join: "01/feb/2023",
    member_type: "helper",
    active_status: "active",
    inventory: [],
    payment: {
      totalSalery: 0,
      advance: 0,
      weeklyGiven: 2000,
      get due() {
        return this.totalSalery - this.weeklyGiven - this.advance;
      },
    },
    paymentLog: [
      {
        id: 1,
        amount: 1000,
        date: "05-03-2025",
        paymentFor: "weekly",
        paymentType: "cash",
      },
      {
        id: 2,
        amount: 1000,
        date: "12-03-2025",
        paymentFor: "weekly",
        paymentType: "cash",
      },
      {
        id: 3,
        amount: 1000,
        date: "20-03-2025",
        paymentFor: "weekly",
        paymentType: "cash",
      },
    ],
    attendance: {
      "01/03/2025": { value: "night", site: "mumpy" },
      "02/03/2025": { value: "night", site: "mumpy" },
      "03/03/2025": { value: "night", site: "mumpy" },
      "04/03/2025": { value: "full_present", site: "mumpy" },
      "05/03/2025": { value: "full_present", site: "param" },
      "06/03/2025": { value: "full_present", site: "mumpy" },
      "07/03/2025": { value: "full_present", site: "mumpy" },
      "08/03/2025": { value: "full_present", site: "mumpy" },
      "09/03/2025": { value: "full_present", site: "mumpy" },
      "10/03/2025": { value: "full_present", site: "mumpy" },
      "11/03/2025": { value: "full_present", site: "mumpy" },
      "12/03/2025": { value: "full_present", site: "mumpy" },
      "13/03/2025": { value: "present", site: "mumpy" },
      "14/03/2025": { value: "absent", site: "mumpy" },
      "15/03/2025": { value: "full_present", site: "mumpy" },
      "16/03/2025": { value: "full_present", site: "mumpy" },
      "17/03/2025": { value: "full_present", site: "mumpy" },
      "18/03/2025": { value: "full_present", site: "mumpy" },
      "19/03/2025": { value: "full_present", site: "mumpy" },
      "20/03/2025": { value: "full_present", site: "mumpy" },
    },
  },
  {
    id: 4,
    name: "Vishnu",
    phone_number: 9012345678,
    join: "01/feb/2023",
    member_type: "worker",
    active_status: "active",
    inventory: [],

    payment: {
      totalSalery: 0,
      weeklyGiven: 2000,
      advance: 0,
      get due() {
        return this.totalSalery - this.weeklyGiven - this.advance;
      },
    },
    paymentLog: [
      {
        id: 1,
        amount: 1000,
        date: "05-03-2025",
        paymentFor: "weekly",
        paymentType: "cash",
      },
      {
        id: 2,
        amount: 1000,
        date: "12-03-2025",
        paymentFor: "advance",
        paymentType: "cash",
      },
      {
        id: 3,
        amount: 1000,
        date: "20-03-2025",
        paymentFor: "weekly",
        paymentType: "cash",
      },
    ],
    attendance: {
      "01/03/2025": { value: "night", site: "param" },
      "02/03/2025": { value: "night", site: "param" },
      "03/03/2025": { value: "night", site: "param" },
      "04/03/2025": { value: "night", site: "param" },
      "05/03/2025": { value: "night", site: "binder" },
      "06/03/2025": { value: "full_present", site: "param" },
      "07/03/2025": { value: "full_present", site: "param" },
      "08/03/2025": { value: "full_present", site: "param" },
      "09/03/2025": { value: "full_present", site: "param" },
      "10/03/2025": { value: "present", site: "param" },
      "11/03/2025": { value: "full_present", site: "binder" },
      "12/03/2025": { value: "full_present", site: "binder" },
      "13/03/2025": { value: "present", site: "binder" },
      "14/03/2025": { value: "absent", site: "binder" },
      "15/03/2025": { value: "full_present", site: "binder" },
      "16/03/2025": { value: "full_present", site: "binder" },
      "17/03/2025": { value: "full_present", site: "binder" },
      "18/03/2025": { value: "full_present", site: "binder" },
      "19/03/2025": { value: "full_present", site: "mumpy" },
      "20/03/2025": { value: "full_present", site: "binder" },
    },
  },
  {
    id: 5,
    name: "Dinesh",
    phone_number: 9123456780,
    join: "01/feb/2023",
    member_type: "worker",
    inventory: [],
    active_status: "non-active",
    payment: {
      totalSalery: 0,
      advance: 0,
      weeklyGiven: 1000,
      get due() {
        return this.totalSalery - this.weeklyGiven - this.advance;
      },
    },
    paymentLog: [
      {
        id: 1,
        amount: 1000,
        date: "05-03-2025",
        paymentFor: "weekly",
        paymentType: "cash",
      },
    ],
    attendance: {
      "01/03/2025": { value: "night", site: "param" },
      "02/03/2025": { value: "night", site: "param" },
      "03/03/2025": { value: "night", site: "param" },
      "04/03/2025": { value: "night", site: "param" },
      "05/03/2025": { value: "night", site: "binder" },
      "06/03/2025": { value: "full_day", site: "param" },
      "07/03/2025": { value: "full_day", site: "param" },
    },
  },

  {
    id: 6,
    name: "Vinod",
    phone_number: 9345678901,
    join: "01/feb/2023",
    member_type: "helper",
    active_status: "active",
    inventory: [],
    payment: {
      totalSalery: 0,
      advance: 0,
      weeklyGiven: 2000,
      get due() {
        return this.totalSalery - this.weeklyGiven - this.advance;
      },
    },
    paymentLog: [
      {
        id: 1,
        amount: 1000,
        date: "05-03-2025",
        paymentFor: "weekly",
        paymentType: "cash",
      },
      {
        id: 2,
        amount: 1000,
        date: "12-03-2025",
        paymentFor: "weekly",
        paymentType: "cash",
      },
      {
        id: 3,
        amount: 1000,
        date: "20-03-2025",
        paymentFor: "weekly",
        paymentType: "cash",
      },
    ],
    attendance: {
      "01/03/2025": { value: "night", site: "param" },
      "02/03/2025": { value: "night", site: "param" },
      "03/03/2025": { value: "night", site: "param" },
      "04/03/2025": { value: "night", site: "param" },
      "05/03/2025": { value: "night", site: "binder" },
      "06/03/2025": { value: "full_present", site: "param" },
      "07/03/2025": { value: "full_present", site: "param" },
      "08/03/2025": { value: "full_present", site: "param" },
      "09/03/2025": { value: "full_present", site: "param" },
      "10/03/2025": { value: "present", site: "param" },
      "11/03/2025": { value: "full_present", site: "binder" },
      "12/03/2025": { value: "full_present", site: "binder" },
      "13/03/2025": { value: "present", site: "binder" },
      "14/03/2025": { value: "absent", site: "binder" },
      "15/03/2025": { value: "full_present", site: "binder" },
      "16/03/2025": { value: "full_present", site: "binder" },
      "17/03/2025": { value: "full_present", site: "binder" },
      "18/03/2025": { value: "full_present", site: "binder" },
      "19/03/2025": { value: "full_present", site: "mumpy" },
      "20/03/2025": { value: "full_present", site: "binder" },
    },
  },
];

function App() {
  return (
    <>
      <StyleSheetManager shouldForwardProp={shouldForwardProp}>
        <GlobalStyle />
        <PrimeReactProvider>
          <BrowserRouter>
            <Routes>
              <Route element={<UserAppLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/designFalseCeil" element={<DesignForeCeil />} />
                <Route path="/designMolding" element={<DesignMolding />} />
                <Route path="/aboutUs" element={<AboutUs />} />
                <Route path="/login" element={<LoginAndSignup />} />
                <Route path="*" element={<Home />} />
              </Route>
              <Route element={<AdminAppLayout />}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route
                  path="/worker"
                  element={
                    <Workers sites={sites} WorkerDataRaw={WorkerDataRaw} />
                  }
                />
                <Route
                  path="/site"
                  element={<Sites workers={WorkerDataRaw} sites={sites} />}
                />
                <Route path="/vendour" element={<Vendours />} />
                <Route path="/setting" element={<Setting />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </PrimeReactProvider>
      </StyleSheetManager>
    </>
  );
}

function shouldForwardProp(propName, target) {
  if (typeof target === "string") {
    // For HTML elements, forward the prop if it is a valid HTML attribute
    return isPropValid(propName);
  }
  // For other elements, forward all props
  return true;
}

export default App;
