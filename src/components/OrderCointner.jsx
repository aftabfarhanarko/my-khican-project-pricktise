import React, { use, useState } from "react";
import Counter from "./Counter";
import OrderCard from "./OrderCard";
import CookingCard from "./CookingCard";
import ServeCard from "./ServeCard";

const OrderCointner = ({ orderPromise }) => {
  const data = use(orderPromise);

  const [order, setOrder] = useState(data);
  const [cook, setCook] = useState([]);
  const [readyes, setReadyes] = useState([]);

  const handelOrders = (myorder) => {
    const test = cook.find((item) => item.id == myorder.id);
    if (test) {
      alert("Allready Token");
      return;
    }
    const newCook = [...cook, myorder];
    setCook(newCook);
  };

  const handelServey = (serves) => {
    serves.setAt= new Date().toLocaleDateString();
    const test = readyes.find((item) => item.id == serves.id);
    if (test) {
      alert("Allready Token");
      return;
    }
    const newServe = [...readyes, serves];
    setReadyes(newServe);

    const neweDate = order.filter(item => item.id !== serves.id);
    setOrder(neweDate);

    const newCook = cook.filter(onea => onea.id !== serves.id);
    setCook(newCook)
  };
  return (
    <div className="w-11/12 mx-auto ">
      <div>
        <Counter
          serve={readyes.length}
          cook={cook.length}
          order={order.length}
        ></Counter>
      </div>
      <div className="grid grid-cols-12 gap-7">
        <div className="col-span-8 mt-5">
          <h1 className="text-3xl font-semibold">Current Order</h1>
          <div className="mt-5 space-y-9">
            {order.map((order) => (
              <OrderCard
                handelOrders={handelOrders}
                order={order}
                key={order.id}
              ></OrderCard>
            ))}
          </div>
        </div>
        <div className="col-span-4 mt-5">
          <div>
            <h1 className="text-3xl font-semibold">Cooking Order</h1>
            <div className="mt-5 bg-base-200 p-5 rounded-lg space-y-5">
              {cook.length === 0 ? (
                <h1 className="py-10 text-center bg-base-200 rounded-lg">
                  No Item Cooking
                </h1>
              ) : (
                cook.map((pontes) => (
                  <CookingCard
                    handelServey={handelServey}
                    order={pontes}
                    key={pontes.id}
                  ></CookingCard>
                ))
              )}
            </div>

            <div>
              <h1 className="text-3xl font-semibold mt-5">Reday for Serve</h1>
              <div className="mt-5 bg-base-200 p-5 rounded-lg space-y-5">
                {cook.length === 0 ? (
                  <h1 className="py-10 text-center bg-base-200 rounded-lg">
                    No Item Cooking
                  </h1>
                ) : (
                  readyes.map((onassd) => (
                    <ServeCard order={onassd} key={onassd.id}></ServeCard>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCointner;
