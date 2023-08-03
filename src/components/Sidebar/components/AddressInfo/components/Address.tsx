import React from "react";

interface IAddressProps {
  title: string;
  information: string;
}

const Address = ({ title, information }: IAddressProps) => {
  return (
    <div className="flex justify-between">
      <div className="text-gray-600">{title} :</div>
      <div>{information}</div>
    </div>
  );
};

export default Address;
