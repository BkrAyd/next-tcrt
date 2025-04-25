import React from 'react'
import { DataTable } from '../_components/Datatable/data-table'
import { columns, Payment } from '../_components/Datatable/columns'


async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      product: "Product 1",
      amount: 100,
      status: "pending",
      email: "m@example.com",
      code: "123456",
    },
    {
      id: "728ed52f",
      product: "Product 2",
      amount: 100,
      status: "pending",
      email: "m@example.com",
      code: "123456",
    },
    // ...
  ]
}
const AboutPage = async() => {

  const data = await getData()
  return (
    

    <div className="container mx-auto py-10 rounded-md mt-1 border p-1">
    <DataTable columns={columns} data={data} />
  </div>
  )
}

export default AboutPage