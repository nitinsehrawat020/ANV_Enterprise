import ActionButton from "../../adminComponent/worker/ActionButton";
import Category from "../../adminComponent/worker/Category";
import WorkersList from "../../adminComponent/worker/WorkersList";
import { Content } from "./Style";

const WorkerData = [
  {
    name: "Amit",
    phone_number: 9876543210,
    join: "01/feb/2023",
    member_type: "worker",
    payment: {
      totalSalery: 10000,
      advance: 2000,
      weeklyGiven: 4000,
      get due() {
        return this.totalSalery - this.weeklyGiven;
      },
    },

    paymentLog: [
      {
        date: "05/feb/2025",
        amount: 1000,
        paymentType: "cash",
        paymentFor: "weekly",
      },
      {
        date: "12/feb/2025",
        amount: 1000,
        paymentType: "cash",
        paymentFor: "weekly",
      },
      {
        date: "12/feb/2025",
        amount: 24000,
        paymentType: "cash",
        paymentFor: "salary",
      },

      {
        date: "23/feb/2025",
        amount: 2000,
        paymentType: "cash",
        paymentFor: "advance",
      },
      {
        date: "26/feb/2025",
        amount: 1000,
        paymentType: "cash",
        paymentFor: "weekly",
      },
    ],

    attendance: {
      "01/feb/2025": "full_day",
      "02/feb/2025": "full_day",
      "03/feb/2025": "half_day",
      "04/feb/2025": "full_day",
      "05/feb/2025": "absent",
      "06/feb/2025": "night",
      "07/feb/2025": "full_day",
      "08/feb/2025": "full_day",
      "09/feb/2025": "half_day",
      "10/feb/2025": "full_day",
      "11/feb/2025": "full_day",
      "12/feb/2025": "full_day",
      "13/feb/2025": "full_day",
      "14/feb/2025": "full_day",
      "15/feb/2025": "full_day",
      "16/feb/2025": "night",
      "17/feb/2025": "full_day",
      "18/feb/2025": "half_day",
      "19/feb/2025": "full_day",
      "20/feb/2025": "full_day",
      "21/feb/2025": "full_day",
      "22/feb/2025": "not_available",
      "23/feb/2025": "not_available",
      "24/feb/2025": "not_available",
      "25/feb/2025": "not_available",
    },
  },
  {
    name: "Ravi",
    phone_number: 9012345678,
    join: "01/feb/2023",
    member_type: "supervisor",
    payment: {
      totalSalery: 12000,
      weeklyGiven: 0,
      advance: 0,

      get due() {
        return this.totalSalery - this.weeklyGiven;
      },
    },
    paymentLog: [
      {
        date: "05/feb/2025",
        amount: 1000,
        paymentType: "cash",
        paymentFor: "weekly",
      },
      {
        date: "12/feb/2025",
        amount: 1000,
        paymentType: "cash",
        paymentFor: "weekly",
      },
      {
        date: "12/feb/2025",
        amount: 24000,
        paymentType: "cash",
        paymentFor: "salary",
      },

      {
        date: "23/feb/2025",
        amount: 2000,
        paymentType: "cash",
        paymentFor: "advance",
      },
      {
        date: "26/feb/2025",
        amount: 1000,
        paymentType: "cash",
        paymentFor: "weekly",
      },
    ],
    attendance: {
      "01/feb/2025": "full_day",
      "02/feb/2025": "full_day",
      "03/feb/2025": "full_day",
      "04/feb/2025": "night",
      "05/feb/2025": "full_day",
      "06/feb/2025": "half_day",
      "07/feb/2025": "full_day",
      "08/feb/2025": "absent",
      "09/feb/2025": "full_day",
      "10/feb/2025": "full_day",
      "11/feb/2025": "full_day",
      "12/feb/2025": "night",
      "13/feb/2025": "full_day",
      "14/feb/2025": "full_day",
      "15/feb/2025": "half_day",
      "16/feb/2025": "full_day",
      "17/feb/2025": "full_day",
      "18/feb/2025": "full_day",
      "19/feb/2025": "full_day",
      "20/feb/2025": "night",
      "21/feb/2025": "full_day",
      "22/feb/2025": "full_day",
      "23/feb/2025": "not_available",
      "24/feb/2025": "not_available",
      "25/feb/2025": "not_available",
    },
  },
];

function Workers() {
  return (
    <Content>
      <ActionButton WorkerData={WorkerData} />
      <Category />
      <WorkersList WorkerData={WorkerData} />
    </Content>
  );
}

export default Workers;
